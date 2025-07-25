import { solve } from '../../solutions-descriptive/39.js';

test('single element array - minimum case', () => {
  expect(solve(1, [0])).toBe(1);
  expect(solve(1, [42])).toBe(1);
});

test('all zeros', () => {
  expect(solve(3, [0, 0, 0])).toBe(1);
  expect(solve(5, [0, 0, 0, 0, 0])).toBe(1);
});

test('sequence with only ones', () => {
  expect(solve(4, [1, 1, 1, 1])).toBe(4);
});

test('mex increases in the prefix', () => {
  expect(solve(5, [1, 2, 4, 0, 3])).toBe(4);
});

test('sequence with scattered zeros', () => {
  expect(solve(6, [1, 0, 2, 0, 3, 0])).toBe(4);
});

test('increasing sequence from zero', () => {
  expect(solve(5, [0, 1, 2, 3, 4])).toBe(1);
  expect(solve(6, [0, 1, 2, 3, 4, 5])).toBe(1);
});

test('sequence with no zeros', () => {
  expect(solve(5, [5, 6, 7, 8, 9])).toBe(5);
  expect(solve(3, [2, 2, 2])).toBe(3);
});

test('sequence with large numbers', () => {
  expect(solve(6, [999999999, 777777777, 0, 888888888, 0, 1000000000])).toBe(4);
});

test('alternating zeros and ones', () => {
  expect(solve(8, [0,1,0,1,0,1,0,1])).toBe(4);
});

test('complex mixed sequence', () => {
  expect(solve(7, [2, 0, 4, 1, 0, 3, 0])).toBe(5);
});

test('test with largest n possible with no zeros', () => {
  const largeArr = Array(2e5).fill(1);
  expect(solve(2e5, largeArr)).toBe(2e5);
});

test('test with largest n possible and all zeros', () => {
  const zeroArr = Array(2e5).fill(0);
  expect(solve(2e5, zeroArr)).toBe(1);
});

test('test with alternating zeros and a constant value, large n', () => {
  const arr = [];
  for (let i = 0; i < 2e5; i++) arr.push(i % 2 === 0 ? 0 : 1);
  expect(solve(2e5, arr)).toBe(1e5 + 1);
});

test('no missing numbers in prefix, single zero in between', () => {
  expect(solve(7, [1, 2, 3, 0, 4, 5, 6])).toBe(7);
});

test('random missing numbers after zeros', () => {
  expect(solve(9, [0, 4, 1, 0, 2, 0, 3, 7, 8])).toBe(5);
});

test('all elements are the same and not zero', () => {
  expect(solve(5, [3,3,3,3,3])).toBe(5);
});

test('all distinct elements, zeros only at ends', () => {
  expect(solve(5, [0, 2, 3, 4, 0])).toBe(3);
});