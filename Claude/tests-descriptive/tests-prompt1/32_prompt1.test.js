import { solve } from '../../../solutions-descriptive/32.js';

describe('Problem 32 Tests', () => {
  test('example case from description', () => {
    expect(solve([8, 10])).toBe(3n);
  });

  test('single element array', () => {
    expect(solve([4])).toBe(2n);
  });

  test('large numbers', () => {
    expect(solve([398000, 399000, 400000])).not.toBe(-1n);
  });

  test('minimal input', () => {
    expect(solve([2])).toBe(2n);
  });

  test('impossible case', () => {
    expect(solve([6, 7, 8, 9, 10])).toBe(-1n);
  });

  test('small consecutive numbers', () => {
    expect(solve([4, 6])).toBe(2n);
  });

  test('numbers with common divisors', () => {
    expect(solve([12, 18, 24])).toBe(6n);
  });

  test('mixed numbers requiring multiple steps', () => {
    expect(solve([15, 20, 25])).not.toBe(-1n);
  });
});
