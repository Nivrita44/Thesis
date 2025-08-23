// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/30.js';

test('two cycles', () => {
    expect(solve(4, [2, 1, 4, 3])).toBe(2);
  });

test('disjoint cycles lcm', () => {
  expect(solve(6, [2, 1, 4, 3, 6, 5])).toBe(2);
});

test('n=2 path', () => {
  expect(solve(2, [2, 1])).toBe(2);
});