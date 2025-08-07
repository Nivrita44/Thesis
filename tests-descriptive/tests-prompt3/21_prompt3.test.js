import { solve } from '../../solutions-descriptive/21.js';

test('Basic case: all cities have GCD at least 2 with each other', () => {
  expect(solve([2, 4])).toBe(1);
  expect(solve([6, 9])).toBe(1);
  expect(solve([4, 8, 12])).toBe(2);
});

test('No possible path: all GCDs are 1', () => {
  expect(solve([2, 3])).toBe(0);
  expect(solve([3, 5, 7, 11, 13])).toBe(0);
});

test('Sample case: multiple possible paths', () => {
  expect(solve([2, 6, 3, 4, 6])).toBe(5);
  expect(solve([4, 196, 2662, 2197, 121])).toBe(2);
});

test('Case: Mixed GCDs, cities with coprime and non-coprime', () => {
  expect(solve([10, 15, 14, 20])).toBe(3);
});

test('Edge case: n=2, with GCD>1', () => {
  expect(solve([8, 16])).toBe(1);
});

test('Edge case: n=2, with GCD=1', () => {
  expect(solve([15, 8])).toBe(0);
});

test('Larger values, non-trivial', () => {
  expect(solve([6, 10, 15, 21, 35, 77])).toBe(5);
});

test('All equal values', () => {
  expect(solve([12, 12, 12, 12])).toBe(4);
});

test('Only last city not reachable by GCD', () => {
  expect(solve([7, 9, 11, 13, 17])).toBe(0);
});

test('Path with primes and one large even number', () => {
  expect(solve([3, 5, 2, 7, 1000000])).toBe(1);
});

test('Path only through specific GCDs', () => {
  expect(solve([16, 8, 32, 64, 128])).toBe(8);
});

test('Big numbers at limits', () => {
  expect(solve([1000000, 500000, 250000, 125000, 62500])).toBe(16);
});

test('Output is in range [0, MOD)', () => {
  const val = solve([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
  expect(val).toBeGreaterThanOrEqual(0);
  expect(val).toBeLessThan(998244353);
});

// Larger values, non-trivial

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 9

//       30 |
//       31 | test('Larger values, non-trivial', () => {
//     > 32 |   expect(solve([6, 10, 15, 21, 35, 77])).toBe(5);
//          |                                          ^
//       33 | });
//       34 |
//       35 | test('All equal values', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/21_prompt3.test.js:32:42)

//   ● Path with primes and one large even number

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 1
//     Received: 0

//       42 |
//       43 | test('Path with primes and one large even number', () => {
//     > 44 |   expect(solve([3, 5, 2, 7, 1000000])).toBe(1);
//          |                                        ^
//       45 | });
//       46 |
//       47 | test('Path only through specific GCDs', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/21_prompt3.test.js:44:40)

//   ● Big numbers at limits

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 16
//     Received: 8

//       50 |
//       51 | test('Big numbers at limits', () => {
//     > 52 |   expect(solve([1000000, 500000, 250000, 125000, 62500])).toBe(16);
//          |                                                           ^
//       53 | });
//       54 |
//       55 | test('Output is in range [0, MOD)', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/21_prompt3.test.js:52:59)
