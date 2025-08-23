// @ts-nocheck
const MAX_NODES = 1000000;


function getBitLength(x) {
    return x.toString(2).length;
}

export function solve(arrayLength, xorLimit, array) {
    if (xorLimit === 0) return '1';

    const highestSetBit = getBitLength(xorLimit) - 1;
    const bitShift = highestSetBit + 1;
    const prefixGroup = array[0] >> bitShift;


    let diversePrefixFound = false;
    for (let i = 1; i < arrayLength; i++) {
        if ((array[i] >> bitShift) !== prefixGroup) {
            diversePrefixFound = true;
            break;
        }
    }

    if (diversePrefixFound) return '2';

    const remainingXor = xorLimit ^ (1 << highestSetBit);
    const typeBits = array.map(num => (num >> highestSetBit) & 1);
    const lowerBits = highestSetBit > 0 ?
        array.map(num => num & ((1 << highestSetBit) - 1)) :
        new Array(arrayLength).fill(0);

    let nodeCounter = 1;
    let minimumLength = arrayLength + 1;

    const trieLeft = new Uint32Array(MAX_NODES + 5).fill(0);
    const trieRight = new Uint32Array(MAX_NODES + 5).fill(0);
    const maxIndexType0 = new Uint32Array(MAX_NODES + 5).fill(0);
    const maxIndexType1 = new Uint32Array(MAX_NODES + 5).fill(0);

    for (let i = 0; i < arrayLength; i++) {
        const currentIndex = i + 1;
        const currentType = typeBits[i];
        const oppositeType = currentType ^ 1;


        if ((oppositeType === 0 ? maxIndexType0[1] : maxIndexType1[1]) !== 0) {
            let bestIndex = 0;
            let node = 1;
            const currentValue = lowerBits[i];

            for (let bit = highestSetBit - 1; bit >= 0 && node; bit--) {
                const requiredBit = (remainingXor >> bit) & 1;
                const valueBit = (currentValue >> bit) & 1;


                if (requiredBit === 0) {
                    const flippedBit = valueBit ^ 1;
                    const child = flippedBit === 0 ? trieLeft[node] : trieRight[node];
                    if (child) {
                        const candidateIndex = oppositeType === 0 ? maxIndexType0[child] : maxIndexType1[child];
                        if (candidateIndex > bestIndex) bestIndex = candidateIndex;
                    }
                }

                const nextBit = valueBit ^ requiredBit;
                node = nextBit === 0 ? trieLeft[node] : trieRight[node];
            }


            if (node) {
                const candidateIndex = oppositeType === 0 ? maxIndexType0[node] : maxIndexType1[node];
                if (candidateIndex > bestIndex) bestIndex = candidateIndex;
            }

            if (bestIndex) {
                const segmentLength = currentIndex - bestIndex + 1;
                if (segmentLength < minimumLength) {
                    minimumLength = segmentLength;
                    if (minimumLength === 2) break;
                }
            }
        }


        if (currentType === 0) maxIndexType0[1] = currentIndex;
        else maxIndexType1[1] = currentIndex;

        let node = 1;
        for (let bit = highestSetBit - 1; bit >= 0; bit--) {
            const bitValue = (lowerBits[i] >> bit) & 1;
            let child = bitValue === 0 ? trieLeft[node] : trieRight[node];

            if (child === 0) {
                nodeCounter++;
                if (bitValue === 0) trieLeft[node] = nodeCounter;
                else trieRight[node] = nodeCounter;
                child = nodeCounter;
            }

            node = child;

            if (currentType === 0) maxIndexType0[node] = currentIndex;
            else maxIndexType1[node] = currentIndex;
        }
    }

    return minimumLength <= arrayLength ? minimumLength.toString() : '-1';
}


// function testing_test() {
//     const testCases = [
//         { input: [5, 0, [1, 2, 3, 4, 5]], expected: '1' },
//         { input: [5, 7, [1, 2, 3, 4, 5]], expected: '2' },
//         { input: [5, 8, [1, 2, 3, 4, 5]], expected: '-1' },
//         { input: [5, 7, [3, 5, 1, 4, 2]], expected: '4' },
//         { input: [5, 3, [3, 5, 1, 4, 2]], expected: '2' },
//         { input: [6, 71, [26, 56, 12, 45, 60, 27]], expected: '-1' },
//     ];

//     for (const { input, expected } of testCases) {
//         const [n, k, A] = input;
//         const result = solve(n, k, A);
//         console.log(`Input: n=${n}, k=${k}, A=${A}`);
//         console.log(`Expected: ${expected}, Got: ${result}`);
//         console.log(result === expected ? 'Test passed' : 'Test failed');
//         console.log('---');
//     }
// }

// testing_test();