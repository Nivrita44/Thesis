import solve from '../../solutions-algorithm/43.js';

test('Example 1: n=3, permutation [2,1,0]', () => {
  expect(solve(3, [2, 1, 0])).toEqual([1, 2]);
});

test('Already sorted: n=4, permutation [0,1,2,3]', () => {
  expect(solve(4, [0, 1, 2, 3])).toEqual([0, 6]);
});

test('n=2, reversed permutation [1,0]', () => {
  expect(solve(2, [1, 0])).toEqual([0, 1]);
});

test('n=5, permutation [4,3,2,1,0]', () => {
  expect(solve(5, [4, 3, 2, 1, 0])).toEqual([6, 2]);
});

test('n=4, permutation [3,2,1,0]', () => {
  expect(solve(4, [3, 2, 1, 0])).toEqual([2, 2]);
});

test('n=3, permutation [1,2,0]', () => {
  expect(solve(3, [1, 2, 0])).toEqual([1, 2]);
});

test('n=5, permutation [0,4,1,3,2]', () => {
  expect(solve(5, [0, 4, 1, 3, 2])).toEqual([2, 2]);
});

test('n=2, sorted permutation [0,1]', () => {
  expect(solve(2, [0, 1])).toEqual([0, 1]);
});