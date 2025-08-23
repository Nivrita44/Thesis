// @ts-nocheck
// 
import solve from '../../solutions-descriptive/20.js';

test('example 1', () => {
    expect(solve(3, [2, 2, 2])).toBe(0);
});

test('simple possible 1', () => {
    expect(solve(2, [5, 1])).toBe(2);
});

test('simple possible 2', () => {
    expect(solve(4, [10, 10, 10, 10])).toBe(0);
});

test('impossible 1', () => {
    expect(solve(2, [1, 1])).toBe(-1);
});

test('impossible 2', () => {
    expect(solve(3, [2, 2, 3])).toBe(-1);
});

test('even distribution, large', () => {
    expect(solve(5, [6, 6, 6, 6, 6])).toBe(0);
});

test('simple redistribution', () => {
    expect(solve(3, [4, 2, 2])).toBe(1);
});

test('high/low pairing impossible', () => {
    expect(solve(3, [1, 5, 2])).toBe(-1);
});

test('all ones impossible', () => {
    expect(solve(4, [1, 1, 1, 1])).toBe(-1);
});

test('one high, rest minimal', () => {
    expect(solve(3, [10, 1, 1])).toBe(6);
});

test('edge large value', () => {
    expect(solve(2, [1000000000, 1000000000])).toBe(0);
});

test('n = 2, impossible', () => {
    expect(solve(2, [3, 1])).toBe(-1);
});

test('n = 3, possible', () => {
    expect(solve(3, [8, 2, 4])).toBe(2);
});

test('n = 4, redistribution', () => {
    expect(solve(4, [6, 4, 2, 6])).toBe(2);
});

// FAIL tests - descriptive / tests - prompt1 / 20 _prompt1.test.js× example 1(2 ms)× simple possible 1(1 ms)× simple possible 2(1 ms)× impossible 1(1 ms)× impossible 2(1 ms)× even distribution, large× simple redistribution× high / low pairing impossible× all ones impossible(1 ms)× one high, rest minimal× edge large value× n = 2, impossible× n = 3, possible× n = 4, redistribution(1 ms)

// ● example 1

// TypeError: solve is not a
// function

// 2 |
// 3 | test('example 1', () => { >
//     4 | expect(solve(3, [2, 2, 2])).toBe(0); |
//     ^
//     5 |
// });
// 6 |
//     7 | test('simple possible 1', () => {

//             at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 4: 10)

//             ● simple possible 1

//             TypeError: solve is not a
//             function

//             6 |
//             7 | test('simple possible 1', () => { >
//                 8 | expect(solve(2, [5, 1])).toBe(2); |
//                 ^
//                 9 |
//             });
//             10 |
//                 11 | test('simple possible 2', () => {

//                         at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 8: 10)

//                         ● simple possible 2

//                         TypeError: solve is not a
//                         function

//                         10 |
//                         11 | test('simple possible 2', () => { >
//                             12 | expect(solve(4, [10, 10, 10, 10])).toBe(0); |
//                             ^
//                             13 |
//                         });
//                         14 |
//                             15 | test('impossible 1', () => {

//                                     at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 12: 10)

//                                     ● impossible 1

//                                     TypeError: solve is not a
//                                     function

//                                     14 |
//                                     15 | test('impossible 1', () => { >
//                                         16 | expect(solve(2, [1, 1])).toBe(-1); |
//                                         ^
//                                         17 |
//                                     });
//                                     18 |
//                                         19 | test('impossible 2', () => {

//                                                 at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 16: 10)

//                                                 ● impossible 2

//                                                 TypeError: solve is not a
//                                                 function

//                                                 18 |
//                                                 19 | test('impossible 2', () => { >
//                                                     20 | expect(solve(3, [2, 2, 3])).toBe(-1); |
//                                                     ^
//                                                     21 |
//                                                 });
//                                                 22 |
//                                                     23 | test('even distribution, large', () => {

//                                                             at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 20: 10)

//                                                             ● even distribution, large

//                                                             TypeError: solve is not a
//                                                             function

//                                                             22 |
//                                                             23 | test('even distribution, large', () => { >
//                                                                 24 | expect(solve(5, [6, 6, 6, 6, 6])).toBe(0); |
//                                                                 ^
//                                                                 25 |
//                                                             });
//                                                             26 |
//                                                                 27 | test('simple redistribution', () => {

//                                                                         at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 24: 10)

