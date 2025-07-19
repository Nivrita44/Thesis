// File: __tests__/1.test.js
import {solve} from '../../solutions-descriptive/1.js';

describe('solve', () => {
  // Trivial case: x === y, zero steps
  test('x == y with any k, expect 0', () => {
    expect(solve(10, 10, 3)).toBe(0);
    expect(solve(1, 1, 5)).toBe(0);
    expect(solve(1000000, 1000000, 1000000)).toBe(0);
  });

  // Direct multiplication possible (x*a = y)
  test('Direct multiply: 1 to 4 with k=5', () => {
    expect(solve(1, 4, 5)).toBe(1); // multiply by 4
  });

  // Direct division possible (x=a*y)
  test('Direct division: 12 to 4 with k=12', () => {
    expect(solve(12, 4, 12)).toBe(1); // divide by 3 (a=3, 1 op)
  });

  // Chain of multiplications required
  test('2 to 8 with k=2', () => {
    // 2*2=4, 4*2=8, total 2 steps
    expect(solve(2, 8, 2)).toBe(2);
  });

  // Use of both operations needed (factor then multiply)
  test('3 to 36 with k=6', () => {
    // 3*3=9, 9*4=36 (or 3*4=12, 12*3=36)
    expect(solve(3, 36, 6)).toBe(2);
  });

  // Impossible cases (need to multiply by >k or divide by non-integer)
  test('Impossible: 2 to 9 with k=2', () => {
    // Can't reach 9 from 2 with only times/divide 1 or 2
    expect(solve(2, 9, 2)).toBe(-1);
  });

  test('Impossible: 7 to 1 with k=3', () => {
    // Can't reach 1: can only divide by 1,2,3, but no way to 1 from 7
    expect(solve(7, 1, 3)).toBe(-1);
  });

  // Smallest input values
  test('Smallest input values', () => {
    expect(solve(1, 1, 1)).toBe(0);
    expect(solve(1, 2, 1)).toBe(1); // Only possible op: multiply by 1 (no)
    expect(solve(1, 2, 2)).toBe(1); // Multiply by 2
  });

  // Largest k, large numbers, trivial cases
  test('Large k, fast reduction: 2^20 to 2 with k=1048576', () => {
    // Can divide by 2^19 (=524288) in one op, then by 2 for one more op
    expect(solve(Math.pow(2,20), 2, 1048576)).toBe(2);
  });

  // x > y, integer division required
  test('x > y, valid integer division', () => {
    expect(solve(12, 3, 4)).toBe(1); // divide by 4
    expect(solve(18, 2, 9)).toBe(2); // 18/9 = 2
  });

  // k = 1, all operations are x*1 or x/1
  test('k=1 (useless operations)', () => {
    // Only x*1 or x/1 which do nothing, so only 0-case works
    expect(solve(3, 3, 1)).toBe(0);
    expect(solve(3, 4, 1)).toBe(-1);
    expect(solve(2, 1, 1)).toBe(-1);
  });

  // Edge: x=1, y=high
  test('x=1, y=big', () => {
    expect(solve(1, 1000000, 1000000)).toBe(1); // multiply by 1000000
    expect(solve(1, 1000000, 999999)).toBe(-1); // cannot multiply by 1000000
  });

  // Edge: y=1, x=high
  test('x=high, y=1', () => {
    expect(solve(1000000, 1, 1000000)).toBe(1); // divide by 1000000
    expect(solve(1000000, 1, 999999)).toBe(-1); // can't do it in one step
  });

  // Large numbers, factor overlap optimization
  test('x=2*3*7, y=2*2*3*11, k=11', () => {
    // x=42, y=132
    // GCD=6, x/6=7, y/6=22, 7*22 = 154, ops: 1 (mul 7), 2 (mul 11 then 2)
    expect(solve(42, 132, 11)).toBe(3);
  });
});