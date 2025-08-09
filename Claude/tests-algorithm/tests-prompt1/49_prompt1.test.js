import { solve } from '../../solutions-algorithm/49.js'

test('example case - 2x2 grid with k=3', () => {
  expect(solve(2n, 2n, 3n)).toBe('YES');
});

test('minimal 1x1 grid with k=0', () => {
  expect(solve(1n, 1n, 0n)).toBe('YES');
});

test('impossible case - k too small', () => {
  expect(solve(2n, 2n, 1n)).toBe('NO');
});

test('large grid with exact sum', () => {
  expect(solve(3n, 4n, 9n)).toBe('YES');
});

test('edge case - 1xm grid', () => {
  expect(solve(1n, 5n, 4n)).toBe('YES');
});

test('tricky case - multiple possible paths but wrong k', () => {
  expect(solve(3n, 3n, 8n)).toBe('NO');
});

test('maximum size grid with valid path', () => {
  expect(solve(100n, 100n, 10000n)).toBe('YES');
});

test('medium grid with impossible k', () => {
  expect(solve(4n, 4n, 25n)).toBe('NO');
});