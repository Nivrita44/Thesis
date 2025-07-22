import solve from '../../solutions-descriptive/49.js'

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