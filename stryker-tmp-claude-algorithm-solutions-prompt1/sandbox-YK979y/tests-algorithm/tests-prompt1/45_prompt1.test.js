import {solve} from '../../solutions-algorithm/45.js';

test('N = 2, A = [1,2]', () => {
  expect(solve(2, [1,2])).toBe(1);
});

test('N = 3, A = [1,2,3]', () => {
  expect(solve(3, [1,2,3])).toBe(2);
});

test('N = 3, A = [1,3,2]', () => {
  expect(solve(3, [1,3,2])).toBe(2);
});

test('N = 4, A = [1,2,3,4]', () => {
  expect(solve(4, [1,2,3,4])).toBe(8);
});

test('N = 4, A = [1,3,2,4]', () => {
  expect(solve(4, [1,3,2,4])).toBe(6);
});

test('N = 4, A = [1,4,2,3]', () => {
  expect(solve(4, [1,4,2,3])).toBe(6);
});

test('N = 5, A = [1,2,3,4,5]', () => {
  expect(solve(5, [1,2,3,4,5])).toBe(64);
});

test('N = 2, A = [1,2] (modulo check)', () => {
  expect(solve(2, [1,2])).toBe(1 % 998244353);
});

test('N = 3, A = [1,2,3] (modulo check)', () => {
  expect(solve(3, [1,2,3])).toBe(2 % 998244353);
});

test('N = 6, A = [1,2,3,4,5,6]', () => {
  expect(solve(6, [1,2,3,4,5,6])).toBe(1024);
});

test('N = 2, reversed order is invalid', () => {
  expect(solve(2, [2,1])).toBe(0);
});

test('N = 3, starting at 1 but not BFS order', () => {
  expect(solve(3, [1,3,2])).toBe(2);
});

test('N = 3, invalid permutation', () => {
  expect(solve(3, [2,1,3])).toBe(0);
});



// ● N = 2, A = [1,2]

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:4:10)

//   ● N = 3, A = [1,2,3]

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:8:10)

//   ● N = 3, A = [1,3,2]

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:12:10)

//   ● N = 4, A = [1,2,3,4]

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:16:10)

//   ● N = 4, A = [1,3,2,4]

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:20:10)

//   ● N = 4, A = [1,4,2,3]

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:24:10)

//   ● N = 5, A = [1,2,3,4,5]

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:28:10)

//   ● N = 2, A = [1,2] (modulo check)

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:32:10)

//   ● N = 3, A = [1,2,3] (modulo check)

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:36:10)

//   ● N = 6, A = [1,2,3,4,5,6]

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:40:10)

//   ● N = 2, reversed order is invalid

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:44:10)

//   ● N = 3, starting at 1 but not BFS order

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:48:10)

//   ● N = 3, invalid permutation

//     TypeError: Cannot read properties of undefined (reading '1')

//       14 |         if (now > n) return 1;
//       15 |         if (l <= 0) return 0;
//     > 16 |         if (dp[now][l][fa] !== undefined) return dp[now][l][fa];
//          |                    ^
//       17 |
//       18 |         let res = 0;
//       19 |         if (fa || arr[now - 2] < arr[now - 1]) {

//       at dfs (solutions-algorithm/45.js:16:20)
//       at dfs (solutions-algorithm/45.js:30:12)
//       at Object.solve (tests-algorithm/tests-prompt1/45_prompt1.test.js:52:10)
