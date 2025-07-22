import { solve } from '../../solutions-descriptive/16.js';

test('single A', () => {
  expect(solve('A\n1 0 0 0')).toBe('YES');
  expect(solve('A\n0 0 0 0')).toBe('NO');
});

test('single B', () => {
  expect(solve('B\n0 1 0 0')).toBe('YES');
  expect(solve('B\n0 0 0 0')).toBe('NO');
});

test('simple AAB', () => {
  expect(solve('AAB\n2 1 0 0')).toBe('YES');
  expect(solve('AAB\n1 1 1 0')).toBe('YES');
  expect(solve('AAB\n1 1 0 0')).toBe('NO');
});

test('no consecutive AA or BB', () => {
  expect(solve('AA\n2 0 0 0')).toBe('NO');
  expect(solve('BB\n0 2 0 0')).toBe('NO');
  expect(solve('AB\n0 0 1 0')).toBe('YES');
  expect(solve('BA\n0 0 0 1')).toBe('YES');
});

test('mix ABBA with tight constraints', () => {
  expect(solve('ABBA\n1 1 1 1')).toBe('YES');
  expect(solve('ABBA\n2 2 0 0')).toBe('NO');
  expect(solve('ABBA\n0 0 2 2')).toBe('NO');
});

test('alternating ABAB', () => {
  expect(solve('ABAB\n0 0 2 1')).toBe('YES');
  expect(solve('ABAB\n0 0 1 2')).toBe('YES');
  expect(solve('ABAB\n0 0 1 1')).toBe('NO');
});

test('all A', () => {
  expect(solve('AAAAA\n5 0 0 0')).toBe('YES');
  expect(solve('AAAAA\n4 0 0 0')).toBe('NO');
});

test('all B', () => {
  expect(solve('BBBB\n0 4 0 0')).toBe('YES');
  expect(solve('BBBB\n0 3 0 0')).toBe('NO');
});

test('longer pattern with enough splits', () => {
  expect(solve('ABABAB\n0 0 3 2')).toBe('YES');
  expect(solve('ABABAB\n0 0 2 3')).toBe('YES');
});

test('not enough blocks possible', () => {
  expect(solve('ABA\n0 0 1 1')).toBe('NO');
  expect(solve('AAB\n1 1 1 0')).toBe('YES');
});

test('zeros for all allowed', () => {
  expect(solve('A\n0 0 0 0')).toBe('NO');
  expect(solve('B\n0 0 0 0')).toBe('NO');
});

test('mix of singletons and pairs', () => {
  expect(solve('ABBABA\n1 1 1 2')).toBe('YES');
  expect(solve('ABBABA\n1 1 1 1')).toBe('NO');
});