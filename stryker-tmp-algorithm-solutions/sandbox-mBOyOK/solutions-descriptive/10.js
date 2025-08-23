// @ts-nocheck
'use strict';

export function solve(n, l, r, edges) {
    if (n === 1) return l[0];

    const deg = new Uint32Array(n);
    const mix = new Uint32Array(n);

    for (const [u, v] of edges) {
        const ui = u - 1;
        const vi = v - 1;
        deg[ui]++;
        deg[vi]++;
        mix[ui] ^= vi;
        mix[vi] ^= ui;
    }

    const h = [];
    let hSize = 0;
    for (let i = 0; i < n; i++) {
        if (deg[i] === 1) {
            h[hSize++] = i;
        }
    }

    let ans = 0;
    let hPos = 0;

    for (let i = 0; i < n - 1; i++) {
        const u = h[hPos++];
        const v = mix[u];

        if (l[u] > r[v]) {
            ans += l[u] - r[v];
            l[v] = r[v];
        } else if (l[u] > l[v]) {
            l[v] = l[u];
        }

        mix[v] ^= u;
        deg[v]--;
        if (deg[v] === 1) {
            h[hSize++] = v;
        }
    }

    return ans + l[h[hPos]];
}

// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 n: 4,
//                 l: [0, 6, 0, 5],
//                 r: [11, 6, 0, 5],
//                 edges: [[2, 1], [3, 1], [4, 3]]
//             },
//             expected: 11
//         },
//         {
//             input: {
//                 n: 7,
//                 l: [1, 0, 0, 2, 2, 2, 2],
//                 r: [1, 5, 5, 2, 2, 2, 2],
//                 edges: [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]]
//             },
//             expected: 3
//         },
//         {
//             input: {
//                 n: 4,
//                 l: [1, 1, 1, 0],
//                 r: [1, 1, 1, 0],
//                 edges: [[1, 4], [2, 4], [3, 4]]
//             },
//             expected: 3
//         },
//         {
//             input: {
//                 n: 7,
//                 l: [0, 0, 0, 0, 3, 4, 5],
//                 r: [20, 20, 20, 20, 3, 4, 5],
//                 edges: [[1, 2], [1, 3], [1, 4], [2, 5], [3, 6], [4, 7]]
//             },
//             expected: 5
//         },
//         {
//             input: {
//                 n: 5,
//                 l: [1000000000, 0, 1000000000, 0, 1000000000],
//                 r: [1000000000, 0, 1000000000, 0, 1000000000],
//                 edges: [[3, 2], [2, 1], [1, 4], [4, 5]]
//             },
//             expected: 3000000000
//         },
//         {
//             input: {
//                 n: 6,
//                 l: [21, 57, 98, 61, 15, 23],
//                 r: [88, 81, 99, 76, 50, 67],
//                 edges: [[2, 1], [3, 2], [4, 3], [5, 3], [6, 4]]
//             },
//             expected: 98
//         }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({input, expected}, index) => {
//         const {n, l, r, edges} = input;
//         const result = solve(n, l, r, edges);
//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: n=${n}, l=[${l}], r=[${r}], edges=[${edges.map(e => `[${e}]`).join(', ')}]`);
//         console.log(`Expected: ${expected}`);
//         console.log(`Result: ${result}`);
//         console.log(`Status: ${result === expected ? "PASS" : "FAIL"}\n`);
//     });
// }

// testing_test();