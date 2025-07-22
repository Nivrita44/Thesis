import { solve } from '../../solutions-descriptive/11.js'

test('Single path, find kth max edge', () => {
  const input = {
    n: 3,
    m: 2,
    q: 2,
    edges: [
      [1, 2, 4],
      [2, 3, 7]
    ],
    queries: [
      [1, 3, 1],
      [1, 3, 2]
    ]
  }
  expect(solve(input)).toEqual([7, 4])
})

test('Simple triangle, different paths', () => {
  const input = {
    n: 3,
    m: 3,
    q: 3,
    edges: [
      [1, 2, 10],
      [2, 3, 20],
      [1, 3, 30]
    ],
    queries: [
      [1, 3, 1],
      [1, 3, 2],
      [1, 2, 1]
    ]
  }
  expect(solve(input)).toEqual([30, 20, 10])
})

test('Path with multiple answers', () => {
  const input = {
    n: 4,
    m: 3,
    q: 3,
    edges: [
      [1, 2, 5],
      [2, 3, 10],
      [3, 4, 15]
    ],
    queries: [
      [1, 4, 1],
      [1, 4, 2],
      [1, 4, 3]
    ]
  }
  expect(solve(input)).toEqual([15, 10, 5])
})

test('Cycle with multiple paths, choose minimal kth max', () => {
  const input = {
    n: 4,
    m: 5,
    q: 2,
    edges: [
      [1, 2, 5],
      [2, 3, 7],
      [3, 4, 8],
      [4, 1, 9],
      [2, 4, 6]
    ],
    queries: [
      [1, 3, 2],
      [1, 4, 1]
    ]
  }
  expect(solve(input)).toEqual([6, 9])
})

test('All edges equal weight', () => {
  const input = {
    n: 3,
    m: 3,
    q: 3,
    edges: [
      [1, 2, 2],
      [2, 3, 2],
      [3, 1, 2]
    ],
    queries: [
      [1, 3, 1],
      [1, 3, 2],
      [1, 3, 3]
    ]
  }
  expect(solve(input)).toEqual([2, 2, 2])
})

test('Disconnected is illegal, extra test, forcibly connected', () => {
  const input = {
    n: 5,
    m: 4,
    q: 1,
    edges: [
      [1, 2, 3],
      [2, 3, 2],
      [3, 4, 5],
      [4, 5, 1]
    ],
    queries: [
      [1, 5, 3]
    ]
  }
  expect(solve(input)).toEqual([2])
})

test('Edge with max possible weight', () => {
  const input = {
    n: 2,
    m: 1,
    q: 1,
    edges: [
      [1, 2, 1000000000]
    ],
    queries: [
      [1, 2, 1]
    ]
  }
  expect(solve(input)).toEqual([1000000000])
})

test('Path length greater than k', () => {
  const input = {
    n: 4,
    m: 3,
    q: 1,
    edges: [
      [1, 2, 4],
      [2, 3, 8],
      [3, 4, 16]
    ],
    queries: [
      [1, 4, 2]
    ]
  }
  expect(solve(input)).toEqual([8])
})

test('Same vertices, different k', () => {
  const input = {
    n: 5,
    m: 4,
    q: 3,
    edges: [
      [1, 2, 1],
      [2, 3, 2],
      [3, 4, 3],
      [4, 5, 4]
    ],
    queries: [
      [1, 5, 1],
      [1, 5, 2],
      [1, 5, 3]
    ]
  }
  expect(solve(input)).toEqual([4, 3, 2])
})