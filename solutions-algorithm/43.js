"use strict";

//  Core logic function
export function solve(n, a) {
    const dp1 = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));
    const dp2 = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

    // Precompute dp1 and dp2
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            dp1[i][j] = dp1[i][j - 1] + (a[j - 1] < a[i - 1] ? 1 : 0);
            dp2[i][j] = dp2[i][j - 1] + (a[j - 1] > a[i - 1] ? 1 : 0);
        }
    }

    //  Fix: Compute total inversion count correctly
    let sm = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] > a[j]) sm++;
        }
    }

    let mx = Number.MAX_SAFE_INTEGER;
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            const p =
                sm +
                (dp1[j][j - 1] - dp1[j][i]) -
                (dp2[j][j] - dp2[j][i]) -
                1 -
                (dp1[i][j - 1] - dp1[i][i]) +
                (dp2[i][j] - dp2[i][i]);

            if (p === mx) cnt++;
            else if (p < mx) {
                mx = p;
                cnt = 1;
            }
        }
    }

    return [mx, cnt];
}

//  Test function
// function testing_test() {
//     const tests = [{
//             input: { n: 5, a: [4, 0, 3, 1, 2] },
//             expected: [3, 2],
//         },
//         {
//             input: { n: 5, a: [1, 2, 3, 4, 0] },
//             expected: [3, 4],
//         },
//         {
//             input: { n: 5, a: [1, 3, 4, 0, 2] },
//             expected: [4, 5],
//         },
//     ];

//     for (const { input, expected }
//         of tests) {
//         const result = solve(input.n, input.a);
//         const pass = result[0] === expected[0] && result[1] === expected[1];
//         console.log(
//             `Input: ${input.a.join(" ")} | Output: ${result.join(" ")} | Expected: ${expected.join(" ")} | ${
//         pass ? " PASS" : " FAIL"
//       }`
//         );
//     }
// }

// // Run tests
// testing_test();