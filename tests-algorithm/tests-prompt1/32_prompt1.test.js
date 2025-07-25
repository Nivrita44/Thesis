import { solve } from '../../solutions-algorithm/32.js';

test('example 1', () => {
  const n = 3;
  const a = [1,2,3];
  const b = [2,3,1];
  const d = [0,0,0];
  expect(solve(n, a, b, d)).toBe(2);
});

test('example 2', () => {
  const n = 5;
  const a = [5, 3, 2, 4, 1];
  const b = [2, 4, 3, 1, 5];
  const d = [2, 3, 0, 0, 0];
  expect(solve(n, a, b, d)).toBe(2);
});

test('when all elements in d are predetermined', () => {
  const n = 4;
  const a = [4,3,2,1];
  const b = [1,2,3,4];
  const d = [4,3,2,1];
  expect(solve(n, a, b, d)).toBe(1);
});

test('when all elements must be chosen from b', () => {
  const n = 3;
  const a = [3,1,2];
  const b = [2,3,1];
  const d = [2,3,1];
  expect(solve(n, a, b, d)).toBe(1);
});

test('n=1, a and b equal, d is 0', () => {
  const n = 1;
  const a = [1];
  const b = [1];
  const d = [0];
  expect(solve(n, a, b, d)).toBe(1);
});

test('n=1, d is predetermined', () => {
  const n = 1;
  const a = [1];
  const b = [1];
  const d = [1];
  expect(solve(n, a, b, d)).toBe(1);
});

test('n=2, cross constraints', () => {
  const n = 2;
  const a = [1,2];
  const b = [2,1];
  const d = [0,0];
  expect(solve(n, a, b, d)).toBe(2);
});

test('all d predetermined with alternate values', () => {
  const n = 4;
  const a = [1,2,3,4];
  const b = [4,3,2,1];
  const d = [4,2,3,1];
  expect(solve(n, a, b, d)).toBe(1);
});

test('partial predetermined for longer arrays', () => {
  const n = 6;
  const a = [1,2,3,4,5,6];
  const b = [6,5,4,3,2,1];
  const d = [1,0,0,3,5,0];
  expect(solve(n, a, b, d)).toBe(2);
});

test('no predetermined, larger n', () => {
  const n = 7;
  const a = [1,2,3,4,5,6,7];
  const b = [7,6,5,4,3,2,1];
  const d = [0,0,0,0,0,0,0];
  expect(solve(n, a, b, d)).toBe(4);
});