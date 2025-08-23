// @ts-nocheck
import { solve } from '../../../solutions-descriptive/5.js';

test('n is 81 (edge where digit sum maximum for <=10^9)', () => {
  expect(solve(81)).toEqual(["!"]);
});

test('n is 1 (minimum possible n)', () => {
  expect(solve(1)).toEqual(["add -80", "!"]);
});

test('n is 100 (random low n)', () => {
  expect(solve(100)).toEqual(["add 19", "!"]);
});

test('n is 1000 (random moderate n)', () => {
  expect(solve(1000)).toEqual(["add 919", "!"]);
});

test('n is 10^9 (upper bound)', () => {
  expect(solve(1000000000)).toEqual(["add 999999919", "!"]);
});

test('n just below 81', () => {
  expect(solve(80)).toEqual(["add -1", "!"]);
});

test('n just above 81', () => {
  expect(solve(82)).toEqual(["add 1", "!"]);
});

test('n is 51 (arbitrary, within range)', () => {
  expect(solve(51)).toEqual(["add -30", "!"]);
});

test('n is 17', () => {
  expect(solve(17)).toEqual(["add -64", "!"]);
});