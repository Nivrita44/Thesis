import { solve } from '../../solutions-algorithm/23.js';

test('Sample cases from problem description and solution', () => {
  const input = [
    [7, 5, 12345],
    [5, 0, 4],
    [10, 5, 15],
    [17, 8, 54321],
    [499999993, 9, 1000000000],
    [10, 5, 187],
    [2, 0, 999999999]
  ];
  const expected = [
    12339,
    0,
    15,
    54306,
    999999995,
    185,
    999999998
  ];
  expect(solve(input)).toEqual(expected);
});

test('Edge case: y=0', () => {
  expect(solve([[2, 0, 2]])).toEqual([2]);
  expect(solve([[123456789, 0, 123456789]])).toEqual([123456789]);
  expect(solve([[1000000000, 0, 1000000000]])).toEqual([1000000000]);
});

test('Edge case: n equals y', () => {
  expect(solve([[100, 5, 5]])).toEqual([5]);
  expect(solve([[2, 1, 1]])).toEqual([1]);
});

test('Edge case: n one less than y', () => {
  expect(solve([[10, 3, 2]])).toEqual([-7]);
});

test('Minimum values for x', () => {
  expect(solve([[2, 1, 10]])).toEqual([9]);
  expect(solve([[2, 1, 1]])).toEqual([1]);
  expect(solve([[2, 0, 100]])).toEqual([100]);
});

test('Maximum values for x and n', () => {
  expect(solve([[1000000000, 0, 1000000000]])).toEqual([1000000000]);
  expect(solve([[999999999, 5, 1000000000]])).toEqual([5]);
});

test('General property: returned value mod x === y', () => {
  const cases = [
    [27, 16, 10000],
    [123, 13, 999],
    [50, 49, 1234567],
    [3, 2, 1000000000],
    [999999937, 53, 999999999]
  ];
  const res = solve(cases);
  for (let i = 0; i < cases.length; ++i) {
    const [x, y, n] = cases[i];
    expect(res[i] % x).toBe(y);
    expect(res[i]).toBeLessThanOrEqual(n);
    expect(res[i]).toBeGreaterThanOrEqual(0);
  }
});

test('Possible k is 0', () => {
  expect(solve([[3, 0, 2]])).toEqual([0]);
  expect(solve([[5, 0, 0]])).toEqual([0]);
});