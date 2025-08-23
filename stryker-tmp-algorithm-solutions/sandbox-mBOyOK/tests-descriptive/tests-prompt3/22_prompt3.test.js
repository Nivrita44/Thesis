// @ts-nocheck
import { solve } from '../../solutions-descriptive/22.js';

test('single enemy, exactly match health', () => {
  expect(solve(1, 5, 1, [7], [100])).toBe(2);
});

test('single enemy, more attacks allowed, but high health', () => {
  expect(solve(1, 10, 1, [100], [1])).toBe(10);
});

test('multiple enemies, select center p', () => {
  expect(solve(3, 4, 2, [5, 6, 5], [1, 3, 5])).toBe(2);
});

test('multiple enemies, impossible to kill required', () => {
  expect(solve(3, 2, 3, [100, 100, 100], [1, 100, 200])).toBe(-1);
});

test('n=k=1, minimum', () => {
  expect(solve(1, 1, 1, [1], [1])).toBe(1);
});

test('high m, can one-shot multiple', () => {
  expect(solve(2, 1000, 2, [1, 1], [1, 2])).toBe(1);
});

test('spread enemies, impossible to kill k', () => {
  expect(solve(5, 1, 3, [10, 10, 10, 10, 10], [1, 100, 200, 300, 400])).toBe(-1);
});

test('enemies in consecutive positions, large m', () => {
  expect(solve(5, 3, 5, [1, 1, 1, 1, 1], [10, 11, 12, 13, 14])).toBe(1);
});

test('enemies with variable health, require 2', () => {
  expect(solve(4, 2, 2, [3, 4, 2, 1], [1, 2, 3, 4])).toBe(2);
});

test('all enemies in overlapping range', () => {
  expect(solve(3, 5, 3, [5,5,5], [10,12,14])).toBe(1);
});

test('choose p outside any enemy, high m required', () => {
  expect(solve(2, 10, 1, [50, 50], [1, 1000])).toBe(5);
});

test('can kill all with many attacks but only need k', () => {
  expect(solve(4, 100, 2, [100, 100, 100, 100], [1, 2, 3, 100000])).toBe(100);
});

test('no overlap between ranges', () => {
  expect(solve(3, 1, 2, [2,2,2], [1, 10, 20])).toBe(-1);
});

test('large enemy position values', () => {
  expect(solve(2, 2, 2, [2,2], [100000000, 100000002])).toBe(2);
});

test('enemies require maximum hits', () => {
  expect(solve(3, 10, 2, [1000, 500, 900], [1, 10, 20])).toBe(100);
});

test('all possible p are the same', () => {
  expect(solve(3, 3, 3, [3, 3, 3], [10, 13, 16])).toBe(1);
});

test('disjoint enemies, not enough must die', () => {
  expect(solve(4, 2, 3, [10, 10, 10, 10], [1, 1000, 2000, 3000])).toBe(-1);
});

test('large input, all can die in one', () => {
  let n = 1000;
  let h = Array(n).fill(1);
  let x = Array(n).fill(0).map((_,i)=>i+1);
  expect(solve(n, 1000, n, h, x)).toBe(1);
});


// enemies with variable health, require 2

// expect(received).toBe(expected) // Object.is equality

// Expected: 2
// Received: 1

//   34 |
//   35 | test('enemies with variable health, require 2', () => {
// > 36 |   expect(solve(4, 2, 2, [3, 4, 2, 1], [1, 2, 3, 4])).toBe(2);
//      |                                                      ^
//   37 | });
//   38 |
//   39 | test('all enemies in overlapping range', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/22_prompt3.test.js:36:54)

// ● all enemies in overlapping range

// expect(received).toBe(expected) // Object.is equality

// Expected: 1
// Received: 2

//   38 |
//   39 | test('all enemies in overlapping range', () => {
// > 40 |   expect(solve(3, 5, 3, [5,5,5], [10,12,14])).toBe(1);
//      |                                               ^
//   41 | });
//   42 |
//   43 | test('choose p outside any enemy, high m required', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/22_prompt3.test.js:40:47)

// ● can kill all with many attacks but only need k

// expect(received).toBe(expected) // Object.is equality

// Expected: 100
// Received: 2

//   46 |
//   47 | test('can kill all with many attacks but only need k', () => {
// > 48 |   expect(solve(4, 100, 2, [100, 100, 100, 100], [1, 2, 3, 100000])).toBe(100);
//      |                                                                     ^
//   49 | });
//   50 |
//   51 | test('no overlap between ranges', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/22_prompt3.test.js:48:69)

// ● enemies require maximum hits

// expect(received).toBe(expected) // Object.is equality

// Expected: 100
// Received: 143

//   58 |
//   59 | test('enemies require maximum hits', () => {
// > 60 |   expect(solve(3, 10, 2, [1000, 500, 900], [1, 10, 20])).toBe(100);
//      |                                                          ^
//   61 | });
//   62 |
//   63 | test('all possible p are the same', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/22_prompt3.test.js:60:58)

// ● all possible p are the same

// expect(received).toBe(expected) // Object.is equality

// Expected: 1
// Received: -1

//   62 |
//   63 | test('all possible p are the same', () => {
// > 64 |   expect(solve(3, 3, 3, [3, 3, 3], [10, 13, 16])).toBe(1);
//      |                                                   ^
//   65 | });
//   66 |
//   67 | test('disjoint enemies, not enough must die', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/22_prompt3.test.js:64:51)
