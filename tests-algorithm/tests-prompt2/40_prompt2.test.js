import { solve } from '../../solutions-algorithm/40.js';

test('solve typical case: (2, 3) => 6', () => {
  expect(solve(2, 3)).toBe(6);
});

test('solve edge: (1, 2) => 4', () => {
  expect(solve(1, 2)).toBe(4);
});

test('solve typical: (3, 11) => 33', () => {
  expect(solve(3, 11)).toBe(33);
});

test('solve edge single-unit a: (1, 5) => 25', () => {
  expect(solve(1, 5)).toBe(25);
});

test('solve with common factor: (5, 10) => 20', () => {
  expect(solve(5, 10)).toBe(20);
});

test('solve both even numbers: (4, 6) => 12', () => {
  expect(solve(4, 6)).toBe(12);
});

test('solve multiple of each other: (3, 9) => 27', () => {
  expect(solve(3, 9)).toBe(27);
});

test('solve large inputs: (250000000, 500000000) => 1000000000', () => {
  expect(solve(250000000, 500000000)).toBe(1000000000);
});

test('solve equal inputs: (7, 7) => 49', () => {
  expect(solve(7, 7)).toBe(49);
});

test('solve minimal input: (1, 1) => 1', () => {
  expect(solve(1, 1)).toBe(1);
});

test('solve maximal difference: (1, 1000000) => 1000000000000', () => {
  expect(solve(1, 1000000)).toBe(1000000000000);
});

test('solve (0, 3): expect 0 (per implementation behavior)', () => {
  expect(solve(0, 3)).toBe(0);
});

test('solve (3, 0): expect 0 (per implementation behavior)', () => {
  expect(solve(3, 0)).toBe(0);
});

test('solve (0, 0): expect 0', () => {
  expect(solve(0, 0)).toBe(0);
});


// solve equal inputs: (7, 7) => 49

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 49
//     Received: 7

//       34 |
//       35 | test('solve equal inputs: (7, 7) => 49', () => {
//     > 36 |   expect(solve(7, 7)).toBe(49);
//          |                       ^
//       37 | });
//       38 |
//       39 | test('solve minimal input: (1, 1) => 1', () => {

//       at Object.toBe (tests-algorithm/tests-prompt2/40_prompt2.test.js:36:23)

//   ● solve (0, 0): expect 0

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 0
//     Received: NaN

//       54 |
//       55 | test('solve (0, 0): expect 0', () => {
//     > 56 |   expect(solve(0, 0)).toBe(0);
//          |                       ^
//       57 | });

//       at Object.toBe (tests-algorithm/tests-prompt2/40_prompt2.test.js:56:23)