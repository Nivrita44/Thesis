export function solve(testCases) {
    const results = [];

    for (const { n, k, a, b }
        of testCases) {
        let low = 0,
            high = 1 _000_000_001;
        let remainingOperations = k;
        const initialValues = [...a];

        while (high - low > 1) {
            const mid = Math.floor((high + low) / 2);
            let totalIterations = 0;
            for (let i = 0; i < n; i++) {
                totalIterations += Math.max(0, Math.floor((initialValues[i] - mid) / b[i]) + 1);
            }
            if (totalIterations <= k) {
                high = mid;
            } else {
                low = mid;
            }
        }

        let totalScore = 0 n;
        const updatedValues = [...a];

        for (let i = 0; i < n; i++) {
            let iterations = Math.max(0, Math.floor((updatedValues[i] - high) / b[i]) + 1);
            remainingOperations -= iterations;
            totalScore += BigInt(iterations) * BigInt(updatedValues[i] + updatedValues[i] - (iterations - 1) * b[i]) / 2 n;
            updatedValues[i] -= b[i] * iterations;
        }

        updatedValues.sort((x, y) => y - x);
        for (let i = 0; i < Math.min(n, remainingOperations); i++) {
            if (updatedValues[i] <= 0) break;
            totalScore += BigInt(updatedValues[i]);
        }

        results.push(totalScore.toString());
    }

    return results;
}


// function testing_test() {
//     const cases = [
//         {
//             n: 3, k: 4,
//             a: [5, 6, 7],
//             b: [2, 3, 4]
//         },
//         {
//             n: 5, k: 9,
//             a: [32, 52, 68, 64, 14],
//             b: [18, 14, 53, 24, 8]
//         },
//         {
//             n: 5, k: 1000,
//             a: [1, 2, 3, 4, 5],
//             b: [5, 4, 3, 2, 1]
//         },
//         {
//             n: 1, k: 1000000,
//             a: [1000000],
//             b: [1]
//         },
//         {
//             n: 10, k: 6,
//             a: [3, 3, 5, 10, 6, 8, 6, 8, 7, 7],
//             b: [6, 1, 7, 4, 1, 1, 8, 9, 3, 1]
//         }
//     ];

//     const expected = [
//         "21",
//         "349",
//         "27",
//         "500000500000",
//         "47"
//     ];

//     const actual = solve(cases);

//     console.log("✅ Output:");
//     console.log(actual.join('\n'));

//     console.log("\n✅ Expected:");
//     console.log(expected.join('\n'));

//     console.log("\n✅ Test Result:", actual.join('\n') === expected.join('\n') ? "Passed" : "Failed");
// }

// testing_test();