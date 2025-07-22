import { solve } from '../../solutions-descriptive/8.js';

test('Case 1: n=1, m=1, minimal case', () => {
  expect(solve(1, 1, [0], [0])).toEqual([0]);
});

test('Case 2: n=2, m=1, cannot form a triangle', () => {
  expect(solve(2, 1, [0, 1], [2])).toEqual([0]);
});

test('Case 3: n=2, m=2, only 1 triangle', () => {
  expect(solve(2, 2, [0, 100], [1, 101])).toEqual([1, 200]);
});

test('Case 4: n = 3, m = 3, select biggest area first', () => {
  expect(solve(3, 3, [0, 3, 6], [2, 5, 10])).toEqual([2, 36, 18]);
});

test('Case 5: n = 4, m = 2', () => {
  expect(solve(4, 2, [1, 2, 3, 4], [10, 11])).toEqual([2, 36, 20]);
});

test('Case 6: all collinear on same y, cannot make triangle', () => {
  expect(solve(3, 0, [1, 2, 3], [])).toEqual([0]);
});

test('Case 7: n=100000, m=100000, stress test', () => {
  const n = 100000, m = 100000;
  const a = Array.from({length: n}, (_,i)=>i);
  const b = Array.from({length: m}, (_,i)=>i+1000000);
  const res = solve(n, m, a, b);
  expect(res[0]).toBe(66666);
  expect(res[1].length).toBe(66666);
});

test('Case 8: negative numbers and large range', () => {
  expect(solve(2, 2, [-100000, 100000], [-1000000, 1000000])).toEqual([1, 4400000]);
});

test('Case 9: largest possible spread', () => {
  expect(solve(2, 2, [-1000000000, 1000000000], [-999999999, 999999999])).toEqual([1, 3999999996]);
});

test('Case 10: n = 5, m = 1, can form two triangles', () => {
  expect(solve(5, 1, [1, 5, 10, 15, 50], [100])).toEqual([2, 196, 160]);
});