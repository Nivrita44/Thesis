import { solve } from '../../solutions-descriptive/24.js';

test('typical case 1', () => {
  expect(solve(2, 10, 20, 3)).toBe(36);
});

test('unit cost zero', () => {
  expect(solve(0, 10, 20, 3)).toBe(80);
});

test('overhead cost zero', () => {
  expect(solve(5, 0, 25, 4)).toBe(25);
});

test('total work less than max group size', () => {
  expect(solve(1, 5, 2, 10)).toBe(2);
});

test('total work exactly divisible by group size', () => {
  expect(solve(3, 6, 12, 4)).toBe(24);
});

test('all zeros', () => {
  expect(solve(0, 0, 0, 0)).toBe(0);
});

test('single unit of work', () => {
  expect(solve(7, 8, 1, 1)).toBe(7);
});

test('large numbers', () => {
  expect(solve(10, 20, 1000, 20)).toBe(560);
});

test('max group size is 1', () => {
  expect(solve(2, 3, 5, 1)).toBe(13);
});

test('overhead much higher than unit cost', () => {
  expect(solve(1, 100, 10, 3)).toBe(104);
});

test('unit cost much higher than overhead', () => {
  expect(solve(100, 1, 10, 5)).toBe(105);
});

test('total work is zero', () => {
  expect(solve(10, 25, 0, 8)).toBe(0);
});

test('max group and total work both are 1', () => {
  expect(solve(5, 12, 1, 1)).toBe(5);
});


// × typical case 1 (4 ms)
//   × unit cost zero (1 ms)
//   × overhead cost zero
//   × total work less than max group size
//   × total work exactly divisible by group size (1 ms)
//   √ all zeros
//   × single unit of work
//   × large numbers
//   √ max group size is 1
//   × overhead much higher than unit cost (1 ms)
//   × unit cost much higher than overhead (1 ms)
//   √ total work is zero
//   × max group and total work both are 1