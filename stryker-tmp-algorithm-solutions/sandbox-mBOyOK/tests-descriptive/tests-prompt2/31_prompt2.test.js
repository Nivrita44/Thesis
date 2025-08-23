// @ts-nocheck
import { solve } from '../../solutions-descriptive/31.js';

test('solve with P = [1n, 2n], k = 1n', () => {
  expect(solve([1n, 2n], 1n)).toEqual([1n, 2n]);
});

test('solve with P = [1n, 2n], k = 2n', () => {
  expect(solve([1n, 2n], 2n)).toEqual([1n, 4n]);
});

test('solve with P = [1n, 2n, 3n], k = 1n', () => {
  expect(solve([1n, 2n, 3n], 1n)).toEqual([1n, 2n, 3n]);
});

test('solve with P = [1n, 2n, 3n], k = 0n', () => {
  expect(solve([1n, 2n, 3n], 0n)).toEqual([1n, 0n, 0n]);
});

test('solve with P = [2n, 0n, 1n], k = 2n', () => {
  expect(solve([2n, 0n, 1n], 2n)).toEqual([1n, 0n, 5n]);
});

test('solve with large k for wrap around modulo', () => {
  const P = [998244352n, 2n, 3n];
  expect(solve(P, 2n)).toEqual([
    1n,
    (2n * 998244352n * 2n) % 998244353n,
    (998244352n * 998244352n + 2n * 2n + 3n * 998244352n) % 998244353n,
  ]);
});

test('solve with all ones P, k = 3n', () => {
  expect(solve([1n, 1n, 1n], 3n)).toEqual([1n, 3n, 6n]);
});

test('solve with P of length 1, k = 5n', () => {
  expect(solve([2n], 5n)).toEqual([1n]);
});

test('solve with larger P and k', () => {
  expect(solve([1n, 1n, 1n, 1n], 2n)).toEqual([1n, 2n, 3n, 4n]);
});

test('solve with P = [1n, 0n, 0n, 0n], k = 3n', () => {
  expect(solve([1n, 0n, 0n, 0n], 3n)).toEqual([1n, 0n, 0n, 0n]);
});

test('solve with zero coefficients in P', () => {
  expect(solve([0n, 2n, 0n, 3n], 2n)).toEqual([1n, 0n, 4n, 0n]);
});

test('solve with k = 0n and empty P', () => {
  expect(solve([], 0n)).toEqual([]);
});

test('solve with k > 0n and empty P', () => {
  expect(solve([], 2n)).toEqual([]);
});

test('solve with very large k', () => {
  expect(solve([1n, 1n], 1000000n)[0]).toEqual(1n);
});


// solve with P = [2n, 0n, 1n], k = 2n

// expect(received).toEqual(expected) // deep equality

// - Expected  - 2
// + Received  + 2

//   Array [
// -   1n,
// +   4n,
//     0n,
// -   5n,
// +   4n,
//   ]

//   18 |
//   19 | test('solve with P = [2n, 0n, 1n], k = 2n', () => {
// > 20 |   expect(solve([2n, 0n, 1n], 2n)).toEqual([1n, 0n, 5n]);
//      |                                   ^
//   21 | });
//   22 |
//   23 | test('solve with large k for wrap around modulo', () => {

//   at Object.toEqual (tests-descriptive/tests-prompt2/31_prompt2.test.js:20:35)

// ● solve with large k for wrap around modulo

// expect(received).toEqual(expected) // deep equality

// - Expected  - 1
// + Received  + 1

//   Array [
//     1n,
//     998244349n,
// -   2n,
// +   998244351n,
//   ]

//   23 | test('solve with large k for wrap around modulo', () => {
//   24 |   const P = [998244352n, 2n, 3n];
// > 25 |   expect(solve(P, 2n)).toEqual([
//      |                        ^
//   26 |     1n,
//   27 |     (2n * 998244352n * 2n) % 998244353n,
//   28 |     (998244352n * 998244352n + 2n * 2n + 3n * 998244352n) % 998244353n,

//   at Object.toEqual (tests-descriptive/tests-prompt2/31_prompt2.test.js:25:24)

// ● solve with P of length 1, k = 5n

// expect(received).toEqual(expected) // deep equality

// - Expected  - 1
// + Received  + 1

//   Array [
// -   1n,
// +   32n,
//   ]

//   35 |
//   36 | test('solve with P of length 1, k = 5n', () => {
// > 37 |   expect(solve([2n], 5n)).toEqual([1n]);
//      |                           ^
//   38 | });
//   39 |
//   40 | test('solve with larger P and k', () => {

//   at Object.toEqual (tests-descriptive/tests-prompt2/31_prompt2.test.js:37:27)

// ● solve with zero coefficients in P

// expect(received).toEqual(expected) // deep equality

// - Expected  - 1
// + Received  + 1

//   Array [
// -   1n,
// +   0n,
//     0n,
//     4n,
//     0n,
//   ]

//   47 |
//   48 | test('solve with zero coefficients in P', () => {
// > 49 |   expect(solve([0n, 2n, 0n, 3n], 2n)).toEqual([1n, 0n, 4n, 0n]);
//      |                                       ^
//   50 | });
//   51 |
//   52 | test('solve with k = 0n and empty P', () => {

//   at Object.toEqual (tests-descriptive/tests-prompt2/31_prompt2.test.js:49:39)

// ● solve with k = 0n and empty P

// expect(received).toEqual(expected) // deep equality

// - Expected  - 1
// + Received  + 3

// - Array []
// + Array [
// +   1n,
// + ]

//   51 |
//   52 | test('solve with k = 0n and empty P', () => {
// > 53 |   expect(solve([], 0n)).toEqual([]);
//      |                         ^
//   54 | });
//   55 |
//   56 | test('solve with k > 0n and empty P', () => {

//   at Object.toEqual (tests-descriptive/tests-prompt2/31_prompt2.test.js:53:25)

// ● solve with k > 0n and empty P

// TypeError: Cannot mix BigInt and other types, use explicit conversions

//    7 |         let suma = 0n;
//    8 |         for (let j = 0; j <= i; j++) {
// >  9 |             suma += P[j] * Q[i - j];
//      |                         ^
//   10 |             suma %= MOD;
//   11 |         }
//   12 |         R[i] = suma;

//   at convolution (solutions-descriptive/31.js:9:25)
//   at convolution (solutions-descriptive/31.js:23:17)
//   at Object.solve (tests-descriptive/tests-prompt2/31_prompt2.test.js:57:10)