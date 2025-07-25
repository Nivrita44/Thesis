import { solve } from '../../solutions-algorithm/14.js';

test('typical case 1', () => {
  expect(solve(5, 1, 'BGGBG')).toBe('GBGGB');
});

test('typical case 2', () => {
  expect(solve(8, 3, 'BBGBGBGB')).toBe('GGBGBBBB');
});

test('no swaps when n=0', () => {
  expect(solve(10, 0, 'BGGBG')).toBe('BGGBG');
});

test('no swaps when no BG pairs', () => {
  expect(solve(3, 2, 'GGG')).toBe('GGG');
  expect(solve(3, 2, 'BBB')).toBe('BBB');
  expect(solve(3, 2, 'GBGBGB')).toBe('GBGBGB');
});

test('single BG pair', () => {
  expect(solve(2, 1, 'BG')).toBe('GB');
});

test('all BG pairs', () => {
  expect(solve(6, 1, 'BGBGBG')).toBe('GBGBGB');
});

test('edge case: empty queue', () => {
  expect(solve(2, 3, '')).toBe('');
});

test('single character queue', () => {
  expect(solve(1, 4, 'G')).toBe('G');
  expect(solve(1, 4, 'B')).toBe('B');
});

test('BG at the end of queue', () => {
  expect(solve(2, 2, 'BBBG')).toBe('BGBB');
});

test('queue already sorted', () => {
  expect(solve(4, 4, 'GGGBBB')).toBe('GGGBBB');
});

test('maximum shift scenario', () => {
  expect(solve(5, 5, 'BBBBGGGG')).toBe('GGGGBBBB');
});

test('repeated swaps', () => {
  expect(solve(5, 3, 'BGBG')).toBe('GGBB');
});

test('odd length queue mixing', () => {
  expect(solve(4, 2, 'BGB')).toBe('GBB');
});