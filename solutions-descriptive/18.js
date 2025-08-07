export function solve(targetRows, targetCols, sourceMatrix, targetMatrix) {
    const MAX_ITER = Math.min(targetRows, targetCols) + 1;

    for (let iteration = 0; iteration < MAX_ITER; iteration++) {
        for (let row = 0; row < targetRows; row++) {
            let mismatchMask = 0;
            for (let col = 0; col < targetCols; col++) {
                mismatchMask |= (sourceMatrix[row][col] ^ targetMatrix[row][col]) & sourceMatrix[row][col];
            }

            const clearMask = ((1 n << 31 n) - 1 n) ^ BigInt(mismatchMask);
            for (let col = 0; col < targetCols; col++) {
                sourceMatrix[row][col] &= Number(clearMask);
            }
        }

        for (let col = 0; col < targetCols; col++) {
            let mismatchMask = 0;
            for (let row = 0; row < targetRows; row++) {
                mismatchMask |= (sourceMatrix[row][col] ^ targetMatrix[row][col]) & targetMatrix[row][col];
            }

            for (let row = 0; row < targetRows; row++) {
                sourceMatrix[row][col] |= mismatchMask;
            }
        }
    }

    for (let row = 0; row < targetRows; row++) {
        for (let col = 0; col < targetCols; col++) {
            if (sourceMatrix[row][col] !== targetMatrix[row][col]) {
                return "No\n";
            }
        }
    }

    return "Yes\n";
}

// function testing_test() {
//     const testCases = [
//         {
//             input: { n: 1, m: 1, a: [[12]], b: [[13]] },
//             expected: "Yes\n"
//         },
//         {
//             input: { n: 2, m: 2, a: [[10, 10], [42, 42]], b: [[21, 21], [21, 21]] },
//             expected: "Yes\n"
//         },
//         {
//             input: { n: 2, m: 2, a: [[74, 10], [42, 106]], b: [[21, 85], [85, 21]] },
//             expected: "No\n"
//         },
//         {
//             input: { n: 2, m: 4, a: [[1, 2, 3, 4], [5, 6, 7, 8]], b: [[3, 2, 3, 4], [1, 0, 1, 0]] },
//             expected: "Yes\n"
//         }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const { n, m, a, b } = input;
//         const result = solve(n, m, a, b);
//         const status = result === expected ? "Passed" : `Failed`;
//         console.log(`Test ${index + 1}: ${status}`);
//     });
// }

// testing_test();