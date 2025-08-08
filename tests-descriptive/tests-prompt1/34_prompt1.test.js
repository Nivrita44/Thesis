import { solve } from '../../solutions-descriptive/34.js';

test('Case 1: Simple possible k', () => {
    expect(solve(3, [4, 7, 13], [1, 4, 0])).toBe(7);
});

test('Case 2: impossible case', () => {
    expect(solve(2, [5, 7], [2, 5])).toBe(-1);
});

test('Case 3: all a and b are zero', () => {
    expect(solve(4, [0, 0, 0, 0], [0, 0, 0, 0])).toBe(1);
});

test('Case 4: all b are the same, possible k', () => {
    expect(solve(3, [5, 10, 15], [0, 0, 0])).toBe(5);
});

test('Case 5: shuffled b, unique solution', () => {
    expect(solve(3, [8, 11, 17], [2, 5, 1])).toBe(6);
});

test('Case 6: n=1, equal elements', () => {
    expect(solve(1, [7], [7])).toBe(1);
});

test('Case 7: n=1, impossible', () => {
    expect(solve(1, [6], [2])).toBe(-1);
});

test('Case 8: Example with larger k', () => {
    expect(solve(4, [9, 27, 6, 24], [3, 0, 0, 0])).toBe(6);
});

test('Case 9: Large elements within bounds, possible', () => {
    expect(solve(2, [1 _000_000, 500 _000], [0, 0])).toBe(500 _000);
});

test('Case 10: Unsorted a and b, valid', () => {
    expect(solve(5, [13, 21, 8, 5, 3], [0, 0, 3, 3, 5])).toBe(8);
});

// FAIL tests - descriptive / tests - prompt1 / 34 _prompt1.test.js× Case 1: Simple possible k(6 ms)× Case 2: impossible
// case (1 ms)× Case 3:
//     all a and b are zero(1 ms)× Case 4: all b are the same, possible k× Case 5: shuffled b, unique solution(1 ms)× Case 6: n = 1, equal elements(2 ms)× Case 7: n = 1, impossible(1 ms)× Case 8: Example with larger k× Case 9: Large elements within bounds, possible(2 ms)× Case 10: Unsorted a and b, valid

//     ● Case 1: Simple possible k

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 7
//     Received: "-1"

//     2 |
//         3 | test('Case 1: Simple possible k', () => { >
//             4 | expect(solve(3, [4, 7, 13], [1, 4, 0])).toBe(7); |
//             ^
//             5 |
//         });
//     6 |
//         7 | test('Case 2: impossible case', () => {

//                 at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 4: 43)

//                 ● Case 2: impossible
//                 case

//                 expect(received).toBe(expected) // Object.is equality

//                 Expected:
//                     -1
//                     Received: "-1"

//                     6 |
//                         7 | test('Case 2: impossible case', () => { >
//                             8 | expect(solve(2, [5, 7], [2, 5])).toBe(-1); |
//                             ^
//                             9 |
//                         });
//                     10 |
//                         11 | test('Case 3: all a and b are zero', () => {

//                                 at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 8: 36)

//                                 ● Case 3: all a and b are zero

//                                 TypeError: setX.sort is not a
//                                 function

//                                 18 |
//                                 19 |
//                                     let diffVal = totalX - totalY; >
//                                 20 | setX.sort((a, b) => a - b); |
//                                 ^
//                                 21 | setY.sort((a, b) => a - b);
//                                 22 |
//                                     23 |
//                                     if (diffVal === 0) {

//                                         at sort(solutions - descriptive / 34. js: 20: 10)
//                                         at Object.solve(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 12: 10)

//                                         ● Case 4: all b are the same, possible k

//                                         expect(received).toBe(expected) // Object.is equality

//                                         Expected: 5
//                                         Received: "-1"

