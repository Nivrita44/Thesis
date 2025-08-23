// @ts-nocheck
import { solve } from '../../../solutions-descriptive/29.js'

test('example from description', () => {
  expect(solve(3, 4, [12, 4])).toBe("YES"); 
});

test('minimal case - single element', () => {
  expect(solve(1, 1, [5])).toBe("YES");
});

test('edge case - k equals array length', () => {
  expect(solve(3, 3, [1, 2, 3])).toBe("YES");
});

test('impossible case - k too small', () => {
  expect(solve(4, 3, [1, 2, 3, 4])).toBe("NO");
});

test('large case', () => {
  expect(solve(5, 10, [100000, 200000, 300000, 400000, 500000])).toBe("YES");
});

test('tricky case - requires merging', () => {
  expect(solve(2, 4, [10, 5])).toBe("YES");
});

test('corner case - minimum k needed', () => {
  expect(solve(3, 3, [2, 4, 6])).toBe("YES");
});

test('generic valid case 1', () => {
  expect(solve(4, 6, [8, 16, 24, 32])).toBe("YES");
});

test('generic valid case 2', () => {
  expect(solve(3, 5, [15, 30, 45])).toBe("YES");
});
