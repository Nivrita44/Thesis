import { solve } from '../../solutions-descriptive/33.js';

test('Example 1: region is 1x1', () => {
    expect(solve([
        [0, 1, 0, 1]
    ])).toEqual([1]);
});

test('Example 2: region is 1x2', () => {
    expect(solve([
        [0, 1, 0, 2]
    ])).toEqual([2]);
});

test('Example 3: region is 2x2 aligned', () => {
    expect(solve([
        [0, 2, 0, 2]
    ])).toEqual([1]);
});

test('Example 4: region is 2x2 unaligned', () => {
    expect(solve([
        [1, 3, 1, 3]
    ])).toEqual([4]);
});

test('Example 5: 3x3 region', () => {
    expect(solve([
        [0, 3, 0, 3]
    ])).toEqual([4]);
});

test('Example 6: Large aligned square', () => {
    expect(solve([
        [0, 1024, 0, 1024]
    ])).toEqual([1]);
});

test('Example 7: Large region not aligned', () => {
    expect(solve([
        [1, 1025, 1, 1025]
    ])).toEqual([4]);
});

test('Example 8: 1x1000 vertical stripe', () => {
    expect(solve([
        [5, 6, 0, 1000]
    ])).toEqual([1000]);
});

test('Example 9: 1000x1 horizontal stripe', () => {
    expect(solve([
        [0, 1000, 400, 401]
    ])).toEqual([1000]);
});

test('Multiple test cases at once', () => {
    expect(solve([
        [0, 1, 0, 1],
        [0, 2, 0, 2],
        [1, 3, 1, 3],
        [0, 3, 0, 3]
    ])).toEqual([1, 1, 4, 4]);
});

test('Biggest possible region', () => {
    expect(solve([
        [0, 1000000, 0, 1000000]
    ])).toEqual([1]);
});

test('Region fully inside but not aligned', () => {
    expect(solve([
        [5, 9, 6, 10]
    ])).toEqual([4]);
});

test('2x1 region', () => {
    expect(solve([
        [1, 3, 4, 5]
    ])).toEqual([2]);
});

test('1x2 region', () => {
    expect(solve([
        [4, 5, 7, 9]
    ])).toEqual([2]);
});

// FAIL tests - descriptive / tests - prompt1 / 33 _prompt1.test.js× Example 1: region is 1 x1(4 ms)× Example 2: region is 1 x2× Example 3: region is 2 x2 aligned(1 ms)× Example 4: region is 2 x2 unaligned× Example 5: 3 x3 region(1 ms)× Example 6: Large aligned square(1 ms)× Example 7: Large region not aligned(1 ms)× Example 8: 1 x1000 vertical stripe× Example 9: 1000 x1 horizontal stripe(1 ms)× Multiple test cases at once(1 ms)× Biggest possible region(1 ms)× Region fully inside but not aligned× 2 x1 region× 1 x2 region

// ● Example 1: region is 1 x1

// expect(received).toEqual(expected) // deep equality

// Expected: [1]
// Received: 0

// 2 |
//     3 | test('Example 1: region is 1x1', () => { >
//         4 | expect(solve([
//             [0, 1, 0, 1]
//         ])).toEqual([1]); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('Example 2: region is 1x2', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 4: 30)

//             ● Example 2: region is 1 x2

//             expect(received).toEqual(expected) // deep equality

//             Expected: [2]
//             Received: 0

//             6 |
//                 7 | test('Example 2: region is 1x2', () => { >
//                     8 | expect(solve([
//                         [0, 1, 0, 2]
//                     ])).toEqual([2]); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('Example 3: region is 2x2 aligned', () => {

//                         at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 8: 30)

//                         ● Example 3: region is 2 x2 aligned

//                         expect(received).toEqual(expected) // deep equality

//                         Expected: [1]
//                         Received: 0

//                         10 |
//                             11 | test('Example 3: region is 2x2 aligned', () => { >
//                                 12 | expect(solve([
//                                     [0, 2, 0, 2]
//                                 ])).toEqual([1]); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('Example 4: region is 2x2 unaligned', () => {

//                                     at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 12: 30)

//                                     ● Example 4: region is 2 x2 unaligned

//                                     expect(received).toEqual(expected) // deep equality

//                                     Expected: [4]
//                                     Received: 0

//                                     14 |
//                                         15 | test('Example 4: region is 2x2 unaligned', () => { >
//                                             16 | expect(solve([
//                                                 [1, 3, 1, 3]
//                                             ])).toEqual([4]); |
//                                             ^
//                                             17 |
//                                         });
//                                     18 |
//                                         19 | test('Example 5: 3x3 region', () => {

//                                                 at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 16: 30)

//                                                 ● Example 5: 3 x3 region

//                                                 expect(received).toEqual(expected) // deep equality

//                                                 Expected: [4]
//                                                 Received: 0

//                                                 18 |
//                                                     19 | test('Example 5: 3x3 region', () => { >
//                                                         20 | expect(solve([
//                                                             [0, 3, 0, 3]
//                                                         ])).toEqual([4]); |
//                                                         ^
//                                                         21 |
//                                                     });
//                                                 22 |
//                                                     23 | test('Example 6: Large aligned square', () => {

//                                                             at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 20: 30)

//                                                             ● Example 6: Large aligned square

//                                                             expect(received).toEqual(expected) // deep equality

//                                                             Expected: [1]
//                                                             Received: 0

//                                                             22 |
//                                                                 23 | test('Example 6: Large aligned square', () => { >
//                                                                     24 | expect(solve([
//                                                                         [0, 1024, 0, 1024]
//                                                                     ])).toEqual([1]); |
//                                                                     ^
//                                                                     25 |
//                                                                 });
//                                                             26 |
//                                                                 27 | test('Example 7: Large region not aligned', () => {