//                                                                         ● simple redistribution

//                                                                         TypeError: solve is not a
//                                                                         function

//                                                                         26 |
//                                                                         27 | test('simple redistribution', () => { >
//                                                                             28 | expect(solve(3, [4, 2, 2])).toBe(1); |
//                                                                             ^
//                                                                             29 |
//                                                                         });
//                                                                         30 |
//                                                                             31 | test('high/low pairing impossible', () => {

//                                                                                     at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 28: 10)

//                                                                                     ● high / low pairing impossible

//                                                                                     TypeError: solve is not a
//                                                                                     function

//                                                                                     30 |
//                                                                                     31 | test('high/low pairing impossible', () => { >
//                                                                                         32 | expect(solve(3, [1, 5, 2])).toBe(-1); |
//                                                                                         ^
//                                                                                         33 |
//                                                                                     });
//                                                                                     34 |
//                                                                                         35 | test('all ones impossible', () => {

//                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 32: 10)

//                                                                                                 ● all ones impossible

//                                                                                                 TypeError: solve is not a
//                                                                                                 function

//                                                                                                 34 |
//                                                                                                 35 | test('all ones impossible', () => { >
//                                                                                                     36 | expect(solve(4, [1, 1, 1, 1])).toBe(-1); |
//                                                                                                     ^
//                                                                                                     37 |
//                                                                                                 });
//                                                                                                 38 |
//                                                                                                     39 | test('one high, rest minimal', () => {

//                                                                                                             at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 36: 10)

//                                                                                                             ● one high, rest minimal

//                                                                                                             TypeError: solve is not a
//                                                                                                             function

//                                                                                                             38 |
//                                                                                                             39 | test('one high, rest minimal', () => { >
//                                                                                                                 40 | expect(solve(3, [10, 1, 1])).toBe(6); |
//                                                                                                                 ^
//                                                                                                                 41 |
//                                                                                                             });
//                                                                                                             42 |
//                                                                                                                 43 | test('edge large value', () => {

//                                                                                                                         at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 40: 10)

//                                                                                                                         ● edge large value

//                                                                                                                         TypeError: solve is not a
//                                                                                                                         function

//                                                                                                                         42 |
//                                                                                                                         43 | test('edge large value', () => { >
//                                                                                                                             44 | expect(solve(2, [1000000000, 1000000000])).toBe(0); |
//                                                                                                                             ^
//                                                                                                                             45 |
//                                                                                                                         });
//                                                                                                                         46 |
//                                                                                                                             47 | test('n = 2, impossible', () => {

//                                                                                                                                     at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 44: 10)

//                                                                                                                                     ● n = 2, impossible

//                                                                                                                                     TypeError: solve is not a
//                                                                                                                                     function

//                                                                                                                                     46 |
//                                                                                                                                     47 | test('n = 2, impossible', () => { >
//                                                                                                                                         48 | expect(solve(2, [3, 1])).toBe(-1); |
//                                                                                                                                         ^
//                                                                                                                                         49 |
//                                                                                                                                     });
//                                                                                                                                     50 |
//                                                                                                                                         51 | test('n = 3, possible', () => {

//                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 48: 10)

//                                                                                                                                                 ● n = 3, possible

//                                                                                                                                                 TypeError: solve is not a
//                                                                                                                                                 function

//                                                                                                                                                 50 |
//                                                                                                                                                 51 | test('n = 3, possible', () => { >
//                                                                                                                                                     52 | expect(solve(3, [8, 2, 4])).toBe(2); |
//                                                                                                                                                     ^
//                                                                                                                                                     53 |
//                                                                                                                                                 });
//                                                                                                                                                 54 |
//                                                                                                                                                     55 | test('n = 4, redistribution', () => {

//                                                                                                                                                             at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 52: 10)

//                                                                                                                                                             ● n = 4, redistribution

//                                                                                                                                                             TypeError: solve is not a
//                                                                                                                                                             function

//                                                                                                                                                             54 |
//                                                                                                                                                             55 | test('n = 4, redistribution', () => { >
//                                                                                                                                                                 56 | expect(solve(4, [6, 4, 2, 6])).toBe(2); |
//                                                                                                                                                                 ^
//                                                                                                                                                                 57 |
//                                                                                                                                                             });

//                                                                                                                                                             at Object.solve(tests - descriptive / tests - prompt1 / 20 _prompt1.test.js: 56: 10)