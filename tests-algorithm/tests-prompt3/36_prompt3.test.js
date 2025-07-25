import { solve } from '../../solutions-algorithm/36.js';

test('n=2 smallest case', () => {
  const n = 2;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('n=3', () => {
  const n = 3;
  const m = solve(n);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('n=5', () => {
  const n = 5;
  const m = solve(n);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('n=7', () => {
  const n = 7;
  const m = solve(n);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('n=11', () => {
  const n = 11;
  const m = solve(n);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('n just below 1e5', () => {
  const n = 99991;
  const m = solve(n);
  expect(isPrime(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  expect(isPrime(n + m)).toBe(false);
});

test('n largest prime 99991', () => {
  const n = 99991;
  const m = solve(n);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

test('n=2, more than one possible m', () => {
  const n = 2;
  const m1 = solve(n);
  expect(isPrime(m1)).toBe(true);
  expect(isPrime(n + m1)).toBe(false);
  const possible_m = [];
  for (let candidate = 2; candidate <= 20; candidate++) {
    if (isPrime(candidate) && !isPrime(n + candidate)) possible_m.push(candidate);
  }
  expect(possible_m).toContain(m1);
});

test('n=9973', () => {
  const n = 9973;
  const m = solve(n);
  expect(isPrime(m)).toBe(true);
  expect(isPrime(n + m)).toBe(false);
});

function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i * i <= x; ++i) {
    if (x % i === 0) return false;
  }
  return true;
}