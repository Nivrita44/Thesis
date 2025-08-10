import { solve } from '../../../solutions-algorithm/12.js'

test('example case n=12', () => {
  expect(solve(12n)).toEqual([4n, 8n]);
});

test('minimal input n=12', () => {
  expect(solve(12n)).toEqual([4n, 8n]);
});

test('edge case n=13', () => {
  expect(solve(13n)).toEqual([4n, 9n]);
});

test('medium value n=100', () => {
  const [x, y] = solve(100n);
  expect(x + y).toBe(100n);
  expect(x).toBeLessThan(100n);
  expect(y).toBeLessThan(100n);
});

test('large value n=999999', () => {
  const [x, y] = solve(999999n);
  expect(x + y).toBe(999999n);
  expect(x).toBeLessThan(999999n);
  expect(y).toBeLessThan(999999n);
});

test('numbers around 50', () => {
  const [x, y] = solve(50n);
  expect(x + y).toBe(50n);
  expect(x).toBeLessThan(50n);
  expect(y).toBeLessThan(50n);
});

test('power of 2 case n=128', () => {
  const [x, y] = solve(128n);
  expect(x + y).toBe(128n);
  expect(x).toBeLessThan(128n);
  expect(y).toBeLessThan(128n);
});

test('prime number input n=97', () => {
  const [x, y] = solve(97n);
  expect(x + y).toBe(97n);
  expect(x).toBeLessThan(97n);
  expect(y).toBeLessThan(97n);
});