//                                         14 |
//                                             15 | test('Case 4: all b are the same, possible k', () => { >
//                                                 16 | expect(solve(3, [5, 10, 15], [0, 0, 0])).toBe(5); |
//                                                 ^
//                                                 17 |
//                                             });
//                                         18 |
//                                             19 | test('Case 5: shuffled b, unique solution', () => {

//                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 16: 44)

//                                                     ● Case 5: shuffled b, unique solution

//                                                     expect(received).toBe(expected) // Object.is equality

//                                                     Expected: 6
//                                                     Received: "-1"

//                                                     18 |
//                                                         19 | test('Case 5: shuffled b, unique solution', () => { >
//                                                             20 | expect(solve(3, [8, 11, 17], [2, 5, 1])).toBe(6); |
//                                                             ^
//                                                             21 |
//                                                         });
//                                                     22 |
//                                                         23 | test('Case 6: n=1, equal elements', () => {

//                                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 20: 44)

//                                                                 ● Case 6: n = 1, equal elements

//                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                 Expected: 1
//                                                                 Received: "-1"

//                                                                 22 |
//                                                                     23 | test('Case 6: n=1, equal elements', () => { >
//                                                                         24 | expect(solve(1, [7], [7])).toBe(1); |
//                                                                         ^
//                                                                         25 |
//                                                                     });
//                                                                 26 |
//                                                                     27 | test('Case 7: n=1, impossible', () => {

//                                                                             at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 24: 30)

//                                                                             ● Case 7: n = 1, impossible

//                                                                             expect(received).toBe(expected) // Object.is equality

//                                                                             Expected: -1
//                                                                             Received: "-1"

//                                                                             26 |
//                                                                                 27 | test('Case 7: n=1, impossible', () => { >
//                                                                                     28 | expect(solve(1, [6], [2])).toBe(-1); |
//                                                                                     ^
//                                                                                     29 |
//                                                                                 });
//                                                                             30 |
//                                                                                 31 | test('Case 8: Example with larger k', () => {

//                                                                                         at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 28: 30)

//                                                                                         ● Case 8: Example with larger k

//                                                                                         expect(received).toBe(expected) // Object.is equality

//                                                                                         Expected: 6
//                                                                                         Received: "-1"

//                                                                                         30 |
//                                                                                             31 | test('Case 8: Example with larger k', () => { >
//                                                                                                 32 | expect(solve(4, [9, 27, 6, 24], [3, 0, 0, 0])).toBe(6); |
//                                                                                                 ^
//                                                                                                 33 |
//                                                                                             });
//                                                                                         34 |
//                                                                                             35 | test('Case 9: Large elements within bounds, possible', () => {

//                                                                                                     at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 32: 50)

//                                                                                                     ● Case 9: Large elements within bounds, possible

//                                                                                                     expect(received).toBe(expected) // Object.is equality

//                                                                                                     Expected: 500000
//                                                                                                     Received: "-1"

//                                                                                                     34 |
//                                                                                                         35 | test('Case 9: Large elements within bounds, possible', () => { >
//                                                                                                             36 | expect(solve(2, [1 _000_000, 500 _000], [0, 0])).toBe(500 _000); |
//                                                                                                             ^
//                                                                                                             37 |
//                                                                                                         });
//                                                                                                     38 |
//                                                                                                         39 | test('Case 10: Unsorted a and b, valid', () => {

//                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 36: 50)

//                                                                                                                 ● Case 10: Unsorted a and b, valid

//                                                                                                                 expect(received).toBe(expected) // Object.is equality

//                                                                                                                 Expected: 8
//                                                                                                                 Received: "-1"

//                                                                                                                 38 |
//                                                                                                                     39 | test('Case 10: Unsorted a and b, valid', () => { >
//                                                                                                                         40 | expect(solve(5, [13, 21, 8, 5, 3], [0, 0, 3, 3, 5])).toBe(8); |
//                                                                                                                         ^
//                                                                                                                         41 |
//                                                                                                                     });

//                                                                                                                 at Object.toBe(tests - descriptive / tests - prompt1 / 34 _prompt1.test.js: 40: 56)