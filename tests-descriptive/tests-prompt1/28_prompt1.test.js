import { solve } from '../../solutions-descriptive/28.js'

test('example from description', () => {
  expect(solve(8n, 3n)).toBe(10n);
});

test('edge case: both numbers are zero', () => {
  expect(solve(0n, 0n)).toBe(0n);
});

test('upper-bound large input', () => {
  expect(solve(100000000000000000n, 1n)).toBe(100000000000000000n);
});

test('minimal case: one number is zero, other is small', () => {
  expect(solve(0n, 1n)).toBe(1n);
});

test('corner case: both numbers are equal and large', () => {
  expect(solve(123456789123456789n, 123456789123456789n)).toBe(0n);
});

test('random valid case, close numbers', () => {
  expect(solve(10n, 8n)).toBe(2n);
});

test('random valid case, one is double the other', () => {
  expect(solve(16n, 8n)).toBe(2n);
});

test('random valid case, numbers require two steps', () => {
  expect(solve(15n, 7n)).toBe(6n);
});

test('random valid case, numbers are odd and even', () => {
  expect(solve(7n, 2n)).toBe(5n);
});


// upper-bound large input

// expect(received).toBe(expected) // Object.is equality

// Expected: 100000000000000000n
// Received: 3070n

//   10 |
//   11 | test('upper-bound large input', () => {
// > 12 |   expect(solve(100000000000000000n, 1n)).toBe(100000000000000000n);
//      |                                          ^
//   13 | });
//   14 |
//   15 | test('minimal case: one number is zero, other is small', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/28_prompt1.test.js:12:42)

// ● minimal case: one number is zero, other is small

// expect(received).toBe(expected) // Object.is equality

// Expected: 1n
// Received: 2n

//   14 |
//   15 | test('minimal case: one number is zero, other is small', () => {
// > 16 |   expect(solve(0n, 1n)).toBe(1n);
//      |                         ^
//   17 | });
//   18 |
//   19 | test('corner case: both numbers are equal and large', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/28_prompt1.test.js:16:25)

// ● random valid case, close numbers

// expect(received).toBe(expected) // Object.is equality

// Expected: 2n
// Received: 14n

//   22 |
//   23 | test('random valid case, close numbers', () => {
// > 24 |   expect(solve(10n, 8n)).toBe(2n);
//      |                          ^
//   25 | });
//   26 |
//   27 | test('random valid case, one is double the other', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/28_prompt1.test.js:24:26)

// ● random valid case, numbers require two steps

// expect(received).toBe(expected) // Object.is equality

// Expected: 6n
// Received: 2n

//   30 |
//   31 | test('random valid case, numbers require two steps', () => {
// > 32 |   expect(solve(15n, 7n)).toBe(6n);
//      |                          ^
//   33 | });
//   34 |
//   35 | test('random valid case, numbers are odd and even', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/28_prompt1.test.js:32:26)

// ● random valid case, numbers are odd and even

// expect(received).toBe(expected) // Object.is equality

// Expected: 5n
// Received: 6n

//   34 |
//   35 | test('random valid case, numbers are odd and even', () => {
// > 36 |   expect(solve(7n, 2n)).toBe(5n);
//      |                         ^
//   37 | });

//   at Object.toBe (tests-descriptive/tests-prompt1/28_prompt1.test.js:36:25)