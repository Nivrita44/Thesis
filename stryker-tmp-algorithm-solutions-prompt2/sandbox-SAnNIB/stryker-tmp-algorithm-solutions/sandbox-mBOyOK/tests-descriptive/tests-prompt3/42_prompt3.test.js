// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/42.js';

test('Example 1', () => {
  expect(solve(2, [1n, 2n], [5000n, 5000n])).toBe(500000007);
});

test('Both elements always included, XORed', () => {
  expect(solve(2, [1n, 2n], [10000n, 10000n])).toBe(9);
});

test('Single element, always included', () => {
  expect(solve(1, [1n], [10000n])).toBe(1);
});

test('Single element, never included (but pi>=1 so must be included sometimes)', () => {
  expect(solve(1, [1023n], [1n])).toBe(102043608);
});

test('Edge: All probabilities minimum', () => {
  expect(solve(3, [512n, 256n, 128n], [1n, 1n, 1n])).toBe(642302723);
});

test('Edge: All probabilities maximum', () => {
  expect(solve(3, [7n, 15n, 31n], [10000n, 10000n, 10000n])).toBe(3249);
});

test('Random input, mixed probabilities', () => {
  expect(solve(4, [13n, 28n, 37n, 60n], [7000n, 3000n, 9000n, 6500n])).toBe(236386616);
});

test('Duplicates in input', () => {
  expect(solve(5, [15n, 15n, 15n, 15n, 15n], [1000n, 1000n, 1000n, 1000n, 1000n])).toBe(795245146);
});

test('Large n with same values and high p', () => {
  const n = 10;
  const a = Array(n).fill(1n);
  const p = Array(n).fill(9999n);
  expect(solve(n, a, p)).toBe(999863939);
});

test('All bits set (ai==1023), p spread', () => {
  expect(solve(3, [1023n, 1023n, 1023n], [3000n, 5000n, 7000n])).toBe(969386930);
});


// × Both elements always included, XORed
// × Single element, always included
// × Single element, never included (but pi>=1 so must be included sometimes)
// × Edge: All probabilities minimum (1 ms)
// × Edge: All probabilities maximum (1 ms)
// × Random input, mixed probabilities (1 ms)
// × Duplicates in input
// × Large n with same values and high p (1 ms)
// × All bits set (ai==1023), p spread (1 ms)


// Example 1

//     TypeError: Cannot mix BigInt and other types, use explicit conversions

//       63 |
//       64 |         for (let j = 0; j < 10; j++) {
//     > 65 |             if ((ai >> j) & 1) {
//          |                    ^
//       66 |                 Pj[j] = (Pj[j] * val) % M;
//       67 |                 kj[j]++;
//       68 |             }

//       at solve (solutions-descriptive/42.js:65:20)
//       at Object.solve (tests-descriptive/tests-prompt3/42_prompt3.test.js:4:10)
