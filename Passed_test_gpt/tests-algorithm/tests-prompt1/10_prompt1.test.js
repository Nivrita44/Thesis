import { solve } from '../../solutions-algorithm/10.js'

test('example from description: n=5009', () => {
  expect(solve(5009)).toEqual([2, [5000, 9]]);
});

test('minimal case: n=1', () => {
  expect(solve(1)).toEqual([1, [1]]);
});

test('edge case: n=10', () => {
  expect(solve(10)).toEqual([1, [10]]);
});

test('upper-bound case: n=10000', () => {
  expect(solve(10000)).toEqual([1, [10000]]);
});

test('tricky case: n=1010', () => {
  expect(solve(1010)).toEqual([2, [1000, 10]]);
});

test('random case: n=209', () => {
  expect(solve(209)).toEqual([2, [200, 9]]);
});

test('random case: n=4020', () => {
  expect(solve(4020)).toEqual([2, [4000, 20]]);
});

test('random case: n=9999', () => {
  expect(solve(9999)).toEqual([4, [9000, 900, 90, 9]]);
});
