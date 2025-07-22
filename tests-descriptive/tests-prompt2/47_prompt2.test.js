import { solve } from '../../solutions-descriptive/47.js';

test('typical case with distinct a and b', () => {
  const testCases = [
    { n: 3, k: 4, a: [10, 7, 5], b: [2, 1, 3] }
  ];
  expect(solve(testCases)).toEqual(['29']);
});

test('all zeros in a', () => {
  const testCases = [
    { n: 2, k: 3, a: [0, 0], b: [1, 2] }
  ];
  expect(solve(testCases)).toEqual(['0']);
});

test('all zeros in b', () => {
  const testCases = [
    { n: 2, k: 2, a: [5, 8], b: [0, 0] }
  ];
  expect(solve(testCases)).toEqual(['13']);
});

test('k is zero, no operations allowed', () => {
  const testCases = [
    { n: 3, k: 0, a: [5, 2, 7], b: [1, 1, 1] }
  ];
  expect(solve(testCases)).toEqual(['0']);
});

test('one element, one operation', () => {
  const testCases = [
    { n: 1, k: 1, a: [10], b: [2] }
  ];
  expect(solve(testCases)).toEqual(['10']);
});

test('large n, b[i] is 1', () => {
  const a = Array.from({length: 5}, (_, i) => i + 1);
  const b = Array(5).fill(1);
  const testCases = [
    { n: 5, k: 5, a, b }
  ];
  expect(solve(testCases)).toEqual(['15']);
});

test('b[i] greater than a[i]', () => {
  const testCases = [
    { n: 2, k: 2, a: [2, 3], b: [5, 10] }
  ];
  expect(solve(testCases)).toEqual(['5']);
});

test('all elements same a, same b', () => {
  const testCases = [
    { n: 4, k: 3, a: [5, 5, 5, 5], b: [2, 2, 2, 2] }
  ];
  expect(solve(testCases)).toEqual(['15']);
});

test('operation count more than all elements sum', () => {
  const testCases = [
    { n: 3, k: 10, a: [2, 3, 4], b: [1, 1, 1] }
  ];
  expect(solve(testCases)).toEqual(['9']);
});

test('large values', () => {
  const testCases = [
    { n: 2, k: 3, a: [1000000000, 999999999], b: [100000000, 99999999] }
  ];
  expect(solve(testCases)).toEqual(['2899999997']);
});