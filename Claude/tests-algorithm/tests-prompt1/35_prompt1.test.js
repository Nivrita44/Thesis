import { solve } from '../../../solutions-algorithm/35.js'

test('example case', () => {
  expect(solve(27n, 3n)).toBe(3n);
});

test('n equals k case', () => {
  expect(solve(5n, 5n)).toBe(1n);
});

test('large input case', () => {
  expect(solve(1000000000n, 2n)).toBe(14n);
});

test('minimal case n=1', () => {
  expect(solve(1n, 2n)).toBe(1n);
});

test('power of k case', () => {
  expect(solve(16n, 2n)).toBe(1n);
});

test('requires multiple operations of same power', () => {
  expect(solve(15n, 4n)).toBe(4n);
});

test('n less than k case', () => {
  expect(solve(3n, 5n)).toBe(3n);
});

test('consecutive powers needed', () => {
  expect(solve(12n, 2n)).toBe(2n);
});

test('requires mix of different powers', () => {
  expect(solve(63n, 3n)).toBe(4n);
});