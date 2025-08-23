// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/40.js';

describe('Local Min/Max Permutation Tests', () => {

  test('Example case 1', () => {
    expect(solve(3, [1, 1, -1])).toEqual([3, 2, 1]);
  });

  test('Example case 2', () => {
    expect(solve(5, [1, -1, 1, 2, 1])).toEqual([4, 3, 5, 1, 2]);
  });

  test('Example case 3', () => {
    expect(solve(8, [3, 1, 2, 1, -1, 1, 1, 2])).toEqual([6, 7, 2, 4, 3, 8, 5, 1]);
  });

  test('All 1s except one -1 at end', () => {
    expect(solve(5, [1, 1, 1, 1, -1])).toEqual([5, 4, 3, 2, 1]);
  });

  test('All 1s except one -1 at start', () => {
    expect(solve(5, [-1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('Alternating 1s and 2s with -1', () => {
    expect(solve(5, [-1, 1, 2, 1, 2])).toEqual([4, 5, 2, 3, 1]);
  });

  test('Minimum size input n=2', () => {
    expect(solve(2, [1, -1])).toEqual([2, 1]);
  });

  test('Three level removal pattern', () => {
    expect(solve(7, [1, 2, 3, 1, 2, -1, 1])).toEqual([4, 6, 2, 7, 3, 1, 5]);
  });
});
