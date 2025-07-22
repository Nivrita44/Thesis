import { solve } from '../../solutions-descriptive/4.js';

test('typical case: [1,2,3]', () => {
  expect(solve([1,2,3])).toBe(6);
});

test('typical case: [1,3,1,5,8]', () => {
  expect(solve([1,3,1,5,8])).toBe(167);
});

test('edge case: array of length 0', () => {
  expect(solve([])).toBe(undefined);
});

test('edge case: array of length 1', () => {
  expect(solve([7])).toBe(0);
});

test('edge case: array of length 2', () => {
  expect(solve([8,9])).toBe(0);
});

test('all ones: [1,1,1,1]', () => {
  expect(solve([1,1,1,1])).toBe(3);
});

test('with zeros: [0,2,0]', () => {
  expect(solve([0,2,0])).toBe(0);
});

test('with large numbers: [7,9,1,2]', () => {
  expect(solve([7,9,1,2])).toBe(135);
});

test('descending array: [5,4,3,2,1]', () => {
  expect(solve([5,4,3,2,1])).toBe(110);
});

test('alternating values: [1,100,1]', () => {
  expect(solve([1,100,1])).toBe(100);
});

test('negative numbers: [-2,1,-3,4]', () => {
  expect(solve([-2,1,-3,4])).toBe(8);
});

test('edge 3 elements', () => {
  expect(solve([2,1,2])).toBe(4);
});