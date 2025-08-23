// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/41.js';

test('example case', () => {
  const n = 4;
  const a = [1, 2, 5, 10];
  const q = 3;
  const queries = [
    [1, 3],
    [4, 7],
    [6, 10],
  ];
  expect(solve(n, a, q, queries)).toEqual([12, 44, 54]);
});

test('single element', () => {
  const n = 1;
  const a = [5];
  const q = 1;
  const queries = [
    [1, 1],
  ];
  expect(solve(n, a, q, queries)).toEqual([5]);
});

test('all negatives', () => {
  const n = 3;
  const a = [-5, -10, -2];
  const q = 2;
  const queries = [
    [1, 3],
    [2, 5],
  ];
  expect(solve(n, a, q, queries)).toEqual([-5 + -15 + -17, -15 + -17 + -10 + -12]);
});

test('all zeros', () => {
  const n = 5;
  const a = [0, 0, 0, 0, 0];
  const q = 1;
  const queries = [
    [1, 15],
  ];
  expect(solve(n, a, q, queries)).toEqual([0]);
});

test('all ones', () => {
  const n = 4;
  const a = [1, 1, 1, 1];
  const q = 1;
  const queries = [
    [2, 5],
  ];
  expect(solve(n, a, q, queries)).toEqual([2 + 3 + 4 + 2]);
});

test('large n, single query', () => {
  const n = 10;
  const a = Array.from({ length: n }, (_, i) => i + 1);
  const q = 1;
  const queries = [
    [1, 55],
  ];
  expect(solve(n, a, q, queries)).toEqual([220]);
});

test('first and last index in queries', () => {
  const n = 3;
  const a = [2, -3, 4];
  const q = 2;
  const queries = [
    [1, 1],
    [5, 6],
  ];
  expect(solve(n, a, q, queries)).toEqual([2, 4 + 4]);
});