import solve from '../../solutions-descriptive/22.js';

test('sample 1: one enemy, one hit', () => {
  expect(solve([
    {
      n: 1, m: 3, k: 1,
      h: [2],
      x: [5]
    }
  ])).toEqual([1]);
});

test('sample 2: two enemies, need one hit with both in range', () => {
  expect(solve([
    {
      n: 2, m: 3, k: 2,
      h: [3, 2],
      x: [5, 6]
    }
  ])).toEqual([1]);
});

test('sample 3: two enemies, but k=2, need two hits since can kill only 1 at once', () => {
  expect(solve([
    {
      n: 2, m: 1, k: 2,
      h: [2, 1],
      x: [1, 100]
    }
  ])).toEqual([-1]);
});

test('sample 4: three enemies, all in range with one hit', () => {
  expect(solve([
    {
      n: 3, m: 5, k: 3,
      h: [2, 3, 4],
      x: [7, 8, 9]
    }
  ])).toEqual([1]);
});

test('sample 5: enemies far apart, impossible to get 2 kills', () => {
  expect(solve([
    {
      n: 4, m: 2, k: 2,
      h: [1, 3, 1, 1],
      x: [1, 100, 200, 300]
    }
  ])).toEqual([-1]);
});

test('sample 6: two hits needed for all', () => {
  expect(solve([
    {
      n: 3, m: 3, k: 2,
      h: [5, 6, 7],
      x: [2, 3, 4]
    }
  ])).toEqual([2]);
});

test('sample 7: large m, all covered', () => {
  expect(solve([
    {
      n: 5, m: 1000, k: 5,
      h: [1, 2, 3, 4, 5],
      x: [10, 20, 30, 40, 50]
    }
  ])).toEqual([1]);
});

test('edge: n=1, k=1, enemy needs a lot of attacks', () => {
  expect(solve([
    {
      n: 1, m: 1, k: 1,
      h: [1000000000],
      x: [999999999]
    }
  ])).toEqual([1000000000]);
});

test('edge: impossible with only one enemy, k=2', () => {
  expect(solve([
    {
      n: 1, m: 1, k: 2,
      h: [1],
      x: [1]
    }
  ])).toEqual([-1]);
});

test('multiple test cases mixed', () => {
  expect(solve([
    {
      n: 2, m: 3, k: 2,
      h: [3, 6],
      x: [5, 10]
    },
    {
      n: 4, m: 2, k: 2,
      h: [2, 2, 2, 2],
      x: [1, 2, 3, 4]
    },
    {
      n: 3, m: 1, k: 2,
      h: [1, 1, 1],
      x: [2, 5, 9]
    }
  ])).toEqual([3, 2, -1]);
});


// sample 1: one enemy, one hit

//     TypeError: solve is not a function

//       2 |
//       3 | test('sample 1: one enemy, one hit', () => {
//     > 4 |   expect(solve([
//         |          ^
//       5 |     {
//       6 |       n: 1, m: 3, k: 1,
//       7 |       h: [2],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:4:10)

//   ● sample 2: two enemies, need one hit with both in range

//     TypeError: solve is not a function

//       12 |
//       13 | test('sample 2: two enemies, need one hit with both in range', () => {
//     > 14 |   expect(solve([
//          |          ^
//       15 |     {
//       16 |       n: 2, m: 3, k: 2,
//       17 |       h: [3, 2],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:14:10)

//   ● sample 3: two enemies, but k=2, need two hits since can kill only 1 at once

//     TypeError: solve is not a function

//       22 |
//       23 | test('sample 3: two enemies, but k=2, need two hits since can kill only 1 at once', () => {
//     > 24 |   expect(solve([
//          |          ^
//       25 |     {
//       26 |       n: 2, m: 1, k: 2,
//       27 |       h: [2, 1],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:24:10)

//   ● sample 4: three enemies, all in range with one hit

//     TypeError: solve is not a function

//       32 |
//       33 | test('sample 4: three enemies, all in range with one hit', () => {
//     > 34 |   expect(solve([
//          |          ^
//       35 |     {
//       36 |       n: 3, m: 5, k: 3,
//       37 |       h: [2, 3, 4],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:34:10)

//   ● sample 5: enemies far apart, impossible to get 2 kills

//     TypeError: solve is not a function

//       42 |
//       43 | test('sample 5: enemies far apart, impossible to get 2 kills', () => {
//     > 44 |   expect(solve([
//          |          ^
//       45 |     {
//       46 |       n: 4, m: 2, k: 2,
//       47 |       h: [1, 3, 1, 1],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:44:10)

//   ● sample 6: two hits needed for all

//     TypeError: solve is not a function

//       52 |
//       53 | test('sample 6: two hits needed for all', () => {
//     > 54 |   expect(solve([
//          |          ^
//       55 |     {
//       56 |       n: 3, m: 3, k: 2,
//       57 |       h: [5, 6, 7],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:54:10)

//   ● sample 7: large m, all covered

//     TypeError: solve is not a function

//       62 |
//       63 | test('sample 7: large m, all covered', () => {
//     > 64 |   expect(solve([
//          |          ^
//       65 |     {
//       66 |       n: 5, m: 1000, k: 5,
//       67 |       h: [1, 2, 3, 4, 5],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:64:10)

//   ● edge: n=1, k=1, enemy needs a lot of attacks

//     TypeError: solve is not a function

//       72 |
//       73 | test('edge: n=1, k=1, enemy needs a lot of attacks', () => {
//     > 74 |   expect(solve([
//          |          ^
//       75 |     {
//       76 |       n: 1, m: 1, k: 1,
//       77 |       h: [1000000000],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:74:10)

//   ● edge: impossible with only one enemy, k=2

//     TypeError: solve is not a function

//       82 |
//       83 | test('edge: impossible with only one enemy, k=2', () => {
//     > 84 |   expect(solve([
//          |          ^
//       85 |     {
//       86 |       n: 1, m: 1, k: 2,
//       87 |       h: [1],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:84:10)

//   ● multiple test cases mixed

//     TypeError: solve is not a function

//       92 |
//       93 | test('multiple test cases mixed', () => {
//     > 94 |   expect(solve([
//          |          ^
//       95 |     {
//       96 |       n: 2, m: 3, k: 2,
//       97 |       h: [3, 6],

//       at Object.solve (tests-descriptive/tests-prompt1/22_prompt1.test.js:94:10)