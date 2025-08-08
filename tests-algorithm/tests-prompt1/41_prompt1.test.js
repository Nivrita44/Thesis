import {solve} from '../../solutions-algorithm/41.js';

test('simple path exists', () => {
  const n = 4, m = 4;
  const edges = [
    [1, 2, 1],
    [2, 4, 2],
    [1, 3, 5],
    [3, 4, 1]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 4]);
});

test('no path', () => {
  const n = 3, m = 1;
  const edges = [
    [1, 2, 1]
  ];
  expect(solve(n, m, edges)).toBe(-1);
});

test('simple direct connection', () => {
  const n = 2, m = 1;
  const edges = [
    [1, 2, 42]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2]);
});

test('multiple edges between same pair', () => {
  const n = 3, m = 4;
  const edges = [
    [1, 2, 3],
    [1, 2, 1],
    [2, 3, 1],
    [1, 3, 10]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 3]);
});

test('loop does not affect path', () => {
  const n = 3, m = 3;
  const edges = [
    [1, 1, 100],
    [1, 2, 1],
    [2, 3, 1]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 3]);
});

test('path involves all nodes', () => {
  const n = 5, m = 4;
  const edges = [
    [1, 2, 2],
    [2, 3, 2],
    [3, 4, 2],
    [4, 5, 2]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 3, 4, 5]);
});

test('disconnected large node', () => {
  const n = 4, m = 2;
  const edges = [
    [1, 2, 2],
    [2, 3, 2]
  ];
  expect(solve(n, m, edges)).toBe(-1);
});

test('edges are not sorted', () => {
  const n = 3, m = 2;
  const edges = [
    [2, 3, 1],
    [1, 2, 2]
  ];
  expect(solve(n, m, edges)).toEqual([1, 2, 3]);
});

test('minimum input', () => {
  const n = 2, m = 0;
  const edges = [];
  expect(solve(n, m, edges)).toBe(-1);
});

test('multiple shortest paths', () => {
  const n = 4, m = 5;
  const edges = [
    [1, 2, 1],
    [2, 4, 1],
    [1, 3, 1],
    [3, 4, 1],
    [2, 3, 100]
  ];
  const result = solve(n, m, edges);
  expect(
    JSON.stringify(result) === JSON.stringify([1, 2, 4]) ||
    JSON.stringify(result) === JSON.stringify([1, 3, 4])
  ).toBe(true);
});


  // simple path exists

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:11:10)

  //   ● no path

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:19:10)

  //   ● simple direct connection

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:27:10)

  //   ● multiple edges between same pair

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:38:10)

  //   ● loop does not affect path

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:48:10)

  //   ● path involves all nodes

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:59:10)

  //   ● disconnected large node

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:68:10)

  //   ● edges are not sorted

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:77:10)

  //   ● minimum input

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:83:10)

  //   ● multiple shortest paths

  //     TypeError: edges is not iterable

  //       3 |     const G = {};
  //       4 |     for (let i = 1; i <= n; i++) G[i] = [];
  //     > 5 |     for (const [a, b, w] of edges) {
  //         |                             ^
  //       6 |         if (a !== b) G[a].push({ node: b, weight: w });
  //       7 |     }
  //       8 |

  //       at edges (solutions-algorithm/41.js:5:29)
  //       at Object.solve (tests-algorithm/tests-prompt1/41_prompt1.test.js:95:18)