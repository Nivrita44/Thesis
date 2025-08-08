import { solve } from '../../solutions-descriptive/28.js';

test('x and y are equal and small', () => {
  expect(solve(3n, 3n)).toBe(0n);
});

test('x is less than y, simple case', () => {
  expect(solve(0n, 1n)).toBe(2n);
});

test('x is greater than y, simple case', () => {
  expect(solve(6n, 2n)).toBe(6n);
});

test('both x and y are zero', () => {
  expect(solve(0n, 0n)).toBe(0n);
});

test('mid-sized numbers', () => {
  expect(solve(13n, 37n)).toBe(26n);
});

test('large numbers within 53 bits', () => {
  expect(solve(4238659325782394n, 12983091057341925n)).toBe(32764n);
});

test('very large numbers at upper limit', () => {
  expect(
    solve(
      2n ** 60n - 1n,
      2n ** 59n
    )
  ).toBe(1152921504606846975n);
});

test('x is one, y is large', () => {
  expect(
    solve(
      1n,
      2n ** 40n
    )
  ).toBe(1099511627776n);
});

test('x is large, y is one', () => {
  expect(
    solve(
      2n ** 40n,
      1n
    )
  ).toBe(1099511627776n);
});

test('x and y are unrelated large powers of two', () => {
  expect(
    solve(
      2n ** 50n,
      2n ** 48n
    )
  ).toBe(281474976710656n);
});


// very large numbers at upper limit

// expect(received).toBe(expected) // Object.is equality

// Expected: 1152921504606846975n
// Received: 65530n

//   31 |       2n ** 59n
//   32 |     )
// > 33 |   ).toBe(1152921504606846975n);
//      |     ^
//   34 | });
//   35 |
//   36 | test('x is one, y is large', () => {

//   at Object.toBe (tests-descriptive/tests-prompt2/28_prompt2.test.js:33:5)

// ● x is one, y is large

// expect(received).toBe(expected) // Object.is equality

// Expected: 1099511627776n
// Received: 990n

//   40 |       2n ** 40n
//   41 |     )
// > 42 |   ).toBe(1099511627776n);
//      |     ^
//   43 | });
//   44 |
//   45 | test('x is large, y is one', () => {

//   at Object.toBe (tests-descriptive/tests-prompt2/28_prompt2.test.js:42:5)

// ● x is large, y is one

// expect(received).toBe(expected) // Object.is equality

// Expected: 1099511627776n
// Received: 990n

//   49 |       1n
//   50 |     )
// > 51 |   ).toBe(1099511627776n);
//      |     ^
//   52 | });
//   53 |
//   54 | test('x and y are unrelated large powers of two', () => {

//   at Object.toBe (tests-descriptive/tests-prompt2/28_prompt2.test.js:51:5)

// ● x and y are unrelated large powers of two

// expect(received).toBe(expected) // Object.is equality

// Expected: 281474976710656n
// Received: 4n

//   58 |       2n ** 48n
//   59 |     )
// > 60 |   ).toBe(281474976710656n);
//      |     ^
//   61 | });

//   at Object.toBe (tests-descriptive/tests-prompt2/28_prompt2.test.js:60:5)