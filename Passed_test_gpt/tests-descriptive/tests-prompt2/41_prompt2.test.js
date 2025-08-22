import { solve } from '../../solutions-descriptive/41.js';

test('basic example (sample provided)', () => {
  const n = 4;
  const arr = [1, 2, 5, 10];
  const queries = [
    [1,1],[1,2],[1,3],[1,4],[1,5],[1,10],
    [5,10],[6,10],[2,8],[3,4],[3,10],[3,8],
    [5,6],[5,5],[1,8]
  ];
  const expected = [
    "1", "4", "12", "30", "32", "86",
    "56", "54", "60", "26", "82", "57",
    "9", "2", "61"
  ];
  expect(solve(n, arr, queries)).toEqual(expected);
});

test('edge case: zero-length query range', () => {
  expect(solve(3, [1,2,3], [[2,1]])).toEqual(["0"]);
});

test('big numbers', () => {
  expect(solve(2, [1_000_000_000, 1_000_000_000], [[1,3]])).toEqual(["4000000000"]);
});

test('all zeroes', () => {
  expect(solve(4, [0,0,0,0], [[1,10],[2,3],[4,4],[6,7]])).toEqual(["0","0","0","0"]);
});

test('last index query only', () => {
  expect(solve(3, [4,8,12], [[6,6]])).toEqual(["12"]);
});

test('multiple identical queries', () => {
  const res = solve(2, [4,5], [[1,2],[1,2]]);
  expect(res).toEqual(["13","13"]);
});