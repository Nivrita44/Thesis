import { solve } from '../../../solutions-descriptive/20.js'

test('example case with three elements', () => {
  expect(solve([2n, 4n, 1n])).toBe(2n);
});

test('already equal elements', () => {
  expect(solve([3n, 3n, 3n, 3n])).toBe(0n);
});

test('impossible case', () => {
  expect(solve([1n, 10n])).toBe(-1n);
});

test('minimal case with two elements', () => {
  expect(solve([1n, 1n])).toBe(0n);
});

test('large input case', () => {
  expect(solve([100000000n, 100000000n, 100000001n])).toBe(2n);
});

test('tricky case with alternating values', () => {
  expect(solve([5n, 1n, 5n, 1n])).toBe(4n);
});

test('generic case with five elements', () => {
  expect(solve([3n, 5n, 2n, 4n, 1n])).toBe(6n);
});

test('edge case with all different values', () => {
  expect(solve([1n, 2n, 3n, 4n])).toBe(4n);
});

test('case with one large element', () => {
  expect(solve([2n, 8n, 3n])).toBe(5n);
});
