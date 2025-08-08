import { solve } from '../../solutions-algorithm/45.js';

test('Sample test case 1', () => {
  expect(solve([1, 2, 3])).toBe(3);
});
test('Sample test case 2', () => {
  expect(solve([1, 3, 2])).toBe(1);
});
test('Sample test case 3', () => {
  expect(solve([1, 3, 2, 4, 5])).toBe(17);
});
test('Sample test case 4', () => {
  expect(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(379394847);
});
test('Minimal N=2, increasing', () => {
  expect(solve([1, 2])).toBe(1);
});
test('Minimal N=2, swapping (invalid, but A[1]=1 required)', () => {
  expect(solve([1, 2])).toBe(1);
});
test('N=4, increasing', () => {
  expect(solve([1, 2, 3, 4])).toBe(9);
});
test('N=4, with one pair swapped', () => {
  expect(solve([1, 2, 4, 3])).toBe(3);
});
test('N=5, mostly increasing', () => {
  expect(solve([1, 2, 4, 5, 3])).toBe(7);
});
test('Edge N=3, completely reversed after 1', () => {
  expect(solve([1, 3, 2])).toBe(1);
});
test('All numbers consecutive from 1 to N', () => {
  expect(solve(Array.from({length: 7}, (_,i)=>i+1))).toBe(127);
});
test('Edge, N=6, specific permutation', () => {
  expect(solve([1, 6, 5, 4, 3, 2])).toBe(1);
});
test('Middle values swapped, N=5', () => {
  expect(solve([1, 3, 2, 4, 5])).toBe(5);
});
test('N=10, increasing', () => {
  expect(solve([1,2,3,4,5,6,7,8,9,10])).toBe(1023);
});
test('Large N=16, increasing', () => {
  expect(solve(Array.from({length: 16}, (_,i)=>i+1))).toBe(32767);
});
test('N=11, shuffled tail', () => {
  expect(solve([1,3,2,4,5,6,8,11,10,9,7])).toBe(1097);
});




// N=4, increasing

// expect(received).toBe(expected) // Object.is equality

// Expected: 9
// Received: 17

//   20 | });
//   21 | test('N=4, increasing', () => {
// > 22 |   expect(solve([1, 2, 3, 4])).toBe(9);
//      |                               ^
//   23 | });
//   24 | test('N=4, with one pair swapped', () => {
//   25 |   expect(solve([1, 2, 4, 3])).toBe(3);

//   at Object.toBe (tests-algorithm/tests-prompt3/45_prompt3.test.js:22:31)

// ● N=4, with one pair swapped

// expect(received).toBe(expected) // Object.is equality

// Expected: 3
// Received: 7

//   23 | });
//   24 | test('N=4, with one pair swapped', () => {
// > 25 |   expect(solve([1, 2, 4, 3])).toBe(3);
//      |                               ^
//   26 | });
//   27 | test('N=5, mostly increasing', () => {
//   28 |   expect(solve([1, 2, 4, 5, 3])).toBe(7);

//   at Object.toBe (tests-algorithm/tests-prompt3/45_prompt3.test.js:25:31)

// ● N=5, mostly increasing

// expect(received).toBe(expected) // Object.is equality

// Expected: 7
// Received: 77

//   26 | });
//   27 | test('N=5, mostly increasing', () => {
// > 28 |   expect(solve([1, 2, 4, 5, 3])).toBe(7);
//      |                                  ^
//   29 | });
//   30 | test('Edge N=3, completely reversed after 1', () => {
//   31 |   expect(solve([1, 3, 2])).toBe(1);

//   at Object.toBe (tests-algorithm/tests-prompt3/45_prompt3.test.js:28:34)

// ● All numbers consecutive from 1 to N

// expect(received).toBe(expected) // Object.is equality

// Expected: 127
// Received: 106419

//   32 | });
//   33 | test('All numbers consecutive from 1 to N', () => {
// > 34 |   expect(solve(Array.from({length: 7}, (_,i)=>i+1))).toBe(127);
//      |                                                      ^
//   35 | });
//   36 | test('Edge, N=6, specific permutation', () => {
//   37 |   expect(solve([1, 6, 5, 4, 3, 2])).toBe(1);

//   at Object.toBe (tests-algorithm/tests-prompt3/45_prompt3.test.js:34:54)

// ● Middle values swapped, N=5

// expect(received).toBe(expected) // Object.is equality

// Expected: 5
// Received: 17

//   38 | });
//   39 | test('Middle values swapped, N=5', () => {
// > 40 |   expect(solve([1, 3, 2, 4, 5])).toBe(5);
//      |                                  ^
//   41 | });
//   42 | test('N=10, increasing', () => {
//   43 |   expect(solve([1,2,3,4,5,6,7,8,9,10])).toBe(1023);

//   at Object.toBe (tests-algorithm/tests-prompt3/45_prompt3.test.js:40:34)

// ● N=10, increasing

// expect(received).toBe(expected) // Object.is equality

// Expected: 1023
// Received: 515546413

//   41 | });
//   42 | test('N=10, increasing', () => {
// > 43 |   expect(solve([1,2,3,4,5,6,7,8,9,10])).toBe(1023);
//      |                                         ^
//   44 | });
//   45 | test('Large N=16, increasing', () => {
//   46 |   expect(solve(Array.from({length: 16}, (_,i)=>i+1))).toBe(32767);

//   at Object.toBe (tests-algorithm/tests-prompt3/45_prompt3.test.js:43:41)

// ● Large N=16, increasing

// expect(received).toBe(expected) // Object.is equality

// Expected: 32767
// Received: 463091457

//   44 | });
//   45 | test('Large N=16, increasing', () => {
// > 46 |   expect(solve(Array.from({length: 16}, (_,i)=>i+1))).toBe(32767);
//      |                                                       ^
//   47 | });
//   48 | test('N=11, shuffled tail', () => {
//   49 |   expect(solve([1,3,2,4,5,6,8,11,10,9,7])).toBe(1097);

//   at Object.toBe (tests-algorithm/tests-prompt3/45_prompt3.test.js:46:55)

// ● N=11, shuffled tail

// expect(received).toBe(expected) // Object.is equality

// Expected: 1097
// Received: 594706908

//   47 | });
//   48 | test('N=11, shuffled tail', () => {
// > 49 |   expect(solve([1,3,2,4,5,6,8,11,10,9,7])).toBe(1097);
//      |                                            ^
//   50 | });

//   at Object.toBe (tests-algorithm/tests-prompt3/45_prompt3.test.js:49:44)