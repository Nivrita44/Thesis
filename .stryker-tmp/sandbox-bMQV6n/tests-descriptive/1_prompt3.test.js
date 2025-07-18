// @ts-nocheck
const solve = require('../solutions-descriptive/1');

describe('Prompt 3 - Problem 1', () => {
  test('case 1: 4 → 64 with k = 2 (power chain)', () => {
    expect(solve(4, 64, 2)).toBe(3);
  });

  test('case 2: 10 → 1000 with k = 10 (multiply chain)', () => {
    expect(solve(10, 1000, 10)).toBe(2);
  });

  test('case 3: impossible path with limited k (3 → 1000, k = 2)', () => {
    expect(solve(3, 1000, 2)).toBe(-1);
  });

  test('case 4: trivial case (7 → 7, k = 1)', () => {
    expect(solve(7, 7, 1)).toBe(0);
  });
});
