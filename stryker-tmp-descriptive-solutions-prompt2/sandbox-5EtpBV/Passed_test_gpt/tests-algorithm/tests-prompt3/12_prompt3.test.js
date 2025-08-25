import { solve } from '../../../solutions-algorithm/12.js';

test('n=12 (smallest possible)', () => {
  const [x, y] = solve(12);
  expect(x + y).toBe(12);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
});

test('n=13 (odd, just above minimum)', () => {
  const [x, y] = solve(13);
  expect(x + y).toBe(13);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
});

test('n=20 (even)', () => {
  const [x, y] = solve(20);
  expect(x + y).toBe(20);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
});

test('n=21 (odd)', () => {
  const [x, y] = solve(21);
  expect(x + y).toBe(21);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
});

test('n=100 (even)', () => {
  const [x, y] = solve(100);
  expect(x + y).toBe(100);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
});

test('n=101 (odd)', () => {
  const [x, y] = solve(101);
  expect(x + y).toBe(101);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
});

test('n=1000000 (largest allowed)', () => {
  const [x, y] = solve(1000000);
  expect(x + y).toBe(1000000);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
});

test('n=999999 (largest odd)', () => {
  const [x, y] = solve(999999);
  expect(x + y).toBe(999999);
  expect(x).toBeGreaterThan(1);
  expect(y).toBeGreaterThan(1);
});

test('returned values are composite numbers', () => {
  function isComposite(val) {
    if (val < 4) return false;
    for (let i = 2; i * i <= val; ++i) if (val % i === 0) return true;
    return false;
  }
  for (let n = 12; n < 40; ++n) {
    const [x, y] = solve(n);
    expect(isComposite(x)).toBe(true);
    expect(isComposite(y)).toBe(true);
    expect(x + y).toBe(n);
  }
});