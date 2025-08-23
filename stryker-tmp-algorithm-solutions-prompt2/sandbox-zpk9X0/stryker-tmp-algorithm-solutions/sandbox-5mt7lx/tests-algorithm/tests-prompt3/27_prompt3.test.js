// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/27.js';

test('Single small values including non-interesting and first interesting', () => {
    expect(solve([1])).toEqual([0]);
    expect(solve([8])).toEqual([0]);
    expect(solve([9])).toEqual([1]);
    expect(solve([10])).toEqual([1]);
});

test('Various small and edge transition values', () => {
    expect(solve([19])).toEqual([2]);
    expect(solve([29])).toEqual([3]);
    expect(solve([34])).toEqual([3]);
    expect(solve([98])).toEqual([9]);
    expect(solve([99])).toEqual([10]);
    expect(solve([100])).toEqual([10]);
});

test('n=0 should yield zero interesting numbers', () => {
    expect(solve([0])).toEqual([0]);
});

test('Check values at digit boundaries', () => {
    expect(solve([89])).toEqual([8]);
    expect(solve([90])).toEqual([9]);
    expect(solve([1000])).toEqual([100]);
    expect(solve([9999])).toEqual([1000]);
});

test('Random examples and large numbers', () => {
    expect(solve([880055535])).toEqual([88005553]);
});

test('Multiple numbers in same input array', () => {
    expect(solve([1, 9, 10, 34, 880055535])).toEqual([0, 1, 1, 3, 88005553]);
    expect(solve([0, 8, 19, 29, 99])).toEqual([0, 0, 2, 3, 10]);
});

test('Edge cases for n just before/after block transition', () => {
    expect(solve([8, 9, 10])).toEqual([0, 1, 1]);
    expect(solve([18, 19, 20])).toEqual([1, 2, 2]);
    expect(solve([98, 99, 100])).toEqual([9, 10, 10]);
});

test('Maximum allowed n', () => {
    expect(solve([1000000000])).toEqual([100000000]);
});

test('Multiple large numbers', () => {
    expect(solve([99999999, 100000000, 999999999, 1000000000])).toEqual([9999999, 10000000, 99999999, 100000000]);
});



// FAIL tests - algorithm / tests - prompt3 / 27 _prompt3.test.js√ Single small values including non - interesting and first interesting(5 ms)√ Various small and edge transition values(1 ms)√ n = 0 should yield zero interesting numbers× Check values at digit boundaries(4 ms)√ Random examples and large numbers(1 ms)√ Multiple numbers in same input array(1 ms)√ Edge cases
// for n just before / after block transition(1 ms)√ Maximum allowed n(1 ms)× Multiple large numbers(2 ms)

// ● Check values at digit boundaries

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-8, +9, ]

// 22 |
//     23 | test('Check values at digit boundaries', () => { >
//             24 | expect(solve([89])).toEqual([8]); |
//             ^
//             25 | expect(solve([90])).toEqual([9]);
//             26 | expect(solve([1000])).toEqual([100]);
//             27 | expect(solve([9999])).toEqual([1000]);

//             at Object.toEqual(tests - algorithm / tests - prompt3 / 27 _prompt3.test.js: 24: 23)

//             ● Multiple large numbers

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 2 +
//                 Received + 2

//             Array[-9999999,
//                 10000000, -99999999, +10000000, +100000000,
//                 100000000,
//             ]

//             48 |
//                 49 | test('Multiple large numbers', () => { >
//                     50 | expect(solve([99999999, 100000000, 999999999, 1000000000])).toEqual([9999999, 10000000, 99999999, 100000000]); |
//                     ^
//                     51 |
//                 });
