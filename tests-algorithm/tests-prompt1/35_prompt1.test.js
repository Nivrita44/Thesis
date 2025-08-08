import { solve } from '../../solutions-algorithm/35.js';

test('Example 1: n=10, k=2', () => {
  expect(solve(10, 2)).toBe(2);
});

test('Example 2: n=15, k=3', () => {
  expect(solve(15, 3)).toBe(3);
});

test('Edge Case: n=1, k=1', () => {
  expect(solve(1, 1)).toBe(1);
});

test('Edge Case: n=1, k=10^9', () => {
  expect(solve(1, 1000000000)).toBe(1);
});

test('Edge Case: n=10^9, k=1', () => {
  expect(solve(1000000000, 1)).toBe(1000000000);
});

test('Large: n=100, k=10', () => {
  expect(solve(100, 10)).toBe(2);
});

test('Large: n=1000000, k=2', () => {
  expect(solve(1000000, 2)).toBe(7);
});

test('n=k', () => {
  expect(solve(7, 7)).toBe(1);
});

test('n=k+1', () => {
  expect(solve(8, 7)).toBe(2);
});

test('n=0, k=5', () => {
  expect(solve(0, 5)).toBe(0);
});


// Example 1: n=10, k=2

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:4:10)

// ● Example 2: n=15, k=3

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:8:10)

// ● Edge Case: n=1, k=1

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:12:10)

// ● Edge Case: n=1, k=10^9

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:16:10)

// ● Edge Case: n=10^9, k=1

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:20:10)

// ● Large: n=100, k=10

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:24:10)

// ● Large: n=1000000, k=2

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:28:10)

// ● n=k

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:32:10)

// ● n=k+1

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:36:10)

// ● n=0, k=5

// TypeError: cases.map is not a function

//   25 |  */
//   26 | export function solve(cases) {
// > 27 |     return cases.map(([num, k]) => calculation(num, k));
//      |                  ^
//   28 | }
//   29 |
//   30 | // ✅ Test function

//   at map (solutions-algorithm/35.js:27:18)
//   at Object.solve (tests-algorithm/tests-prompt1/35_prompt1.test.js:40:10)