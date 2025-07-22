import { solve } from '../../solutions-descriptive/28.js';

test('example 1', () => {
  expect(solve([[4n, 6n]])).toEqual([6]);
});

test('equal numbers', () => {
  expect(solve([[10n, 10n]])).toEqual([0]);
});

test('one zero, one not', () => {
  expect(solve([[0n, 8n]])).toEqual([8]);
  expect(solve([[9n, 0n]])).toEqual([9]);
});

test('both zero', () => {
  expect(solve([[0n, 0n]])).toEqual([0]);
});

test('single bit difference', () => {
  expect(solve([[7n, 15n]])).toEqual([8]);
});

test('power of two difference', () => {
  expect(solve([[16n, 1n]])).toEqual([15]);
});

test('random large numbers', () => {
  expect(solve([[12345678912345678n, 98765432198765432n]])).toEqual([86419753286419754]);
});

test('multiple test cases', () => {
  expect(solve([
    [2n, 3n],
    [8n, 8n],
    [12n, 8n],
    [0n, 1n]
  ])).toEqual([1, 0, 4, 1]);
});

test('x equals y large', () => {
  expect(solve([[99999999999999999n, 99999999999999999n]])).toEqual([0]);
});