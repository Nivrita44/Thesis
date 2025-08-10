import { solve } from '../../../solutions-algorithm/39.js'

test('example case n=6 has odd divisor 3', () => {
  expect(solve(6n)).toBe('YES');
});

test('example case n=4 has no odd divisors', () => {
  expect(solve(4n)).toBe('NO');
});

test('minimum input n=2', () => {
  expect(solve(2n)).toBe('NO');
});

test('large input near upper bound', () => {
  expect(solve(999999999999999n)).toBe('YES');
});

test('power of 2 has no odd divisors', () => {
  expect(solve(1024n)).toBe('NO');
});

test('odd number always has odd divisor', () => {
  expect(solve(15n)).toBe('YES');
});

test('product of odd and even numbers', () => {
  expect(solve(30n)).toBe('YES');
});

test('large power of 2', () => {
  expect(solve(2n ** 40n)).toBe('NO');
});