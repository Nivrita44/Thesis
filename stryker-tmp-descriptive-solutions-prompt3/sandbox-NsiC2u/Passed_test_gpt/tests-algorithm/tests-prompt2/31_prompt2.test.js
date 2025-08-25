import { solve } from '../../../solutions-algorithm/31.js';

test('handles single simple case n=4', () => {
  expect(solve(1, [4])).toEqual(['4 3 1 2']);
});

test('handles n=3 (edge case)', () => {
  expect(solve(1, [3])).toEqual(['-1']);
});

test('handles n=2', () => {
  expect(solve(1, [2])).toEqual(['2 1']);
});

test('handles n=5', () => {
  expect(solve(1, [5])).toEqual(['5 4 1 2 3']);
});

test('handles multiple queries', () => {
  expect(solve(3, [3, 4, 2])).toEqual(['-1', '4 3 1 2', '2 1']);
});

test('handles maximum edge case for n=6', () => {
  expect(solve(1, [6])).toEqual(['6 5 1 2 3 4']);
});

test('handles t=0 (empty input)', () => {
  expect(solve(0, [])).toEqual([]);
});

test('handles minimum value n=1', () => {
  expect(solve(1, [1])).toEqual(['1 0']);
});
