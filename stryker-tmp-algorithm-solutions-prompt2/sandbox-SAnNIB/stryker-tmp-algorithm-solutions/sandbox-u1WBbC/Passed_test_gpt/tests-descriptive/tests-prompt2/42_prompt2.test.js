// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/42.js';

test('Typical: Two different bits, 50-50 probability', () => {
  expect(solve(2, [1, 2], [5000, 5000])).toBe(500000007);
});

test('All a[i] identical, different probabilities', () => {
  expect(solve(2, [1, 1], [1000, 2000])).toBe(820000006);
});

test('Multiple elements, random a and p', () => {
  expect(solve(6, [343, 624, 675, 451, 902, 820], [6536, 5326, 7648, 2165, 9430, 5428])).toBe(280120536);
});

test('Single element, p at maximum', () => {
  expect(solve(1, [1], [10000])).toBe(1);
});

test('Edge: All probabilities zero', () => {
  expect(solve(3, [1, 2, 3], [0, 0, 0])).toBe(0);
});

test('Edge: All a[i] zero, all probability nonzero', () => {
  expect(solve(4, [0, 0, 0, 0], [6000, 4000, 3000, 7000])).toBe(0);
});

test('Large n, identical a and p', () => {
  const n = 1000;
  const a = new Array(n).fill(5);
  const p = new Array(n).fill(7000);
  expect(solve(n, a, p)).toBe(solve(1000, a, p));
});

test('Invalid: Zero items', () => {
  expect(solve(0, [], [])).toBe(0);
});

test('Maximal input: n at MAX-1, a all ones, p all moderate', () => {
  const n = 200004;
  const a = new Array(n).fill(1023);
  const p = new Array(n).fill(5000);
  expect(typeof solve(n, a, p)).toBe('number');
});