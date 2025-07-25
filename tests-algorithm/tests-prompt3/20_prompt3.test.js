import { solve } from '../../solutions-algorithm/20.js';

test('average of [50, 50, 100] (n=3)', () => {
  expect(solve(3, [50, 50, 100])).toBeCloseTo(66.66666666666667, 10);
});

test('average of [0, 25, 50, 75] (n=4)', () => {
  expect(solve(4, [0, 25, 50, 75])).toBeCloseTo(37.5, 10);
});

test('average of [0, 1, 8] (n=3)', () => {
  expect(solve(3, [0, 1, 8])).toBeCloseTo(3, 10);
});

test('average with all 100s (n=1, all 100)', () => {
  expect(solve(1, [100])).toBeCloseTo(100, 10);
});

test('average with all 0s (n=1, all 0)', () => {
  expect(solve(1, [0])).toBeCloseTo(0, 10);
});

test('average with maximum n and all 100 percents', () => {
  expect(solve(100, Array(100).fill(100))).toBeCloseTo(100, 10);
});

test('average with maximum n and all 0 percents', () => {
  expect(solve(100, Array(100).fill(0))).toBeCloseTo(0, 10);
});

test('average with alternating 0 and 100', () => {
  const percents = [];
  for (let i = 0; i < 100; i++) percents.push(i % 2 === 0 ? 0 : 100);
  expect(solve(100, percents)).toBeCloseTo(50, 10);
});

test('average with random values', () => {
  expect(solve(5, [10, 20, 30, 40, 50])).toBeCloseTo(30, 10);
});

test('average where all values are the same but not edge', () => {
  expect(solve(4, [42, 42, 42, 42])).toBeCloseTo(42, 10);
});

test('average with single minimum value', () => {
  expect(solve(1, [0])).toBeCloseTo(0, 10);
});

test('average with two different values', () => {
  expect(solve(2, [0, 100])).toBeCloseTo(50, 10);
});

test('average with increasing sequence', () => {
  expect(solve(4, [0, 33, 66, 100])).toBeCloseTo((0 + 33 + 66 + 100) / 4, 10);
});

test('average with floating point result', () => {
  expect(solve(3, [1, 2, 3])).toBeCloseTo(2, 10);
});

test('average where sum is not divisible by count', () => {
  expect(solve(3, [1, 2, 4])).toBeCloseTo(2.3333333333333335, 10);
});