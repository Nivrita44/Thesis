const solve = require('../solutions-descriptive/1');

describe('Prompt 2 - Problem 1', () => {
  test('GCD-based reduction: 6 → 18 with k = 3', () => {
    expect(solve(6, 18, 3)).toBe(1);
  });

  test('Different base and exponent path: 3 → 81 with k = 3', () => {
    expect(solve(3, 81, 3)).toBe(4);
  });

  test('Impossible due to ratio limit: 2 → 27 with k = 2', () => {
    expect(solve(2, 27, 2)).toBe(-1);
  });

  test('Already equal: 100 → 100 with k = 5', () => {
    expect(solve(100, 100, 5)).toBe(0);
  });
});
