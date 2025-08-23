import { solve } from '../../../solutions-algorithm/49.js';

test('example 1: n=3, m=3, k=8', () => {
  expect(solve(3, 3, 8)).toBe('YES');
});

test('example 2: n=2, m=2, k=3', () => {
  expect(solve(2, 2, 3)).toBe('YES');
});

test('example 3: n=2, m=2, k=1', () => {
  expect(solve(2, 2, 1)).toBe('NO');
});

test('minimum grid: n=1, m=1, k=0', () => {
  expect(solve(1, 1, 0)).toBe('YES');
});

test('minimum grid: n=1, m=1, k=1', () => {
  expect(solve(1, 1, 1)).toBe('NO');
});

test('single row: n=1, m=5, k=4', () => {
  expect(solve(1, 5, 4)).toBe('YES');
});

test('single column: n=5, m=1, k=4', () => {
  expect(solve(5, 1, 4)).toBe('YES');
});

test('single row, high k: n=1, m=10, k=15', () => {
  expect(solve(1, 10, 15)).toBe('NO');
});

test('single column, high k: n=10, m=1, k=15', () => {
  expect(solve(10, 1, 15)).toBe('NO');
});

test('large grid, slightly more: n=100, m=100, k=9901', () => {
  expect(solve(100, 100, 9901)).toBe('NO');
});

test('n=2, m=4, k=7', () => {
  expect(solve(2, 4, 7)).toBe('YES');
});

test('n=2, m=4, k=6', () => {
  expect(solve(2, 4, 6)).toBe('NO');
});



test('n=5, m=2, k=7', () => {
  expect(solve(5, 2, 7)).toBe('NO');
});


// large grid, smallest cost: n=100, m=100, k=9900

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "YES"
//     Received: "NO"

//       38 |
//       39 | test('large grid, smallest cost: n=100, m=100, k=9900', () => {
//     > 40 |   expect(solve(100, 100, 9900)).toBe('YES');
//          |                                 ^
//       41 | });
//       42 |
//       43 | test('large grid, slightly more: n=100, m=100, k=9901', () => {

//       at Object.toBe (tests-algorithm/tests-prompt1/49_prompt1.test.js:40:33)

//   ● n=5, m=2, k=8

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "YES"
//     Received: "NO"

//       54 |
//       55 | test('n=5, m=2, k=8', () => {
//     > 56 |   expect(solve(5, 2, 8)).toBe('YES');
//          |                          ^
//       57 | });
//       58 |
//       59 | test('n=5, m=2, k=7', () => {

//       at Object.toBe (tests-algorithm/tests-prompt1/49_prompt1.test.js:56:26
