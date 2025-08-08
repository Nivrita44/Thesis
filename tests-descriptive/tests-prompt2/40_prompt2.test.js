import { solve } from '../../solutions-descriptive/40.js';

test('single node', () => {
    expect(solve(1, [1])).toEqual([1]);
});

test('two nodes, increasing pattern', () => {
    expect(solve(2, [1, 2])).toEqual([1, 2]);
});

test('two nodes, decreasing pattern', () => {
    expect(solve(2, [2, 1])).toEqual([2, 1]);
});

test('three nodes, all same label', () => {
    expect(solve(3, [2, 2, 2])).toEqual([1, 2, 3]);
});

test('pattern with -1', () => {
    expect(solve(3, [1, -1, 2])).toEqual([1, 2, 3]);
});

test('pattern with multiple -1s', () => {
    expect(solve(5, [1, -1, 2, -1, 3])).toEqual([1, 2, 3, 4, 5]);
});

test('all different labels', () => {
    expect(solve(4, [4, 3, 2, 1])).toEqual([4, 3, 2, 1]);
});

test('mix of positive and -1, -1 at beginning', () => {
    expect(solve(4, [-1, 2, 2, 2])).toEqual([1, 2, 3, 4]);
});

test('negOneGroup at the end', () => {
    expect(solve(4, [2, 2, 2, -1])).toEqual([1, 2, 3, 4]);
});

test('pattern with label out of order', () => {
    expect(solve(5, [3, 1, 2, 3, 1])).toEqual([3, 1, 2, 4, 5]);
});

