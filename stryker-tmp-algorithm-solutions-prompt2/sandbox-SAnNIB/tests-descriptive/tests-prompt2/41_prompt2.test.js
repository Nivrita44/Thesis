// @ts-nocheck
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

test('single element array', () => {
  expect(solve(1, [7], [[1,1], [1,2], [2,2]])).toEqual(["7","14","7"]);
});

test('two elements, test various queries', () => {
  expect(solve(2, [3,5], [[1,1],[1,2],[2,3],[3,3]])).toEqual(["3","11","8","5"]);
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

test('full range query', () => {
  expect(solve(3, [2,4,6], [[1,6]])).toEqual(["28"]);
});

test('query out of bounds (right>total possible)', () => {
  expect(solve(2, [7,3], [[1,10],[3,5]])).toEqual(["17","0"]);
});

test('multiple identical queries', () => {
  const res = solve(2, [4,5], [[1,2],[1,2]]);
  expect(res).toEqual(["13","13"]);
});



// √ basic example (sample provided) (5 ms)
// × single element array (7 ms)
// × two elements, test various queries (1 ms)
// √ edge case: zero-length query range
// √ big numbers
// √ all zeroes
// √ last index query only
// × full range query
// × query out of bounds (right>total possible)
// √ multiple identical queries (1 ms)