import { solve } from '../../../solutions-descriptive/44.js'

test('Minimal case - single pile with 1 stone', () => {
  expect(solve(1, [1])).toBe('Bob');
});

test('Corner case - all piles have 1 stone', () => {
  expect(solve(4, [1, 1, 1, 1])).toBe('Bob');
});


