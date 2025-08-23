// @ts-nocheck
import { solve } from '../../solutions-descriptive/39.js';

test('single element array - minimum case', () => {
    expect(solve(1, [0])).toBe(1);
    expect(solve(1, [42])).toBe(1);
});

test('all zeros', () => {
    expect(solve(3, [0, 0, 0])).toBe(1);
    expect(solve(5, [0, 0, 0, 0, 0])).toBe(1);
});

test('sequence with only ones', () => {
    expect(solve(4, [1, 1, 1, 1])).toBe(4);
});

test('mex increases in the prefix', () => {
    expect(solve(5, [1, 2, 4, 0, 3])).toBe(4);
});

test('sequence with scattered zeros', () => {
    expect(solve(6, [1, 0, 2, 0, 3, 0])).toBe(4);
});

test('increasing sequence from zero', () => {
    expect(solve(5, [0, 1, 2, 3, 4])).toBe(1);
    expect(solve(6, [0, 1, 2, 3, 4, 5])).toBe(1);
});

test('sequence with no zeros', () => {
    expect(solve(5, [5, 6, 7, 8, 9])).toBe(5);
    expect(solve(3, [2, 2, 2])).toBe(3);
});

test('sequence with large numbers', () => {
    expect(solve(6, [999999999, 777777777, 0, 888888888, 0, 1000000000])).toBe(4);
});

test('alternating zeros and ones', () => {
    expect(solve(8, [0, 1, 0, 1, 0, 1, 0, 1])).toBe(4);
});

test('complex mixed sequence', () => {
    expect(solve(7, [2, 0, 4, 1, 0, 3, 0])).toBe(5);
});

test('test with largest n possible with no zeros', () => {
    const largeArr = Array(2e5).fill(1);
    expect(solve(2e5, largeArr)).toBe(2e5);
});

test('test with largest n possible and all zeros', () => {
    const zeroArr = Array(2e5).fill(0);
    expect(solve(2e5, zeroArr)).toBe(1);
});

test('test with alternating zeros and a constant value, large n', () => {
    const arr = [];
    for (let i = 0; i < 2e5; i++) arr.push(i % 2 === 0 ? 0 : 1);
    expect(solve(2e5, arr)).toBe(1e5 + 1);
});

test('no missing numbers in prefix, single zero in between', () => {
    expect(solve(7, [1, 2, 3, 0, 4, 5, 6])).toBe(7);
});

test('random missing numbers after zeros', () => {
    expect(solve(9, [0, 4, 1, 0, 2, 0, 3, 7, 8])).toBe(5);
});

test('all elements are the same and not zero', () => {
    expect(solve(5, [3, 3, 3, 3, 3])).toBe(5);
});

test('all distinct elements, zeros only at ends', () => {
    expect(solve(5, [0, 2, 3, 4, 0])).toBe(3);
});


// FAIL tests - descriptive / tests - prompt3 / 39 _prompt3.test.js√ single element array - minimum
// case (2 ms)√ all zeros√ sequence with only ones(1 ms)× mex increases in the prefix(3 ms)√ sequence with scattered zeros× increasing sequence from zero√ sequence with no zeros(1 ms)× sequence with large numbers× alternating zeros and ones(1 ms)√ complex mixed sequence√ test with largest n possible with no zeros(16 ms)√ test with largest n possible and all zeros(11 ms)√ test with alternating zeros and a constant value, large n(27 ms)√ no missing numbers in prefix, single zero in between(1 ms)× random missing numbers after zeros(1 ms)√ all elements are the same and not zero× all distinct elements, zeros only at ends(1 ms)

// ● mex increases in the prefix

// expect(received).toBe(expected) // Object.is equality

// Expected:
//     4
//     Received: 5

//     16 |
//         17 | test('mex increases in the prefix', () => { >
//             18 | expect(solve(5, [1, 2, 4, 0, 3])).toBe(4); |
//             ^
//             19 |
//         });
//     20 |
//         21 | test('sequence with scattered zeros', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt3 / 39 _prompt3.test.js: 18: 37)

//                 ● increasing sequence from zero

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: 1
//                 Received: 5

//                 24 |
//                     25 | test('increasing sequence from zero', () => { >
//                         26 | expect(solve(5, [0, 1, 2, 3, 4])).toBe(1); |
//                         ^
//                         27 | expect(solve(6, [0, 1, 2, 3, 4, 5])).toBe(1);
//                         28 |
//                     });
//                 29 |

//                     at Object.toBe(tests - descriptive / tests - prompt3 / 39 _prompt3.test.js: 26: 37)

//                 ● sequence with large numbers

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: 4
//                 Received: 5

//                 34 |
//                     35 | test('sequence with large numbers', () => { >
//                         36 | expect(solve(6, [999999999, 777777777, 0, 888888888, 0, 1000000000])).toBe(4); |
//                         ^
//                         37 |
//                     });
//                 38 |
//                     39 | test('alternating zeros and ones', () => {

//                             at Object.toBe(tests - descriptive / tests - prompt3 / 39 _prompt3.test.js: 36: 73)

//                             ● alternating zeros and ones

//                             expect(received).toBe(expected) // Object.is equality

//                             Expected: 4
//                             Received: 5

//                             38 |
//                                 39 | test('alternating zeros and ones', () => { >
//                                     40 | expect(solve(8, [0, 1, 0, 1, 0, 1, 0, 1])).toBe(4); |
//                                     ^
//                                     41 |
//                                 });
//                             42 |
//                                 43 | test('complex mixed sequence', () => {

//                                         at Object.toBe(tests - descriptive / tests - prompt3 / 39 _prompt3.test.js: 40: 39)

//                                         ● random missing numbers after zeros

//                                         expect(received).toBe(expected) // Object.is equality

//                                         Expected: 5
//                                         Received: 7

//                                         66 |
//                                             67 | test('random missing numbers after zeros', () => { >
//                                                 68 | expect(solve(9, [0, 4, 1, 0, 2, 0, 3, 7, 8])).toBe(5); |
//                                                 ^
//                                                 69 |
//                                             });
//                                         70 |
//                                             71 | test('all elements are the same and not zero', () => {

//                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 39 _prompt3.test.js: 68: 49)

//                                                     ● all distinct elements, zeros only at ends

//                                                     expect(received).toBe(expected) // Object.is equality

//                                                     Expected: 3
//                                                     Received: 4

//                                                     74 |
//                                                         75 | test('all distinct elements, zeros only at ends', () => { >
//                                                             76 | expect(solve(5, [0, 2, 3, 4, 0])).toBe(3); |
//                                                             ^
//                                                             77 |
//                                                         });

//                                                     at Object.toBe(tests - descriptive / tests - prompt3 / 39 _prompt3.test.js: 76: 37)
