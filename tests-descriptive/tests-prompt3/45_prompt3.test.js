import { solve } from '../../solutions-descriptive/45.js';

test('Example 1: basic path, forced walk during call', () => {
  expect(
    solve(
      5,
      5,
      [
        [1, 5, 30, 100],
        [1, 2, 20, 50],
        [2, 3, 20, 50],
        [3, 4, 20, 50],
        [4, 5, 20, 50]
      ],
      100,
      20,
      80
    )
  ).toBe(0);
});

test('Example 2: impossible to arrive on time', () => {
  expect(
    solve(
      2,
      1,
      [
        [1, 2, 55, 110]
      ],
      100,
      50,
      60
    )
  ).toBe(-1);
});

test('Example 3: multiple paths, alternative fastest', () => {
  expect(
    solve(
      4,
      4,
      [
        [1, 2, 30, 100],
        [2, 4, 30, 100],
        [1, 3, 20, 50],
        [3, 4, 20, 50]
      ],
      100,
      40,
      60
    )
  ).toBe(60);
});

test('Example 4: prefer bus up to phone, forced to walk through call', () => {
  expect(
    solve(
      3,
      3,
      [
        [1, 2, 1, 10],
        [2, 3, 10, 50],
        [1, 3, 20, 21]
      ],
      100,
      80,
      90
    )
  ).toBe(80);
});

test('Example 5: Short network, complex transfer close to phone window', () => {
  expect(
    solve(
      3,
      2,
      [
        [2, 1, 1, 3],
        [2, 3, 3, 4]
      ],
      58,
      55,
      57
    )
  ).toBe(53);
});

test('Example 6: Just enough time to walk and arrive after call', () => {
  expect(
    solve(
      2,
      1,
      [
        [2, 1, 6, 10]
      ],
      12,
      9,
      10
    )
  ).toBe(3);
});

test('Example 7: Path with several short segments', () => {
  expect(
    solve(
      5,
      5,
      [
        [2, 1, 1, 8],
        [2, 3, 4, 8],
        [4, 2, 2, 4],
        [5, 3, 3, 4],
        [4, 5, 2, 6]
      ],
      8,
      5,
      6
    )
  ).toBe(2);
});

test('Phone call occupies almost all available time', () => {
  expect(
    solve(
      3,
      2,
      [
        [1, 2, 4, 10],
        [2, 3, 4, 10]
      ],
      15,
      10,
      14
    )
  ).toBe(-1);
});

test('Simple two node, just enough time with fastest bus', () => {
  expect(
    solve(
      2,
      1,
      [
        [1, 2, 5, 7]
      ],
      20,
      7,
      12
    )
  ).toBe(13);
});

test('Large input: long chain, can take only bus, no phone call', () => {
  const n = 1000;
  const m = 999;
  const edges = [];
  for (let i = 1; i < n; ++i) {
    edges.push([i, i + 1, 1, 10]);
  }
  expect(
    solve(
      n,
      m,
      edges,
      2000,
      1210,
      1789
    )
  ).toBe(1000);
});

test('Large input: long chain, just enough to always walk', () => {
  const n = 1000;
  const m = 999;
  const edges = [];
  for (let i = 1; i < n; ++i) {
    edges.push([i, i + 1, 1, 2]);
  }
  expect(
    solve(
      n,
      m,
      edges,
      3000,
      1050,
      2050
    )
  ).toBe(2000);
});

test('Chain, but phone call window in middle, walking required during call', () => {
  expect(
    solve(
      5,
      4,
      [
        [1, 2, 1, 10],
        [2, 3, 1, 10],
        [3, 4, 1, 10],
        [4, 5, 1, 10]
      ],
      100,
      50,
      70
    )
  ).toBe(46);
});

test('Impossible: All paths require bus during phone call', () => {
  expect(
    solve(
      3,
      2,
      [
        [1, 2, 100, 200],
        [2, 3, 100, 200]
      ],
      240,
      70,
      230
    )
  ).toBe(-1);
});

test('Tiny graph: transition exactly at call boundaries', () => {
  expect(
    solve(
      2,
      1,
      [
        [1, 2, 2, 5]
      ],
      15,
      7,
      10
    )
  ).toBe(13);
});

test('Graph with equal bus/foot time edges, prefer bus after call', () => {
  expect(
    solve(
      4,
      3,
      [
        [1, 2, 3, 6],
        [2, 3, 3, 6],
        [3, 4, 3, 6]
      ],
      20,
      7,
      10
    )
  ).toBe(11);
});