import { solve } from '../../../solutions-algorithm/34.js'

test('example with x=8', () => {
  expect(solve(8n)).toBe(6n);
});

test('minimal input x=2', () => {
  expect(solve(2n)).toBe(1n);
});

test('prime number x=17', () => {
  expect(solve(17n)).toBe(16n);
});

test('large composite x=1000', () => {
  expect(solve(1000n)).toBe(999n);
});

test('power of 2 x=16', () => {
  expect(solve(16n)).toBe(15n);
});

test('medium composite x=24', () => {
  expect(solve(24n)).toBe(18n);
});

test('perfect square x=25', () => {
  expect(solve(25n)).toBe(24n);
});

test('edge case x=999', () => {
  expect(solve(999n)).toBe(998n);
});