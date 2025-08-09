import { solve } from '../../solutions-descriptive/31.js'

test('basic example with 2x2 deck', () => {
  expect(solve(2n, 2n)).toBe(2n);
});

test('minimal case 1x2 deck', () => {
  expect(solve(1n, 2n)).toBe(1n);
});

test('edge case with suit 1 having power', () => {
  expect(solve(3n, 2n)).toBe(20n);
});

test('larger case 4x4 deck', () => {
  expect(solve(4n, 4n)).toBe(2416n);
});

test('case with many suits 5x2 deck', () => {
  expect(solve(5n, 2n)).toBe(52n);
});

test('moderate size 3x4 deck', () => {
  expect(solve(3n, 4n)).toBe(240n);
});

test('large but manageable 6x2 deck', () => {
  expect(solve(6n, 2n)).toBe(132n);
});

test('upper bound case', () => {
  expect(solve(500n, 2n)).toBe(254661927n);
});