import { solve } from '../../solutions-descriptive/44.js';

test('typical case: [3,2,9]', () => {
    expect(solve([3, 2, 9])).toBe('Bob');
});

test('typical case: [3,3,6,1]', () => {
    expect(solve([3, 3, 6, 1])).toBe('Alice');
});

test('typical case: [1,2,3,4,5]', () => {
    expect(solve([1, 2, 3, 4, 5])).toBe('Bob');
});

test('edge case: empty array', () => {
    expect(solve([])).toBe('Bob');
});

test('edge case: array with only 1', () => {
    expect(solve([1])).toBe('Bob');
});

test('edge case: array with only 2', () => {
    expect(solve([2])).toBe('Alice');
});

test('edge case: large numbers', () => {
    expect(solve([9999991, 9999991])).toBe('Bob');
});

test('edge case: mixed primes and non-primes', () => {
    expect(solve([2, 4, 6, 7, 9])).toBe('Alice');
});

test('edge case: all even numbers', () => {
    expect(solve([2, 4, 6, 8, 10])).toBe('Bob');
});

test('edge case: all odd numbers', () => {
    expect(solve([1, 3, 5, 7, 9])).toBe('Bob');
});

test('edge case: alternating even and odd', () => {
    expect(solve([1, 2, 3, 4, 5, 6])).toBe('Alice');
});


// FAIL tests - descriptive / tests - prompt2 / 44 _prompt2.test.js√ typical
// case :[3, 2, 9](2 ms)√ typical
// case :[3, 3, 6, 1]√ typical
// case :[1, 2, 3, 4, 5](1 ms)√ edge
// case :empty array(1 ms)× edge
// case :array with only 1(4 ms)× edge
// case :array with only 2(1 ms)√ edge
// case :large numbers√ edge
// case :mixed primes and non - primes√ edge
// case :all even numbers(1 ms)× edge
// case :all odd numbers(1 ms)× edge
// case :alternating even and odd(1 ms)

// ● edge
// case :array with only 1

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     "Bob"
//     Received: "Alice"

//     18 |
//         19 | test('edge case: array with only 1', () => { >
//             20 | expect(solve([1])).toBe('Bob'); |
//             ^
//             21 |
//         });
//     22 |
//         23 | test('edge case: array with only 2', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt2 / 44 _prompt2.test.js: 20: 22)

//                 ● edge
//                 case :array with only 2

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected:
//                     "Alice"
//                     Received: "Bob"

//                     22 |
//                         23 | test('edge case: array with only 2', () => { >
//                             24 | expect(solve([2])).toBe('Alice'); |
//                             ^
//                             25 |
//                         });
//                     26 |
//                         27 | test('edge case: large numbers', () => {

//                                 at Object.toBe(tests - descriptive / tests - prompt2 / 44 _prompt2.test.js: 24: 22)

//                                 ● edge
//                                 case :all odd numbers

//                                 expect(received).toBe(expected) // Object.is equality

//                                 Expected:
//                                     "Bob"
//                                     Received: "Alice"

//                                     38 |
//                                         39 | test('edge case: all odd numbers', () => { >
//                                             40 | expect(solve([1, 3, 5, 7, 9])).toBe('Bob'); |
//                                             ^
//                                             41 |
//                                         });
//                                     42 |
//                                         43 | test('edge case: alternating even and odd', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 44 _prompt2.test.js: 40: 34)

//                                                 ● edge
//                                                 case :alternating even and odd

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected:
//                                                     "Alice"
//                                                     Received: "Bob"

//                                                     42 |
//                                                         43 | test('edge case: alternating even and odd', () => { >
//                                                             44 | expect(solve([1, 2, 3, 4, 5, 6])).toBe('Alice'); |
//                                                             ^
//                                                             45 |
//                                                         });

//                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 44 _prompt2.test.js: 44: 37)