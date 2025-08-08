import { solve } from '../../solutions-descriptive/26.js'

test('example from description - 3x3 grid', () => {
  expect(solve(3n, "101")).toBe(2n);
});

test('minimal 1x1 grid with 1', () => {
  expect(solve(1n, "1")).toBe(0n);  
});

test('minimal 1x1 grid with 0', () => {
  expect(solve(1n, "0")).toBe(1n);
});

test('2x2 grid all zeros', () => {
  expect(solve(2n, "00")).toBe(4n);
});

test('2x2 grid all ones', () => {
  expect(solve(2n, "11")).toBe(2n);
});

test('4x4 grid alternating pattern', () => {
  expect(solve(4n, "1010")).toBe(8n);
});

test('5x5 grid with isolated zeros', () => {
  expect(solve(5n, "11011")).toBe(3n);
});

test('large input with all ones', () => {
  expect(solve(100000n, "1".repeat(100000))).toBe(100000n);
});

test('large input with alternating pattern', () => {
  expect(solve(100000n, "10".repeat(50000))).toBe(150000n);
});