describe('Polygon Score Game Tests', () => {
  test('example from description - small triangle', () => {
    expect(solve(3n, [1n, 2n, 3n])).toBe(6n);
  });

  test('minimal case - 3 vertices', () => {
    expect(solve(3n, [1n, 1n, 1n])).toBe(1n);
  });

  test('square with identical values', () => {
    expect(solve(4n, [2n, 2n, 2n, 2n])).toBe(8n);
  });

  test('pentagon with ascending values', () => {
    expect(solve(5n, [1n, 2n, 3n, 4n, 5n])).toBe(60n);
  });

  test('large values within bounds', () => {
    expect(solve(6n, [1000n, 1000n, 1000n, 1000n, 1000n, 1000n])).toBe(2000000000n);
  });

  test('edge case - mixed large and small values', () => {
    expect(solve(7n, [1n, 1000n, 2n, 999n, 3n, 998n, 4n])).toBe(2994000n);
  });

  test('corner case - alternating values', () => {
    expect(solve(8n, [1n, 10n, 1n, 10n, 1n, 10n, 1n, 10n])).toBe(1000n);
  });

  test('upper bound case', () => {
    const arr = Array(400).fill(1000n);
    expect(solve(400n, arr)).toBe(1000000000n);
  });
});