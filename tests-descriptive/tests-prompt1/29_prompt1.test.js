import { solve } from '../../solutions-descriptive/29.js';

test('single element, minimal k', () => {
  expect(solve(1, 1, [10])).toBe('YES');
});

test('single element, excessive k', () => {
  expect(solve(1, 5, [7])).toBe('NO');
});

test('basic two elements, k=2', () => {
  expect(solve(2, 2, [5, 9])).toBe('YES');
});

test('basic three elements, k=3', () => {
  expect(solve(3, 3, [1, 2, 4])).toBe('YES');
});

test('n=2, k=3, two elements', () => {
  expect(solve(2, 3, [2, 4])).toBe('YES');
});

test('n=3, k=5, three elements', () => {
  expect(solve(3, 5, [2, 4, 8])).toBe('YES');
});

test('n=3, k=2, impossible (k < n)', () => {
  expect(solve(3, 2, [1, 2, 3])).toBe('NO');
});

test('Distinct elements, minimum k possible', () => {
  expect(solve(4, 4, [1, 2, 3, 4])).toBe('YES');
});

test('Distinct elements, k exceeds n', () => {
  expect(solve(4, 7, [1, 2, 3, 4])).toBe('YES');
});

test('n=2, k=1, impossible', () => {
  expect(solve(2, 1, [3, 5])).toBe('NO');
});

test('n=5, k=10', () => {
  expect(solve(5, 10, [1, 3, 6, 7, 10])).toBe('YES');
});

test('Large n, n=k', () => {
  const arr = Array.from({length: 100000}, (_, i) => i + 1);
  expect(solve(100000, 100000, arr)).toBe('YES');
});

test('Large n, k >> n', () => {
  const arr = Array.from({length: 100000}, (_, i) => i + 1);
  expect(solve(100000, 1000000, arr)).toBe('YES');
});

test('All elements are different, n=10, k=10', () => {
  expect(solve(10, 10, [1,2,3,4,5,6,7,8,9,10])).toBe('YES');
});

test('Impossible k < n', () => {
  expect(solve(5, 4, [1,2,3,4,5])).toBe('NO');
});

test('Impossibility due to high k', () => {
  expect(solve(1, 10, [42])).toBe('NO');
});

test('Array with large values, minimal k', () => {
  expect(solve(2, 2, [1000000000, 1])).toBe('YES');
});

test('Array with large values, excessive k', () => {
  expect(solve(2, 1000000, [1000000000, 1])).toBe('YES');
});




// ● n=3, k=2, impossible (k < n)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "NO"
//     Received: "YES"

//       26 |
//       27 | test('n=3, k=2, impossible (k < n)', () => {
//     > 28 |   expect(solve(3, 2, [1, 2, 3])).toBe('NO');
//          |                                  ^
//       29 | });
//       30 |
//       31 | test('Distinct elements, minimum k possible', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/29_prompt1.test.js:28:34)

//   ● n=2, k=1, impossible

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "NO"
//     Received: "YES"

//       38 |
//       39 | test('n=2, k=1, impossible', () => {
//     > 40 |   expect(solve(2, 1, [3, 5])).toBe('NO');
//          |                               ^
//       41 | });
//       42 |
//       43 | test('n=5, k=10', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/29_prompt1.test.js:40:31)

//   ● n=5, k=10

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "YES"
//     Received: "NO"

//       42 |
//       43 | test('n=5, k=10', () => {
//     > 44 |   expect(solve(5, 10, [1, 3, 6, 7, 10])).toBe('YES');
//          |                                          ^
//       45 | });
//       46 |
//       47 | test('Large n, n=k', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/29_prompt1.test.js:44:42)

//   ● Large n, k >> n

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "YES"
//     Received: "NO"

//       52 | test('Large n, k >> n', () => {
//       53 |   const arr = Array.from({length: 100000}, (_, i) => i + 1);
//     > 54 |   expect(solve(100000, 1000000, arr)).toBe('YES');
//          |                                       ^
//       55 | });
//       56 |
//       57 | test('All elements are different, n=10, k=10', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/29_prompt1.test.js:54:39)

//   ● Impossible k < n

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "NO"
//     Received: "YES"

//       60 |
//       61 | test('Impossible k < n', () => {
//     > 62 |   expect(solve(5, 4, [1,2,3,4,5])).toBe('NO');
//          |                                    ^
//       63 | });
//       64 |
//       65 | test('Impossibility due to high k', () => {

//       at Object.toBe (tests-descriptive/tests-prompt1/29_prompt1.test.js:62:36)

//   ● Array with large values, excessive k

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "YES"
//     Received: "NO"

//       72 |
//       73 | test('Array with large values, excessive k', () => {
//     > 74 |   expect(solve(2, 1000000, [1000000000, 1])).toBe('YES');
//          |                                              ^
//       75 | });

//       at Object.toBe (tests-descriptive/tests-prompt1/29_prompt1.test.js:74:46)