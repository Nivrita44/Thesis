import { solve } from '../../solutions-algorithm/26.js';

test('example: n = 7, k = 3', () => {
  expect(solve([[7n, 3n]])[0]).toBe('yes');
});

test('minimal lower-bound: n = 1, k = 3', () => {
  expect(solve([[1n, 3n]])[0]).toBe('no');
});

test('upper-bound large case: n = 1000000000000000000, k = 3', () => {
  expect(solve([[1000000000000000000n, 3n]])[0]).toBe('yes');
});

test('edge case: n = k = 1000000000000000000', () => {
  expect(solve([[1000000000000000000n, 1000000000000000000n]])[0]).toBe('yes');
});

test('tricky case: n = 7, k = 5', () => {
  expect(solve([[7n, 5n]])[0]).toBe('yes');
});

test('random case: n = 8, k = 5', () => {
  expect(solve([[8n, 5n]])[0]).toBe('yes');
});


test('impossible case: n = 11, k = 6', () => {
  expect(solve([[11n, 6n]])[0]).toBe('no');
});

test('minimal k, solvable: n = 10, k = 3', () => {
  expect(solve([[10n, 3n]])[0]).toBe('yes');
});

