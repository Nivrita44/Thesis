import { solve } from '../../solutions-descriptive/42.js';

test('Example and edge cases', () => {
  expect(solve([
    { n: 1, a: [2], p: [5000] }
  ])).toEqual([500000007]);

  expect(solve([
    { n: 2, a: [1, 1], p: [1000, 2000] }
  ])).toEqual([820000006]);

  expect(solve([
    { n: 6, a: [343, 624, 675, 451, 902, 820], p: [6536, 5326, 7648, 2165, 9430, 5428] }
  ])).toEqual([280120536]);

  expect(solve([
    { n: 1, a: [1], p: [10000] }
  ])).toEqual([1]);
});

test('All probabilities zero (pi = 1, almost never included)', () => {
  expect(solve([
    { n: 3, a: [5, 9, 2], p: [1, 1, 1] }
  ])).toEqual([0]);
});

test('All ai distinct, mixed probabilities', () => {
  expect(solve([
    { n: 4, a: [1, 2, 4, 8], p: [10000, 5000, 3000, 7000] }
  ])).toEqual([842371066]);
});

test('All ai same, mid probabilities', () => {
  expect(solve([
    { n: 3, a: [7, 7, 7], p: [5000, 5000, 5000] }
  ])).toEqual([375000007]);
});

test('Single element, lowest/highest values', () => {
  expect(solve([
    { n: 1, a: [1], p: [1] }
  ])).toEqual([1]);
  expect(solve([
    { n: 1, a: [1023], p: [10000] }
  ])).toEqual([1046529]);
});

test('Multiple test cases together', () => {
  expect(solve([
    { n: 2, a: [1, 2], p: [5000, 5000] },
    { n: 2, a: [2, 4], p: [10000, 1] }
  ])).toEqual([500000007, 16]);
});

test('Maximum constraints, all p=10000', () => {
  const n = 10;
  const a = Array.from({length: n}, (_,i)=>i+1);
  const p = Array(n).fill(10000);
  expect(solve([{ n, a, p }])[0]).toBeGreaterThan(0);
  expect(solve([{ n, a, p }])[0]).toBeLessThan(1000000007);
});

test('Maximum constraints, all p=1', () => {
  const n = 10;
  const a = Array.from({length: n}, (_,i)=>i+1);
  const p = Array(n).fill(1);
  expect(solve([{ n, a, p }])[0]).toBeGreaterThanOrEqual(0);
  expect(solve([{ n, a, p }])[0]).toBeLessThan(1000000007);
});