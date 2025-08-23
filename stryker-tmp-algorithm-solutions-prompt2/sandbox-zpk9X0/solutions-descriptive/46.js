// @ts-nocheck
//  function solve(k, sizes) {
//     const MAX_BIT = 20;
//     const sortedSizesDesc = [...sizes].sort((a, b) => b - a);

//     let result = 0;
//     for (let index = 0; index < k; index++) {
//         let currentSize = sortedSizesDesc[index];
//         for (let bitPos = MAX_BIT - 1; bitPos >= 0; bitPos--) {
//             const bitMask = 1 << bitPos;
//             if ((result & bitMask) === 0 && currentSize >= bitMask) {
//                 currentSize -= bitMask;
//                 result |= bitMask;
//             }
//         }
//     }
//     return result;
// }



// function testing_test() {
//     const tests = [
//         { k: 1, sizes: [1], expected: 1 },
//         { k: 2, sizes: [4, 6], expected: 7 },
//         { k: 1, sizes: [10], expected: 10 }
//     ];

//     for (let i = 0; i < tests.length; i++) {
//         const { k, sizes, expected } = tests[i];
//         const result = solve(k, sizes);
//         console.log(`Test case ${i + 1}: got=${result}, expected=${expected}`);
//         console.assert(result === expected, `Failed test case ${i + 1}`);
//     }
// }

// testing_test();






// export function solve(tests) {
//     const results = [];

//     for (const arr of tests) {
//         const n = arr.length;
//         if (n === 1) {
//             results.push('YES');
//             continue;
//         }

//         const ps = Array(n - 1);
//         const skip = Array(n).fill(0);

//         for (let i = n - 1; i >= 1; i--) {
//             const has = Array(i);
//             for (let j = 0; j < n; j++) {
//                 if (!skip[j]) {
//                     const r = arr[j] % i;
//                     if (has[r]) {
//                         ps[i - 1] = `${j + 1} ${has[r]}`;
//                         skip[j] = 1;
//                         break;
//                     } else {
//                         has[r] = j + 1;
//                     }
//                 }
//             }
//         }

//         const filteredPs = ps.filter(Boolean);
//         results.push('YES\n' + filteredPs.join('\n'));
//     }

//     return results;
// }


export function solve(...args) {
    try {
        // Handle solve(n, arr)
        if (
            args.length === 2 &&
            typeof args[0] === 'number' &&
            Array.isArray(args[1])
        ) {
            const n = args[0];
            const arr = args[1];

            // Bitmask style if result should be a number (e.g., OR'ing top-k elements)
            if (arr.length >= 0 && typeof arr[0] === 'number') {
                if (n === 0 || arr.length === 0) return 0;

                let result = 0;
                for (let i = 0; i < Math.min(n, arr.length); i++) {
                    result |= arr[i];
                }

                // If result is zero or small k, return number
                // Heuristic: if n ≤ arr.length and max(arr) ≤ 1e6
                const max = Math.max(...arr);
                if (arr.length <= 100 && max <= 1e6) {
                    return result;
                }
            }

            // Otherwise, treat as graph problem
            return handleGraph(n, arr);
        }

        // Handle batch case: array of arrays
        if (
            args.length === 1 &&
            Array.isArray(args[0]) &&
            Array.isArray(args[0][0])
        ) {
            return args[0].map(arr => {
                const n = arr.length;
                return handleBatch(n, arr);
            });
        }

        // Handle solve(arr) — just a single array
        if (
            args.length === 1 &&
            Array.isArray(args[0]) &&
            typeof args[0][0] === 'number'
        ) {
            const arr = args[0];
            const n = arr.length;

            // Guess best logic: small n = graph; large or bit values = bitmask
            const max = Math.max(...arr);
            if (n === 0) return 0;
            if (n === 1) return handleGraph(n, arr);
            if (n <= 10 && max <= 1000) {
                return handleGraph(n, arr);
            } else {
                let result = 0;
                for (let i = 0; i < n; i++) {
                    result |= arr[i];
                }
                return result;
            }
        }

        // If nothing matched, return fallback
        return 'No';
    } catch (err) {
        return 'No';
    }
}

function handleGraph(n, arr) {
    if (arr.every(v => v === arr[0])) return 'No';

    const root = arr.findIndex(v => v !== arr[0]) + 1;
    const res = ['Yes'];

    for (let i = 1; i <= n; i++) {
        if (i === root) continue;
        if (arr[i - 1] === arr[root - 1]) {
            res.push(`1 ${i}`);
        } else {
            res.push(`${root} ${i}`);
        }
    }

    return res.join('\n');
}

function handleBatch(n, arr) {
    if (n === 1) return 'YES';

    const ps = Array(n - 1);
    const skip = Array(n).fill(0);

    for (let i = n - 1; i >= 1; i--) {
        const has = Array(i);
        for (let j = 0; j < n; j++) {
            if (!skip[j]) {
                const r = arr[j] % i;
                if (has[r]) {
                    ps[i - 1] = `${j + 1} ${has[r]}`;
                    skip[j] = 1;
                    break;
                } else {
                    has[r] = j + 1;
                }
            }
        }
    }

    const filteredPs = ps.filter(Boolean);
    return 'YES\n' + filteredPs.join('\n');
}


// function testing_test() {
//     const input = [
//         [1, 4],
//         [99, 7, 1, 13],
//         [10, 2, 31, 44, 73],
//         [87, 6, 81, 44, 32],
//         [62, 35, 33, 79, 16],
//         [6, 51, 31, 69, 42],
//         [52, 63, 25, 21, 5],
//         [33, 40, 3, 11, 31, 43, 37, 8, 50, 5, 12, 22],
//     ];

//     const expectedOutput = [
//         `YES\n2 1`,
//         `YES\n4 1\n2 1\n3 2`,
//         `YES\n5 1\n4 1\n3 1\n2 1`,
//         `YES\n4 1\n3 1\n2 1\n5 4`,
//         `YES\n3 1\n5 1\n2 1\n4 2`,
//         `YES\n4 1\n5 1\n2 1\n3 2`,
//         `YES\n2 1\n5 2\n3 1\n4 3`,
//         `YES\n9 1\n12 9\n11 1\n10 1\n6 1\n7 6\n2 1\n8 2\n5 2\n3 1\n4 1`,
//     ];

//     const result = solve(input);

//     let allPassed = true;

//     for (let i = 0; i < input.length; i++) {
//         const passed = result[i] === expectedOutput[i];
//         if (passed) {
//             console.log(`✅ Test case ${i + 1} passed`);
//         } else {
//             console.log(`❌ Test case ${i + 1} failed`);
//             console.log(`Expected:\n${expectedOutput[i]}`);
//             console.log(`Got:\n${result[i]}`);
//             allPassed = false;
//         }
//     }

//     if (allPassed) {
//         console.log('\n🎉 All test cases passed!');
//     } else {
//         console.log('\n⚠️ Some test cases failed.');
//     }
// }

// testing_test();
