// @ts-nocheck
import { solve } from '../../solutions-descriptive/37.js';

test('k=0 should return 1 (any single element subarray is beautiful)', () => {
  expect(solve(5, 0, [1, 2, 3, 4, 5])).toBe('1');
  expect(solve(1, 0, [1000000000])).toBe('1');
  expect(solve(3, 0, [0, 0, 0])).toBe('1');
});

test('All elements in same high bits, diverse prefix NOT found, but possible further subarrays', () => {
  expect(solve(3, 4, [4, 4, 4])).toBe('-1');
  expect(solve(4, 8, [8, 8, 8, 8])).toBe('-1');
});

test('Diverse bits in high positions, should return 2', () => {
  expect(solve(2, 1, [3, 4])).toBe('2');
  expect(solve(3, 7, [1, 128, 2])).toBe('2');
  expect(solve(5, 8, [8, 16, 8, 8, 8])).toBe('2');
});

test('Short arrays should handle correctly', () => {
  expect(solve(1, 1, [0])).toBe('-1');
  expect(solve(2, 2, [1, 3])).toBe('2');
  expect(solve(2, 2, [1, 1])).toBe('-1');
  expect(solve(2, 2, [2, 2])).toBe('-1');
});

test('Sample case: returns smallest segment that meets criteria', () => {
  expect(solve(5, 7, [1, 6, 7, 3, 4])).toBe('2');
  expect(solve(6, 13, [7, 7, 7, 7, 7, 6])).toBe('2');
});

test('No beautiful subarray', () => {
  expect(solve(3, 10, [7, 7, 7])).toBe('-1');
  expect(solve(4, 16, [0, 0, 0, 0])).toBe('-1');
});

test('Longest edge no solution', () => {
  const arr = Array(200000).fill(512);
  expect(solve(200000, 1024, arr)).toBe('-1');
});

test('Edge: Diverse prefix detected for large array', () => {
  const arr = Array(199999).fill(128).concat([10]);
  expect(solve(200000, 128, arr)).toBe('2');
});

test('Subarray of size >2 gives minimum when possible', () => {
  expect(solve(5, 4, [1, 1, 5, 1, 1])).toBe('2');
  expect(solve(5, 2, [1, 1, 1, 3, 1])).toBe('2');
});

test('Cases where only the whole array works', () => {
  expect(solve(3, 7, [1, 2, 6])).toBe('2');
  expect(solve(4, 6, [3, 1, 1, 2])).toBe('2');
});

test('XOR threshold larger than maximum pair possible', () => {
  expect(solve(3, 100, [1, 2, 3])).toBe('-1');
  expect(solve(3, 20, [4, 4, 5])).toBe('-1');
});



  // √ k=0 should return 1 (any single element subarray is beautiful) (4 ms)
  //   √ All elements in same high bits, diverse prefix NOT found, but possible further subarrays (9 ms)
  //   √ Diverse bits in high positions, should return 2 (1 ms)
  //   √ Short arrays should handle correctly (33 ms)
  //   × Sample case: returns smallest segment that meets criteria (20 ms)
  //   √ No beautiful subarray (11 ms)
  //   √ Longest edge no solution (93 ms)
  //   √ Edge: Diverse prefix detected for large array (43 ms)
  //   √ Subarray of size >2 gives minimum when possible (14 ms)
  //   × Cases where only the whole array works (10 ms)
  //   √ XOR threshold larger than maximum pair possible (11 ms)
