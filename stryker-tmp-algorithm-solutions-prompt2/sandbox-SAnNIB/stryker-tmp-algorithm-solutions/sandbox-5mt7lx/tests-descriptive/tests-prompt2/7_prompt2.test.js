// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/7.js';

test('Single node tree', () => {
  expect(solve(['1'])).toBe('0');
});

test('Two node tree', () => {
  expect(solve(['2', '1 2'])).toBe('0');
});

test('Three node straight line', () => {
  expect(solve(['3', '1 2', '2 3'])).toBe('2');
});

test('Three node star', () => {
  expect(solve(['3', '1 2', '1 3'])).toBe('0');
});

test('Four node straight line', () => {
  expect(solve(['4', '1 2', '2 3', '3 4'])).toBe('8');
});

test('Four node star', () => {
  expect(solve(['4', '1 2', '1 3', '1 4'])).toBe('0');
});

test('Four node l-shaped', () => {
  expect(solve(['4', '1 2', '2 3', '2 4'])).toBe('4');
});

test('Five node straight line', () => {
  expect(solve(['5', '1 2', '2 3', '3 4', '4 5'])).toBe('20');
});

test('Five node star', () => {
  expect(solve(['5', '1 2', '1 3', '1 4', '1 5'])).toBe('0');
});

test('Unbalanced tree', () => {
  expect(solve(['6', '1 2', '1 3', '2 4', '4 5', '4 6'])).toBe('15');
});


// √ Single node tree (3 ms)
//   √ Two node tree (1 ms)
//   × Three node straight line (3 ms)
//   × Three node star (1 ms)
//   × Four node straight line
//   × Four node star (1 ms)
//   × Four node l-shaped
//   × Five node straight line (1 ms)
//   × Five node star (1 ms)
//   × Unbalanced tree