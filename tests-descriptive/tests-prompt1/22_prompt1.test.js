import solve from '../../solutions-descriptive/22.js';

test('sample 1: one enemy, one hit', () => {
  expect(solve([
    {
      n: 1, m: 3, k: 1,
      h: [2],
      x: [5]
    }
  ])).toEqual([1]);
});

test('sample 2: two enemies, need one hit with both in range', () => {
  expect(solve([
    {
      n: 2, m: 3, k: 2,
      h: [3, 2],
      x: [5, 6]
    }
  ])).toEqual([1]);
});

test('sample 3: two enemies, but k=2, need two hits since can kill only 1 at once', () => {
  expect(solve([
    {
      n: 2, m: 1, k: 2,
      h: [2, 1],
      x: [1, 100]
    }
  ])).toEqual([-1]);
});

test('sample 4: three enemies, all in range with one hit', () => {
  expect(solve([
    {
      n: 3, m: 5, k: 3,
      h: [2, 3, 4],
      x: [7, 8, 9]
    }
  ])).toEqual([1]);
});

test('sample 5: enemies far apart, impossible to get 2 kills', () => {
  expect(solve([
    {
      n: 4, m: 2, k: 2,
      h: [1, 3, 1, 1],
      x: [1, 100, 200, 300]
    }
  ])).toEqual([-1]);
});

test('sample 6: two hits needed for all', () => {
  expect(solve([
    {
      n: 3, m: 3, k: 2,
      h: [5, 6, 7],
      x: [2, 3, 4]
    }
  ])).toEqual([2]);
});

test('sample 7: large m, all covered', () => {
  expect(solve([
    {
      n: 5, m: 1000, k: 5,
      h: [1, 2, 3, 4, 5],
      x: [10, 20, 30, 40, 50]
    }
  ])).toEqual([1]);
});

test('edge: n=1, k=1, enemy needs a lot of attacks', () => {
  expect(solve([
    {
      n: 1, m: 1, k: 1,
      h: [1000000000],
      x: [999999999]
    }
  ])).toEqual([1000000000]);
});

test('edge: impossible with only one enemy, k=2', () => {
  expect(solve([
    {
      n: 1, m: 1, k: 2,
      h: [1],
      x: [1]
    }
  ])).toEqual([-1]);
});

test('multiple test cases mixed', () => {
  expect(solve([
    {
      n: 2, m: 3, k: 2,
      h: [3, 6],
      x: [5, 10]
    },
    {
      n: 4, m: 2, k: 2,
      h: [2, 2, 2, 2],
      x: [1, 2, 3, 4]
    },
    {
      n: 3, m: 1, k: 2,
      h: [1, 1, 1],
      x: [2, 5, 9]
    }
  ])).toEqual([3, 2, -1]);
});