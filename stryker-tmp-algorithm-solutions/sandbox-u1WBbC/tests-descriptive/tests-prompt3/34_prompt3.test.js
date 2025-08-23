// @ts-nocheck
import { solve } from '../../solutions-descriptive/34.js';

test('a equals b, all zeros', () => {
    expect(solve([0, 0, 0], [0, 0, 0])).toBe('1');
});

test('a and b match, single element', () => {
    expect(solve([5], [0])).toBe('6');
});

test('a and b identical, no mod effect', () => {
    expect(solve([2, 5, 7], [2, 5, 7])).toBe('8');
});

test('simple k, mod is 3', () => {
    expect(solve([4, 7, 10], [1, 1, 1])).toBe('3');
});

test('unordered b, mod 2', () => {
    expect(solve([4, 7, 9], [1, 1, 0])).toBe('2');
});

test('b impossible: sum b > sum a', () => {
    expect(solve([1, 2, 3], [4, 5, 6])).toBe('-1');
});

test('b impossible: same sum but values dont match', () => {
    expect(solve([5, 10, 15], [0, 2, 3])).toBe('-1');
});

test('large input, all mods zero', () => {
    const a = Array(1000).fill(1000);
    const b = Array(1000).fill(0);
    expect(solve(a, b)).toBe('1000');
});

test('single element, b greater than a', () => {
    expect(solve([1], [2])).toBe('-1');
});

test('all ones, b all zeros', () => {
    expect(solve([1, 1, 1, 1], [0, 0, 0, 0])).toBe('1');
});

test('different possible k, picks the lowest valid', () => {
    expect(solve([14, 17, 19], [0, 3, 5])).toBe('7');
});

test('max values near limit', () => {
    const max = 10 ** 6;
    expect(solve([max, max - 1, max - 2], [0, 1, 2])).toBe('1000000');
});

test('b is permuted remainders', () => {
    expect(solve([12, 7, 14], [2, 0, 5])).toBe('7');
});

test('impossible because max b >= k', () => {
    expect(solve([6, 9, 15], [4, 3, 2])).toBe('-1');
});

test('longer input, all a mod 4', () => {
    const a = [8, 11, 17, 25];
    const b = [1, 0, 1, 0];
    expect(solve(a, b)).toBe('4');
});

test('peakX + 1 exceeds 1e9', () => {
    expect(solve([1e9, 1e9], [1e9, 1e9])).toBe('-1');
});

test('repeat same number', () => {
    expect(solve([3, 3, 3], [0, 0, 0])).toBe('3');
});

test('b is zeros, a has range', () => {
    expect(solve([2, 4, 6, 8], [0, 0, 0, 0])).toBe('2');
});

test('minimum length with impossible', () => {
    expect(solve([1], [2])).toBe('-1');
});

// FAIL tests - descriptive / tests - prompt3 / 34 _prompt3.test.js× a equals b, all zeros(5 ms)× a and b match, single element(3 ms)× a and b identical, no mod effect(1 ms)√ simple k, mod is 3√ unordered b, mod 2√ b impossible: sum b > sum a(1 ms)√ b impossible: same sum but values dont match(1 ms)× large input, all mods zero(2 ms)√ single element, b greater than a(1 ms)√ all ones, b all zeros(1 ms)√ different possible k, picks the lowest valid(1 ms)× max values near limit(1 ms)× b is permuted remainders(1 ms)√ impossible because max b >= k× longer input, all a mod 4(1 ms)√ peakX + 1 exceeds 1e9× repeat same number× b is zeros, a has range√ minimum length with impossible

// ● a equals b, all zeros

// expect(received).toBe(expected) // Object.is equality

// Expected: "1"
// Received: 1

// 2 |
//     3 | test('a equals b, all zeros', () => { >
//         4 | expect(solve([0, 0, 0], [0, 0, 0])).toBe('1'); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('a and b match, single element', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 4: 35)

//             ● a and b match, single element

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "6"
//             Received: "1"

//             6 |
//                 7 | test('a and b match, single element', () => { >
//                     8 | expect(solve([5], [0])).toBe('6'); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('a and b identical, no mod effect', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 8: 27)

//                         ● a and b identical, no mod effect

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: "8"
//                         Received: 8

//                         10 |
//                             11 | test('a and b identical, no mod effect', () => { >
//                                 12 | expect(solve([2, 5, 7], [2, 5, 7])).toBe('8'); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('simple k, mod is 3', () => {

//                                 at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 12: 35)

//                                 ● large input, all mods zero

//                                 expect(received).toBe(expected) // Object.is equality

//                                 Expected: "1000"
//                                 Received: "1"

//                                 32 |
//                                     const a = Array(1000).fill(1000);
//                                 33 |
//                                     const b = Array(1000).fill(0); >
//                                 34 | expect(solve(a, b)).toBe('1000'); |
//                                 ^
//                                 35 |
//                             });
//                         36 |
//                             37 | test('single element, b greater than a', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 34: 23)

//                                     ● max values near limit

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: "1000000"
//                                     Received: "3"

//                                     49 | test('max values near limit', () => {
//                                         50 |
//                                             const max = 10 ** 6; >
//                                         51 | expect(solve([max, max - 1, max - 2], [0, 1, 2])).toBe('1000000'); |
//                                         ^
//                                         52 |
//                                     });
//                                     53 |
//                                         54 | test('b is permuted remainders', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 51: 47)

//                                                 ● b is permuted remainders

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: "7"
//                                                 Received: "-1"

//                                                 53 |
//                                                     54 | test('b is permuted remainders', () => { >
//                                                         55 | expect(solve([12, 7, 14], [2, 0, 5])).toBe('7'); |
//                                                         ^
//                                                         56 |
//                                                     });
//                                                 57 |
//                                                     58 | test('impossible because max b >= k', () => {

//                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 55: 37)

//                                                         ● longer input, all a mod 4

//                                                         expect(received).toBe(expected) // Object.is equality

//                                                         Expected: "4"
//                                                         Received: "-1"

//                                                         63 |
//                                                             const a = [8, 11, 17, 25];
//                                                         64 |
//                                                             const b = [1, 0, 1, 0]; >
//                                                         65 | expect(solve(a, b)).toBe('4'); |
//                                                         ^
//                                                         66 |
//                                                     });
//                                                 67 |
//                                                     68 | test('peakX + 1 exceeds 1e9', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 65: 23)

//                                                             ● repeat same number

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: "3"
//                                                             Received: "1"

//                                                             71 |
//                                                                 72 | test('repeat same number', () => { >
//                                                                     73 | expect(solve([3, 3, 3], [0, 0, 0])).toBe('3'); |
//                                                                     ^
//                                                                     74 |
//                                                                 });
//                                                             75 |
//                                                                 76 | test('b is zeros, a has range', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 73: 35)

//                                                                         ● b is zeros, a has range

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: "2"
//                                                                         Received: "1"

//                                                                         75 |
//                                                                             76 | test('b is zeros, a has range', () => { >
//                                                                                 77 | expect(solve([2, 4, 6, 8], [0, 0, 0, 0])).toBe('2'); |
//                                                                                 ^
//                                                                                 78 |
//                                                                             });
//                                                                         79 |
//                                                                             80 | test('minimum length with impossible', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 34 _prompt3.test.js: 77: 39)
