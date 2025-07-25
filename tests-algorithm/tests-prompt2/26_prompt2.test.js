import { solve } from '../../solutions-algorithm/26.js';

test('typical cases', () => {
  expect(solve([
    [5, 3],
    [6, 1],
    [7, 4],
    [8, 8]
  ])).toEqual(["yes", "yes", "no", "yes"]);
});

test('edge and large number cases', () => {
  expect(solve([
    [10, 2],
    [3, 2],
    [1000000000000000000, 1]
  ])).toEqual(["yes", "no", "yes"]);
});

test('n and k are zero', () => {
  expect(solve([
    [0, 0]
  ])).toEqual(["yes"]);
});

test('k is zero, n is even/odd', () => {
  expect(solve([
    [4, 0],
    [3, 0]
  ])).toEqual(["yes", "no"]);
});

test('k>n, expecting "no"', () => {
  expect(solve([
    [5, 7],
    [1, 100]
  ])).toEqual(["no", "no"]);
});

test('k equals n for odd and even n', () => {
  expect(solve([
    [7, 7],
    [8, 8]
  ])).toEqual(["no", "yes"]);
});

test('n negative', () => {
  expect(solve([
    [-2, 1],
    [-4, 2]
  ])).toEqual(["no", "no"]);
});

test('k is negative', () => {
  expect(solve([
    [5, -1],
    [8, -2]
  ])).toEqual(["no", "no"]);
});

test('both n and k negative', () => {
  expect(solve([
    [-2, -3],
    [-100, -1000]
  ])).toEqual(["no", "no"]);
});

test('n is 1, k is 1', () => {
  expect(solve([
    [1, 1]
  ])).toEqual(["no"]);
});

test('multiple edge cases together', () => {
  expect(solve([
    [0, 1],
    [1, 0],
    [2, 2],
    [3, 3]
  ])).toEqual(["yes", "no", "yes", "no"]);
});