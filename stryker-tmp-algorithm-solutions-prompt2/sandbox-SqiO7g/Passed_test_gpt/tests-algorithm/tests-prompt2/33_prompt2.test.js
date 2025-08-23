import { solve } from '../../../solutions-algorithm/33.js';

test('typical cases', () => {
  const testCases = [
    { n: 5, a: [2, 4, 6, 2, 5] },
    { n: 5, a: [5, 4, 4, 5, 1] },
    { n: 4, a: [6, 8, 2, 3] },
    { n: 1, a: [1] }
  ];
  expect(solve(testCases)).toEqual([10, 11, 10, 1]);
});

test('minimum input size', () => {
  expect(solve([{ n: 1, a: [0] }])).toEqual([1]);
  expect(solve([{ n: 1, a: [-1] }])).toEqual([1]);
});

test('all zeros', () => {
  expect(solve([{ n: 5, a: [0, 0, 0, 0, 0] }])).toEqual([5]);
});

test('all negatives', () => {
  expect(solve([{ n: 4, a: [-4, -3, -2, -1] }])).toEqual([4]);
});


test('empty testCases array', () => {
  expect(solve([])).toEqual([]);
});


test('n is large but a is only zeros', () => {
  expect(solve([{ n: 1000, a: Array(1000).fill(0) }])).toEqual([1000]);
});

