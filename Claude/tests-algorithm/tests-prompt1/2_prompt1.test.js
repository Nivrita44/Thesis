import { solve } from '../../../solutions-algorithm/2.js';

test('example with matching letters SANTACLAUS+DEDMOROZ -> SANTAMOROZDEDCLAUS', () => {
  expect(solve('SANTACLAUS', 'DEDMOROZ', 'SANTAMOROZDEDCLAUS')).toBe('YES');
});

test('no match when extra letter present', () => {
  expect(solve('SANTA', 'CLAUS', 'SANTACLAUSX')).toBe('NO'); 
});

test('no match when letter missing', () => {
  expect(solve('SANTA', 'CLAUS', 'SANTACLAU')).toBe('NO');
});

test('single letter names match', () => {
  expect(solve('A', 'B', 'BA')).toBe('YES');
});

test('large 100 character names match', () => {
  const name1 = 'A'.repeat(50);
  const name2 = 'B'.repeat(50);
  const pile = 'A'.repeat(50) + 'B'.repeat(50);
  expect(solve(name1, name2, pile)).toBe('YES');
});

test('scrambled letters still match', () => {
  expect(solve('ABC', 'DEF', 'DEFABC')).toBe('YES');
});

test('same letters in different order match', () => {
  expect(solve('AAB', 'BAA', 'AAAAAB')).toBe('YES');
});

test('case sensitivity matters', () => {
  expect(solve('ABC', 'DEF', 'ABCDEF')).toBe('YES');
  expect(solve('ABC', 'DEF', 'abcdef')).toBe('NO');
});