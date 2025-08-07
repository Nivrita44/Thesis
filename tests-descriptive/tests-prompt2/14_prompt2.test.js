import { solve } from '../../solutions-descriptive/14.js';

test('Example case 1', () => {
    expect(solve(1, 3, 5, [0])).toBe(4);
});

test('Example case 2', () => {
    expect(solve(3, 2, 5, [2, 5, 5])).toBe(5);
});

test('Example case 3', () => {
    expect(solve(1, 10, 10, [10])).toBe(20);
});

test('Example case 4', () => {
    expect(solve(10, 1, 10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(0);
});

test('Example case 5', () => {
    expect(solve(2, 1, 2, [0, 0])).toBe(2);
});

test('Example case 6', () => {
    expect(solve(2, 1, 2, [0, 2])).toBe(1);
});

test('All stops at zero', () => {
    expect(solve(3, 1, 5, [0, 0, 0])).toBe(3);
});

test('Stops at total length', () => {
    expect(solve(2, 2, 8, [8, 8])).toBe(12);
});

test('No stops', () => {
    expect(solve(0, 4, 7, [])).toBe(7);
});

test('Edge: stepSize is zero', () => {
    expect(solve(3, 0, 4, [1, 2, 3])).toBe(4);
});

test('Edge: totalLength is zero', () => {
    expect(solve(2, 1, 0, [0, 0])).toBe(0);
});

test('Edge: single very large stop', () => {
    expect(solve(1, 100, 10000, [9999])).toBe(18998);
});

test('Edge: stop at negative input', () => {
    expect(solve(2, 2, 5, [-1, 6])).toBe(6);
});

test('Minimal values', () => {
    expect(solve(1, 1, 1, [0])).toBe(1);
});

test('Large n', () => {
    const n = 10000;
    const stops = Array.from({ length: n }, (_, i) => i % 100);
    expect(typeof solve(n, 3, 100, stops)).toBe('number');
});


// FAIL tests - descriptive / tests - prompt2 / 14 _prompt2.test.js√ Example
// case 1(2 ms)√ Example
// case 2√ Example
// case 3√ Example
// case 4√ Example
// case 5√ Example
// case 6× All stops at zero(2 ms)× Stops at total length× No stops(2 ms)× Edge:
//     stepSize is zero(1 ms)√ Edge: totalLength is zero(1 ms)× Edge: single very large stop× Edge: stop at negative input× Minimal values√ Large n(10 ms)

//     ● All stops at zero

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 8

//     26 |
//         27 | test('All stops at zero', () => { >
//             28 | expect(solve(3, 1, 5, [0, 0, 0])).toBe(3); |
//             ^
//             29 |
//         });
//     30 |
//         31 | test('Stops at total length', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt2 / 14 _prompt2.test.js: 28: 37)

//                 ● Stops at total length

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected: 12
//                 Received: 24

//                 30 |
//                     31 | test('Stops at total length', () => { >
//                         32 | expect(solve(2, 2, 8, [8, 8])).toBe(12); |
//                         ^
//                         33 |
//                     });
//                 34 |
//                     35 | test('No stops', () => {

//                             at Object.toBe(tests - descriptive / tests - prompt2 / 14 _prompt2.test.js: 32: 34)

//                             ● No stops

//                             expect(received).toBe(expected) // Object.is equality

//                             Expected: 7
//                             Received: 14

//                             34 |
//                                 35 | test('No stops', () => { >
//                                     36 | expect(solve(0, 4, 7, [])).toBe(7); |
//                                     ^
//                                     37 |
//                                 });
//                             38 |
//                                 39 | test('Edge: stepSize is zero', () => {

//                                         at Object.toBe(tests - descriptive / tests - prompt2 / 14 _prompt2.test.js: 36: 30)

//                                         ● Edge: stepSize is zero

//                                         expect(received).toBe(expected) // Object.is equality

//                                         Expected: 4
//                                         Received: 10

//                                         38 |
//                                             39 | test('Edge: stepSize is zero', () => { >
//                                                 40 | expect(solve(3, 0, 4, [1, 2, 3])).toBe(4); |
//                                                 ^
//                                                 41 |
//                                             });
//                                         42 |
//                                             43 | test('Edge: totalLength is zero', () => {

//                                                     at Object.toBe(tests - descriptive / tests - prompt2 / 14 _prompt2.test.js: 40: 37)

//                                                     ● Edge: single very large stop

//                                                     expect(received).toBe(expected) // Object.is equality

//                                                     Expected: 18998
//                                                     Received: 39798

//                                                     46 |
//                                                         47 | test('Edge: single very large stop', () => { >
//                                                             48 | expect(solve(1, 100, 10000, [9999])).toBe(18998); |
//                                                             ^
//                                                             49 |
//                                                         });
//                                                     50 |
//                                                         51 | test('Edge: stop at negative input', () => {

//                                                                 at Object.toBe(tests - descriptive / tests - prompt2 / 14 _prompt2.test.js: 48: 40)

//                                                                 ● Edge: stop at negative input

//                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                 Expected: 6
//                                                                 Received: 5

//                                                                 50 |
//                                                                     51 | test('Edge: stop at negative input', () => { >
//                                                                         52 | expect(solve(2, 2, 5, [-1, 6])).toBe(6); |
//                                                                         ^
//                                                                         53 |
//                                                                     });
//                                                                 54 |
//                                                                     55 | test('Minimal values', () => {

//                                                                             at Object.toBe(tests - descriptive / tests - prompt2 / 14 _prompt2.test.js: 52: 35)

//                                                                             ● Minimal values

//                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                             Expected: 1
//                                                                             Received: 0

//                                                                             54 |
//                                                                                 55 | test('Minimal values', () => { >
//                                                                                     56 | expect(solve(1, 1, 1, [0])).toBe(1); |
//                                                                                     ^
//                                                                                     57 |
//                                                                                 });
//                                                                             58 |
//                                                                                 59 | test('Large n', () => {

//                                                                                         at Object.toBe(tests - descriptive / tests - prompt2 / 14 _prompt2.test.js: 56: 31)