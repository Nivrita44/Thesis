// @ts-nocheck
import { solve } from '../../../solutions-algorithm/41.js'

test('basic shortest path example', () => {
  const n = 5
  const edges = [
    [1, 2, 2],
    [2, 5, 5],
    [2, 3, 4],
    [1, 4, 1],
    [4, 3, 3],
    [3, 5, 1],
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 4 3 5')
})

test('simple connected 3-node path', () => {
  const n = 3
  const edges = [
    [1, 2, 1],
    [2, 3, 1],
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 2 3')
})

test('no path exists', () => {
  const n = 3
  const edges = [
    [1, 2, 1],
  ]
  const result = solve(n, edges)
  expect(result).toBe('-1')
})

test('multiple edges between same vertices, pick the shortest', () => {
  const n = 3
  const edges = [
    [1, 2, 10],
    [1, 2, 2],
    [2, 3, 5],
    [1, 3, 20]
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 2 3')
})

test('disconnected nodes', () => {
  const n = 4
  const edges = [
    [1, 2, 3],
    [3, 4, 2],
  ]
  const result = solve(n, edges)
  expect(result).toBe('-1')
})

test('self loop does not create path', () => {
  const n = 2
  const edges = [
    [1, 1, 1],
    [2, 2, 1],
  ]
  const result = solve(n, edges)
  expect(result).toBe('-1')
})

test('only one edge direct connection', () => {
  const n = 2
  const edges = [
    [1, 2, 42]
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 2')
})

test('loops and redundant edges', () => {
  const n = 4
  const edges = [
    [1, 1, 10],
    [1, 2, 2],
    [2, 3, 2],
    [3, 4, 2],
    [1, 4, 10],
    [2, 2, 1]
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 2 3 4')
})

test('large weights, choose minimal', () => {
  const n = 4
  const edges = [
    [1, 2, 1000],
    [2, 3, 1000],
    [3, 4, 1],
    [1, 4, 3000]
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 2 3 4')
})

test('multiple shortest paths possible', () => {
  const n = 4
  const edges = [
    [1, 2, 1],
    [2, 4, 1],
    [1, 3, 1],
    [3, 4, 1]
  ]
  const result = solve(n, edges)
  expect(['1 2 4', '1 3 4']).toContain(result)
})

test('single node no edge', () => {
  const n = 2
  const edges = []
  const result = solve(n, edges)
  expect(result).toBe('-1')
})

test('handles undirected nature', () => {
  const n = 3
  const edges = [
    [2, 1, 5],
    [3, 2, 2]
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 2 3')
})

test('handles larger n, direct edge', () => {
  const n = 100000
  const edges = [
    [1, 100000, 12345]
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 100000')
})

test('start equals end', () => {
  const n = 1
  const edges = []
  const result = solve(n, edges)
  expect(result).toBe('1')
})

test('graph with cycles', () => {
  const n = 5
  const edges = [
    [1, 2, 1],
    [2, 3, 1],
    [3, 2, 1],
    [3, 4, 1],
    [4, 5, 1],
    [5, 1, 10],
  ]
  const result = solve(n, edges)
  expect(result).toBe('1 2 3 4 5')
})


// handles undirected nature

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "1 2 3"
//     Received: "-1"

//       127 |   ]
//       128 |   const result = solve(n, edges)
//     > 129 |   expect(result).toBe('1 2 3')
//           |                  ^
//       130 | })
//       131 |
//       132 | test('handles larger n, direct edge', () => {

//       at Object.toBe (tests-algorithm/tests-prompt3/41_prompt3.test.js:129:18)
