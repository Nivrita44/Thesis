// @ts-nocheck
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

test('n=5 with single swap needed', () => {
  expect(solve(5, [1,2,3,5,4])).toBe(3);
});

test('n=6, all odd numbers first', () => {
  expect(solve(6, [1,3,5,2,4,6])).toBe(3);
});

test('n=6, all even then odd', () => {
  expect(solve(6, [2,4,6,1,3,5])).toBe(3);
});

test('n=7, sandwich', () => {
  expect(solve(7, [1,7,2,6,3,5,4])).toBe(2);
});

test('n=100000 presorted', () => {
  const arr = Array.from({length: 100000}, (_, i) => i+1);
  expect(solve(100000, arr)).toBe(100000);
});

test('n=100000 reversed', () => {
  const arr = Array.from({length: 100000}, (_, i) => 100000-i);
  expect(solve(100000, arr)).toBe(1);
});


  // n=5 with single swap needed

  //     expect(received).toBe(expected) // Object.is equality

  //     Expected: 3
  //     Received: 4

  //       42 |
  //       43 | test('n=5 with single swap needed', () => {
  //     > 44 |   expect(solve(5, [1,2,3,5,4])).toBe(3);
  //          |                                 ^
  //       45 | });
  //       46 |
  //       47 | test('n=6, all odd numbers first', () => {

  //       at Object.toBe (tests-algorithm/tests-prompt1/42_prompt1.test.js:44:33)

  //   ● n=6, all odd numbers first

  //     expect(received).toBe(expected) // Object.is equality

  //     Expected: 3
  //     Received: 4

  //       46 |
  //       47 | test('n=6, all odd numbers first', () => {
  //     > 48 |   expect(solve(6, [1,3,5,2,4,6])).toBe(3);
  //          |                                   ^
  //       49 | });
  //       50 |
  //       51 | test('n=6, all even then odd', () => {

  //       at Object.toBe (tests-algorithm/tests-prompt1/42_prompt1.test.js:48:35)

  //   ● n=7, sandwich

  //     expect(received).toBe(expected) // Object.is equality

  //     Expected: 2
  //     Received: 4

  //       54 |
  //       55 | test('n=7, sandwich', () => {
  //     > 56 |   expect(solve(7, [1,7,2,6,3,5,4])).toBe(2);
  //          |                                     ^
  //       57 | });
  //       58 |
  //       59 | test('n=100000 presorted', () => {

  //       at Object.toBe (tests-algorithm/tests-prompt1/42_prompt1.test.js:56:37)
