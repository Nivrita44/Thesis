import { solve } from '../../../solutions-algorithm/32.js';

test('example 1', () => {
  const n = 3;
  const a = [1,2,3];
  const b = [2,3,1];
  const d = [0,0,0];
  expect(solve(n, a, b, d)).toBe(2);
});

test('example 2', () => {
  const n = 5;
  const a = [5, 3, 2, 4, 1];
  const b = [2, 4, 3, 1, 5];
  const d = [2, 3, 0, 0, 0];
  expect(solve(n, a, b, d)).toBe(2);
});

test('when all elements in d are predetermined', () => {
  const n = 4;
  const a = [4,3,2,1];
  const b = [1,2,3,4];
  const d = [4,3,2,1];
  expect(solve(n, a, b, d)).toBe(1);
});

test('when all elements must be chosen from b', () => {
  const n = 3;
  const a = [3,1,2];
  const b = [2,3,1];
  const d = [2,3,1];
  expect(solve(n, a, b, d)).toBe(1);
});

test('n=1, a and b equal, d is 0', () => {
  const n = 1;
  const a = [1];
  const b = [1];
  const d = [0];
  expect(solve(n, a, b, d)).toBe(1);
});

test('n=1, d is predetermined', () => {
  const n = 1;
  const a = [1];
  const b = [1];
  const d = [1];
  expect(solve(n, a, b, d)).toBe(1);
});

test('n=2, cross constraints', () => {
  const n = 2;
  const a = [1,2];
  const b = [2,1];
  const d = [0,0];
  expect(solve(n, a, b, d)).toBe(2);
});

test('all d predetermined with alternate values', () => {
  const n = 4;
  const a = [1,2,3,4];
  const b = [4,3,2,1];
  const d = [4,2,3,1];
  expect(solve(n, a, b, d)).toBe(1);
});

test('partial predetermined for longer arrays', () => {
  const n = 6;
  const a = [1,2,3,4,5,6];
  const b = [6,5,4,3,2,1];
  const d = [1,0,0,3,5,0];
  expect(solve(n, a, b, d)).toBe(2);
});

test('no predetermined, larger n', () => {
  const n = 7;
  const a = [1,2,3,4,5,6,7];
  const b = [7,6,5,4,3,2,1];
  const d = [0,0,0,0,0,0,0];
  expect(solve(n, a, b, d)).toBe(4);
});


// example 1

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:8:10)

//   ● example 2

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:16:10)

//   ● when all elements in d are predetermined

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:24:10)

//   ● when all elements must be chosen from b

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:32:10)

//   ● n=1, a and b equal, d is 0

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:40:10)

//   ● n=1, d is predetermined

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:48:10)

//   ● n=2, cross constraints

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:56:10)

//   ● all d predetermined with alternate values

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:64:10)

//   ● partial predetermined for longer arrays

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:72:10)

//   ● no predetermined, larger n

//     TypeError: testCases is not iterable

//       12 |
//       13 |     for (const { N, A, B, C }
//     > 14 |         of testCases) {
//          |            ^
//       15 |         const arrow = {};
//       16 |         for (let i = 0; i < N; i++) {
//       17 |             arrow[A[i]] = B[i];

//       at testCases (solutions-algorithm/32.js:14:12)
//       at Object.solve (tests-algorithm/tests-prompt1/32_prompt1.test.js:80:10)
