import solve from '../../solutions-algorithm/30.js';

test('n=6 impossible', () => {
  expect(solve(6)).toBe('NO');
});

test('n=7 possible', () => {
  const result = solve(7).split('\n');
  expect(result[0]).toBe('YES');
  const [x, y, z] = result[1].split(' ').map(Number);
  expect(new Set([x, y, z]).size).toBe(3);
  expect(x + y + z).toBe(7);
  expect(x % 3).not.toBe(0);
  expect(y % 3).not.toBe(0);
  expect(z % 3).not.toBe(0);
});

test('n=10 possible', () => {
  const result = solve(10).split('\n');
  expect(result[0]).toBe('YES');
  const [x, y, z] = result[1].split(' ').map(Number);
  expect(new Set([x, y, z]).size).toBe(3);
  expect(x + y + z).toBe(10);
  expect(x % 3).not.toBe(0);
  expect(y % 3).not.toBe(0);
  expect(z % 3).not.toBe(0);
});

test('n=9 impossible', () => {
  expect(solve(9)).toBe('NO');
});

test('n=1000000000 possible', () => {
  const result = solve(1000000000).split('\n');
  expect(result[0]).toBe('YES');
  const [x, y, z] = result[1].split(' ').map(Number);
  expect(new Set([x, y, z]).size).toBe(3);
  expect(x + y + z).toBe(1000000000);
  expect(x % 3).not.toBe(0);
  expect(y % 3).not.toBe(0);
  expect(z % 3).not.toBe(0);
});

test('n=4 impossible', () => {
  expect(solve(4)).toBe('NO');
});

test('n=14 possible', () => {
  const result = solve(14).split('\n');
  expect(result[0]).toBe('YES');
  const [x, y, z] = result[1].split(' ').map(Number);
  expect(new Set([x, y, z]).size).toBe(3);
  expect(x + y + z).toBe(14);
  expect(x % 3).not.toBe(0);
  expect(y % 3).not.toBe(0);
  expect(z % 3).not.toBe(0);
});

test('n=5 impossible', () => {
  expect(solve(5)).toBe('NO');
});

test('n=13 possible', () => {
  const result = solve(13).split('\n');
  expect(result[0]).toBe('YES');
  const [x, y, z] = result[1].split(' ').map(Number);
  expect(new Set([x, y, z]).size).toBe(3);
  expect(x + y + z).toBe(13);
  expect(x % 3).not.toBe(0);
  expect(y % 3).not.toBe(0);
  expect(z % 3).not.toBe(0);
});

test('n=3 impossible', () => {
  expect(solve(3)).toBe('NO');
});