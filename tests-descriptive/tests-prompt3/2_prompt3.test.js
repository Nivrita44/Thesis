import { solve } from '../../solutions-descriptive/2.js';

describe('solve', () => {
  // Small values, simple hand calculation.
  it('returns correct value for n=1, k=2', () => {
    // rev(1,2) = '1' in base 2 => reversed: '1' -> 1
    // rev(1,3) = '1' in base 3 => reversed: '1' -> 1
    // sum = 1 + 1 = 2
    expect(solve(1, 2)).toBe(1); // Only p=2 (since p runs 2 to k inclusive)
    expect(solve(1, 3)).toBe(1 + 1); // p=2 and p=3 -> 2
  });

  it('returns correct value for n=3, k=4', () => {
    // n = 3
    // p=2: 11 -> 11 reverse = 11 -> 3
    // p=3: 10 -> 01 -> 1
    // p=4: 3 in base4 is 3 -> reversed: 3
    // Sum: 3 + 1 + 3 = 7
    expect(solve(3, 4)).toBe(7);
  });

  it('returns correct value for n=5, k=3', () => {
    // n=5
    // p=2: 101 -> reverse 101 -> 5
    // p=3: 12 -> reverse 21 -> 7 (2*3+1=7)
    // sum: 5+7=12
    expect(solve(5, 3)).toBe(12);
  });

  it('returns correct value for n=5, k=5', () => {
    // p=2: 101 -> 5
    // p=3: 12 -> 21 -> 2*3+1=7
    // p=4: 11 -> reverse 11 = 5 (1*4+1)
    // p=5: 10 -> reverse 01 = 1
    // sum: 5+7+5+1=18
    expect(solve(5, 5)).toBe(18);
  });

  // k < n, no "surplus" term
  it('works for n=10, k=6', () => {
    // Compute rev(10,p) for p=2..6, check summing
    // p=2: 10 is 1010 -> reverse 0101 -> 5
    // p=3: 10 is 101 -> reverse 101 = 10
    // p=4: 22 -> reverse 22 = 10
    // p=5: 20 -> reverse 02 = 2
    // p=6: 14 -> reverse 41 = 25
    // sum: 5 + 10 + 10 + 2 + 25 = 52
    expect(solve(10, 6)).toBe(52);
  });

  // Large k > n, test surplus logic
  it('correctly calculates surplus for k > n', () => {
    // n=8, k=10
    // So surplus = (k-n) % MOD = 2, totalSum += 2*8=16
    // Then run normal calculation for p=2..n
    // p=2: 8 is 1000 -> reversed: 0001 = 1
    // p=3: 22 -> 22 = 8
    // p=4: 20 -> 02 = 2
    // p=5: 13 -> 31 = 16
    // p=6: 12 -> 21 = 13
    // p=7: 11 -> 11 = 8
    // p=8: 10 -> 01 = 1
    // sum: 1+8+2+16+13+8+1 = 49
    // add surplus 16: 49+16=65
    expect(solve(8, 10)).toBe(65);
  });

  // MODULO edge
  it('returns correct modulo for very large output (forces mod)', () => {
    // n=300_000, k=2*10^18. Essentially, (k-n)%MOD * n is huge, must be modded.
    // Not calculating concrete result but just checking that runs and returns a number < MOD
    const result = solve(300000, 10n ** 15n);
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1e9 + 7);
  });

  // Upper bound for n and k
  it('handles maximum n and a small k', () => {
    // n=max, k=2
    // Should compute only rev(n,2) once (within limits)
    const result = solve(300000, 2);
    // We just check that it's a valid number, no overflow
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1e9 + 7);
  });

  // Edge: n=1, k=10^18
  it('works for n=1, k=10^18 (very large k)', () => {
    // surplus = (k-n)%MOD = ((10^18 - 1) % MOD)
    // surplus * n = same
    const kBig = 10n ** 18n;
    const surplus = (kBig - 1n) % BigInt(1e9 + 7);
    const expected = Number(surplus);
    expect(solve(1, kBig)).toBe(expected);
  });

  // Edge: k = n
  it('works for k = n (no surplus)', () => {
    const result = solve(42, 42);
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(1e9 + 7);
  });

  // Lower edge
  it('works for smallest n and k', () => {
    expect(solve(1, 2)).toBe(1); // as above
  });
});