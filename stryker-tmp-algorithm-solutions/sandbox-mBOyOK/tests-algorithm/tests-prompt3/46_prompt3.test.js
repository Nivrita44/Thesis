// @ts-nocheck
import { solve } from '../../../solutions-algorithm/46.js';

test('basic small case: n=1, no manager', () => {
  expect(solve(1, [-1])).toBe(1);
});

test('single chain', () => {
  expect(solve(4, [-1, 1, 2, 3])).toBe(4);
});

test('two roots', () => {
  expect(solve(3, [-1, -1, 1])).toBe(2);
});

test('provided sample 1', () => {
  expect(solve(5, [-1, 1, 2, 1, -1])).toBe(3);
});

test('provided sample 2', () => {
  expect(solve(12, [-1, 1, 2, 3, -1, 5, 6, 7, -1, 9, 10, 11])).toBe(4);
});

test('provided sample 3', () => {
  expect(solve(6, [-1, 1, 1, 1, 2, 3])).toBe(3);
});

test('multiple roots with varying depths', () => {
  expect(solve(7, [-1, -1, 1, 2, 2, 3, 5])).toBe(4);
});

test('all managers have no immediate manager (all roots)', () => {
  expect(solve(5, [-1, -1, -1, -1, -1])).toBe(1);
});

test('star structure: root manages everyone', () => {
  expect(solve(5, [-1, 1, 1, 1, 1])).toBe(2);
});

test('deep branch and shallow branch', () => {
  expect(solve(6, [-1, 1, 2, -1, 4, 4])).toBe(3);
});

test('manager is always previous employee (linear chain, n=2000)', () => {
  const n=2000;
  const managers=[-1];
  for(let i=2;i<=n;i++) managers.push(i-1);
  expect(solve(n, managers)).toBe(2000);
});

test('root with all direct children', () => {
  const n=2000;
  const managers = [-1];
  for(let i=2;i<=n;i++) managers.push(1);
  expect(solve(n, managers)).toBe(2);
});

test('deep tree with one branch longer', () => {
  expect(solve(6, [-1, 1, 2, 2, 4, 5])).toBe(5);
});

test('edge case: two separate long chains', () => {
  expect(solve(8, [-1, 1, 2, 3, -1, 5, 6, 7])).toBe(4);
});

test('edge case: pi = n (last employee is manager, but never immediate manager of themself)', () => {
  expect(solve(3, [-1, 3, 1])).toBe(2);
});

test('edge case: manager number gaps', () => {
  expect(solve(5, [-1, 1, 4, -1, 4])).toBe(3);
});


// multiple roots with varying depths

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 4
//     Received: 3

//       26 |
//       27 | test('multiple roots with varying depths', () => {
//     > 28 |   expect(solve(7, [-1, -1, 1, 2, 2, 3, 5])).toBe(4);
//          |                                             ^
//       29 | });
//       30 |
//       31 | test('all managers have no immediate manager (all roots)', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/46_prompt3.test.js:28:45)

//   ● edge case: pi = n (last employee is manager, but never immediate manager of themself)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 2
//     Received: 3

//       64 |
//       65 | test('edge case: pi = n (last employee is manager, but never immediate manager of themself)', () => {
//     > 66 |   expect(solve(3, [-1, 3, 1])).toBe(2);
//          |                                ^
//       67 | });
//       68 |
//       69 | test('edge case: manager number gaps', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/46_prompt3.test.js:66:32)

//   ● edge case: manager number gaps

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 3
//     Received: 2

//       68 |
//       69 | test('edge case: manager number gaps', () => {
//     > 70 |   expect(solve(5, [-1, 1, 4, -1, 4])).toBe(3);
//          |                                       ^
//       71 | });

//       at Object.toBe (tests-algorithm/tests-prompt3/46_prompt3.test.js:70:39)
