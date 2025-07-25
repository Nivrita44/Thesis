import { solve } from '../../solutions-algorithm/45.js';

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
test('N=4, increasing', () => {
  expect(solve([1, 2, 3, 4])).toBe(9);
});
test('N=4, with one pair swapped', () => {
  expect(solve([1, 2, 4, 3])).toBe(3);
});
test('N=5, mostly increasing', () => {
  expect(solve([1, 2, 4, 5, 3])).toBe(7);
});
test('Edge N=3, completely reversed after 1', () => {
  expect(solve([1, 3, 2])).toBe(1);
});
test('All numbers consecutive from 1 to N', () => {
  expect(solve(Array.from({length: 7}, (_,i)=>i+1))).toBe(127);
});
test('Edge, N=6, specific permutation', () => {
  expect(solve([1, 6, 5, 4, 3, 2])).toBe(1);
});
test('Middle values swapped, N=5', () => {
  expect(solve([1, 3, 2, 4, 5])).toBe(5);
});
test('N=10, increasing', () => {
  expect(solve([1,2,3,4,5,6,7,8,9,10])).toBe(1023);
});
test('Large N=16, increasing', () => {
  expect(solve(Array.from({length: 16}, (_,i)=>i+1))).toBe(32767);
});
test('N=11, shuffled tail', () => {
  expect(solve([1,3,2,4,5,6,8,11,10,9,7])).toBe(1097);
});