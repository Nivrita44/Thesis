// @ts-nocheck
import { solve } from '../../../solutions-descriptive/12.js';

test('Single test case, minimal input', () => {
  const input = [
    {
      size: 1,
      queries: 1,
      values: [1],
      updates: [[1, 5]],
    }
  ];
  const output = solve(input);
  expect(output).toEqual([[0, 0]]);
});

test('Edge case: all equal sizes, no updates', () => {
  const input = [
    {
      size: 4,
      queries: 0,
      values: [3, 3, 3, 3],
      updates: [],
    }
  ];
  const output = solve(input);
  expect(output[0][0]).toBe(0);
});