import { solve } from '../../solutions-algorithm/45.js';

test('solve returns 3 for [1,2,3]', () => {
    expect(solve([1, 2, 3])).toBe(3);
});

test('solve returns 1 for [1,3,2]', () => {
    expect(solve([1, 3, 2])).toBe(1);
});

test('solve returns 17 for [1,3,2,4,5]', () => {
    expect(solve([1, 3, 2, 4, 5])).toBe(17);
});

test('solve returns 379394847 for [1,2,3,4,5,6,7,8,9,10,11]', () => {
    expect(solve([1,2,3,4,5,6,7,8,9,10,11])).toBe(379394847);
});

test('solve handles a single element array', () => {
    expect(solve([42])).toBe(1);
});

test('solve handles two increasing elements', () => {
    expect(solve([1, 2])).toBe(1);
});

test('solve handles two decreasing elements', () => {
    expect(solve([2, 1])).toBe(0);
});

test('solve handles all equal elements', () => {
    expect(solve([5, 5, 5, 5])).toBe(0);
});

test('solve handles longer strictly increasing array', () => {
    expect(solve([1,2,3,4,5,6])).toBeGreaterThan(0);
});

test('solve handles descending array', () => {
    expect(solve([5,4,3,2,1])).toBe(0);
});

test('solve handles empty array', () => {
    expect(solve([])).toBe(1);
});



// ● solve handles two decreasing elements

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 0
//     Received: 1

//       26 |
//       27 | test('solve handles two decreasing elements', () => {
//     > 28 |     expect(solve([2, 1])).toBe(0);
//          |                           ^
//       29 | });
//       30 |
//       31 | test('solve handles all equal elements', () => {

//       at Object.toBe (tests-algorithm/tests-prompt2/45_prompt2.test.js:28:27)

//   ● solve handles all equal elements

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 0
//     Received: 1

//       30 |
//       31 | test('solve handles all equal elements', () => {
//     > 32 |     expect(solve([5, 5, 5, 5])).toBe(0);
//          |                                 ^
//       33 | });
//       34 |
//       35 | test('solve handles longer strictly increasing array', () => {

//       at Object.toBe (tests-algorithm/tests-prompt2/45_prompt2.test.js:32:33)

//   ● solve handles descending array

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 0
//     Received: 1

//       38 |
//       39 | test('solve handles descending array', () => {
//     > 40 |     expect(solve([5,4,3,2,1])).toBe(0);
//          |                                ^
//       41 | });
//       42 |
//       43 | test('solve handles empty array', () => {

//       at Object.toBe (tests-algorithm/tests-prompt2/45_prompt2.test.js:40:32)
