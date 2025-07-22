import { solve } from '../../solutions-descriptive/48.js'

test('Triangle (3-cycle) - Not bipartite, Alice should win', () => {
  const cases = [
    {
      n: 3,
      m: 3,
      edges: [
        [1, 2],
        [2, 3],
        [3, 1],
      ],
      queries: [
        [1, 2],
        [1, 3],
        [2, 3],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Alice')
  expect(res[1]).toBe('1 2')
  expect(res[2]).toBe('1 3')
  expect(res[3]).toBe('2 3')
})

test('Line graph (bipartite) - Bob should win', () => {
  const cases = [
    {
      n: 4,
      m: 3,
      edges: [
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      queries: [
        [1, 2],
        [1, 3],
        [2, 3],
        [1, 3],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Bob')
  expect(res.length).toBe(5)
  const moves = res.slice(1)
  const vertices = new Set()
  moves.forEach(move => {
    const [u, c] = move.split(' ').map(Number)
    expect(u >= 1 && u <= 4).toBe(true)
    expect(c >= 1 && c <= 3).toBe(true)
    expect(vertices.has(u)).toBe(false)
    vertices.add(u)
  })
  expect(vertices.size).toBe(4)
})

test('Star graph (bipartite)', () => {
  const cases = [
    {
      n: 5,
      m: 4,
      edges: [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
      ],
      queries: [
        [3, 2],
        [2, 1],
        [1, 3],
        [3, 1],
        [2, 3],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Bob')
  expect(res.length).toBe(6)
  const taken = new Set()
  for (let i = 1; i <= 5; ++i) {
    const [v, color] = res[i].split(' ').map(Number)
    expect(v >= 1 && v <= 5).toBe(true)
    expect(color >= 1 && color <= 3).toBe(true)
    expect(taken.has(v)).toBe(false)
    taken.add(v)
  }
})

test('Complete bipartite K3,3', () => {
  const cases = [
    {
      n: 6,
      m: 9,
      edges: [
        [1, 4],
        [1, 5],
        [1, 6],
        [2, 4],
        [2, 5],
        [2, 6],
        [3, 4],
        [3, 5],
        [3, 6],
      ],
      queries: [
        [1, 2],
        [2, 3],
        [1, 3],
        [2, 1],
        [3, 2],
        [2, 1],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Bob')
  expect(res.length).toBe(7)
})

test('Minimal case n=1', () => {
  const cases = [
    {
      n: 1,
      m: 0,
      edges: [],
      queries: [
        [1, 2],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Bob')
  expect(res[1]).toMatch(/1 [123]/)
})

test('Graph with a cycle length 4 (bipartite)', () => {
  const cases = [
    {
      n: 4,
      m: 4,
      edges: [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 1],
      ],
      queries: [
        [1, 2],
        [2, 3],
        [3, 1],
        [2, 3],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Bob')
  expect(res.length).toBe(5)
})

test('Graph with odd cycle (5-cycle)', () => {
  const cases = [
    {
      n: 5,
      m: 5,
      edges: [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 1],
      ],
      queries: [
        [1, 2],
        [1, 3],
        [3, 2],
        [1, 2],
        [2, 3],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Alice')
  expect(res.length).toBe(6)
})

test('Disconnected not allowed but check edge n=2, m=1', () => {
  const cases = [
    {
      n: 2,
      m: 1,
      edges: [
        [1, 2],
      ],
      queries: [
        [1, 2],
        [2, 3],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Bob')
  expect(res.length).toBe(3)
})

test('Fully connected n=4 (clique)', () => {
  const cases = [
    {
      n: 4,
      m: 6,
      edges: [
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
      ],
      queries: [
        [1, 2],
        [2, 3],
        [1, 3],
        [2, 1],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Alice')
  expect(res.length).toBe(5)
})

test('Multiple test cases', () => {
  const cases = [
    {
      n: 3,
      m: 2,
      edges: [
        [1, 2],
        [2, 3],
      ],
      queries: [
        [1, 3],
        [2, 3],
        [1, 2],
      ],
    },
    {
      n: 3,
      m: 3,
      edges: [
        [1, 2],
        [2, 3],
        [3, 1],
      ],
      queries: [
        [1, 2],
        [1, 3],
        [2, 3],
      ],
    },
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Bob')
  expect(res[4]).toBe('Alice')
})

test('Large bipartite line', () => {
  const edges = []
  for(let i=1;i<1000;++i) edges.push([i, i+1])
  const queries = []
  for(let i=1;i<=1000;++i) queries.push([1,2])
  const cases = [
    {
      n: 1000,
      m: 999,
      edges,
      queries
    }
  ]
  const res = solve(cases)
  expect(res[0]).toBe('Bob')
  expect(res.length).toBe(1001)
})