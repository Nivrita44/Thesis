export function solve(arrayLength, array) {
    const seen = new Set();
    const firstZeroIndex = array.includes(0) ? array.indexOf(0) : -1;
    let mex = 0;


    for (let i = arrayLength - 1; i >= 0; i--) {
        if (array[i] < mex) {
            mex = 0;
            break;
        }


        if (array[i] !== 0 || i === firstZeroIndex) {
            seen.add(array[i]);
            while (seen.has(mex)) {
                mex++;
            }
        }
    }

    const countZeros = array.filter(value => value === 0).length;
    return arrayLength - countZeros + (mex !== 0 ? 1 : 0);
}

//function testing_test() {
// 
//     const testCases = [
//         { n: 5, a: [4, 3, 2, 1, 0], expected: 5 },
//         { n: 6, a: [4, 3, 3, 2, 1, 0], expected: 5 },
//         { n: 4, a: [2, 0, 1, 2], expected: 3 },
//         { n: 1, a: [777], expected: 1 },
//         { n: 4, a: [1000000000, 1, 7, 9], expected: 4 },
//         { n: 2, a: [0, 1], expected: 2 },
//         { n: 2, a: [1, 2], expected: 2 },
//         { n: 4, a: [0, 1, 0, 1], expected: 3 },
//     ];

//     testCases.forEach(({ n, a, expected }, index) => {
//         const result = solve(n, a);
//         console.log(`Test case ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, got ${result})`);
//     });
// }

// testing_test();