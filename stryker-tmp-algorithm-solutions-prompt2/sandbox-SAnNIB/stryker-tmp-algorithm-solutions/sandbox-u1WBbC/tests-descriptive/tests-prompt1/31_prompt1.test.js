// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/31.js'

test('n=1, m=2', () => {
  expect(solve(1,2)).toBe(1)
})

test('n=2, m=2', () => {
  expect(solve(2,2)).toBe(2)
})

test('n=1, m=4', () => {
  expect(solve(1,4)).toBe(6)
})

test('n=2, m=4', () => {
  expect(solve(2,4)).toBe(20)
})

test('n=3, m=2', () => {
  expect(solve(3,2)).toBe(6)
})

test('n=3, m=4', () => {
  expect(solve(3,4)).toBe(180)
})

test('n=10, m=2', () => {
  expect(solve(10,2)).toBe(252)
})

test('n=2, m=6', () => {
  expect(solve(2,6)).toBe(252)
})

test('n=1, m=500', () => {
  expect(solve(1,500)).toBe(795837920)
})

test('n=500, m=2', () => {
  expect(solve(500,2)).toBe(99999877)
})



  // n=1, m=2

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:4:10)

  //   ● n=2, m=2

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:8:10)

  //   ● n=1, m=4

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:12:10)

  //   ● n=2, m=4

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:16:10)

  //   ● n=3, m=2

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:20:10)

  //   ● n=3, m=4

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:24:10)

  //   ● n=10, m=2

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:28:10)

  //   ● n=2, m=6

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:32:10)

  //   ● n=1, m=500

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:36:10)

  //   ● n=500, m=2

  //     TypeError: Cannot mix BigInt and other types, use explicit conversions

  //       20 |     R[0] = 1n;
  //       21 |     while (k > 0) {
  //     > 22 |         if (k % 2n == 1n) {
  //          |              ^
  //       23 |             R = convolution(R, P);
  //       24 |         }
  //       25 |         P = convolution(P, P);

  //       at solve (solutions-descriptive/31.js:22:14)
  //       at Object.solve (tests-descriptive/tests-prompt1/31_prompt1.test.js:40:10)
