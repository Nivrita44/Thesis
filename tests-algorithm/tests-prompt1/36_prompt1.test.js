import { solve } from '../../solutions-algorithm/36.js';

test('n=2', () => {
  const n = 2;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=3', () => {
  const n = 3;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=11', () => {
  const n = 11;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=97', () => {
  const n = 97;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=99991', () => {
  const n = 99991;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=99991 (repeat for determinism)', () => {
  const n = 99991;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=17', () => {
  const n = 17;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=5', () => {
  const n = 5;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=7', () => {
  const n = 7;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});

test('n=9973', () => {
  const n = 9973;
  const m = solve(n);
  expect(Number.isInteger(m)).toBe(true);
  expect(m).toBeGreaterThanOrEqual(2);
  expect(m).toBeLessThanOrEqual(1e5);
  const isMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isMPrime(m)).toBe(true);
  const nPlusM = n + m;
  const isNPlusMPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; ++i) if (x % i === 0) return false;
    return true;
  };
  expect(isNPlusMPrime(nPlusM)).toBe(false);
});