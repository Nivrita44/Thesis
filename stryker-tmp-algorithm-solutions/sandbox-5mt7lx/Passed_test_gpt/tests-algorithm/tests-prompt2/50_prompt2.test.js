// @ts-nocheck
import { solve } from '../../../solutions-algorithm/50.js';

test('Typical case 1: abacaba, queries [[1,3],[2,5],[1,7]]', () => {
  expect(solve('abacaba', [
    [1, 3],
    [2, 5],
    [1, 7]
  ])).toEqual([4, 7, 11]);
});

test('Typical case 2: sonoshikumiwo, several queries', () => {
  expect(solve('sonoshikumiwo', [
    [1, 5],
    [2, 10],
    [7, 7],
    [1, 13],
    [4, 8],
    [2, 5],
    [3, 9]
  ])).toEqual([82, 125, 9, 191, 62, 63, 97]);
});

test('Edge case: single character string, full range', () => {
  expect(solve('a', [
    [1,1]
  ])).toEqual([1]);
});

test('Edge case: empty queries array', () => {
  expect(solve('abacaba', [])).toEqual([]);
});

test('Edge case: string with same character', () => {
  expect(solve('aaaaa', [
    [1, 5],
    [2, 4],
    [3, 3]
  ])).toEqual([5, 3, 1]);
});

test('Edge case: query covering full string', () => {
  expect(solve('abcde', [
    [1,5]
  ])).toEqual([15]);
});

test('Edge case: adjacent ranges', () => {
  expect(solve('abc', [
    [1,1],
    [2,2],
    [3,3]
  ])).toEqual([1,2,3]);
});

test('Edge case: overlapping ranges', () => {
  expect(solve('abcde', [
    [1,3],
    [3,5],
    [1,4]
  ])).toEqual([6, 12, 10]);
});

test('Single query, single character in the middle', () => {
  expect(solve('xyz', [
    [2,2]
  ])).toEqual([25]);
});