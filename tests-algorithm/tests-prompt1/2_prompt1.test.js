import solve from '../../solutions-algorithm/2.js';

test('returns YES for matching names and pile', () => {
  expect(solve('ANN', 'BOB', 'ANNBOB')).toBe('YES');
  expect(solve('CHRIS', 'SANTA', 'CHRISANTA')).toBe('YES');
  expect(solve('A', 'B', 'BA')).toBe('YES');
  expect(solve('GUEST', 'HOST', 'HOSTGUEST')).toBe('YES');
  expect(solve('NEWYEAR', 'CHRISTMAS', 'CHRISTMASNEWYEAR')).toBe('YES');
  expect(solve('X', 'Y', 'XY')).toBe('YES');
  expect(solve('SANTA', 'CLAUS', 'TLACASANSU')).toBe('YES');
});

test('returns YES for pile that is a permutation', () => {
  expect(solve('BOB', 'ANN', 'OBBBAN')).toBe('YES');
  expect(solve('TREE', 'STAR', 'ESTEARRT')).toBe('YES');
  expect(solve('JOY', 'FUN', 'YNUFJO')).toBe('YES');
});

test('returns NO for unmatched pile', () => {
  expect(solve('BOB', 'ANN', 'ANNBOBA')).toBe('NO');
  expect(solve('SANTA', 'CLAUS', 'SANTACLAUA')).toBe('NO');
  expect(solve('HOST', 'GUEST', 'HGUEST')).toBe('NO');
  expect(solve('HOST', 'GHOST', 'GHOSTHOST')).toBe('NO');
  expect(solve('TOM', 'JERRY', 'TOMJERMY')).toBe('NO');
  expect(solve('CHRIS', 'SANTA', 'CHRISANTAA')).toBe('NO');
});

test('handles minimal input', () => {
  expect(solve('A', 'A', 'AA')).toBe('YES');
  expect(solve('A', 'A', 'A')).toBe('NO');
  expect(solve('A', 'B', 'AB')).toBe('YES');
  expect(solve('A', 'B', 'BAA')).toBe('NO');
  expect(solve('X', 'Y', 'YX')).toBe('YES');
  expect(solve('X', 'Y', 'Y')).toBe('NO');
});

test('different letter counts', () => {
  expect(solve('AA', 'BB', 'AABB')).toBe('YES');
  expect(solve('AA', 'BB', 'ABAB')).toBe('YES');
  expect(solve('AA', 'BB', 'AABBB')).toBe('NO');
  expect(solve('AA', 'BB', 'AB')).toBe('NO');
  expect(solve('AA', 'BB', 'AABBX')).toBe('NO');
});

test('long and shuffled', () => {
  expect(
    solve(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'ZYXWVUTSRQPONMLKJIHGFEDCBA',
      'ABCDEFGHIJKLMNOPQRSTUVWXYZZYXWVUTSRQPONMLKJIHGFEDCBA'
    )
  ).toBe('YES');
  expect(
    solve(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'ZYXWVUTSRQPONMLKJIHGFEDCBA',
      'ZYXWVUTSRQPONMLKJIHGFEDCBAABCDEFGHIJKLMNOPQRSTUVWXYZ'
    )
  ).toBe('YES');
  expect(
    solve(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'ZYXWVUTSRQPONMLKJIHGFEDCBA',
      'ABCDEFGHIJKLMNOPQRSTUVWXYZZYXWVUTSRQPONMLKJIHGFEDCB'
    )
  ).toBe('NO');
});