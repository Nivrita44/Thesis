import { solve } from '../../solutions-algorithm/36.js';

describe('solve', () => {
  test('test_basic_case', () => {
    expect(solve(BigInt(10))).toBe(BigInt(2640));
  });

  test('test_small_number', () => {
    expect(solve(BigInt(1))).toBe(BigInt(1));
  });

  test('test_medium_number', () => {
    expect(solve(BigInt(100))).toBe(BigInt(338350));
  });

  test('test_large_number', () => {
    expect(solve(BigInt(1000))).toBe(BigInt(333833500));
  });

  test('test_very_large_number', () => {
    expect(solve(BigInt(10000))).toBe(BigInt(333383335000));
  });

  test('test_zero', () => {
    expect(solve(BigInt(0))).toBe(BigInt(0));
  });

  test('test_invalid_negative', () => {
    expect(() => solve(BigInt(-1))).toThrow();
  });

  test('test_non_bigint_input', () => {
    expect(() => solve(100)).toThrow();
  });
});