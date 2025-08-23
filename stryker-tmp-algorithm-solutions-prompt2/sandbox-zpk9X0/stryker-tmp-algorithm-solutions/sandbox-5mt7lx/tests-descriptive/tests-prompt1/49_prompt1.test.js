// @ts-nocheck
// 
import {solve} from '../../solutions-descriptive/49.js'

test('single test case, simple tree', () => {
  const t = 1
  const testCases = [
    {
      n: 4,
      m: 3,
      edges: [
        [1,2],
        [2,3],
        [3,4]
      ]
    }
  ]
  const input = [t]
  for (const tc of testCases) {
    input.push([tc.n, tc.m])
    input.push(...tc.edges)
  }
  expect(solve(input)).toEqual([3])
})

test('single test case, star graph', () => {
  const t = 1
  const testCases = [
    {
      n: 5,
      m: 4,
      edges: [
        [1,2],
        [1,3],
        [1,4],
        [1,5]
      ]
    }
  ]
  const input = [t]
  for (const tc of testCases) {
    input.push([tc.n, tc.m])
    input.push(...tc.edges)
  }
  expect(solve(input)).toEqual([6])
})

test('cycle -- removing one edge still connected', () => {
  const t = 1
  const testCases = [
    {
      n: 4,
      m: 4,
      edges: [
        [1,2],
        [2,3],
        [3,4],
        [4,1]
      ]
    }
  ]
  const input = [t]
  for (const tc of testCases) {
    input.push([tc.n, tc.m])
    input.push(...tc.edges)
  }
  expect(solve(input)).toEqual([6])
})

test('removal can split graph, minimal pairs', () => {
  const t = 1
  const testCases = [
    {
      n: 6,
      m: 5,
      edges: [
        [1,2],
        [2,3],
        [3,4],
        [4,5],
        [3,6]
      ]
    }
  ]
  const input = [t]
  for (const tc of testCases) {
    input.push([tc.n, tc.m])
    input.push(...tc.edges)
  }
  expect(solve(input)).toEqual([7])
})

test('multiple test cases', () => {
  const t = 2
  const testCases = [
    {
      n: 3,
      m: 2,
      edges: [
        [1,2],
        [2,3],
      ]
    },
    {
      n: 5,
      m: 6,
      edges: [
        [1,2],
        [2,3],
        [3,4],
        [4,5],
        [1,3],
        [2,4],
      ]
    }
  ]
  const input = [t]
  for (const tc of testCases) {
    input.push([tc.n, tc.m])
    input.push(...tc.edges)
  }
  expect(solve(input)).toEqual([2, 6])
})

test('edge case: minimal n=2', () => {
  const t = 1
  const testCases = [
    {
      n: 2,
      m: 1,
      edges: [
        [1,2]
      ]
    }
  ]
  const input = [t]
  for (const tc of testCases) {
    input.push([tc.n, tc.m])
    input.push(...tc.edges)
  }
  expect(solve(input)).toEqual([0])
})


// single test case, simple tree

//     TypeError: input.trim is not a function

//       56 |
//       57 | export function solve(input) {
//     > 58 |     const lines = input.trim().split('\n');
//          |                         ^
//       59 |     let idx = 0;
//       60 |     const results = [];
//       61 |

//       at trim (solutions-descriptive/49.js:58:25)
//       at Object.solve (tests-descriptive/tests-prompt1/49_prompt1.test.js:21:10)

//   ● single test case, star graph

//     TypeError: input.trim is not a function

//       56 |
//       57 | export function solve(input) {
//     > 58 |     const lines = input.trim().split('\n');
//          |                         ^
//       59 |     let idx = 0;
//       60 |     const results = [];
//       61 |

//       at trim (solutions-descriptive/49.js:58:25)
//       at Object.solve (tests-descriptive/tests-prompt1/49_prompt1.test.js:43:10)

//   ● cycle -- removing one edge still connected

//     TypeError: input.trim is not a function

//       56 |
//       57 | export function solve(input) {
//     > 58 |     const lines = input.trim().split('\n');
//          |                         ^
//       59 |     let idx = 0;
//       60 |     const results = [];
//       61 |

//       at trim (solutions-descriptive/49.js:58:25)
//       at Object.solve (tests-descriptive/tests-prompt1/49_prompt1.test.js:65:10)

//   ● removal can split graph, minimal pairs

//     TypeError: input.trim is not a function

//       56 |
//       57 | export function solve(input) {
//     > 58 |     const lines = input.trim().split('\n');
//          |                         ^
//       59 |     let idx = 0;
//       60 |     const results = [];
//       61 |

//       at trim (solutions-descriptive/49.js:58:25)
//       at Object.solve (tests-descriptive/tests-prompt1/49_prompt1.test.js:88:10)

//   ● multiple test cases

//     TypeError: input.trim is not a function

//       56 |
//       57 | export function solve(input) {
//     > 58 |     const lines = input.trim().split('\n');
//          |                         ^
//       59 |     let idx = 0;
//       60 |     const results = [];
//       61 |

//       at trim (solutions-descriptive/49.js:58:25)
//       at Object.solve (tests-descriptive/tests-prompt1/49_prompt1.test.js:120:10)

//   ● edge case: minimal n=2

//     TypeError: input.trim is not a function

//       56 |
//       57 | export function solve(input) {
//     > 58 |     const lines = input.trim().split('\n');
//          |                         ^
//       59 |     let idx = 0;
//       60 |     const results = [];
//       61 |

//       at trim (solutions-descriptive/49.js:58:25)
//       at Object.solve (tests-descriptive/tests-prompt1/49_prompt1.test.js:139:10)
