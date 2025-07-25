import solve from '../../solutions-algorithm/3.js';

test('single element array', () => {
  expect(solve([5])).toBe('YES');
});

test('array with equal elements', () => {
  expect(solve([3, 3, 3, 3])).toBe('YES');
});

test('array with all elements consecutive', () => {
  expect(solve([1, 2, 3])).toBe('YES');
});

test('array with all elements not more than 1 apart', () => {
  expect(solve([4, 5, 5, 4, 5])).toBe('YES');
});

test('array with a larger gap', () => {
  expect(solve([1, 2, 4])).toBe('NO');
});

test('two elements with difference 1', () => {
  expect(solve([6, 7])).toBe('YES');
});

test('two elements with difference greater than 1', () => {
  expect(solve([8, 10])).toBe('NO');
});

test('mixed elements, difference greater than 1 exists', () => {
  expect(solve([1, 2, 2, 1, 5])).toBe('NO');
});

test('array with maximum allowed numbers and valid', () => {
  const arr = Array(50).fill(99).map((x, i) => x - (i % 2));
  expect(solve(arr)).toBe('YES');
});

test('array with maximum allowed numbers and invalid', () => {
  const arr = Array(50).fill(100);
  arr[0] = 1;
  expect(solve(arr)).toBe('NO');
});