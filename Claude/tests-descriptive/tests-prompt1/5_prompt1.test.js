import { solve } from '../../solutions-descriptive/5.js'

test('basic case n=5', () => {
  expect(solve(5n)).toBe(4n);
});

test('single digit n=9', () => {
  expect(solve(9n)).toBe(4n);
});

test('large number n=999999999', () => {
  expect(solve(999999999n)).toBe(8n);
});

test('minimum n=1', () => {
  expect(solve(1n)).toBe(3n);
});

test('power of 10 n=1000000000', () => {
  expect(solve(1000000000n)).toBe(8n);
});

test('number requiring digit sum n=123', () => {
  expect(solve(123n)).toBe(6n);
});

test('prime number n=997', () => {
  expect(solve(997n)).toBe(6n);
});

test('number with many factors n=360', () => {
  expect(solve(360n)).toBe(6n);
});