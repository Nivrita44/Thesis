// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/18.js';

test('identical matrices', () => {
  const source = [
    [1, 2],
    [3, 4]
  ];
  const target = [
    [1, 2],
    [3, 4]
  ];
  expect(solve(2, 2, JSON.parse(JSON.stringify(source)), target)).toBe("Yes\n");
});

test('single element different', () => {
  const source = [
    [1, 2],
    [3, 5]
  ];
  const target = [
    [1, 2],
    [3, 4]
  ];
  expect(solve(2, 2, JSON.parse(JSON.stringify(source)), target)).toBe("No\n");
});

test('convertible with mask', () => {
  const source = [
    [3, 1],
    [2, 4]
  ];
  const target = [
    [3, 1],
    [3, 5]
  ];
  expect(solve(2, 2, JSON.parse(JSON.stringify(source)), target)).toBe("Yes\n");
});

test('not convertible cause of missing bits', () => {
  const source = [
    [0, 0],
    [0, 0]
  ];
  const target = [
    [1, 2],
    [3, 4]
  ];
  expect(solve(2, 2, JSON.parse(JSON.stringify(source)), target)).toBe("No\n");
});

test('single cell, matching', () => {
  const source = [[0]];
  const target = [[0]];
  expect(solve(1, 1, JSON.parse(JSON.stringify(source)), target)).toBe("Yes\n");
});

test('single cell, not matching', () => {
  const source = [[3]];
  const target = [[1]];
  expect(solve(1, 1, JSON.parse(JSON.stringify(source)), target)).toBe("No\n");
});

test('larger matrix, possible', () => {
  const source = [
    [1, 2, 4],
    [3, 6, 5],
    [7, 8, 0]
  ];
  const target = [
    [1, 2, 4],
    [3, 7, 5],
    [7, 10, 8]
  ];
  expect(solve(3, 3, JSON.parse(JSON.stringify(source)), target)).toBe("Yes\n");
});

test('zero-dim matrix', () => {
  expect(solve(0, 0, [], [])).toBe("Yes\n");
});

test('columns only', () => {
  const source = [
    [1],
    [2],
    [3]
  ];
  const target = [
    [1],
    [2],
    [3]
  ];
  expect(solve(3, 1, JSON.parse(JSON.stringify(source)), target)).toBe("Yes\n");
});

test('rows only', () => {
  const source = [[4, 5, 6]];
  const target = [[4, 5, 6]];
  expect(solve(1, 3, JSON.parse(JSON.stringify(source)), target)).toBe("Yes\n");
});

test('random bits non-convertible', () => {
  const source = [
    [7, 2],
    [11, 1]
  ];
  const target = [
    [7, 2],
    [10, 1]
  ];
  expect(solve(2, 2, JSON.parse(JSON.stringify(source)), target)).toBe("No\n");
});

test('random bits convertible', () => {
  const source = [
    [7, 2],
    [11, 1]
  ];
  const target = [
    [7, 2],
    [11, 3]
  ];
  expect(solve(2, 2, JSON.parse(JSON.stringify(source)), target)).toBe("Yes\n");
});




// √ identical matrices (2 ms)
// × single element different (6 ms)
// √ convertible with mask
// √ not convertible cause of missing bits (1 ms)
// √ single cell, matching (1 ms)
// × single cell, not matching
// √ larger matrix, possible
// √ zero-dim matrix
// √ columns only (2 ms)
// √ rows only (1 ms)
// √ random bits non-convertible
// √ random bits convertible