import { solve } from '../../solutions-descriptive/47.js';

test('Single test case, minimum n and k', () => {
  const result = solve([
    {
      n: 1,
      k: 1,
      a: [5],
      b: [2],
    }
  ]);
  expect(result).toEqual(['5']);
});

test('Single test case, ai < bi so ai reduces to 0', () => {
  const result = solve([
    {
      n: 1,
      k: 2,
      a: [3],
      b: [5],
    }
  ]);
  expect(result).toEqual(['3']);
});

test('Simple two elements, larger k than needed', () => {
  const result = solve([
    {
      n: 2,
      k: 4,
      a: [4, 10],
      b: [1, 2],
    }
  ]);
  expect(result).toEqual(['25']);
});

test('Two operations with decreasing a', () => {
  const result = solve([
    {
      n: 2,
      k: 2,
      a: [7, 4],
      b: [2, 3],
    }
  ]);
  expect(result).toEqual(['11']);
});

test('Single test case, a[i]=b[i], several k', () => {
  const result = solve([
    {
      n: 3,
      k: 4,
      a: [4, 2, 3],
      b: [4, 2, 3],
    }
  ]);
  expect(result).toEqual(['9']);
});

test('Single test case, maximum ai,bi and large k', () => {
  const result = solve([
    {
      n: 1,
      k: 1000000000,
      a: [1000000000],
      b: [1],
    }
  ]);
  const expected = ((1000000000 + 1) * 1000000000 / 2).toString();
  expect(result).toEqual([expected]);
});

test('Multiple test cases, mixed values', () => {
  const result = solve([
    {
      n: 2,
      k: 2,
      a: [2, 10],
      b: [3, 7],
    },
    {
      n: 1,
      k: 10,
      a: [1],
      b: [1],
    }
  ]);
  expect(result).toEqual(['12', '1']);
});

test('Edge case: all a = 1, all b = 1, high k', () => {
  const result = solve([
    {
      n: 4,
      k: 10,
      a: [1, 1, 1, 1],
      b: [1, 1, 1, 1],
    }
  ]);
  expect(result).toEqual(['4']);
});

test('Edge case: all a much less than b', () => {
  const result = solve([
    {
      n: 3,
      k: 5,
      a: [1, 2, 3],
      b: [10, 10, 10],
    }
  ]);
  expect(result).toEqual(['6']);
});

test('Edge case: k = 0', () => {
  const result = solve([
    {
      n: 3,
      k: 0,
      a: [5, 8, 2],
      b: [3, 2, 1],
    }
  ]);
  expect(result).toEqual(['0']);
});