import { solve } from '../../../solutions-descriptive/42.js';

test('basic example case', () => {
  expect(solve([1, 2], [5000, 5000])).toBe(3);
});

test('minimal case with single element', () => {
  expect(solve([1], [10000])).toBe(1);
});

test('edge case with zero probabilities', () => {
  expect(solve([1, 2, 3], [0, 0, 0])).toBe(0);
});

test('large input case', () => {
  expect(solve([1023, 1023, 1023], [10000, 10000, 10000])).toBe(1046529);
});

test('mixed probabilities case', () => {
  expect(solve([5, 7, 3], [2500, 5000, 7500])).toBe(27);
});

test('power of two values', () => {
  expect(solve([2, 4, 8, 16], [5000, 5000, 5000, 5000])).toBe(100);
});

test('all same values different probabilities', () => {
  expect(solve([10, 10, 10], [1000, 2000, 3000])).toBe(100);
});

test('maximum probability case', () => {
  expect(solve([1, 2, 4, 8], [10000, 10000, 10000, 10000])).toBe(225);
});

test('sparse probability distribution', () => {
  expect(solve([100, 200, 300, 400, 500], [100, 200, 300, 400, 500])).toBe(124089);
});
