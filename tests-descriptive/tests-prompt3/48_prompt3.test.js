import { solve } from '../../solutions-descriptive/48.js';

test('example from description', () => {
  expect(solve(6n, [6n, 3n, 3n, 3n, 5n, 5n])).toBe(3n);
});

test('no valid starting cities', () => {
  expect(solve(6n, [5n, 6n, 4n, 1n, 4n, 5n])).toBe(0n);
});

test('only one valid starting city', () => {
  expect(solve(9n, [8n, 6n, 4n, 2n, 1n, 3n, 5n, 7n, 9n])).toBe(1n);
});

test('single city edge case', () => {
  expect(solve(1n, [1n])).toBe(1n);
});

test('all deadlines are n', () => {
  expect(solve(5n, [5n, 5n, 5n, 5n, 5n])).toBe(5n);
});

test('all deadlines are 1', () => {
  expect(solve(5n, [1n, 1n, 1n, 1n, 1n])).toBe(1n);
});

test('strictly increasing deadlines', () => {
  expect(solve(4n, [1n, 2n, 3n, 4n])).toBe(1n);
});

test('all cities impossible except one', () => {
  expect(solve(3n, [1n, 2n, 1n])).toBe(1n);
});

test('upper bound n with easy deadlines', () => {
  const n = 200000n;
  const a = Array(Number(n)).fill(n);
  expect(solve(n, a.map(BigInt))).toBe(n);
});

test('upper bound n with tightest deadlines', () => {
  const n = 200000n;
  const a = Array(Number(n)).fill(1n);
  expect(solve(n, a)).toBe(1n);
});



// × example from description (3 ms)
//   × no valid starting cities
//   × only one valid starting city (1 ms)
//   × single city edge case
//   × all deadlines are n
//   × all deadlines are 1
//   × strictly increasing deadlines
//   × all cities impossible except one
//   × upper bound n with easy deadlines (5 ms)
//   × upper bound n with tightest deadlines (1 ms)
