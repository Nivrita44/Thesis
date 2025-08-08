import { solve } from '../../solutions-algorithm/6.js';

test('All elements same', () => {
    expect(solve(4, [3, 3, 3, 3])).toBe(0);
});

test('Example with distinct and repeated elements', () => {
    expect(solve(8, [1, 2, 2, 3, 1, 5, 6, 1])).toBe(9);
});

test('Sorted input, large gaps', () => {
    expect(solve(5, [1, 2, 3, 100, 200])).toBe(297);
});

test('Unordered with duplicates at ends', () => {
    expect(solve(6, [7, 8, 3, 1, 1, 8])).toBe(14);
});

test('All minimums except two high maximums', () => {
    expect(solve(6, [1, 1, 1, 1000000000, 999999999, 1])).toBe(1999999997);
});

test('Two lowest and two highest at the edges', () => {
    expect(solve(7, [100000, 100000, 1, 2, 700, 999999999, 1000000000])).toBe(1999998997);
});

test('Minimum length array', () => {
    expect(solve(4, [4, 5, 1, 8])).toBe(11);
});

test('Small array no repetition', () => {
    expect(solve(4, [4, 10, 2, 9])).toBe(13);
});

test('Input with negative values replaced by minimum valid', () => {
    expect(solve(4, [1, 1, 1, 2])).toBe(1);
});

test('Array with maximum constraints', () => {
    const arr = [1, 1, 1, 1, 1000000000, 999999999];
    expect(solve(arr)).toBe(1999999997);
});

test('Increasing order large array', () => {
    const arr = [];
    for (let i = 1; i <= 10; i++) arr.push(i);
    expect(solve(arr)).toBe(19);
});

test('Decreasing order large array', () => {
    const arr = [];
    for (let i = 10; i >= 1; i--) arr.push(i);
    expect(solve(arr)).toBe(19);
});

test('All values are the maximum', () => {
    expect(solve(6, [100, 100, 100, 100, 100, 100])).toBe(0);
});

test('Array with minimum and maximum alternated', () => {
    expect(solve(8, [1, 100, 1, 100, 1, 100, 1, 100])).toBe(198);
});

test('Edge case: second max and min are also at the ends', () => {
    expect(solve(4, [100, 1, 99, 2])).toBe(196);
});

// FAIL tests - algorithm / tests - prompt3 / 6 _prompt3.test.js√ All elements same(3 ms)√ Example with distinct and repeated elements√ Sorted input, large gaps√ Unordered with duplicates at ends√ All minimums except two high maximums× Two lowest and two highest at the edges(2 ms)× Minimum length array(1 ms)√ Small array no repetition(1 ms)√ Input with negative values replaced by minimum valid(1 ms)× Array with maximum constraints× Increasing order large array× Decreasing order large array√ All values are the maximum(1 ms)√ Array with minimum and maximum alternated√ Edge
// case :second max and min are also at the ends

// ● Two lowest and two highest at the edges

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     1999998997
//     Received: 1999999996

//     22 |
//         23 | test('Two lowest and two highest at the edges', () => { >
//             24 | expect(solve(7, [100000, 100000, 1, 2, 700, 999999999, 1000000000])).toBe(1999998997); |
//             ^
//             25 |
//         });
//     26 |
//         27 | test('Minimum length array', () => {

//                 at Object.toBe(tests - algorithm / tests - prompt3 / 6 _prompt3.test.js: 24: 74)

//                 ● Minimum length array

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: 11
//                 Received: 8

//                 26 |
//                     27 | test('Minimum length array', () => { >
//                         28 | expect(solve(4, [4, 5, 1, 8])).toBe(11); |
//                         ^
//                         29 |
//                     });
//                 30 |
//                     31 | test('Small array no repetition', () => {

//                             at Object.toBe(tests - algorithm / tests - prompt3 / 6 _prompt3.test.js: 28: 36)

//                             ● Array with maximum constraints

//                             TypeError: Cannot read properties of undefined(reading 'sort')

//                             1 | // Main logic function
//                                 2 |
//                                 export function solve(n, arr) { >
//                                     3 | arr.sort((a, b) => a - b); |
//                                     ^
//                                     4 |
//                                         return arr[arr.length - 1] + arr[arr.length - 2] - arr[0] - arr[1];
//                                     5 |
//                                 }
//                             6 |

//                                 at sort(solutions - algorithm / 6. js: 3: 9)
//                             at Object.solve(tests - algorithm / tests - prompt3 / 6 _prompt3.test.js: 41: 12)

//                             ● Increasing order large array

//                             TypeError: Cannot read properties of undefined(reading 'sort')

//                             1 | // Main logic function
//                                 2 |
//                                 export function solve(n, arr) { >
//                                     3 | arr.sort((a, b) => a - b); |
//                                     ^
//                                     4 |
//                                         return arr[arr.length - 1] + arr[arr.length - 2] - arr[0] - arr[1];
//                                     5 |
//                                 }
//                             6 |

//                                 at sort(solutions - algorithm / 6. js: 3: 9)
//                             at Object.solve(tests - algorithm / tests - prompt3 / 6 _prompt3.test.js: 47: 12)

//                             ● Decreasing order large array

//                             TypeError: Cannot read properties of undefined(reading 'sort')

//                             1 | // Main logic function
//                                 2 |
//                                 export function solve(n, arr) { >
//                                     3 | arr.sort((a, b) => a - b); |
//                                     ^
//                                     4 |
//                                         return arr[arr.length - 1] + arr[arr.length - 2] - arr[0] - arr[1];
//                                     5 |
//                                 }
//                             6 |

//                                 at sort(solutions - algorithm / 6. js: 3: 9)