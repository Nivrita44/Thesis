// @ts-nocheck
import { solve } from '../../../solutions-descriptive/2.js';

describe('Base Conversion Sum Tests', () => {
  test('basic small case', () => {
    expect(solve(9, 3n)).toBe(10);
  });

  test('medium size numbers', () => {
    expect(solve(19, 84n)).toBe(2006);
  });

  test('larger n with k > n', () => {
    expect(solve(9982, 44353n)).toBe(120792461);
  });

  test('k equals MOD', () => {
    expect(solve(100000, 1000000007n)).toBe(584502117);
  });

  test('very large k value', () => {
    expect(solve(777, 1000000000000000000n)).toBe(46058362);
  });

  test('k smaller than n', () => {
    expect(solve(17, 30n)).toBe(775);
  });

  test('minimum valid input', () => {
    expect(solve(2, 2n)).toBe(1);
  });

  test('n equals k', () => {
    expect(solve(100, 100n)).toBe(338793);
  });

  test('large n with small k', () => {
    expect(solve(10000, 5n)).toBe(40);
  });
});
