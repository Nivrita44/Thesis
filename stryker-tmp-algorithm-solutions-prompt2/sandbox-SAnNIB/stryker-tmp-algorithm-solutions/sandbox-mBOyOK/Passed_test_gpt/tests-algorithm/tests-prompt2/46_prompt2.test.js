// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/46.js';

test('typical organization chart with multiple roots and varying management levels', () => {
  expect(solve(5, [-1, 1, 2, 1, -1])).toBe(3);
});

test('linear management chain (maximum depth equals n)', () => {
  expect(solve(4, [-1, 1, 2, 3])).toBe(4);
});

test('multiple roots one subordinate', () => {
  expect(solve(3, [-1, -1, 1])).toBe(2);
});

test('three separate components with similar depths', () => {
  expect(solve(12, [-1, 1, 2, 3, -1, 5, 6, 7, -1, 9, 10, 11])).toBe(4);
});

test('one root with deep and shallow branches', () => {
  expect(solve(6, [-1, 1, 1, 1, 2, 3])).toBe(3);
});

test('single employee (n=1)', () => {
  expect(solve(1, [-1])).toBe(1);
});

test('all employees are roots', () => {
  expect(solve(3, [-1, -1, -1])).toBe(1);
});


test('two employees, one is the manager of the other', () => {
  expect(solve(2, [-1, 1])).toBe(2);
});
