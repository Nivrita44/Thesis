import { solve } from '../../solutions-descriptive/27.js';

test('single bulb at origin', () => {
  expect(solve({
    n: 1,
    bulbs: [[0, 0]]
  })).toBe('0 0');
});

test('single bulb at (1, 2)', () => {
  expect(solve({
    n: 1,
    bulbs: [[1, 2]]
  })).toBe('1 2');
});

test('bulbs at (0,0), (1,0), (0,1), (1,1)', () => {
  expect(solve({
    n: 4,
    bulbs: [[0, 0], [1, 0], [0, 1], [1, 1]]
  })).toBe('0 0');
});

test('bulbs forming a square offset', () => {
  expect(solve({
    n: 4,
    bulbs: [[10, 5], [11, 5], [10, 6], [11, 6]]
  })).toBe('10 5');
});

test('bulbs at (-3,-4)', () => {
  expect(solve({
    n: 1,
    bulbs: [[-3, -4]]
  })).toBe('-3 -4');
});

test('bulbs at (2,3), (2,4), (3,2), (3,3)', () => {
  expect(solve({
    n: 4,
    bulbs: [[2, 3], [2, 4], [3, 2], [3, 3]]
  })).toBe('2 3');
});

test('mixed bulbs, possible corner', () => {
  expect(solve({
    n: 5,
    bulbs: [[8, 1], [3, 7], [0, 0], [1000,999], [19,27]]
  }).split(' ').length).toBe(2);
});

test('large values', () => {
  expect(solve({
    n: 1,
    bulbs: [[1e8, -1e8]]
  })).toBe('100000000 -100000000');
});

test('more random bulbs on', () => {
  expect(solve({
    n: 3,
    bulbs: [[9,9], [2,2], [-3,5]]
  }).split(' ').length).toBe(2);
});

test('test alternating pattern', () => {
  expect(solve({
    n: 2,
    bulbs: [[0, 0], [1, 1]]
  }).split(' ').length).toBe(2);
});


// single bulb at origin

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "0 0"
//     Received: [undefined, undefined]

//        5 |     n: 1,
//        6 |     bulbs: [[0, 0]]
//     >  7 |   })).toBe('0 0');
//          |       ^
//        8 | });
//        9 |
//       10 | test('single bulb at (1, 2)', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/27_prompt1.test.js:7:7)

//   ● single bulb at (1, 2)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "1 2"
//     Received: [undefined, undefined]

//       12 |     n: 1,
//       13 |     bulbs: [[1, 2]]
//     > 14 |   })).toBe('1 2');
//          |       ^
//       15 | });
//       16 |
//       17 | test('bulbs at (0,0), (1,0), (0,1), (1,1)', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/27_prompt1.test.js:14:7)

//   ● bulbs at (0,0), (1,0), (0,1), (1,1)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "0 0"
//     Received: [undefined, undefined]

//       19 |     n: 4,
//       20 |     bulbs: [[0, 0], [1, 0], [0, 1], [1, 1]]
//     > 21 |   })).toBe('0 0');
//          |       ^
//       22 | });
//       23 |
//       24 | test('bulbs forming a square offset', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/27_prompt1.test.js:21:7)

//   ● bulbs forming a square offset

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "10 5"
//     Received: [undefined, undefined]

//       26 |     n: 4,
//       27 |     bulbs: [[10, 5], [11, 5], [10, 6], [11, 6]]
//     > 28 |   })).toBe('10 5');
//          |       ^
//       29 | });
//       30 |
//       31 | test('bulbs at (-3,-4)', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/27_prompt1.test.js:28:7)

//   ● bulbs at (-3,-4)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "-3 -4"
//     Received: [undefined, undefined]

//       33 |     n: 1,
//       34 |     bulbs: [[-3, -4]]
//     > 35 |   })).toBe('-3 -4');
//          |       ^
//       36 | });
//       37 |
//       38 | test('bulbs at (2,3), (2,4), (3,2), (3,3)', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/27_prompt1.test.js:35:7)

//   ● bulbs at (2,3), (2,4), (3,2), (3,3)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "2 3"
//     Received: [undefined, undefined]

//       40 |     n: 4,
//       41 |     bulbs: [[2, 3], [2, 4], [3, 2], [3, 3]]
//     > 42 |   })).toBe('2 3');
//          |       ^
//       43 | });
//       44 |
//       45 | test('mixed bulbs, possible corner', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/27_prompt1.test.js:42:7)

//   ● mixed bulbs, possible corner

//     TypeError: solve(...).split is not a function

//       47 |     n: 5,
//       48 |     bulbs: [[8, 1], [3, 7], [0, 0], [1000,999], [19,27]]
//     > 49 |   }).split(' ').length).toBe(2);
//          |      ^
//       50 | });
//       51 |
//       52 | test('large values', () => {

//       at Object.split (tests-descriptive/tests-prompt1/27_prompt1.test.js:49:6)

//   ● large values

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "100000000 -100000000"
//     Received: [undefined, undefined]

//       54 |     n: 1,
//       55 |     bulbs: [[1e8, -1e8]]
//     > 56 |   })).toBe('100000000 -100000000');
//          |       ^
//       57 | });
//       58 |
//       59 | test('more random bulbs on', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/27_prompt1.test.js:56:7)

//   ● more random bulbs on

//     TypeError: solve(...).split is not a function

//       61 |     n: 3,
//       62 |     bulbs: [[9,9], [2,2], [-3,5]]
//     > 63 |   }).split(' ').length).toBe(2);
//          |      ^
//       64 | });
//       65 |
//       66 | test('test alternating pattern', () => {

//       at Object.split (tests-descriptive/tests-prompt1/27_prompt1.test.js:63:6)

//   ● test alternating pattern

//     TypeError: solve(...).split is not a function

//       68 |     n: 2,
//       69 |     bulbs: [[0, 0], [1, 1]]
//     > 70 |   }).split(' ').length).toBe(2);
//          |      ^
//       71 | });

//       at Object.split (tests-descriptive/tests-prompt1/27_prompt1.test.js:70:6)
