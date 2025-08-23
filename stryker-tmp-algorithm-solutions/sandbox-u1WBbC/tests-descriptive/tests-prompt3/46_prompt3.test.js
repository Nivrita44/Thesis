// @ts-nocheck
import { solve } from '../../solutions-descriptive/46.js';

test('n=1 single vertex', () => {
  expect(solve(1, [17])).toBe('No');
});

test('All equal values, n=2', () => {
  expect(solve(2, [3,3])).toBe('No');
});

test('Edge case: two different values not possible', () => {
  expect(solve(2, [4,5])).toBe('No');
});

test('Small possible graph n=3 with possible solution', () => {
  expect(typeof solve(3, [1,4,7])).toBe('string');
});

test('Small graph, all values odd, impossible', () => {
  expect(solve(3, [7,11,13])).toBe('No');
});

test('Simple possible graph', () => {
  const res = solve(3, [1,2,3]);
  expect(res === 'No' || /yes/i.test(res)).toBe(true);
});

test('Larger n, all different, difficult', () => {
  const res = solve(5, [10, 21, 43, 11, 10]);
  expect(res === 'No' || /yes/i.test(res)).toBe(true);
});

test('Larger n, all the same', () => {
  expect(solve(6, [5,5,5,5,5,5])).toBe('No');
});

test('Possible, values can be paired by simple x divisor', () => {
  const res = solve(4, [2,4,6,8]);
  expect(res === 'No' || /yes/i.test(res)).toBe(true);
});

test('Edge: n=2, big numbers no connect', () => {
  expect(solve(2, [1000000000, 999999999])).toBe('No');
});

test('Potentially possible, two repeated values but some pairs', () => {
  const res = solve(4, [7,14,7,9]);
  expect(res === 'No' || /yes/i.test(res)).toBe(true);
});




// n=1 single vertex

// expect(received).toBe(expected) // Object.is equality

// Expected: "No"
// Received: 17

//   2 |
//   3 | test('n=1 single vertex', () => {
// > 4 |   expect(solve(1, [17])).toBe('No');
//     |                          ^
//   5 | });
//   6 |
//   7 | test('All equal values, n=2', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:4:26)

// ● All equal values, n=2

// expect(received).toBe(expected) // Object.is equality

// Expected: "No"
// Received: 3

//    6 |
//    7 | test('All equal values, n=2', () => {
// >  8 |   expect(solve(2, [3,3])).toBe('No');
//      |                           ^
//    9 | });
//   10 |
//   11 | test('Edge case: two different values not possible', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:8:27)

// ● Edge case: two different values not possible

// expect(received).toBe(expected) // Object.is equality

// Expected: "No"
// Received: 5

//   10 |
//   11 | test('Edge case: two different values not possible', () => {
// > 12 |   expect(solve(2, [4,5])).toBe('No');
//      |                           ^
//   13 | });
//   14 |
//   15 | test('Small possible graph n=3 with possible solution', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:12:27)

// ● Small possible graph n=3 with possible solution

// expect(received).toBe(expected) // Object.is equality

// Expected: "string"
// Received: "number"

//   14 |
//   15 | test('Small possible graph n=3 with possible solution', () => {
// > 16 |   expect(typeof solve(3, [1,4,7])).toBe('string');
//      |                                    ^
//   17 | });
//   18 |
//   19 | test('Small graph, all values odd, impossible', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:16:36)

// ● Small graph, all values odd, impossible

// expect(received).toBe(expected) // Object.is equality

// Expected: "No"
// Received: 15

//   18 |
//   19 | test('Small graph, all values odd, impossible', () => {
// > 20 |   expect(solve(3, [7,11,13])).toBe('No');
//      |                               ^
//   21 | });
//   22 |
//   23 | test('Simple possible graph', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:20:31)

// ● Simple possible graph

// expect(received).toBe(expected) // Object.is equality

// Expected: true
// Received: false

//   23 | test('Simple possible graph', () => {
//   24 |   const res = solve(3, [1,2,3]);
// > 25 |   expect(res === 'No' || /yes/i.test(res)).toBe(true);
//      |                                            ^
//   26 | });
//   27 |
//   28 | test('Larger n, all different, difficult', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:25:44)

// ● Larger n, all different, difficult

// expect(received).toBe(expected) // Object.is equality

// Expected: true
// Received: false

//   28 | test('Larger n, all different, difficult', () => {
//   29 |   const res = solve(5, [10, 21, 43, 11, 10]);
// > 30 |   expect(res === 'No' || /yes/i.test(res)).toBe(true);
//      |                                            ^
//   31 | });
//   32 |
//   33 | test('Larger n, all the same', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:30:44)

// ● Larger n, all the same

// expect(received).toBe(expected) // Object.is equality

// Expected: "No"
// Received: 5

//   32 |
//   33 | test('Larger n, all the same', () => {
// > 34 |   expect(solve(6, [5,5,5,5,5,5])).toBe('No');
//      |                                   ^
//   35 | });
//   36 |
//   37 | test('Possible, values can be paired by simple x divisor', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:34:35)

// ● Possible, values can be paired by simple x divisor

// expect(received).toBe(expected) // Object.is equality

// Expected: true
// Received: false

//   37 | test('Possible, values can be paired by simple x divisor', () => {
//   38 |   const res = solve(4, [2,4,6,8]);
// > 39 |   expect(res === 'No' || /yes/i.test(res)).toBe(true);
//      |                                            ^
//   40 | });
//   41 |
//   42 | test('Edge: n=2, big numbers no connect', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:39:44)

// ● Edge: n=2, big numbers no connect

// expect(received).toBe(expected) // Object.is equality

// - Expected  - 1
// + Received  + 2

// - No
// + Yes
// + 2 1

//   41 |
//   42 | test('Edge: n=2, big numbers no connect', () => {
// > 43 |   expect(solve(2, [1000000000, 999999999])).toBe('No');
//      |                                             ^
//   44 | });
//   45 |
//   46 | test('Potentially possible, two repeated values but some pairs', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:43:45)

// ● Potentially possible, two repeated values but some pairs

// expect(received).toBe(expected) // Object.is equality

// Expected: true
// Received: false

//   46 | test('Potentially possible, two repeated values but some pairs', () => {
//   47 |   const res = solve(4, [7,14,7,9]);
// > 48 |   expect(res === 'No' || /yes/i.test(res)).toBe(true);
//      |                                            ^
//   49 | });

//   at Object.toBe (tests-descriptive/tests-prompt3/46_prompt3.test.js:48:44)