test('larger input with labels', () => {
    expect(solve(6, [1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('negOneGroup only', () => {
    expect(solve(1, [-1])).toEqual([1]);
});

test('negOneGroup and unique positive labels', () => {
    expect(solve(3, [-1, 2, 3])).toEqual([1, 2, 3]);
});

test('multiple negOneGroups', () => {
    expect(solve(4, [-1, -1, 2, 2])).toEqual([1, 2, 3, 4]);
});

test('all -1 pattern', () => {
    expect(solve(3, [-1, -1, -1])).toEqual([1, undefined, undefined]);
});

// FAIL tests - descriptive / tests - prompt2 / 40 _prompt2.test.js× single node(9 ms)× two nodes, increasing pattern(1 ms)× two nodes, decreasing pattern(2 ms)× three nodes, all same label(1 ms)× pattern with - 1(2 ms)× pattern with multiple - 1 s(1 ms)× all different labels(1 ms)× mix of positive and - 1, -1 at beginning(1 ms)× negOneGroup at the end× pattern with label out of order(2 ms)× larger input with labels(2 ms)√ negOneGroup only(1 ms)× negOneGroup and unique positive labels(1 ms)× multiple negOneGroups(1 ms)√ all - 1 pattern

// ● single node

// expect(received).toEqual(expected) // deep equality

// -
// Expected - 1 +
//     Received + 1

// Array[-1, +undefined, ]

// 2 |
//     3 | test('single node', () => { >
//         4 | expect(solve(1, [1])).toEqual([1]); |
//         ^
//         5 |
//     });
// 6 |
//     7 | test('two nodes, increasing pattern', () => {

//             at Object.toEqual(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 4: 25)

//             ● two nodes, increasing pattern

//             expect(received).toEqual(expected) // deep equality

//             -
//             Expected - 1 +
//                 Received + 1

//             Array[-1,
//                 2, +undefined,
//             ]

//             6 |
//                 7 | test('two nodes, increasing pattern', () => { >
//                     8 | expect(solve(2, [1, 2])).toEqual([1, 2]); |
//                     ^
//                     9 |
//                 });
//             10 |
//                 11 | test('two nodes, decreasing pattern', () => {

//                         at Object.toEqual(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 8: 28)

//                         ● two nodes, decreasing pattern

//                         expect(received).toEqual(expected) // deep equality

//                         -
//                         Expected - 1 +
//                             Received + 1

//                         Array[+undefined,
//                             2, -1,
//                         ]

//                         10 |
//                             11 | test('two nodes, decreasing pattern', () => { >
//                                 12 | expect(solve(2, [2, 1])).toEqual([2, 1]); |
//                                 ^
//                                 13 |
//                             });
//                         14 |
//                             15 | test('three nodes, all same label', () => {

//                                     at Object.toEqual(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 12: 28)

//                                     ● three nodes, all same label

//                                     TypeError: Cannot read properties of undefined(reading '0')

//                                     21 |
//                                         22 |
//                                         const group = positionGroups[label]; >
//                                     23 |
//                                         const startsAtLeft = group[0] === leftIndex; |
//                                     ^
//                                     24 |
//                                         const endsAtRight = group[group.length - 1] === rightIndex;
//                                     25 |
//                                         26 |
//                                         if (label % 2 === 1) {

//                                             at solve(solutions - descriptive / 40. js: 23: 35)
//                                             at Object.solve(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 16: 10)

//                                             ● pattern with - 1

//                                             expect(received).toEqual(expected) // deep equality

//                                             -
//                                             Expected - 2 +
//                                                 Received + 2

//                                             Array[-1, -2,
//                                                 3, +2, +1,
//                                             ]

//                                             18 |
//                                                 19 | test('pattern with -1', () => { >
//                                                     20 | expect(solve(3, [1, -1, 2])).toEqual([1, 2, 3]); |
//                                                     ^
//                                                     21 |
//                                                 });
//                                             22 |
//                                                 23 | test('pattern with multiple -1s', () => {

//                                                         at Object.toEqual(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 20: 32)

//                                                         ● pattern with multiple - 1 s

//                                                         expect(received).toEqual(expected) // deep equality

//                                                         -
//                                                         Expected - 3 +
//                                                             Received + 3

//                                                         Array[-1, +5,
//                                                             2, -3, +1, +undefined,
//                                                             4, -5,
//                                                         ]

//                                                         22 |
//                                                             23 | test('pattern with multiple -1s', () => { >
//                                                                 24 | expect(solve(5, [1, -1, 2, -1, 3])).toEqual([1, 2, 3, 4, 5]); |
//                                                                 ^
//                                                                 25 |
//                                                             });
//                                                         26 |
//                                                             27 | test('all different labels', () => {

//                                                                     at Object.toEqual(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 24: 39)

//                                                                     ● all different labels

//                                                                     expect(received).toEqual(expected) // deep equality

//                                                                     -
//                                                                     Expected - 2 +
//                                                                         Received + 2

//                                                                     Array[-4, +undefined,
//                                                                         3, -2,
//                                                                         1, +4,
//                                                                     ]

//                                                                     26 |
//                                                                         27 | test('all different labels', () => { >
//                                                                             28 | expect(solve(4, [4, 3, 2, 1])).toEqual([4, 3, 2, 1]); |
//                                                                             ^
//                                                                             29 |
//                                                                         });
//                                                                     30 |
//                                                                         31 | test('mix of positive and -1, -1 at beginning', () => {

//                                                                                 at Object.toEqual(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 28: 34)

//                                                                                 ● mix of positive and - 1, -1 at beginning

//                                                                                 TypeError: Cannot read properties of undefined(reading '0')

//                                                                                 21 |
//                                                                                     22 |
//                                                                                     const group = positionGroups[label]; >
//                                                                                 23 |
//                                                                                     const startsAtLeft = group[0] === leftIndex; |
//                                                                                 ^
//                                                                                 24 |
//                                                                                     const endsAtRight = group[group.length - 1] === rightIndex;
//                                                                                 25 |
//                                                                                     26 |
//                                                                                     if (label % 2 === 1) {

//                                                                                         at solve(solutions - descriptive / 40. js: 23: 35)
//                                                                                         at Object.solve(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 32: 10)

//                                                                                         ● negOneGroup at the end

//                                                                                         TypeError: Cannot read properties of undefined(reading '0')

//                                                                                         21 |
//                                                                                             22 |
//                                                                                             const group = positionGroups[label]; >
//                                                                                         23 |
//                                                                                             const startsAtLeft = group[0] === leftIndex; |
//                                                                                         ^
//                                                                                         24 |
//                                                                                             const endsAtRight = group[group.length - 1] === rightIndex;
//                                                                                         25 |
//                                                                                             26 |
//                                                                                             if (label % 2 === 1) {

//                                                                                                 at solve(solutions - descriptive / 40. js: 23: 35)
//                                                                                                 at Object.solve(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 36: 10)

//                                                                                                 ● pattern with label out of order

//                                                                                                 expect(received).toEqual(expected) // deep equality

//                                                                                                 -
//                                                                                                 Expected - 3 +
//                                                                                                     Received + 3

//                                                                                                 Array[-3, -1, -2, +undefined,
//                                                                                                     4, +1, +undefined,
//                                                                                                     5,
//                                                                                                 ]

//                                                                                                 38 |
//                                                                                                     39 | test('pattern with label out of order', () => { >
//                                                                                                         40 | expect(solve(5, [3, 1, 2, 3, 1])).toEqual([3, 1, 2, 4, 5]); |
//                                                                                                         ^
//                                                                                                         41 |
//                                                                                                     });
//                                                                                                 42 |
//                                                                                                     43 | test('larger input with labels', () => {

//                                                                                                             at Object.toEqual(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 40: 37)

//                                                                                                             ● larger input with labels

//                                                                                                             expect(received).toEqual(expected) // deep equality

//                                                                                                             -
//                                                                                                             Expected - 4 +
//                                                                                                                 Received + 4

//                                                                                                             Array[+6, +5,
//                                                                                                                 1,
//                                                                                                                 2, -3, -4, -5, -6, +undefined, +undefined,
//                                                                                                             ]

//                                                                                                             42 |
//                                                                                                                 43 | test('larger input with labels', () => { >
//                                                                                                                     44 | expect(solve(6, [1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3, 4, 5, 6]); |
//                                                                                                                     ^
//                                                                                                                     45 |
//                                                                                                                 });
//                                                                                                             46 |
//                                                                                                                 47 | test('negOneGroup only', () => {

//                                                                                                                         at Object.toEqual(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 44: 40)

//                                                                                                                         ● negOneGroup and unique positive labels

//                                                                                                                         TypeError: Cannot read properties of undefined(reading '0')

//                                                                                                                         21 |
//                                                                                                                             22 |
//                                                                                                                             const group = positionGroups[label]; >
//                                                                                                                         23 |
//                                                                                                                             const startsAtLeft = group[0] === leftIndex; |
//                                                                                                                         ^
//                                                                                                                         24 |
//                                                                                                                             const endsAtRight = group[group.length - 1] === rightIndex;
//                                                                                                                         25 |
//                                                                                                                             26 |
//                                                                                                                             if (label % 2 === 1) {

//                                                                                                                                 at solve(solutions - descriptive / 40. js: 23: 35)
//                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 52: 10)

//                                                                                                                                 ● multiple negOneGroups

//                                                                                                                                 TypeError: Cannot read properties of undefined(reading '0')

//                                                                                                                                 21 |
//                                                                                                                                     22 |
//                                                                                                                                     const group = positionGroups[label]; >
//                                                                                                                                 23 |
//                                                                                                                                     const startsAtLeft = group[0] === leftIndex; |
//                                                                                                                                 ^
//                                                                                                                                 24 |
//                                                                                                                                     const endsAtRight = group[group.length - 1] === rightIndex;
//                                                                                                                                 25 |
//                                                                                                                                     26 |
//                                                                                                                                     if (label % 2 === 1) {

//                                                                                                                                         at solve(solutions - descriptive / 40. js: 23: 35)
//                                                                                                                                         at Object.solve(tests - descriptive / tests - prompt2 / 40 _prompt2.test.js: 56: 10)