import { solve } from '../../solutions-descriptive/15.js';

test('example 1', () => {
  const n = 5;
  const m = 3;
  const q = 3;
  const a = [2, 3, 5];
  expect(solve(n, m, q, a)).toEqual([3, 2, 2]);
});

test('joker at top, move top card', () => {
  const n = 4;
  const m = 1;
  const q = 2;
  const a = [1, 4];
  expect(solve(n, m, q, a)).toEqual([2, 2]);
});

test('joker at bottom, always move bottom', () => {
  const n = 6;
  const m = 6;
  const q = 4;
  const a = [6, 2, 6, 1];
  expect(solve(n, m, q, a)).toEqual([2, 2, 2, 2]);
});

test('joker in the middle, move middle card', () => {
  const n = 7;
  const m = 4;
  const q = 2;
  const a = [4, 4];
  expect(solve(n, m, q, a)).toEqual([3, 3]);
});

test('smallest case', () => {
  const n = 2;
  const m = 2;
  const q = 1;
  const a = [1];
  expect(solve(n, m, q, a)).toEqual([2]);
});

test('joker moves with each query', () => {
  const n = 3;
  const m = 2;
  const q = 3;
  const a = [1, 2, 3];
  expect(solve(n, m, q, a)).toEqual([2, 2, 2]);
});

test('single operation, large n', () => {
  const n = 1000000000;
  const m = 500000000;
  const q = 1;
  const a = [1];
  expect(solve(n, m, q, a)).toEqual([2]);
});