// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/28.js';

test('x=0n, y=1n (description case)', () => {
  expect(solve(0n, 1n)).toBe(2n);
});

test('x=6n, y=2n', () => {
  expect(solve(6n, 2n)).toBe(6n);
});

test('x=3n, y=3n (already equal)', () => {
  expect(solve(3n, 3n)).toBe(0n);
});

test('x=13n, y=37n', () => {
  expect(solve(13n, 37n)).toBe(26n);
});

test('x=4238659325782394n, y=12983091057341925n (large random values)', () => {
  expect(solve(4238659325782394n, 12983091057341925n)).toBe(32764n);
});

test('x=0n, y=0n (both zero)', () => {
  expect(solve(0n, 0n)).toBe(0n);
});

test('x=100000000000000000n, y=0n (upper bound)', () => {
  expect(solve(100000000000000000n, 0n)).toBe(262144n);
});

test('x=1n, y=2n (small consecutive numbers)', () => {
  expect(solve(1n, 2n)).toBe(2n);
});

test('x=1n, y=100000000000000000n (extreme difference)', () => {
  expect(solve(1n, 100000000000000000n)).toBe(262144n);
});


// x=100000000000000000n, y=0n (upper bound)

// expect(received).toBe(expected) // Object.is equality

// Expected: 262144n
// Received: 3582n

//   26 |
//   27 | test('x=100000000000000000n, y=0n (upper bound)', () => {
// > 28 |   expect(solve(100000000000000000n, 0n)).toBe(262144n);
//      |                                          ^
//   29 | });
//   30 |
//   31 | test('x=1n, y=2n (small consecutive numbers)', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/28_prompt3.test.js:28:42)

// ● x=1n, y=100000000000000000n (extreme difference)

// expect(received).toBe(expected) // Object.is equality

// Expected: 262144n
// Received: 3070n

//   34 |
//   35 | test('x=1n, y=100000000000000000n (extreme difference)', () => {
// > 36 |   expect(solve(1n, 100000000000000000n)).toBe(262144n);
//      |                                          ^
//   37 | });

//   at Object.toBe (tests-descriptive/tests-prompt3/28_prompt3.test.js:36:42)
