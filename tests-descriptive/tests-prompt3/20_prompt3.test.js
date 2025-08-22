import { solve } from '../../solutions-descriptive/20.js';

test('Example 1: Possible equalization', () => {
    expect(solve([3, 3])).toBe(1);
});

test('Example 2: All same already', () => {
    expect(solve([5, 5, 5, 5])).toBe(0);
});

test('Example 3: Impossible, single odd among evens', () => {
    expect(solve([2, 2, 3, 2])).toBe(-1);
});

test('Edge 1: Only two elements, operation required', () => {
    expect(solve([2, 4])).toBe(1);
});

test('Edge 2: Only two elements, impossible', () => {
    expect(solve([2, 3])).toBe(-1);
});

test('Edge 3: Large values, already equal', () => {
    expect(solve([1000000000, 1000000000, 1000000000])).toBe(0);
});

test('Edge 4: Large but equalizable', () => {
    expect(solve([1000000002, 1000000002, 1000000002])).toBe(3);
});

test('Modulo wrap around', () => {
    expect(solve([3, 1, 2])).toBe(1);
});

test('Possible with operations', () => {
    expect(solve([4, 1, 1])).toBe(2);
});

test('All odd, not always possible', () => {
    expect(solve([3, 3, 3])).toBe(0);
});

test('Impossible: negative would result', () => {
    expect(solve([1, 1, 10])).toBe(-1);
});

test('Array of length 2, both very large equal', () => {
    expect(solve([1000000000, 1000000000])).toBe(0);
});

test('Array of length 2, high difference', () => {
    expect(solve([1000000000, 1])).toBe(-1);
});

test('All elements need operation', () => {
    expect(solve([4, 2, 2])).toBe(2);
});

test('Max n: all same', () => {
    const arr = Array(2e5).fill(1);
    expect(solve(arr)).toBe(0);
});

test('Max n: alternating big/small impossible', () => {
    const arr = [];
    for (let i = 0; i < 2e5; i++) arr.push(i % 2 ? 1000000000 : 1);
    expect(solve(arr)).toBe(-1);
});

test('n=3, possible', () => {
    expect(solve([4, 2, 2])).toBe(2);
});

test('n=3, impossible', () => {
    expect(solve([1, 2, 3])).toBe(-1);
});

test('n=6, mix, possible', () => {
    expect(solve([6, 4, 4, 4, 4, 4])).toBe(3);
});

test('All zeros', () => {
    expect(solve([0, 0, 0, 0])).toBe(0);
});

test('Zeros and positive', () => {
    expect(solve([0, 2, 2, 2])).toBe(2);
});

test('Big numbers, possible', () => {
    expect(solve([999999998, 999999998, 1000000002])).toBe(2);
});

// FAIL tests - descriptive / tests - prompt3 / 20 _prompt3.test.js× Example 1: Possible equalization(4 ms)√ Example 2: All same already(1 ms)√ Example 3: Impossible, single odd among evens× Edge 1: Only two elements, operation required(1 ms)√ Edge 2: Only two elements, impossible√ Edge 3: Large values, already equal× Edge 4: Large but equalizable× Modulo wrap around(1 ms)× Possible with operations(1 ms)√ All odd, not always possible(1 ms)√ Impossible: negative would result(1 ms)√ Array of length 2, both very large equal(1 ms)× Array of length 2, high difference× All elements need operation(1 ms)√ Max n: all same(70 ms)× Max n: alternating big / small impossible(97 ms)× n = 3, possible√ n = 3, impossible× n = 6, mix, possible√ All zeros× Zeros and positive(1 ms)× Big numbers, possible

// ● Example 1: Possible equalization

// expect(received).toBe(expected) // Object.is equality

// Expected: 1
// Received: 0

// 2 |
//     3 | test('Example 1: Possible equalization', () => { >
//         4 | expect(solve([3, 3])).toBe(1); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('Example 2: All same already', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 4: 25)

//             ● Edge 1: Only two elements, operation required

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 1
//             Received: -1

//             14 |
//                 15 | test('Edge 1: Only two elements, operation required', () => { >
//                     16 | expect(solve([2, 4])).toBe(1); |
//                     ^
//                     17 |
//                 });
//             18 |
//                 19 | test('Edge 2: Only two elements, impossible', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 16: 25)

//                         ● Edge 4: Large but equalizable

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 3
//                         Received: 0

//                         26 |
//                             27 | test('Edge 4: Large but equalizable', () => { >
//                                 28 | expect(solve([1000000002, 1000000002, 1000000002])).toBe(3); |
//                                 ^
//                                 29 |
//                             });
//                         30 |
//                             31 | test('Modulo wrap around', () => {

