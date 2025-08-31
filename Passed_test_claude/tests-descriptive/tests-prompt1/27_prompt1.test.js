import { solve } from '../../../solutions-descriptive/27.js'

test('example case with single point', () => {
  expect(solve(1, [[0, 0]])).toEqual([0, 0]);
});

test('single point at min coordinates', () => {
  expect(solve(1, [[-100000000, -100000000]])).toEqual([-100000000, -100000000]);
});
