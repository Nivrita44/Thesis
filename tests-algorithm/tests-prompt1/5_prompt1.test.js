import solve from '../../solutions-algorithm/5.js';

test('all elements unique', () => {
  expect(solve(4, [1, 2, 3, 4])).toBe(0);
});

test('all elements same', () => {
  expect(solve(3, [2, 2, 2])).toBe(2);
});

test('example with duplicate in middle', () => {
  expect(solve(4, [3, 1, 4, 3])).toBe(1);
});

test('duplicate at the end', () => {
  expect(solve(5, [1, 2, 3, 4, 1])).toBe(1);
});

test('multiple duplicates', () => {
  expect(solve(6, [1, 2, 2, 3, 4, 3])).toBe(3);
});

test('remove everything except last element', () => {
  expect(solve(5, [1, 1, 1, 1, 2])).toBe(4);
});

test('single element', () => {
  expect(solve(1, [1])).toBe(0);
});

test('last two same, long prefix', () => {
  expect(solve(6, [1, 2, 3, 4, 5, 5])).toBe(5);
});

test('first and last same, all unique in middle', () => {
  expect(solve(7, [2, 3, 4, 5, 6, 7, 2])).toBe(1);
});

test('complex sequence', () => {
  expect(solve(10, [1,2,3,4,5,6,1,2,3,4])).toBe(6);
});