//                                     at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 28: 55)

//                                     ● Modulo wrap around

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 1
//                                     Received: -1

//                                     30 |
//                                         31 | test('Modulo wrap around', () => { >
//                                             32 | expect(solve([3, 1, 2])).toBe(1); |
//                                             ^
//                                             33 |
//                                         });
//                                     34 |
//                                         35 | test('Possible with operations', () => {

//                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 32: 28)

//                                                 ● Possible with operations

//                                                 expect(received).toBe(expected) // Object.is equality

//                                                 Expected: 2
//                                                 Received: -1

//                                                 34 |
//                                                     35 | test('Possible with operations', () => { >
//                                                         36 | expect(solve([4, 1, 1])).toBe(2); |
//                                                         ^
//                                                         37 |
//                                                     });
//                                                 38 |
//                                                     39 | test('All odd, not always possible', () => {

//                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 36: 28)

//                                                             ● Array of length 2, high difference

//                                                             expect(received).toBe(expected) // Object.is equality

//                                                             Expected: -1
//                                                             Received: 333333333

//                                                             50 |
//                                                                 51 | test('Array of length 2, high difference', () => { >
//                                                                     52 | expect(solve([1000000000, 1])).toBe(-1); |
//                                                                     ^
//                                                                     53 |
//                                                                 });
//                                                             54 |
//                                                                 55 | test('All elements need operation', () => {

//                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 52: 34)

//                                                                         ● All elements need operation

//                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                         Expected: 2
//                                                                         Received: -1

//                                                                         54 |
//                                                                             55 | test('All elements need operation', () => { >
//                                                                                 56 | expect(solve([4, 2, 2])).toBe(2); |
//                                                                                 ^
//                                                                                 57 |
//                                                                             });
//                                                                         58 |
//                                                                             59 | test('Max n: all same', () => {

//                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 56: 28)

//                                                                                 ● Max n: alternating big / small impossible

//                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                 Expected: -1
//                                                                                 Received: 33333333300000

//                                                                                 65 |
//                                                                                     const arr = [];
//                                                                                 66 |
//                                                                                     for (let i = 0; i < 2e5; i++) arr.push(i % 2 ? 1000000000 : 1); >
//                                                                                 67 | expect(solve(arr)).toBe(-1); |
//                                                                                 ^
//                                                                                 68 |
//                                                                             });
//                                                                         69 |
//                                                                             70 | test('n=3, possible', () => {

//                                                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 67: 22)

//                                                                                     ● n = 3, possible

//                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                     Expected: 2
//                                                                                     Received: -1

//                                                                                     69 |
//                                                                                         70 | test('n=3, possible', () => { >
//                                                                                             71 | expect(solve([4, 2, 2])).toBe(2); |
//                                                                                             ^
//                                                                                             72 |
//                                                                                         });
//                                                                                     73 |
//                                                                                         74 | test('n=3, impossible', () => {

//                                                                                                 at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 71: 28)

//                                                                                                 ● n = 6, mix, possible

//                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                 Expected: 3
//                                                                                                 Received: -1

//                                                                                                 77 |
//                                                                                                     78 | test('n=6, mix, possible', () => { >
//                                                                                                         79 | expect(solve([6, 4, 4, 4, 4, 4])).toBe(3); |
//                                                                                                         ^
//                                                                                                         80 |
//                                                                                                     });
//                                                                                                 81 |
//                                                                                                     82 | test('All zeros', () => {

//                                                                                                             at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 79: 37)

//                                                                                                             ● Zeros and positive

//                                                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                                                             Expected: 2
//                                                                                                             Received: -1

//                                                                                                             85 |
//                                                                                                                 86 | test('Zeros and positive', () => { >
//                                                                                                                     87 | expect(solve([0, 2, 2, 2])).toBe(2); |
//                                                                                                                     ^
//                                                                                                                     88 |
//                                                                                                                 });
//                                                                                                             89 |
//                                                                                                                 90 | test('Big numbers, possible', () => {

//                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 87: 31)

//                                                                                                                         ● Big numbers, possible

//                                                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                                                         Expected: 2
//                                                                                                                         Received: -1

//                                                                                                                         89 |
//                                                                                                                             90 | test('Big numbers, possible', () => { >
//                                                                                                                                 91 | expect(solve([999999998, 999999998, 1000000002])).toBe(2); |
//                                                                                                                                 ^
//                                                                                                                                 92 |
//                                                                                                                             });

//                                                                                                                         at Object.toBe(tests - descriptive / tests - prompt3 / 20 _prompt3.test.js: 91: 53)
