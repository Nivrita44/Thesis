export function solve(numPoints, pointList) {
    const xFrequency = new Map();
    const diagonalSumFrequency = new Map();

    for (let i = 0; i < numPoints; i++) {
        const [x, y] = pointList[i];

        xFrequency.set(x, (xFrequency.get(x) || 0) + 1);
        diagonalSumFrequency.set(x + y, (diagonalSumFrequency.get(x + y) || 0) + 1);
    }

    let uniqueX, uniqueY;

    
    for (const [xCoord, count] of xFrequency) {
        if (count % 2 === 1) {
            uniqueX = xCoord;
            break;
        }
    }

    
    for (const [diagonalSum, count] of diagonalSumFrequency) {
        if (count % 2 === 1) {
            uniqueY = diagonalSum - uniqueX;
            break;
        }
    }

    return [uniqueX, uniqueY];
}


// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 n: 7,
//                 points: [
//                     [7, 26],
//                     [6, 27],
//                     [6, 28],
//                     [7, 27],
//                     [8, 26],
//                     [8, 27],
//                     [7, 28]
//                 ]
//             },
//             expected: [7, 27]
//         },
//         {
//             input: {
//                 n: 11,
//                 points: [
//                     [70, 9],
//                     [69, 8],
//                     [69, 0],
//                     [73, 5],
//                     [70, -1],
//                     [70, 5],
//                     [71, 7],
//                     [70, 4],
//                     [73, 4],
//                     [71, 3],
//                     [72, 3]
//                 ]
//             },
//             expected: [72, 7]
//         }
//     ];

//     for (const { input, expected } of testCases) {
//         const result = solve(input.n, input.points);
//         console.log(`Input: n=${input.n}, points=${JSON.stringify(input.points)}`);
//         console.log(`Expected: ${expected}, Got: ${result}`);
//         console.assert(
//             JSON.stringify(result) === JSON.stringify(expected),
//             `Test failed for input: n=${input.n}, points=${JSON.stringify(input.points)}`
//         );
//     }
// }

// testing_test();