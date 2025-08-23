// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/25.js';

test('Example and common cases', () => {
    expect(
        solve([
            { n: 6, arr: [2, 2, 1, 2, 1, 2] }
        ])
    ).toEqual([2]);
    expect(
        solve([
            { n: 3, arr: [1, 2, 1] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 4, arr: [1, 1, 1, 1] }
        ])
    ).toEqual([-1]);
});

test('No twos at all', () => {
    expect(
        solve([
            { n: 5, arr: [1, 1, 1, 1, 1] }
        ])
    ).toEqual([-1]);
});

test('All twos and even count', () => {
    expect(
        solve([
            { n: 4, arr: [2, 2, 2, 2] }
        ])
    ).toEqual([2]);
    expect(
        solve([
            { n: 2, arr: [2, 2] }
        ])
    ).toEqual([1]);
    expect(
        solve([
            { n: 6, arr: [2, 2, 2, 2, 2, 2] }
        ])
    ).toEqual([3]);
});

test('All twos but odd count', () => {
    expect(
        solve([
            { n: 3, arr: [2, 2, 2] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 5, arr: [2, 2, 2, 2, 2] }
        ])
    ).toEqual([-1]);
});

test('Mixed ones and twos, odd twos count', () => {
    expect(
        solve([
            { n: 5, arr: [2, 1, 2, 1, 2] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 7, arr: [2, 1, 1, 2, 2, 1, 2] }
        ])
    ).toEqual([-1]);
});

test('Mixed ones and twos, even twos count', () => {
    expect(
        solve([
            { n: 6, arr: [1, 2, 2, 1, 2, 2] }
        ])
    ).toEqual([4]);
    expect(
        solve([
            { n: 8, arr: [2, 1, 2, 2, 1, 2, 1, 2] }
        ])
    ).toEqual([4]);
});

test('Edge cases: n=2', () => {
    expect(
        solve([
            { n: 2, arr: [1, 1] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 2, arr: [1, 2] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 2, arr: [2, 2] }
        ])
    ).toEqual([1]);
});

test('Multiple queries mixed', () => {
    expect(
        solve([
            { n: 3, arr: [1, 2, 1] },
            { n: 10, arr: [2, 2, 1, 2, 1, 2, 1, 2, 2, 1] },
            { n: 6, arr: [1, 1, 1, 1, 1, 1] }
        ])
    ).toEqual([-1, 4, -1]);
});

test('Should return smallest k when multiple possible', () => {
    expect(
        solve([
            { n: 8, arr: [2, 2, 2, 2, 1, 2, 2, 2] }
        ])
    ).toEqual([4]);
});



// √
// typical cases(4 ms)√ all 2 s, even count(1 ms)√ all 2 s, odd count(1 ms)√ minimum possible valid split√ 0 twos√ no 2 s with other numbers× 2 occurs non - consecutively, even count(3 ms)× split needed at the end(1 ms)× split needed early(1 ms)√ single element array(2)(1 ms)√ single element array(not 2)(1 ms)√ mix of twos and other numbers, odd number of twos

// ● 2 occurs non - consecutively, even count

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-5, +4, ]

// 56 | { n: 7, arr: [3, 2, 1, 2, 5, 2, 2] }
// 57 | ]) >
// 58 | ).toEqual([5]); |
// ^
// 59 |
// });
// 60 |
//     61 | test('split needed at the end', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt2 / 25 _prompt2.test.js: 58: 5)

//         ● split needed at the end

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//             Received + 1

//         Array[-5, +4, ]

//         64 | { n: 6, arr: [1, 1, 2, 2, 2, 2] }
//         65 | ]) >
//     66 | ).toEqual([5]); |
// ^
// 67 |
// });
// 68 |
//     69 | test('split needed early', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt2 / 25 _prompt2.test.js: 66: 5)

//         ● split needed early

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//             Received + 1

//         Array[-2, +1, ]

//         72 | { n: 4, arr: [2, 2, 1, 1] }
//         73 | ]) >
//     74 | ).toEqual([2]); |
// ^
// 75 |
// });
// 76 |
//     77 | test('single element array (2)', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt2 / 25 _prompt2.test.js: 74: 5)

//         -- -- -- -- -- | -- -- -- -- - | -- -- -- -- -- | -- -- -- -- - | -- -- -- -- - | -- -- -- -- -- -- -- -- -- -
//         File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line# s
//             -- -- -- -- -- | -- -- -- -- - | -- -- -- -- -- | -- -- -- -- - | -- -- -- -- - | -- -- -- -- -- -- -- -- -- -
//             All files | 92.85 | 100 | 100 | 90.9 |
//             25. js | 92.85 | 100 | 100 | 90.9 | 22
//             -- -- -- -- -- | -- -- -- -- - | -- -- -- -- -- | -- -- -- -- - | -- -- -- -- - | -- -- -- -- -- -- -- -- -- -
//             Test Suites: 1 failed, 1 total
//         Tests: 3 failed, 9 passed, 12 total
//         Snapshots: 0 total
//         Time: 0.819 s, estimated 1 s
//         Ran all test suites matching tests - algorithm\ tests - prompt2\ 25 _prompt2.test.js.❌Error
//         while testing tests - algorithm\ tests - prompt2\ 25 _prompt2.test.js✅ Running: tests - algorithm\ tests - prompt3\ 25 _prompt3.test.js(node: 16304) ExperimentalWarning: VM Modules is an experimental feature and might change at any time(Use `node --trace-warnings ...`
//             to show where the warning was created)
//         FAIL tests - algorithm / tests - prompt3 / 25 _prompt3.test.js√ Example and common cases(2 ms)√ No twos at all(1 ms)√ All twos and even count(1 ms)√ All twos but odd count(1 ms)× Mixed ones and twos, odd twos count(4 ms)× Mixed ones and twos, even twos count(1 ms)√ Edge cases: n = 2(1 ms)√ Multiple queries mixed× Should
//         return smallest k when multiple possible(1 ms)

//         ● Mixed ones and twos, odd twos count

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//             Received + 1

//         Array[- -1, +4, ]

//         68 | { n: 7, arr: [2, 1, 1, 2, 2, 1, 2] }
//         69 | ]) >
//     70 | ).toEqual([-1]); |
// ^
// 71 |
// });
// 72 |
//     73 | test('Mixed ones and twos, even twos count', () => {

//         at Object.toEqual(tests - algorithm / tests - prompt3 / 25 _prompt3.test.js: 70: 5)

//         ● Mixed ones and twos, even twos count

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//             Received + 1

//         Array[-4, +3, ]

//         76 | { n: 6, arr: [1, 2, 2, 1, 2, 2] }
//         77 | ]) >
//     78 | ).toEqual([4]); |
// ^
// 79 | expect(
//     80 | solve([
//         81 | { n: 8, arr: [2, 1, 2, 2, 1, 2, 1, 2] }

//         at Object.toEqual(tests - algorithm / tests - prompt3 / 25 _prompt3.test.js: 78: 5)

//         ● Should
//         return smallest k when multiple possible

//         expect(received).toEqual(expected) // deep equality

//         -
//         Expected - 1 +
//         Received + 1

//         Array[-4, + -1, ]

//         117 | { n: 8, arr: [2, 2, 2, 2, 1, 2, 2, 2] }
//         118 |
//     ]) >
//     119 | ).toEqual([4]); |
// ^
// 120 |
// });
