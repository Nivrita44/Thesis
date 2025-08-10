import { solve } from '../../../solutions-algorithm/32.js'

test('example case from description', () => {
  expect(solve(3, [1,2,3], [2,3,1], [0,3,0])).toBe(2n);
});

test('minimal case n=1', () => {
  expect(solve(1, [1], [1], [1])).toBe(1n);
});

test('edge case with all positions fixed', () => {
  expect(solve(4, [1,2,3,4], [4,3,2,1], [1,2,3,4])).toBe(1n);
});

test('large input case', () => {
  expect(solve(5, [1,2,3,4,5], [5,4,3,2,1], [0,0,3,0,0])).toBe(8n);
});

test('case with only one unknown position', () => {
  expect(solve(3, [3,1,2], [2,3,1], [3,0,2])).toBe(1n);
});

test('case with alternating fixed positions', () => {
  expect(solve(4, [1,2,3,4], [2,1,4,3], [0,1,0,3])).toBe(2n);
});

test('case with single fixed position at start', () => {
  expect(solve(3, [2,1,3], [1,3,2], [2,0,0])).toBe(2n);
});

test('case with multiple valid possibilities', () => {
  expect(solve(4, [4,3,2,1], [1,2,3,4], [0,0,0,1])).toBe(6n);
});