import { solve } from '../../../solutions-algorithm/16.js'

test('example case n=6', () => {
  expect(solve(6n)).toEqual([3n, 2n, 2n]);
});

test('minimum input n=2', () => {
  expect(solve(2n)).toEqual([2n]);
});

test('minimum composite n=4', () => {
  expect(solve(4n)).toEqual([2n, 2n]);
});

test('large prime n=97', () => {
  expect(solve(97n)).toEqual([97n]);
});

test('large composite n=99999', () => {
  const result = solve(99999n);
  const sum = result.reduce((a, b) => a + b, 0n);
  expect(sum).toBe(99999n);
  expect(result.every(x => x === 2n || x === 3n)).toBe(true);
});

test('number requiring mix of 2s and 3s n=11', () => {
  const result = solve(11n);
  const sum = result.reduce((a, b) => a + b, 0n);
  expect(sum).toBe(11n);
  expect(result.length).toBe(5);
});

test('edge case n=100000', () => {
  const result = solve(100000n);
  const sum = result.reduce((a, b) => a + b, 0n);
  expect(sum).toBe(100000n);
  expect(result.every(x => x === 2n || x === 3n)).toBe(true);
});

test('typical case n=15', () => {
  const result = solve(15n);
  const sum = result.reduce((a, b) => a + b, 0n);
  expect(sum).toBe(15n);
  expect(result.length).toBe(7);
});