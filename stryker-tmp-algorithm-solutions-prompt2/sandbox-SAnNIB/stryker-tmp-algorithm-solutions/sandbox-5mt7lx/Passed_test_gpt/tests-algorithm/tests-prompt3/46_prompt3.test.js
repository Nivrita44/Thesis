// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/46.js';

test('basic small case: n=1, no manager', () => {
  expect(solve(1, [-1])).toBe(1);
});

test('single chain', () => {
  expect(solve(4, [-1, 1, 2, 3])).toBe(4);
});

test('two roots', () => {
  expect(solve(3, [-1, -1, 1])).toBe(2);
});

test('provided sample 1', () => {
  expect(solve(5, [-1, 1, 2, 1, -1])).toBe(3);
});

test('provided sample 2', () => {
  expect(solve(12, [-1, 1, 2, 3, -1, 5, 6, 7, -1, 9, 10, 11])).toBe(4);
});

test('provided sample 3', () => {
  expect(solve(6, [-1, 1, 1, 1, 2, 3])).toBe(3);
});

test('all managers have no immediate manager (all roots)', () => {
  expect(solve(5, [-1, -1, -1, -1, -1])).toBe(1);
});

test('star structure: root manages everyone', () => {
  expect(solve(5, [-1, 1, 1, 1, 1])).toBe(2);
});

test('deep branch and shallow branch', () => {
  expect(solve(6, [-1, 1, 2, -1, 4, 4])).toBe(3);
});

test('manager is always previous employee (linear chain, n=2000)', () => {
  const n=2000;
  const managers=[-1];
  for(let i=2;i<=n;i++) managers.push(i-1);
  expect(solve(n, managers)).toBe(2000);
});

test('root with all direct children', () => {
  const n=2000;
  const managers = [-1];
  for(let i=2;i<=n;i++) managers.push(1);
  expect(solve(n, managers)).toBe(2);
});

test('deep tree with one branch longer', () => {
  expect(solve(6, [-1, 1, 2, 2, 4, 5])).toBe(5);
});

test('edge case: two separate long chains', () => {
  expect(solve(8, [-1, 1, 2, 3, -1, 5, 6, 7])).toBe(4);
});
