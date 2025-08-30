import { solve } from '../../../solutions-descriptive/36.js'


test('edge case - all cells marked', () => {
  expect(solve(3, 3, 9, [[1,1,0],[1,2,1],[1,3,0],[2,1,1],[2,2,0],[2,3,1],[3,1,0],[3,2,1],[3,3,0]])).toBe(1);
});