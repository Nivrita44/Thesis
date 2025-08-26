import { solve } from '../../../solutions-algorithm/34.js';

function bruteForce(x) {
  let maxSum = 0;
  let ys = [];
  for (let y = 1; y < x; y++) {
    let a = x, b = y;
    while (b) {
      [a, b] = [b, a % b];
    }
    let val = a + y;
    if (val > maxSum) {
      maxSum = val;
      ys = [y];
    } else if (val === maxSum) {
      ys.push(y);
    }
  }
  return ys;
}

test('solve returns correct maximal y for x=2', () => {
  const x = 2;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve returns correct maximal y for x=3', () => {
  const x = 3;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve returns correct maximal y for x=6', () => {
  const x = 6;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve returns correct maximal y for x=12', () => {
  const x = 12;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=25', () => {
  const x = 25;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for prime x=13', () => {
  const x = 13;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=100', () => {
  const x = 100;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=999', () => {
  const x = 999;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=1000', () => {
  const x = 1000;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});

test('solve works for x=997 (prime)', () => {
  const x = 997;
  const result = solve(x);
  const expecteds = bruteForce(x);
  expect(expecteds).toContain(result);
});


// solve returns correct maximal y for x=2

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:24:18)

//   ● solve returns correct maximal y for x=3

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:31:18)

//   ● solve returns correct maximal y for x=6

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:38:18)

//   ● solve returns correct maximal y for x=12

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:45:18)

//   ● solve works for x=25

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:52:18)

//   ● solve works for prime x=13

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:59:18)

//   ● solve works for x=100

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:66:18)

//   ● solve works for x=999

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:73:18)

//   ● solve works for x=1000

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:80:18)

//   ● solve works for x=997 (prime)

//     TypeError: inputs.map is not a function

//        7 |  */
//        8 | export function solve(inputs) {
//     >  9 |     return inputs.map(x => x - 1);
//          |                   ^
//       10 | }
//       11 |
//       12 | // Test Function

//       at map (solutions-algorithm/34.js:9:19)
//       at Object.solve (tests-algorithm/tests-prompt1/34_prompt1.test.js:87:18)
