import { solve } from '../../../solutions-algorithm/45.js';

test('Sample test case 1', () => {
  expect(solve([1, 2, 3])).toBe(3);
});
test('Sample test case 2', () => {
  expect(solve([1, 3, 2])).toBe(1);
});
test('Sample test case 3', () => {
  expect(solve([1, 3, 2, 4, 5])).toBe(17);
});
test('Sample test case 4', () => {
  expect(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(379394847);
});
test('Minimal N=2, increasing', () => {
  expect(solve([1, 2])).toBe(1);
});
test('Minimal N=2, swapping (invalid, but A[1]=1 required)', () => {
  expect(solve([1, 2])).toBe(1);
});


test('Edge N=3, completely reversed after 1', () => {
  expect(solve([1, 3, 2])).toBe(1);
});

test('Edge, N=6, specific permutation', () => {
  expect(solve([1, 6, 5, 4, 3, 2])).toBe(1);
});
