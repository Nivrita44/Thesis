// @ts-nocheck
import { solve } from '../../../solutions-algorithm/32.js'

test('Sample and edge test cases for the pizza permutation problem', () => {
  const MOD = 1000000007

  const testCases = [
    {
      N: 7,
      A: [1, 2, 3, 4, 5, 6, 7],
      B: [2, 3, 1, 7, 6, 5, 4],
      C: [2, 0, 1, 0, 0, 0, 0],
    },
    {
      N: 1,
      A: [1],
      B: [1],
      C: [0],
    },
    {
      N: 6,
      A: [1, 5, 2, 4, 6, 3],
      B: [6, 5, 3, 1, 4, 2],
      C: [6, 0, 0, 0, 0, 0],
    },
    {
      N: 8,
      A: [1, 6, 4, 7, 2, 3, 8, 5],
      B: [3, 2, 8, 1, 4, 5, 6, 7],
      C: [1, 0, 0, 7, 0, 3, 0, 5],
    },
    {
      N: 10,
      A: [1, 8, 6, 2, 4, 7, 9, 3, 10, 5],
      B: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5],
      C: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5],
    },
    {
      N: 7,
      A: [1, 2, 3, 4, 5, 6, 7],
      B: [2, 3, 1, 7, 6, 5, 4],
      C: [0, 0, 0, 0, 0, 0, 0],
    },
    {
      N: 5,
      A: [1, 2, 3, 4, 5],
      B: [1, 2, 3, 4, 5],
      C: [0, 0, 0, 0, 0],
    },
    {
      N: 5,
      A: [1, 2, 3, 4, 5],
      B: [1, 2, 3, 5, 4],
      C: [0, 0, 0, 0, 0],
    },
    {
      N: 3,
      A: [1, 2, 3],
      B: [3, 1, 2],
      C: [0, 0, 0],
    },
  ]
  const expected = [4, 1, 2, 2, 1, 8, 1, 2, 2]
  const result = solve(testCases)
  for (let i = 0; i < expected.length; ++i) {
    expect(result[i]).toBe(expected[i])
  }
})

test('minimum input, all known positions', () => {
  const cases = [
    {
      N: 1,
      A: [1],
      B: [1],
      C: [1],
    },
    {
      N: 2,
      A: [1, 2],
      B: [2, 1],
      C: [1, 2],
    },
    {
      N: 2,
      A: [2, 1],
      B: [1, 2],
      C: [2, 1],
    },
  ]
  const expected = [1, 1, 1]
  const result = solve(cases)
  for (let i = 0; i < cases.length; ++i) {
    expect(result[i]).toBe(expected[i])
  }
})

test('large n, no known positions, identity and swap', () => {
  const n = 10
  const A = Array.from({length: n}, (_, i) => i + 1)
  const B = Array.from({length: n}, (_, i) => ((i + 1) % n) + 1)
  const C = Array(n).fill(0)
  const answer = solve([{ N: n, A, B, C }])[0]
  expect(answer).toBe(2)
})

test('large n, all known positions', () => {
  const n = 8
  const A = [1,2,3,4,5,6,7,8]
  const B = [1,2,3,4,5,6,7,8]
  const C = [1,2,3,4,5,6,7,8]
  expect(solve([{ N: n, A, B, C }])[0]).toBe(1)
})

test('multiple cycles, some fixed positions in cycles', () => {
  const N = 6
  const A = [1,2,3,4,5,6]
  const B = [2,1,4,3,6,5]
  const C = [0,0,3,0,0,0]
  expect(solve([{ N, A, B, C }])[0]).toBe(2)
})

test('no cycles have fixed positions', () => {
  const N = 4
  const A = [1,2,3,4]
  const B = [2,1,4,3]
  const C = [0,0,0,0]
  expect(solve([{ N, A, B, C }])[0]).toBe(4)
})

test('cycle of length 1', () => {
  expect(solve([{
    N: 3,
    A: [1, 2, 3],
    B: [1, 3, 2],
    C: [1, 0, 0]
  }])[0]).toBe(2)
})

test('cycle of length > 1 but all fixed', () => {
  expect(solve([{
    N: 4,
    A: [1,2,3,4],
    B: [2,1,4,3],
    C: [1,2,3,4]
  }])[0]).toBe(1)
})

test('all pairs are swapped', () => {
  expect(solve([{
    N: 6,
    A: [1,2,3,4,5,6],
    B: [2,1,4,3,6,5],
    C: [0,0,0,0,0,0]
  }])[0]).toBe(8)
})


// multiple cycles, some fixed positions in cycles

// expect(received).toBe(expected) // Object.is equality

// Expected: 2
// Received: 4

//   117 |   const B = [2,1,4,3,6,5]
//   118 |   const C = [0,0,3,0,0,0]
// > 119 |   expect(solve([{ N, A, B, C }])[0]).toBe(2)
//       |                                      ^
//   120 | })
//   121 |
//   122 | test('no cycles have fixed positions', () => {

//   at Object.toBe (tests-algorithm/tests-prompt3/32_prompt3.test.js:119:38)
