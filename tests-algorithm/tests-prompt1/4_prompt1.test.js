import solve from '../../solutions-algorithm/4.js';

test('sample test 1', () => {
  expect(solve([2, [1, 2]])).toEqual([-1, 1]);
});

test('sample test 2', () => {
  expect(solve([3, [5, 7, 7]])).toEqual([-2, 0, 0]);
});

test('sample test 3', () => {
  expect(solve([5, [1, 2, 3, 4, 5]])).toEqual([-1, -2, -3, -4, 1]);
});

test('all equal elements', () => {
  expect(solve([4, [9, 9, 9, 9]])).toEqual([0, 0, 0, 0]);
});

test('two elements, descending', () => {
  expect(solve([2, [10, 8]])).toEqual([2, -2]);
});

test('two elements, ascending', () => {
  expect(solve([2, [3, 9]])).toEqual([-6, 6]);
});

test('mixed values', () => {
  expect(solve([6, [4, 1, 100, 2, 99, 3]])).toEqual([-96, -99, 1, -97, 1, -96]);
});

test('second max duplicate', () => {
  expect(solve([4, [3, 5, 5, 2]])).toEqual([-2, 0, 0, -3]);
});

test('max at the end', () => {
  expect(solve([4, [1, 2, 3, 6]])).toEqual([-5, -4, -3, 3]);
});

test('max at the start', () => {
  expect(solve([4, [10, 3, 4, 5]])).toEqual([6, -7, -6, -5]);
});