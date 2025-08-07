import { solve } from '../../solutions-descriptive/26.js';

test('n=1, s=0', () => {
  expect(solve(1, '0')).toBe(1);
});

test('n=1, s=1', () => {
  expect(solve(1, '1')).toBe(1);
});

test('n=2, s=00', () => {
  expect(solve(2, '00')).toBe(3);
});

test('n=2, s=01', () => {
  expect(solve(2, '01')).toBe(2);
});

test('n=3, s=000', () => {
  expect(solve(3, '000')).toBe(5);
});

test('n=3, s=011', () => {
  expect(solve(3, '011')).toBe(4);
});

test('n=4, s=1010', () => {
  expect(solve(4, '1010')).toBe(4);
});

test('n=5, s=11111', () => {
  expect(solve(5, '11111')).toBe(5);
});

test('n=5, s=00000', () => {
  expect(solve(5, '00000')).toBe(9);
});

test('n=6, s=001100', () => {
  expect(solve(6, '001100')).toBe(8);
});

test('n=10, s=0101010101', () => {
  expect(solve(10, '0101010101')).toBe(10);
});

test('all ones n=7', () => {
  expect(solve(7, '1111111')).toBe(7);
});

test('all zeros n=8', () => {
  expect(solve(8, '00000000')).toBe(15);
});

test('alternating start with 1, n=4', () => {
  expect(solve(4, '1010')).toBe(4);
});

test('random mid case n=6', () => {
  expect(solve(6, '110010')).toBe(7);
});


// n=1, s=0

// expect(received).toBe(expected) // Object.is equality

// Expected: 1
// Received: 0

//   2 |
//   3 | test('n=1, s=0', () => {
// > 4 |   expect(solve(1, '0')).toBe(1);
//     |                         ^
//   5 | });
//   6 |
//   7 | test('n=1, s=1', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:4:25)

// ● n=2, s=00

// expect(received).toBe(expected) // Object.is equality

// Expected: 3
// Received: 1

//   10 |
//   11 | test('n=2, s=00', () => {
// > 12 |   expect(solve(2, '00')).toBe(3);
//      |                          ^
//   13 | });
//   14 |
//   15 | test('n=2, s=01', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:12:26)

// ● n=3, s=000

// expect(received).toBe(expected) // Object.is equality

// Expected: 5
// Received: 3

//   18 |
//   19 | test('n=3, s=000', () => {
// > 20 |   expect(solve(3, '000')).toBe(5);
//      |                           ^
//   21 | });
//   22 |
//   23 | test('n=3, s=011', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:20:27)

// ● n=3, s=011

// expect(received).toBe(expected) // Object.is equality

// Expected: 4
// Received: 3

//   22 |
//   23 | test('n=3, s=011', () => {
// > 24 |   expect(solve(3, '011')).toBe(4);
//      |                           ^
//   25 | });
//   26 |
//   27 | test('n=4, s=1010', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:24:27)

// ● n=4, s=1010

// expect(received).toBe(expected) // Object.is equality

// Expected: 4
// Received: 6

//   26 |
//   27 | test('n=4, s=1010', () => {
// > 28 |   expect(solve(4, '1010')).toBe(4);
//      |                            ^
//   29 | });
//   30 |
//   31 | test('n=5, s=11111', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:28:28)

// ● n=5, s=11111

// expect(received).toBe(expected) // Object.is equality

// Expected: 5
// Received: 1

//   30 |
//   31 | test('n=5, s=11111', () => {
// > 32 |   expect(solve(5, '11111')).toBe(5);
//      |                             ^
//   33 | });
//   34 |
//   35 | test('n=5, s=00000', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:32:29)

// ● n=5, s=00000

// expect(received).toBe(expected) // Object.is equality

// Expected: 9
// Received: 10

//   34 |
//   35 | test('n=5, s=00000', () => {
// > 36 |   expect(solve(5, '00000')).toBe(9);
//      |                             ^
//   37 | });
//   38 |
//   39 | test('n=6, s=001100', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:36:29)

// ● n=6, s=001100

// expect(received).toBe(expected) // Object.is equality

// Expected: 8
// Received: 10

//   38 |
//   39 | test('n=6, s=001100', () => {
// > 40 |   expect(solve(6, '001100')).toBe(8);
//      |                              ^
//   41 | });
//   42 |
//   43 | test('n=10, s=0101010101', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:40:30)

// ● n=10, s=0101010101

// expect(received).toBe(expected) // Object.is equality

// Expected: 10
// Received: 12

//   42 |
//   43 | test('n=10, s=0101010101', () => {
// > 44 |   expect(solve(10, '0101010101')).toBe(10);
//      |                                   ^
//   45 | });
//   46 |
//   47 | test('all ones n=7', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:44:35)

// ● all ones n=7

// expect(received).toBe(expected) // Object.is equality

// Expected: 7
// Received: 1

//   46 |
//   47 | test('all ones n=7', () => {
// > 48 |   expect(solve(7, '1111111')).toBe(7);
//      |                               ^
//   49 | });
//   50 |
//   51 | test('all zeros n=8', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:48:31)

// ● all zeros n=8

// expect(received).toBe(expected) // Object.is equality

// Expected: 15
// Received: 28

//   50 |
//   51 | test('all zeros n=8', () => {
// > 52 |   expect(solve(8, '00000000')).toBe(15);
//      |                                ^
//   53 | });
//   54 |
//   55 | test('alternating start with 1, n=4', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:52:32)

// ● alternating start with 1, n=4

// expect(received).toBe(expected) // Object.is equality

// Expected: 4
// Received: 6

//   54 |
//   55 | test('alternating start with 1, n=4', () => {
// > 56 |   expect(solve(4, '1010')).toBe(4);
//      |                            ^
//   57 | });
//   58 |
//   59 | test('random mid case n=6', () => {

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:56:28)

// ● random mid case n=6

// expect(received).toBe(expected) // Object.is equality

// Expected: 7
// Received: 11

//   58 |
//   59 | test('random mid case n=6', () => {
// > 60 |   expect(solve(6, '110010')).toBe(7);
//      |                              ^
//   61 | });

//   at Object.toBe (tests-descriptive/tests-prompt1/26_prompt1.test.js:60:30)