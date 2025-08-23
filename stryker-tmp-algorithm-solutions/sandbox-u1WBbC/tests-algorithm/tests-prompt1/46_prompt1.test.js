// @ts-nocheck
import {solve} from '../../solutions-algorithm/46.js';

test('single employee', () => {
  expect(solve(1, [-1])).toBe(1);
});

test('chain of employees', () => {
  expect(solve(3, [-1, 1, 2])).toBe(3);
});

test('two independent hierarchies', () => {
  expect(solve(4, [ -1, 1, -1, 3 ])).toBe(2);
});

test('all direct subordinates of one', () => {
  expect(solve(4, [ -1, 1, 1, 1 ])).toBe(2);
});

test('star shape', () => {
  expect(solve(5, [-1, 1, 1, 1, 1])).toBe(2);
});

test('shallow hierarchy', () => {
  expect(solve(6, [-1, 1, 1, 2, 2, 3])).toBe(4);
});

test('forest three roots', () => {
  expect(solve(6, [-1, -1, -1, 1, 2, 3])).toBe(2);
});

test('deep and shallow trees', () => {
  expect(solve(7, [ -1, 1, 2, -1, 4, 5, -1 ])).toBe(3);
});

test('manager is not first', () => {
  expect(solve(4, [2, -1, 1, 3])).toBe(4);
});

test('max depth chain', () => {
  expect(solve(5, [-1, 1, 2, 3, 4])).toBe(5);
});

test('all are roots', () => {
  expect(solve(3, [-1, -1, -1])).toBe(1);
});


// shallow hierarchy

// expect(received).toBe(expected) // Object.is equality

// Expected: 4
// Received: 3

//   22 |
//   23 | test('shallow hierarchy', () => {
// > 24 |   expect(solve(6, [-1, 1, 1, 2, 2, 3])).toBe(4);
//      |                                         ^
//   25 | });
//   26 |
//   27 | test('forest three roots', () => {

//   at Object.toBe (tests-algorithm/tests-prompt1/46_prompt1.test.js:24:41)
