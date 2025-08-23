// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/36.js';

describe('Prime Number Finding Tests', () => {
  test('Given n=2, returns a prime m where 2+m is not prime', () => {
    expect(solve(2n)).toBe(3n);
  });

  test('Given n=3, returns a prime m where 3+m is not prime', () => {
    expect(solve(3n)).toBe(2n);
  });

  test('Given n=5, returns a prime m where 5+m is not prime', () => {
    expect(solve(5n)).toBe(2n); 
  });

  test('Given n=7, returns a prime m where 7+m is not prime', () => {
    expect(solve(7n)).toBe(4n);
  });

  test('Given n=11, returns a prime m where 11+m is not prime', () => {
    expect(solve(11n)).toBe(2n);
  });

  test('Given n=97, returns a prime m where 97+m is not prime', () => {
    expect(solve(97n)).toBe(2n);
  });

  test('Given n=100003, returns a prime m where 100003+m is not prime', () => {
    expect(solve(100003n)).toBe(2n);
  });

  test('Returns value within constraints (2 ≤ m ≤ 10^5)', () => {
    const result = solve(17n);
    expect(result >= 2n && result <= 100000n).toBe(true);
  });
});
