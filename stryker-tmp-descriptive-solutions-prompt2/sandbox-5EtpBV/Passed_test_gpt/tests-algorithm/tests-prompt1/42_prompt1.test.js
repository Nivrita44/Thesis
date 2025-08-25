import { solve } from '../../../solutions-algorithm/42.js';

test('n=2 sorted', () => {
  expect(solve(2, [1, 2])).toBe(2);
});

test('n=2 reversed', () => {
  expect(solve(2, [2, 1])).toBe(1);
});

test('n=3 sorted', () => {
  expect(solve(3, [1, 2, 3])).toBe(3);
});

test('n=3 reversed', () => {
  expect(solve(3, [3, 2, 1])).toBe(1);
});

test('n=3 middle unsorted', () => {
  expect(solve(3, [2, 3, 1])).toBe(2);
});

test('n=4 sorted', () => {
  expect(solve(4, [1, 2, 3, 4])).toBe(4);
});

test('n=4 reversed', () => {
  expect(solve(4, [4, 3, 2, 1])).toBe(1);
});

test('n=4 random', () => {
  expect(solve(4, [3, 1, 4, 2])).toBe(2);
});

test('n=5 sorted', () => {
  expect(solve(5, [1,2,3,4,5])).toBe(5);
});

test('n=5 reversed', () => {
  expect(solve(5, [5,4,3,2,1])).toBe(1);
});


test('n=6, all even then odd', () => {
  expect(solve(6, [2,4,6,1,3,5])).toBe(3);
});



test('n=100000 presorted', () => {
  const arr = Array.from({length: 100000}, (_, i) => i+1);
  expect(solve(100000, arr)).toBe(100000);
});

test('n=100000 reversed', () => {
  const arr = Array.from({length: 100000}, (_, i) => 100000-i);
  expect(solve(100000, arr)).toBe(1);
});


  