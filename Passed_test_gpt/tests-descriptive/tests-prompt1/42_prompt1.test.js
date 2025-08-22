import { solve } from '../../solutions-descriptive/42.js'

test('edge case: n = 1, p = 10000 (always inserted)', () => {
  expect(solve(1, [7], [10000])).toBe(49);
});

test('tricky case: n = 2, same a, one p = 10000, one p = 0 (never inserted)', () => {
  expect(solve(2, [5, 5], [10000, 0])).toBe(25);
});