//                                                                         at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 24: 36)

//                                                                         ● Example 7: Large region not aligned

//                                                                         expect(received).toEqual(expected) // deep equality

//                                                                         Expected: [4]
//                                                                         Received: 0

//                                                                         26 |
//                                                                             27 | test('Example 7: Large region not aligned', () => { >
//                                                                                 28 | expect(solve([
//                                                                                     [1, 1025, 1, 1025]
//                                                                                 ])).toEqual([4]); |
//                                                                                 ^
//                                                                                 29 |
//                                                                             });
//                                                                         30 |
//                                                                             31 | test('Example 8: 1x1000 vertical stripe', () => {

//                                                                                     at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 28: 36)

//                                                                                     ● Example 8: 1 x1000 vertical stripe

//                                                                                     expect(received).toEqual(expected) // deep equality

//                                                                                     Expected: [1000]
//                                                                                     Received: 0

//                                                                                     30 |
//                                                                                         31 | test('Example 8: 1x1000 vertical stripe', () => { >
//                                                                                             32 | expect(solve([
//                                                                                                 [5, 6, 0, 1000]
//                                                                                             ])).toEqual([1000]); |
//                                                                                             ^
//                                                                                             33 |
//                                                                                         });
//                                                                                     34 |
//                                                                                         35 | test('Example 9: 1000x1 horizontal stripe', () => {

//                                                                                                 at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 32: 33)

//                                                                                                 ● Example 9: 1000 x1 horizontal stripe

//                                                                                                 expect(received).toEqual(expected) // deep equality

//                                                                                                 Expected: [1000]
//                                                                                                 Received: 0

//                                                                                                 34 |
//                                                                                                     35 | test('Example 9: 1000x1 horizontal stripe', () => { >
//                                                                                                         36 | expect(solve([
//                                                                                                             [0, 1000, 400, 401]
//                                                                                                         ])).toEqual([1000]); |
//                                                                                                         ^
//                                                                                                         37 |
//                                                                                                     });
//                                                                                                 38 |
//                                                                                                     39 | test('Multiple test cases at once', () => {

//                                                                                                         at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 36: 37)

//                                                                                                         ● Multiple test cases at once

//                                                                                                         expect(received).toEqual(expected) // deep equality

//                                                                                                         Expected: [1, 1, 4, 4]
//                                                                                                         Received: 0

//                                                                                                         43 | [1, 3, 1, 3],
//                                                                                                             44 | [0, 3, 0, 3] >
//                                                                                                             45 | ])).toEqual([1, 1, 4, 4]); |
//                                                                                             ^
//                                                                                             46 |
//                                                                                         }); 47 |
//                                                                                 48 | test('Biggest possible region', () => {

//                                                                                         at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 45: 7)

//                                                                                         ● Biggest possible region

//                                                                                         expect(received).toEqual(expected) // deep equality

//                                                                                         Expected: [1]
//                                                                                         Received: 0

//                                                                                         47 |
//                                                                                             48 | test('Biggest possible region', () => { >
//                                                                                                 49 | expect(solve([
//                                                                                                     [0, 1000000, 0, 1000000]
//                                                                                                 ])).toEqual([1]); |
//                                                                                                 ^
//                                                                                                 50 |
//                                                                                             });
//                                                                                         51 |
//                                                                                             52 | test('Region fully inside but not aligned', () => {

//                                                                                                     at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 49: 42)

//                                                                                                     ● Region fully inside but not aligned

//                                                                                                     expect(received).toEqual(expected) // deep equality

//                                                                                                     Expected: [4]
//                                                                                                     Received: 0

//                                                                                                     51 |
//                                                                                                         52 | test('Region fully inside but not aligned', () => { >
//                                                                                                             53 | expect(solve([
//                                                                                                                 [5, 9, 6, 10]
//                                                                                                             ])).toEqual([4]); |
//                                                                                                             ^
//                                                                                                             54 |
//                                                                                                         });
//                                                                                                     55 |
//                                                                                                         56 | test('2x1 region', () => {

//                                                                                                                 at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 53: 31)

//                                                                                                                 ● 2 x1 region

//                                                                                                                 expect(received).toEqual(expected) // deep equality

//                                                                                                                 Expected: [2]
//                                                                                                                 Received: 0

//                                                                                                                 55 |
//                                                                                                                     56 | test('2x1 region', () => { >
//                                                                                                                         57 | expect(solve([
//                                                                                                                             [1, 3, 4, 5]
//                                                                                                                         ])).toEqual([2]); |
//                                                                                                                         ^
//                                                                                                                         58 |
//                                                                                                                     });
//                                                                                                                 59 |
//                                                                                                                     60 | test('1x2 region', () => {

//                                                                                                                             at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 57: 30)

//                                                                                                                             ● 1 x2 region

//                                                                                                                             expect(received).toEqual(expected) // deep equality

//                                                                                                                             Expected: [2]
//                                                                                                                             Received: 0

//                                                                                                                             59 |
//                                                                                                                                 60 | test('1x2 region', () => { >
//                                                                                                                                     61 | expect(solve([
//                                                                                                                                         [4, 5, 7, 9]
//                                                                                                                                     ])).toEqual([2]); |
//                                                                                                                                     ^
//                                                                                                                                     62 |
//                                                                                                                                 });

//                                                                                                                             at Object.toEqual(tests - descriptive / tests - prompt1 / 33 _prompt1.test.js: 61: 30)