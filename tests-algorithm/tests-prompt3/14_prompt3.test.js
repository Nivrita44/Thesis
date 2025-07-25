import { solve } from '../../solutions-algorithm/14.js'

test('single swap', () => {
  expect(solve(1, 2, 'BG')).toBe('GB')
})

test('no swap needed', () => {
  expect(solve(5, 5, 'GGGGG')).toBe('GGGGG')
  expect(solve(5, 5, 'BBBBB')).toBe('BBBBB')
})

test('multiple swaps', () => {
  expect(solve(1, 5, 'BBGBG')).toBe('BGBBG')
  expect(solve(2, 5, 'BBGBG')).toBe('GBBBG')
  expect(solve(3, 5, 'BBGBG')).toBe('GBBBG')
})

test('from sample', () => {
  expect(solve(5, 1, 'BGGBG')).toBe('GBGGB')
  expect(solve(8, 3, 'BBGBGBGB')).toBe('GGBGBBBB')
})

test('t greater than possible swaps', () => {
  expect(solve(10, 3, 'BBGG')).toBe('GGBB')
})

test('all boys at first, girls at last, enough time to completely swap', () => {
  expect(solve(100, 4, 'BBBBGGGG')).toBe('GGGGBBBB')
})

test('alternate pattern', () => {
  expect(solve(2, 6, 'BGBGBG')).toBe('GGBGBB')
  expect(solve(5, 6, 'BGBGBG')).toBe('GGGBBB')
})

test('no time, queue unchanged', () => {
  expect(solve(0, 5, 'GBGBG')).toBe('GBGBG')
})

test('edge cases: one child', () => {
  expect(solve(5, 1, 'B')).toBe('B')
  expect(solve(5, 1, 'G')).toBe('G')
})

test('all girls first, boys last, nothing changes', () => {
  expect(solve(20, 6, 'GGGBBB')).toBe('GGGBBB')
})

test('minimal input size, t=1, n=1', () => {
  expect(solve(1, 1, 'G')).toBe('G')
  expect(solve(1, 1, 'B')).toBe('B')
})

test('large t, n', () => {
  expect(solve(50, 50, 'B'.repeat(25) + 'G'.repeat(25))).toBe('G'.repeat(25) + 'B'.repeat(25))
})

test('random input', () => {
  expect(solve(3, 5, 'GBGBBB')).toBe('GGGBBB')
  expect(solve(2, 5, 'BGGGBB')).toBe('GGBGBB')
})