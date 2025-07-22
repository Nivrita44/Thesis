import { solve } from '../../solutions-descriptive/48.js';

test('Basic bipartite graph with simple queries', () => {
  const input = [{
    n: 4,
    m: 3,
    edges: [
      [1, 2],
      [2, 3],
      [3, 4]
    ],
    queries: [
      [1, 2],
      [2, 3]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Bob');
  expect(out.length).toBe(3);
  expect(/^[1-4] [1-3]$/.test(out[1])).toBe(true);
  expect(/^[1-4] [1-3]$/.test(out[2])).toBe(true);
});

test('Non-bipartite graph (odd cycle), "Alice" always wins', () => {
  const input = [{
    n: 3,
    m: 3,
    edges: [
      [1,2],
      [2,3],
      [3,1]
    ],
    queries: [
      [1,2],
      [2,1]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Alice');
  expect(out[1]).toBe('1 2');
  expect(out[2]).toBe('2 1');
});

test('Single node, no edges', () => {
  const input = [{
    n: 1,
    m: 0,
    edges: [],
    queries: [
      [1,1]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Bob');
  expect(out.length).toBe(2);
  expect(/^[1] [1-3]$/.test(out[1])).toBe(true);
});

test('Disconnected graph, two bipartite components', () => {
  const input = [{
    n: 4,
    m: 2,
    edges: [
      [1,2],
      [3,4]
    ],
    queries: [
      [1,2],
      [3,4]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Bob');
  expect(out.length).toBe(3);
  expect(/^[1-4] [1-3]$/.test(out[1])).toBe(true);
  expect(/^[1-4] [1-3]$/.test(out[2])).toBe(true);
});

test('Graph with even cycle (bipartite)', () => {
  const input = [{
    n: 4,
    m: 4,
    edges: [
      [1,2],
      [2,3],
      [3,4],
      [4,1]
    ],
    queries: [
      [1,4],
      [2,3]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Bob');
  expect(out.length).toBe(3);
  expect(/^[1-4] [1-3]$/.test(out[1])).toBe(true);
  expect(/^[1-4] [1-3]$/.test(out[2])).toBe(true);
});

test('Multiple queries, check order and output structure', () => {
  const input = [{
    n: 3,
    m: 2,
    edges: [
      [1,2],
      [2,3]
    ],
    queries: [
      [1,2],
      [1,3],
      [2,3]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Bob');
  expect(out.length).toBe(4);
  for (let i = 1; i <= 3; ++i) {
    expect(/^[1-3] [1-3]$/.test(out[i])).toBe(true);
  }
});

test('Single query with no edges, single node', () => {
  const input = [{
    n: 1,
    m: 0,
    edges: [],
    queries: [
      [1,1]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Bob');
  expect(out.length).toBe(2);
  expect(/^[1] [1-3]$/.test(out[1])).toBe(true);
});

test('Edge case: no queries', () => {
  const input = [{
    n: 3,
    m: 2,
    edges: [
      [1,2],
      [2,3]
    ],
    queries: []
  }];
  const out = solve(input);
  expect(out[0]).toBe('Bob');
  expect(out.length).toBe(1);
});

test('Edge case: A large bipartite star', () => {
  const edges = [];
  for (let i = 2; i <= 10; ++i) edges.push([1, i]);
  const input = [{
    n: 10,
    m: 9,
    edges,
    queries: [
      [1,2],
      [1,10],
      [2,10]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Bob');
  expect(out.length).toBe(4);
  for (let i = 1; i < 4; ++i) {
    expect(/^[1-9][0-9]* [1-3]$/.test(out[i])).toBe(true);
  }
});

test('Graph has two separate odd cycles: non-bipartite', () => {
  const input = [{
    n: 6,
    m: 6,
    edges: [
      [1,2],
      [2,3],
      [3,1],
      [4,5],
      [5,6],
      [6,4]
    ],
    queries: [
      [1,4],
      [2,5]
    ]
  }];
  const out = solve(input);
  expect(out[0]).toBe('Alice');
  expect(out[1]).toBe('1 4');
  expect(out[2]).toBe('2 5');
});