// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/27.js';

test('Single lightbulb on at (0,0)', () => {
  expect(solve(1, [[0, 0]])).toEqual([0, 0])
})

test('Single lightbulb on at (100, -100)', () => {
  expect(solve(1, [[100, -100]])).toEqual([100, -100])
})

test('Four bulbs in a single operation, treasure at (0,0)', () => {
  expect(solve(4, [[0,0],[0,1],[1,-1],[1,0]])).toEqual([0, 0])
})

test('Four bulbs in a shifted square, treasure at (10,-10)', () => {
  expect(solve(4, [[10,-10],[10,-9],[11,-11],[11,-10]])).toEqual([10, -10])
})

test('Two bulbs, (0,0) and (1,1)', () => {
  expect(solve(2, [[0,0],[1,1]])).toEqual([0,0]) 
})

test('Eight bulbs in two 2x2 blocks', () => {
  const points = [[0,0],[0,1],[1,0],[1,1],[2,2],[2,3],[3,2],[3,3]]
  expect(solve(8, points)).toEqual([0, 0])
})

test('Minimum and maximum coordinates', () => {
  const points = [[-1e8,-1e8],[1e8,1e8]]
  expect(solve(2, points)).toEqual([-100000000, -100000000])
})

test('All bulbs with x odd and one with even', () => {
  const points = [[1,2],[3,4],[5,6],[2,10]]
  expect(solve(4, points)).toEqual([2, 10])
})

test('Bulbs with overlapping diagonals', () => {
  const points = [[1,2],[2,1],[1,1]]
  expect(solve(3, points)).toEqual([2, 1])
})

test('More generic: bulbs scattered but with one unique x', () => {
  const points = [[5,7],[5,8],[6,7],[10,11]]
  expect(solve(4, points)).toEqual([6, 7])
})

test('n = 2e5 where all but one x-coordinate is even count', () => {
  const n = 200000
  const bulbs = []
  for (let i = 0; i < n - 1; i++) bulbs.push([2, i])
  bulbs.push([7, 123])
  expect(solve(n, bulbs)).toEqual([7, 123])
})


// Four bulbs in a single operation, treasure at (0,0)

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   0,
//     -   0,
//     +   undefined,
//     +   undefined,
//       ]

//       10 |
//       11 | test('Four bulbs in a single operation, treasure at (0,0)', () => {
//     > 12 |   expect(solve(4, [[0,0],[0,1],[1,-1],[1,0]])).toEqual([0, 0])
//          |                                                ^
//       13 | })
//       14 |
//       15 | test('Four bulbs in a shifted square, treasure at (10,-10)', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/27_prompt3.test.js:12:48)

//   ● Four bulbs in a shifted square, treasure at (10,-10)

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   10,
//     -   -10,
//     +   undefined,
//     +   undefined,
//       ]

//       14 |
//       15 | test('Four bulbs in a shifted square, treasure at (10,-10)', () => {
//     > 16 |   expect(solve(4, [[10,-10],[10,-9],[11,-11],[11,-10]])).toEqual([10, -10])
//          |                                                          ^
//       17 | })
//       18 |
//       19 | test('Two bulbs, (0,0) and (1,1)', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/27_prompt3.test.js:16:58)

//   ● Eight bulbs in two 2x2 blocks

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   0,
//     -   0,
//     +   undefined,
//     +   NaN,
//       ]

//       23 | test('Eight bulbs in two 2x2 blocks', () => {
//       24 |   const points = [[0,0],[0,1],[1,0],[1,1],[2,2],[2,3],[3,2],[3,3]]
//     > 25 |   expect(solve(8, points)).toEqual([0, 0])
//          |                            ^
//       26 | })
//       27 |
//       28 | test('Minimum and maximum coordinates', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/27_prompt3.test.js:25:28)

//   ● All bulbs with x odd and one with even

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//     +   1,
//         2,
//     -   10,
//       ]

//       33 | test('All bulbs with x odd and one with even', () => {
//       34 |   const points = [[1,2],[3,4],[5,6],[2,10]]
//     > 35 |   expect(solve(4, points)).toEqual([2, 10])
//          |                            ^
//       36 | })
//       37 |
//       38 | test('Bulbs with overlapping diagonals', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/27_prompt3.test.js:35:28)

//   ● Bulbs with overlapping diagonals

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         2,
//     -   1,
//     +   0,
//       ]

//       38 | test('Bulbs with overlapping diagonals', () => {
//       39 |   const points = [[1,2],[2,1],[1,1]]
//     > 40 |   expect(solve(3, points)).toEqual([2, 1])
//          |                            ^
//       41 | })
//       42 |
//       43 | test('More generic: bulbs scattered but with one unique x', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/27_prompt3.test.js:40:28)

//   ● More generic: bulbs scattered but with one unique x

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 1
//     + Received  + 1

//       Array [
//         6,
//     -   7,
//     +   6,
//       ]

//       43 | test('More generic: bulbs scattered but with one unique x', () => {
//       44 |   const points = [[5,7],[5,8],[6,7],[10,11]]
//     > 45 |   expect(solve(4, points)).toEqual([6, 7])
//          |                            ^
//       46 | })
//       47 |
//       48 | test('n = 2e5 where all but one x-coordinate is even count', () => {

//       at Object.toEqual (tests-descriptive/tests-prompt3/27_prompt3.test.js:45:28)

//   ● n = 2e5 where all but one x-coordinate is even count

//     expect(received).toEqual(expected) // deep equality

//     - Expected  - 2
//     + Received  + 2

//       Array [
//     -   7,
//     -   123,
//     +   2,
//     +   0,
//       ]

//       51 |   for (let i = 0; i < n - 1; i++) bulbs.push([2, i])
//       52 |   bulbs.push([7, 123])
//     > 53 |   expect(solve(n, bulbs)).toEqual([7, 123])
//          |                           ^
//       54 | })

//       at Object.toEqual (tests-descriptive/tests-prompt3/27_prompt3.test.js:53:27)
