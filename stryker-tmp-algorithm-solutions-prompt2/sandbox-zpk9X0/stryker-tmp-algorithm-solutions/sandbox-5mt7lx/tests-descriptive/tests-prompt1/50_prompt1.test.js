// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/50.js';

test('single element, LCM present', () => {
  expect(solve(1, [1])).toBe(0);
});

test('two different elements, LCM absent', () => {
  expect(solve(2, [2, 3])).toBe(2);
});

test('two same elements', () => {
  expect(solve(2, [2, 2])).toBe(0);
});

test('three elements, LCM present', () => {
  expect(solve(3, [2, 3, 6])).toBe(1);
});

test('three elements, all coprime, LCM absent', () => {
  expect(solve(3, [2, 3, 5])).toBe(3);
});

test('array with repeated values', () => {
  expect(solve(4, [4, 8, 8, 2])).toBe(3);
});

test('array with LCM always present', () => {
  expect(solve(3, [2, 4, 8])).toBe(0);
});

test('array with one missing value', () => {
  expect(solve(4, [2, 5, 7, 11])).toBe(4);
});

test('large values, LCM absent', () => {
  expect(solve(3, [1000000000, 999999999, 999999998])).toBe(3);
});

test('subsequence with missing LCM', () => {
  expect(solve(5, [2, 4, 8, 16, 9])).toBe(2);
});




// ● single element, LCM present

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:4:10)

//   ● two different elements, LCM absent

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:8:10)

//   ● two same elements

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:12:10)

//   ● three elements, LCM present

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:16:10)

//   ● three elements, all coprime, LCM absent

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:20:10)

//   ● array with repeated values

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:24:10)

//   ● array with LCM always present

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:28:10)

//   ● array with one missing value

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:32:10)

//   ● large values, LCM absent

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:36:10)

//   ● subsequence with missing LCM

//     TypeError: numbers.sort is not a function

//        5 |         presenceMap[numbers[i]] = true;
//        6 |     }
//     >  7 |     numbers.sort((a, b) => b - a);
//          |             ^
//        8 |
//        9 |     let currentLCM = numbers[0];
//       10 |     for (let i = 1; i < length; i++) {

//       at sort (solutions-descriptive/50.js:7:13)
//       at Object.solve (tests-descriptive/tests-prompt1/50_prompt1.test.js:40:10)