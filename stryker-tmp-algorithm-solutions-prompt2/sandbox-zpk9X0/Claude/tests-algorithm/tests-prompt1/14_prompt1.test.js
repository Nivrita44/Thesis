// @ts-nocheck
import { solve } from '../../../solutions-algorithm/14.js'

test('example case from description', () => {
  expect(solve(5, 1, 'BGGBG')).toBe('GBGGB');
});

test('no movement needed with all boys first', () => {
  expect(solve(4, 3, 'BBGG')).toBe('BBGG');
});

test('max length with alternating pattern', () => {
  expect(solve(50, 1, 'BGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBG')).toBe('GBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGBGB');
});

test('minimal length single swap', () => {
  expect(solve(2, 1, 'BG')).toBe('GB');
});

test('zero time transformation', () => {
  expect(solve(3, 0, 'BGG')).toBe('BGG');
});

test('multiple swaps over time', () => {
  expect(solve(6, 3, 'BGGBGG')).toBe('GGBGGB');
});

test('all girls no movement needed', () => {
  expect(solve(5, 10, 'GGGGG')).toBe('GGGGG');
});

test('complex pattern with multiple swaps', () => {
  expect(solve(8, 2, 'BBGGBBGG')).toBe('BBGGBBGG');
});