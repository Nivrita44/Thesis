import { solve } from '../../solutions-algorithm/26.js';

test('basic cases from problem statement and solution', () => {
  expect(
    solve([
      [5, 3],
      [6, 1],
      [7, 4],
      [8, 8]
    ])
  ).toEqual(['yes', 'yes', 'no', 'yes']);
});

test('case with k=2 not allowed, and very large n', () => {
  expect(
    solve([
      [10, 2],
      [3, 2],
      [1000000000000000000n, 1]
    ])
  ).toEqual(['yes', 'no', 'yes']);
});

test('n exactly equals k, only k coin', () => {
  expect(solve([[11, 11]])).toEqual(['yes']);
});

test('n less than k, odd n', () => {
  expect(solve([[5, 7]])).toEqual(['no']);
});

test('n less than k, even n', () => {
  expect(solve([[6, 9]])).toEqual(['yes']);
});

test('k much greater than n', () => {
  expect(solve([[5, 1000000000000000000n]])).toEqual(['no']);
});

test('k=3, n odd/even', () => {
  expect(solve([
    [7, 3],     // 7-3*0=7 odd, 7-3*1=4 even=>yes
    [9, 3],     // 9-3*0=9 odd, 9-3*1=6 even=>yes
    [8, 3],     // 8-3*0=8 even=>yes
    [11, 3]     // (11-3*0)=11, (11-3*1)=8 even=>yes
  ])).toEqual(['yes', 'yes', 'yes', 'yes']);
});

test('n not expressible, high k', () => {
  expect(solve([[13, 9]])).toEqual(['no']);
});

test('k=1, any n', () => {
  expect(
    solve([
      [2, 1], // 2-1*0=2 even=>yes
      [3, 1], // 3-1*0=3 odd, 3-1*1=2 even=>yes
      [1, 1], // 1-1*0=1 odd, 1-1*1=0 even=>yes
      [1000000000000000001n, 1] // odd, 10^18+1-1*1=10^18 even=>yes
    ])
  ).toEqual(['yes', 'yes', 'yes', 'yes']);
});

test('minimum values', () => {
  expect(
    solve([
      [1, 1]
    ])
  ).toEqual(['yes']);
  expect(
    solve([
      [1, 3]
    ])
  ).toEqual(['no']);
  expect(
    solve([
      [2, 3]
    ])
  ).toEqual(['yes']);
});

test('n=k+1, both even/odd', () => {
  expect(
    solve([
      [5, 4],    // 5-4*0=5 odd, 5-4*1=1 odd, 5-4*2=-3 invalid=>no
      [10, 9]    // 10-9*0=10 even=>yes
    ])
  ).toEqual(['no','yes']);
});

test('input where only all 2-coins possible (k>n)', () => {
  expect(solve([[100, 101]])).toEqual(['yes']);
});

test('input where n cannot be decomposed (odd n, even k)', () => {
  expect(solve([[9, 4]])).toEqual(['no']);
  expect(solve([[7, 6]])).toEqual(['no']);
});

test('multiple large values', () => {
  expect(
    solve([
      [1000000000000000000n, 1000000000000000000n],
      [1000000000000000001n, 999999999999999999n]
    ])
  ).toEqual(['yes', 'yes']);
});