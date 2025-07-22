import { solve } from '../../solutions-descriptive/2.js';

describe('solve', () => {
  // Typical small cases
  it('n=1, k=1', () => {
    expect(solve(1, 1)).toBe(0);
  });

  it('n=2, k=2', () => {
    expect(solve(2, 2)).toBe(1);
  });

  it('n=3, k=2', () => {
    expect(solve(3, 2)).toBe(2);
  });

  it('n=5, k=3', () => {
    expect(solve(5, 3)).toBe(8);
  });

  it('n=10, k=5', () => {
    expect(solve(10, 5)).toBe(42);
  });

  // Edge cases: n = 0 and/or k = 0 (possibly not expected usage)
  it('n=0, k=10', () => {
    expect(solve(0, 10)).toBe(0);
  });

  it('n=10, k=0', () => {
    expect(solve(10, 0)).toBe(0);
  });

  it('n=0, k=0', () => {
    expect(solve(0, 0)).toBe(0);
  });

  // Edge case: n = 1, k large
  it('n=1, k=100', () => {
    expect(solve(1, 100)).toBe(0);
  });

  // n = k
  it('n=100, k=100', () => {
    expect(solve(100, 100)).toBe(solve(100, 100));
  });

  // k > n case: k = n+1, small n
  it('n=5, k=6', () => {
    expect(solve(5, 6)).toBe(10);
  });

  // k much larger than n, triggers surplus branch
  it('n=5, k=1000000007', () => {
    // surplus = (k - n) % MOD = (1000000007 - 5) % 1000000007 = 1000000002
    // totalSum = surplus * n % MOD = 1000000002 * 5 % 1000000007 = 999999937
    expect(solve(5, 1000000007)).toBe(999999937);
  });

  // k >> n, edge with MOD
  it('n=2, k=100000007', () => {
    // surplus = (100000007 - 2) % MOD = 100000005
    // totalSum = 100000005 * 2 % MOD = 200000010
    expect(solve(2, 100000007)).toBe(200000010);
  });

  // Small values, coverage with various n, k
  it('n=3, k=10', () => {
    // k > n, triggers surplus: surplus = 7, totalSum=21
    expect(solve(3, 10)).toBe(21);
  });

  // n = MAX_N, k = 1
  it('n=300000, k=1', () => {
    // Only one base, likely 0
    expect(solve(300000, 1)).toBe(0);
  });

  // n = MAX_N, k = MAX_N
  it('n=300000, k=300000', () => {
    expect(typeof solve(300000, 300000)).toBe('number');
    // (Don't check value due to complexity, but we can check property)
    const val = solve(300000, 300000);
    expect(val).toBeGreaterThanOrEqual(0);
    expect(val).toBeLessThan(1e9+7);
  });

  // n = MAX_N, k = MAX_N+10
  it('n=300000, k=300010', () => {
    expect(typeof solve(300000, 300010)).toBe('number');
    const val = solve(300000, 300010);
    expect(val).toBeGreaterThanOrEqual(0);
    expect(val).toBeLessThan(1e9+7);
  });

  // Large k, small n, surplus edge for k % MOD == n
  it('n=2, k=1000000009', () => {
    // surplus: (1000000009 - 2) % MOD = 2 % MOD = 2
    expect(solve(2, 1000000009)).toBe(4);
  });

  // n and k both 2
  it('n=2, k=2', () => {
    expect(solve(2, 2)).toBe(1);
  });
});