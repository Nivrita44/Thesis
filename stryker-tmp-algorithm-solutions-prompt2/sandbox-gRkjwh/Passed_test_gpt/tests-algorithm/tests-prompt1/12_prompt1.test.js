import { solve } from '../../../solutions-algorithm/12.js';

test('n = 12', () => {
  const [x, y] = solve(12);
  expect(x + y).toBe(12);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
  expect(x).toBeLessThan(12);
  expect(y).toBeLessThan(12);
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; ++i) if (n % i === 0) return false;
    return true;
  };
  expect(isPrime(x)).toBe(false);
  expect(isPrime(y)).toBe(false);
});

test('n = 15', () => {
  const [x, y] = solve(15);
  expect(x + y).toBe(15);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
  expect(x).toBeLessThan(15);
  expect(y).toBeLessThan(15);
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; ++i) if (n % i === 0) return false;
    return true;
  };
  expect(isPrime(x)).toBe(false);
  expect(isPrime(y)).toBe(false);
});

test('n = 20', () => {
  const [x, y] = solve(20);
  expect(x + y).toBe(20);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
  expect(x).toBeLessThan(20);
  expect(y).toBeLessThan(20);
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; ++i) if (n % i === 0) return false;
    return true;
  };
  expect(isPrime(x)).toBe(false);
  expect(isPrime(y)).toBe(false);
});

test('n = 100', () => {
  const [x, y] = solve(100);
  expect(x + y).toBe(100);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
  expect(x).toBeLessThan(100);
  expect(y).toBeLessThan(100);
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; ++i) if (n % i === 0) return false;
    return true;
  };
  expect(isPrime(x)).toBe(false);
  expect(isPrime(y)).toBe(false);
});

test('n = 25', () => {
  const [x, y] = solve(25);
  expect(x + y).toBe(25);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
  expect(x).toBeLessThan(25);
  expect(y).toBeLessThan(25);
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; ++i) if (n % i === 0) return false;
    return true;
  };
  expect(isPrime(x)).toBe(false);
  expect(isPrime(y)).toBe(false);
});

test('n = 997', () => {
  const [x, y] = solve(997);
  expect(x + y).toBe(997);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
  expect(x).toBeLessThan(997);
  expect(y).toBeLessThan(997);
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; ++i) if (n % i === 0) return false;
    return true;
  };
  expect(isPrime(x)).toBe(false);
  expect(isPrime(y)).toBe(false);
});

test('n = 1000000', () => {
  const [x, y] = solve(1000000);
  expect(x + y).toBe(1000000);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
  expect(x).toBeLessThan(1000000);
  expect(y).toBeLessThan(1000000);
  const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; ++i) if (n % i === 0) return false;
    return true;
  };
  expect(isPrime(x)).toBe(false);
  expect(isPrime(y)).toBe(false);
});