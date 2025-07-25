import { solve } from '../../solutions-algorithm/30.js';

test('typical cases', () => {
  expect(solve(4, [10, 4, 15, 9])).toEqual([
    "YES", "5 4 1",
    "NO",
    "YES", "8 5 2",
    "NO"
  ]);
  expect(solve(3, [3, 5, 6])).toEqual([
    "NO",
    "YES", "2 2 1",
    "YES", "2 3 1"
  ]);
});

test('all NO outputs', () => {
  expect(solve(2, [2, 3])).toEqual([
    "NO",
    "NO"
  ]);
});

test('edge: minimum allowed n', () => {
  expect(solve(1, [1])).toEqual(["NO"]);
  expect(solve(1, [2])).toEqual(["NO"]);
  expect(solve(1, [3])).toEqual(["NO"]);
});

test('large input', () => {
  expect(solve(1, [100])).toContain("YES");
  expect(solve(1, [100])).toHaveLength(2);
});

test('impossible when all split numbers will hit divisibility by 3', () => {
  expect(solve(1, [6])).toEqual(["YES", "2 3 1"]);
  expect(solve(1, [12])).toEqual(["YES", "8 3 1"]);
});

test('test where only one partition possible', () => {
  expect(solve(1, [5])).toEqual(["YES", "2 2 1"]);
  expect(solve(1, [7])).toEqual(["YES", "5 1 1"]);
});

test('empty input', () => {
  expect(solve(0, [])).toEqual([]);
});