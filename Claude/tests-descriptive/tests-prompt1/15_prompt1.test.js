import { solve } from '../../solutions-descriptive/15.js'

test('example case', () => {
  expect(solve(4n, 2n, 3n, [1n, 3n, 2n])).toEqual([3n, 4n, 3n]);
});

test('minimal case n=2', () => {
  expect(solve(2n, 1n, 1n, [2n])).toEqual([2n]);
});

test('large n case', () => {
  expect(solve(1000000000n, 500000000n, 2n, [1n, 2n])).toEqual([2n, 3n]);
});

test('joker at start position', () => {
  expect(solve(5n, 1n, 3n, [2n, 3n, 4n])).toEqual([2n, 3n, 4n]);
});

test('joker at end position', () => {
  expect(solve(5n, 5n, 3n, [1n, 2n, 3n])).toEqual([2n, 3n, 4n]);
});

test('all positions affect joker', () => {
  expect(solve(3n, 2n, 3n, [1n, 2n, 3n])).toEqual([2n, 2n, 2n]);
});

test('no positions affect joker', () => {
  expect(solve(5n, 3n, 2n, [1n, 5n])).toEqual([1n, 1n]);
});

test('alternating positions', () => {
  expect(solve(6n, 4n, 4n, [1n, 3n, 5n, 2n])).toEqual([2n, 3n, 3n, 4n]);
});