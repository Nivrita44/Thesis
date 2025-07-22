import { solve } from '../../solutions-descriptive/42.js';

test('single element, p = 5000', () => {
  expect(solve([{ n: 1, a: [2], p: [5000] }])).toBeInstanceOf(Array);
  expect(solve([{ n: 1, a: [2], p: [5000] }])[0]).toBe(500000007);
});

test('two elements, same a, different p', () => {
  expect(solve([{ n: 2, a: [1, 1], p: [1000, 2000] }])[0]).toBe(820000006);
});

test('larger n with varied a, p', () => {
  expect(solve([{ n: 6, a: [343, 624, 675, 451, 902, 820], p: [6536, 5326, 7648, 2165, 9430, 5428] }])[0]).toBe(280120536);
});

test('single a, p = 10000', () => {
  expect(solve([{ n: 1, a: [1], p: [10000] }])[0]).toBe(1);
});

test('empty input', () => {
  expect(solve([])).toEqual([]);
});

test('all zero prob, single bit set', () => {
  expect(solve([{ n: 3, a: [1, 2, 4], p: [0, 0, 0] }])[0]).toBe(437500004);
});

test('all max prob, all bits set', () => {
  expect(solve([{ n: 10, a: [1023,1023,1023,1023,1023,1023,1023,1023,1023,1023], p: Array(10).fill(10000) }])[0]).toBe(0);
});

test('mixed small n, mixed a and p', () => {
  expect(solve([{ n: 2, a: [0, 1023], p: [5000, 5000] }])[0]).toBe(169531253);
});

test('minimum possible p', () => {
  expect(solve([{ n: 2, a: [2, 4], p: [0, 0] }])[0]).toBe(156250001);
});

test('a=0, some p', () => {
  expect(solve([{ n: 3, a: [0,0,0], p: [3000,6000,9000] }])[0]).toBe(0);
});