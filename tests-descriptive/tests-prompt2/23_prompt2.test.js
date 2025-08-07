import { solve } from '../../solutions-descriptive/23.js';

test('simple case, all zeros', () => {
  expect(solve(0n, 0n, 0n, 0n)).toBe(0n);
});

test('single value range, zeros', () => {
  expect(solve(0n, 0n, 1n, 2n)).toBe(0n);
});

test('small range, small bitIndex, xorConstant zero', () => {
  expect(solve(1n, 3n, 0n, 0n)).toBe(1n ^ 2n ^ 3n);
});

test('small range, nonzero xorConstant', () => {
  expect(typeof solve(1n, 3n, 1n, 2n)).toBe('bigint');
});

test('full byte, bitIndex 0, xorConstant 0', () => {
  let expected = 0n;
  for (let i = 0n; i <= 7n; i++) expected ^= i;
  expect(solve(0n, 7n, 0n, 0n)).toBe(expected);
});

test('edge: reverse range (left > right)', () => {
  expect(solve(5n, 3n, 2n, 1n)).toBe(0n);
});

test('large values', () => {
  let val = solve(1000000n, 1000010n, 3n, 5n);
  expect(typeof val).toBe('bigint');
});

test('xorConstant larger than left/right', () => {
  expect(typeof solve(1n, 2n, 1n, 10n)).toBe('bigint');
});

test('bitIndex shifting full limb', () => {
  let val = solve(12n, 20n, 4n, 3n);
  expect(typeof val).toBe('bigint');
});

test('edge: negative xorConstant', () => {
  let val = solve(1n, 10n, 2n, -3n);
  expect(typeof val).toBe('bigint');
});

test('edge: negative bitIndex', () => {
  let val = solve(2n, 6n, -1n, 4n);
  expect(typeof val).toBe('bigint');
});


// edge: reverse range (left > right)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 0n
//     Received: 4n

//       24 |
//       25 | test('edge: reverse range (left > right)', () => {
//     > 26 |   expect(solve(5n, 3n, 2n, 1n)).toBe(0n);
//          |                                 ^
//       27 | });
//       28 |
//       29 | test('large values', () => {

//       at Object.toBe (tests-descriptive/tests-prompt2/23_prompt2.test.js:26:33)

//   ● edge: negative bitIndex

//     RangeError: Division by zero

//       11 |       limit -= xorConstant + 1n;
//       12 |       if (limit >= 0n) {
//     > 13 |           let shiftedCount = limit / (1n << bitIndex);
//          |                                   ^
//       14 |           shiftedCount += 1n;
//       15 |
//       16 |

//       at computeXor (solutions-descriptive/23.js:13:35)
//       at computeXor (solutions-descriptive/23.js:30:20)
//       at Object.solve (tests-descriptive/tests-prompt2/23_prompt2.test.js:49:13)
