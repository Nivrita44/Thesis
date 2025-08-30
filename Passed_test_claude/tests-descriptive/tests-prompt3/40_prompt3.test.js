import { solve } from '../../../solutions-descriptive/40.js';

describe('Local Min/Max Permutation Tests', () => {

  test('Example case 1', () => {
    expect(solve(3, [1, 1, -1])).toEqual([3, 2, 1]);
  });

  test('All 1s except one -1 at end', () => {
    expect(solve(5, [1, 1, 1, 1, -1])).toEqual([5, 4, 3, 2, 1]);
  });

  test('All 1s except one -1 at start', () => {
    expect(solve(5, [-1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  });


  test('Minimum size input n=2', () => {
    expect(solve(2, [1, -1])).toEqual([2, 1]);
  });
});
