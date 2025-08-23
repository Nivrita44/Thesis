import { solve } from '../../../solutions-algorithm/33.js';

test('basic sample cases', () => {
  expect(
    solve([
      { n: 5, a: [2, 4, 6, 2, 5] },
      { n: 5, a: [5, 4, 4, 5, 1] },
      { n: 4, a: [6, 8, 2, 3] },
      { n: 1, a: [1] }
    ])
  ).toEqual([10, 11, 10, 1]);
});

test('single element edge cases', () => {
  expect(solve([{ n: 1, a: [42] }])).toEqual([1]);
  expect(solve([{ n: 1, a: [1000000000000] }])).toEqual([1]);
});


test('large sequence, linear numbers', () => {
  const a = [];
  for (let i = 1; i <= 1000; ++i) a.push(i);
  const res = solve([{ n: 1000, a }]);
  expect(res.length).toBe(1);
  expect(res[0]).toBeGreaterThanOrEqual(1000);
});

test('increasing sequence with big numbers', () => {
  expect(solve([{ n: 4, a: [100000000, 100000001, 100000002, 100000003] }])).toEqual([4]);
});

test('maximal constraints edge', () => {
  const n = 10000;
  const a = Array.from({ length: n }, (_, i) => n - i);
  expect(solve([{ n, a }])[0]).toBeGreaterThanOrEqual(n);
});
