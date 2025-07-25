import solve from '../../solutions-algorithm/45.js';

test('N = 2, A = [1,2]', () => {
  expect(solve(2, [1,2])).toBe(1);
});

test('N = 3, A = [1,2,3]', () => {
  expect(solve(3, [1,2,3])).toBe(2);
});

test('N = 3, A = [1,3,2]', () => {
  expect(solve(3, [1,3,2])).toBe(2);
});

test('N = 4, A = [1,2,3,4]', () => {
  expect(solve(4, [1,2,3,4])).toBe(8);
});

test('N = 4, A = [1,3,2,4]', () => {
  expect(solve(4, [1,3,2,4])).toBe(6);
});

test('N = 4, A = [1,4,2,3]', () => {
  expect(solve(4, [1,4,2,3])).toBe(6);
});

test('N = 5, A = [1,2,3,4,5]', () => {
  expect(solve(5, [1,2,3,4,5])).toBe(64);
});

test('N = 2, A = [1,2] (modulo check)', () => {
  expect(solve(2, [1,2])).toBe(1 % 998244353);
});

test('N = 3, A = [1,2,3] (modulo check)', () => {
  expect(solve(3, [1,2,3])).toBe(2 % 998244353);
});

test('N = 6, A = [1,2,3,4,5,6]', () => {
  expect(solve(6, [1,2,3,4,5,6])).toBe(1024);
});

test('N = 2, reversed order is invalid', () => {
  expect(solve(2, [2,1])).toBe(0);
});

test('N = 3, starting at 1 but not BFS order', () => {
  expect(solve(3, [1,3,2])).toBe(2);
});

test('N = 3, invalid permutation', () => {
  expect(solve(3, [2,1,3])).toBe(0);
});