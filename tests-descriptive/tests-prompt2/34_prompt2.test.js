import { solve } from '../../solutions-descriptive/34.js';

test('solve totalX < totalY', () => {
  expect(solve([1, 2, 3], [10, 10, 10])).toBe("-1");
});

test('solve identical arrays, peak+1 <= 1e9', () => {
  expect(solve([2, 3, 5], [2, 3, 5])).toBe("6");
});

test('solve identical arrays, peak+1 > 1e9', () => {
  expect(solve([1000000000], [1000000000])).toBe("-1");
});

test('solve arrays not matching when totals equal', () => {
  expect(solve([1, 2, 7], [2, 3, 5])).toBe("-1");
});

test('solve diffVal case that works (simple mod mapping)', () => {
  expect(solve([8, 9, 10], [2, 3, 4])).toBe("6");
});

test('solve diffVal with multiple factors', () => {
  expect(solve([13, 14, 15], [1, 2, 3])).toBe("12");
});

test('solve no valid candidateFactor', () => {
  expect(solve([1, 2, 3], [0, 2, 5])).toBe("-1");
});

test('solve candidateFactor equals peakY', () => {
  expect(solve([5, 10, 15], [0, 5, 10])).toBe("-1");
});

test('solve candidateFactor > 1e9', () => {
  expect(solve([1000000001, 1000000002], [1, 2])).toBe("-1");
});

test('solve empty arrays', () => {
  expect(solve([], [])).toBe("1");
});

test('solve empty setY, setX nonempty', () => {
  expect(solve([1, 2, 3], [])).toBe("4");
});

test('solve setY empty and setX empty', () => {
  expect(solve([], [])).toBe("1");
});

test('solve one element, mapping with mod', () => {
  expect(solve([10], [2])).toBe("8");
});

test('solve larger array with multiple mods possible', () => {
  expect(solve([15, 23, 31], [7, 15, 23])).toBe("8");
});

test('solve negative numbers: totals', () => {
  expect(solve([-1, -2, -3], [-1, -2, -3])).toBe("-1");
});

test('solve zeros, equal arrays', () => {
  expect(solve([0, 0, 0], [0, 0, 0])).toBe("1");
});

test('solve zeros, mapping', () => {
  expect(solve([5, 10, 15], [0, 5, 10])).toBe("-1");
});

test('solve duplicate values, arrays matching', () => {
  expect(solve([2, 2, 2], [2, 2, 2])).toBe("3");
});

test('solve duplicate values, not matching for mod', () => {
  expect(solve([3, 3, 3], [0, 1, 2])).toBe("-1");
});

test('solve edge: single value, setY empty', () => {
  expect(solve([5], [])).toBe("6");
});