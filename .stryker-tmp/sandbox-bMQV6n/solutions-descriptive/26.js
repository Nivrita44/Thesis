// @ts-nocheck
function solve(length, binaryString) {
    const segments = [];
    let currentSegment;

   
    for (let i = 0; i < length; i++) {
        if (binaryString[i] === binaryString[i - 1]) {
            currentSegment.count++;
            currentSegment.right = i;
        } else {
            currentSegment = { count: 1, left: i, right: i };
            segments.push(currentSegment);
        }
    }

    
    if (currentSegment.count === length && binaryString[0] === '0') {
        return arithmeticSum(1, length - 1);
    }

    let maxValue = 0;

    
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];

        
        if (binaryString[segment.left] === '1') {
            let tempSum;

            if (segment.count > 1) {
                tempSum = 1 + Math.max(
                    computeTailSum(segments[i - 1], false),
                    computeTailSum(segments[i + 1], true)
                );
            } else {
                tempSum = 1
                    + computeTailSum(segments[i - 1], false)
                    + computeTailSum(segments[i + 1], true);
            }

            maxValue = Math.max(maxValue, tempSum);
        }
    }

    return maxValue;

    
    function computeTailSum(segment, isRightSide) {
        if (!segment) return 0;
        return isRightSide
            ? arithmeticSum(segment.left, segment.count)
            : arithmeticSum(length - 1 - segment.right, segment.count);
    }

    
    function arithmeticSum(start, count) {
        return (start + start + count - 1) * count / 2;
    }
}


function testSolve() {
    const testCases = [
        { input: [3, '000'], expected: 3 },
        { input: [4, '0010'], expected: 9 },
        { input: [7, '1011001'], expected: 10 },
        { input: [4, '0001'], expected: 7 },
        { input: [2, '11'], expected: 1 },
        { input: [1, '0'], expected: 0 },
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = solve(...input);
        console.log(`Test case ${i + 1}:`, result === expected ? 'Passed' : `Failed (Expected ${expected}, got ${result})`);
    }
}

testSolve();