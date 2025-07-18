// @ts-nocheck
const solve = require('../solutions-descriptive/1');

describe('Prompt 1 - Problem 1', () => {
  test('case 1: 2 → 8 with k = 2', () => {
    expect(solve(2, 8, 2)).toBe(2);
  });

  test('case 2: 5 → 100 with k = 5', () => {
    expect(solve(5, 100, 5)).toBe(2);
  });

  test('case 3: impossible case (2 → 81 with k = 2)', () => {
    expect(solve(2, 81, 2)).toBe(-1);
  });

  
});
