import {solve} from '../../solutions-descriptive/25.js';

test('n=1, k=1', () => {
  expect(solve(1, 1)).toEqual({
    result: 'YES',
    permutations: [[1]]
  });
});

test('n=2, k=1', () => {
  expect(solve(2, 1)).toEqual({
    result: 'YES',
    permutations: [[1, 2]]
  });
});

test('n=2, k=2', () => {
  expect(solve(2, 2)).toEqual({
    result: 'NO'
  });
});

test('n=3, k=1', () => {
  expect(solve(3, 1)).toEqual({
    result: 'YES',
    permutations: [[1,2,3]]
  });
});

test('n=3, k=2', () => {
  expect(solve(3, 2)).toEqual({
    result: 'NO'
  });
});

test('n=4, k=4', () => {
  expect(solve(4, 4)).toEqual({
    result: 'NO'
  });
});

test('n=5, k=1', () => {
  expect(solve(5, 1)).toEqual({
    result: 'YES',
    permutations: [[1,2,3,4,5]]
  });
});

test('n=4, k=1', () => {
  expect(solve(4, 1)).toEqual({
    result: 'YES',
    permutations: [[1,2,3,4]]
  });
});

test('n=1, k=5', () => {
  expect(solve(1, 5)).toEqual({
    result: 'YES',
    permutations: [[1],[1],[1],[1],[1]]
  });
});

test('n=2, k=3', () => {
  expect(solve(2, 3)).toEqual({
    result: 'NO'
  });
});

test('n=100000, k=1', () => {
  const a = Array.from({length: 100000}, (_, i) => i+1);
  expect(solve(100000, 1)).toEqual({
    result: 'YES',
    permutations: [a]
  });
});

test('n=2, k=100000', () => {
  expect(solve(2, 100000)).toEqual({
    result: 'NO'
  });
});


// n=1, k=1

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"permutations": [[1]], "result": "YES"}
//     Received: [["1"]]

//       2 |
//       3 | test('n=1, k=1', () => {
//     > 4 |   expect(solve(1, 1)).toEqual({
//         |                       ^
//       5 |     result: 'YES',
//       6 |     permutations: [[1]]
//       7 |   });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:4:23)

//   ● n=2, k=1

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"permutations": [[1, 2]], "result": "YES"}
//     Received: null

//        9 |
//       10 | test('n=2, k=1', () => {
//     > 11 |   expect(solve(2, 1)).toEqual({
//          |                       ^
//       12 |     result: 'YES',
//       13 |     permutations: [[1, 2]]
//       14 |   });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:11:23)

//   ● n=2, k=2

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"result": "NO"}
//     Received: [["1 2", "2 1"]]

//       16 |
//       17 | test('n=2, k=2', () => {
//     > 18 |   expect(solve(2, 2)).toEqual({
//          |                       ^
//       19 |     result: 'NO'
//       20 |   });
//       21 | });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:18:23)

//   ● n=3, k=1

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"permutations": [[1, 2, 3]], "result": "YES"}
//     Received: null

//       22 |
//       23 | test('n=3, k=1', () => {
//     > 24 |   expect(solve(3, 1)).toEqual({
//          |                       ^
//       25 |     result: 'YES',
//       26 |     permutations: [[1,2,3]]
//       27 |   });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:24:23)

//   ● n=3, k=2

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"result": "NO"}
//     Received: ["1 2 3", "3 2 1"]

//       29 |
//       30 | test('n=3, k=2', () => {
//     > 31 |   expect(solve(3, 2)).toEqual({
//          |                       ^
//       32 |     result: 'NO'
//       33 |   });
//       34 | });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:31:23)

//   ● n=4, k=4

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"result": "NO"}
//     Received: ["1 2 3 4", "4 3 2 1", "1 2 4 3", "4 3 1 2"]

//       35 |
//       36 | test('n=4, k=4', () => {
//     > 37 |   expect(solve(4, 4)).toEqual({
//          |                       ^
//       38 |     result: 'NO'
//       39 |   });
//       40 | });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:37:23)

//   ● n=5, k=1

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"permutations": [[1, 2, 3, 4, 5]], "result": "YES"}
//     Received: null

//       41 |
//       42 | test('n=5, k=1', () => {
//     > 43 |   expect(solve(5, 1)).toEqual({
//          |                       ^
//       44 |     result: 'YES',
//       45 |     permutations: [[1,2,3,4,5]]
//       46 |   });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:43:23)

//   ● n=4, k=1

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"permutations": [[1, 2, 3, 4]], "result": "YES"}
//     Received: null

//       48 |
//       49 | test('n=4, k=1', () => {
//     > 50 |   expect(solve(4, 1)).toEqual({
//          |                       ^
//       51 |     result: 'YES',
//       52 |     permutations: [[1,2,3,4]]
//       53 |   });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:50:23)

//   ● n=1, k=5

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"permutations": [[1], [1], [1], [1], [1]], "result": "YES"}
//     Received: null

//       55 |
//       56 | test('n=1, k=5', () => {
//     > 57 |   expect(solve(1, 5)).toEqual({
//          |                       ^
//       58 |     result: 'YES',
//       59 |     permutations: [[1],[1],[1],[1],[1]]
//       60 |   });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:57:23)

//   ● n=2, k=3

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"result": "NO"}
//     Received: null

//       62 |
//       63 | test('n=2, k=3', () => {
//     > 64 |   expect(solve(2, 3)).toEqual({
//          |                       ^
//       65 |     result: 'NO'
//       66 |   });
//       67 | });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:64:23)

//   ● n=100000, k=1

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"permutations": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, …]], "result": "YES"}
//     Received: null

//       69 | test('n=100000, k=1', () => {
//       70 |   const a = Array.from({length: 100000}, (_, i) => i+1);
//     > 71 |   expect(solve(100000, 1)).toEqual({
//          |                            ^
//       72 |     result: 'YES',
//       73 |     permutations: [a]
//       74 |   });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:71:28)

//   ● n=2, k=100000

//     expect(received).toEqual(expected) // deep equality

//     Expected: {"result": "NO"}
//     Received: null

//       76 |
//       77 | test('n=2, k=100000', () => {
//     > 78 |   expect(solve(2, 100000)).toEqual({
//          |                            ^
//       79 |     result: 'NO'
//       80 |   });
//       81 | });

//       at Object.toEqual (tests-descriptive/tests-prompt1/25_prompt1.test.js:78:28)