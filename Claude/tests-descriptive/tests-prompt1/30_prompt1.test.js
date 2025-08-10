import { solve } from '../../../solutions-descriptive/30.js'

test('example case', () => {
  expect(solve(3, [2, 3, 1])).toBe(3n);
});

test('minimal case with 2 spiders', () => {
  expect(solve(2, [2, 1])).toBe(2n);
});

test('large circular exchange', () => {
  expect(solve(5, [2, 3, 4, 5, 1])).toBe(6n);
});

test('all spiders give to one spider', () => {
  expect(solve(4, [2, 2, 2, 2])).toBe(2n);
});

test('alternating pairs exchange', () => {
  expect(solve(4, [2, 1, 4, 3])).toBe(2n);
});

test('complex exchange pattern', () => {
  expect(solve(6, [2, 3, 1, 5, 6, 4])).toBe(4n);
});

test('long chain with single loop', () => {
  expect(solve(7, [2, 3, 4, 5, 6, 7, 1])).toBe(8n);
});

test('multiple small cycles', () => {
  expect(solve(6, [2, 1, 4, 3, 6, 5])).toBe(2n);
});
