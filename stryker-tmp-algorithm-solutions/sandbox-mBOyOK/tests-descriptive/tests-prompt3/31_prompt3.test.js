// @ts-nocheck
import { solve } from '../../solutions-descriptive/31.js';

test('n=1, m=2', () => {
  const n = 1;
  const m = 2;
  const P = [1n, 1n, 0n];
  const k = 1n;
  const result = solve(P, k);
  expect(Array.from(result)).toEqual([1n, 1n, 0n]);
});

test('n=2, m=2', () => {
  const n = 2;
  const m = 2;
  const P = [1n, 2n, 1n, 0n, 0n];
  const k = 2n;
  const result = solve(P, k);
  expect(Array.from(result)).toEqual([1n, 4n, 6n, 4n, 1n]);
});

test('n=2, m=4', () => {
  const n = 2;
  const m = 4;
  const P = [1n, 4n, 6n, 4n, 1n, 0n, 0n, 0n, 0n];
  const k = 2n;
  const result = solve(P, k);
  expect(result[0]).toBe(1n);
  expect(result[4]).not.toBe(undefined);
});

test('n=3, m=2', () => {
  const n = 3;
  const m = 2;
  const P = [1n, 3n, 3n, 1n, 0n, 0n, 0n];
  const k = 3n;
  const result = solve(P, k);
  expect(result[0]).toBe(1n);
  expect(result[3]).toBe(27n);
});

test('all zero polynomial', () => {
  const P = [0n, 0n, 0n];
  const k = 1n;
  const result = solve(P, k);
  expect(result.every(x => x === 0n)).toBe(true);
});

test('identity polynomial k=0', () => {
  const P = [1n, 2n, 3n, 4n];
  const k = 0n;
  const result = solve(P, k);
  expect(result).toEqual([1n, 0n, 0n, 0n]);
});

test('one element polynomial', () => {
  const P = [5n];
  const k = 10n;
  const result = solve(P, k);
  expect(result).toEqual([1n]);
});

test('empty polynomial', () => {
  const P = [];
  const k = 5n;
  const result = solve(P, k);
  expect(result).toEqual([]);
});

test('convolution modulo reduction', () => {
  const P = Array(10).fill(BigInt(1e9));
  const k = 2n;
  const result = solve(P, k);
  expect(result[0]).toBe(1n);
  const mod = BigInt(998244353);
  for(const val of result) {
    expect(val < mod).toBe(true);
  }
});

test('big polynomial and exponent', () => {
  const P = Array(50).fill(1n);
  const k = 10n;
  const result = solve(P, k);
  expect(typeof result[0]).toBe('bigint');
  expect(result.length).toBe(50);
});


// n=3, m=2

// expect(received).toBe(expected) // Object.is equality

// Expected: 27n
// Received: 84n

//   36 |   const result = solve(P, k);
//   37 |   expect(result[0]).toBe(1n);
// > 38 |   expect(result[3]).toBe(27n);
//      |                     ^
//   39 | });
//   40 |
//   41 | test('all zero polynomial', () => {

//   at Object.toBe (tests-descriptive/tests-prompt3/31_prompt3.test.js:38:21)

// ● one element polynomial

// expect(received).toEqual(expected) // deep equality

// - Expected  - 1
// + Received  + 1

//   Array [
// -   1n,
// +   9765625n,
//   ]

//   57 |   const k = 10n;
//   58 |   const result = solve(P, k);
// > 59 |   expect(result).toEqual([1n]);
//      |                  ^
//   60 | });
//   61 |
//   62 | test('empty polynomial', () => {

//   at Object.toEqual (tests-descriptive/tests-prompt3/31_prompt3.test.js:59:18)

// ● empty polynomial

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
//   at Object.solve (tests-descriptive/tests-prompt3/31_prompt3.test.js:65:18)

// ● convolution modulo reduction

// expect(received).toBe(expected) // Object.is equality

// Expected: 1n
// Received: 716070898n

//   71 |   const k = 2n;
//   72 |   const result = solve(P, k);
// > 73 |   expect(result[0]).toBe(1n);
//      |                     ^
//   74 |   const mod = BigInt(998244353);
//   75 |   for(const val of result) {
//   76 |     expect(val < mod).toBe(true);

//   at Object.toBe (tests-descriptive/tests-prompt3/31_prompt3.test.js:73:21)
