// @ts-nocheck
import { solve } from '../../../solutions-algorithm/2.js';

test('basic YES case', () => {
  expect(solve('SANTACLAUS', 'DEDMOROZ', 'SANTAMOROZDEDCLAUS')).toBe('YES');
});

test('basic NO case with extra letter', () => {
  expect(solve('PAPAINOEL', 'JOULUPUKKI', 'JOULNAPAOILELUPUKKI')).toBe('NO');
});

test('basic NO case with wrong arrangement and missing letter', () => {
  expect(solve('BABBONATALE', 'FATHERCHRISTMAS', 'BABCHRISTMASBONATALLEFATHER')).toBe('NO');
});

test('YES case with pile being perfect concatenation', () => {
  expect(solve('A', 'B', 'AB')).toBe('YES');
});

test('YES case with pile being perfect permutation', () => {
  expect(solve('ABC', 'DEF', 'FEDCBA')).toBe('YES');
});

test('NO case with missing letter in pile', () => {
  expect(solve('ABC', 'DEF', 'ABCDE')).toBe('NO');
});

test('NO case with extra letter in pile', () => {
  expect(solve('A', 'B', 'ABC')).toBe('NO');
});

test('YES case with duplicate letters', () => {
  expect(solve('AA', 'BB', 'BBAA')).toBe('YES');
});

test('NO case with multiple duplicates but wrong count', () => {
  expect(solve('AA', 'BB', 'ABB')).toBe('NO');
});

test('YES case with all letters same', () => {
  expect(solve('AAA', 'AAA', 'AAAAAA')).toBe('YES');
});

test('NO case with wrong single letter', () => {
  expect(solve('A', 'B', 'C')).toBe('NO');
});

test('case sensitive check (all uppercase)', () => {
  expect(solve('A', 'B', 'ab')).toBe('NO');
});

test('NO case with two names same', () => {
  expect(solve('JOHN', 'JOHN', 'JOHNJOHNX')).toBe('NO');
});

test('YES case two names same', () => {
  expect(solve('JOHN', 'JOHN', 'JOHNJOHN')).toBe('YES');
});

test('YES case with names using all alphabet', () => {
  expect(solve('ABCDEFGHIJKLMNOPQRST', 'UVWXYZ', 'ZYXWVUTSRQPONMLKJIHGFEDCBA')).toBe('YES');
});

test('NO case with pile empty', () => {
  expect(solve('ABC', 'DEF', '')).toBe('NO');
});

test('NO case with both names empty and pile non-empty', () => {
  expect(solve('', '', 'A')).toBe('NO');
});

test('YES case with both names and pile empty', () => {
  expect(solve('', '', '')).toBe('YES');
});

test('YES case with all 100 letters for each name', () => {
  const name1 = 'A'.repeat(100);
  const name2 = 'B'.repeat(100);
  const pile = 'A'.repeat(100) + 'B'.repeat(100);
  expect(solve(name1, name2, pile)).toBe('YES');
});

test('NO case with all 100 letters plus an extra', () => {
  const name1 = 'A'.repeat(100);
  const name2 = 'B'.repeat(100);
  const pile = 'A'.repeat(100) + 'B'.repeat(100) + 'C';
  expect(solve(name1, name2, pile)).toBe('NO');
});
