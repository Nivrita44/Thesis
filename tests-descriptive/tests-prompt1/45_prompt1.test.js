import solve from '../../solutions-descriptive/45.js';

test('basic two intersection, arrive before call, bus only', () => {
  const n = 2, m = 1;
  const t0 = 10, t1 = 3, t2 = 6;
  const edges = [
    [1, 2, 2, 5]
  ];
  expect(solve(n, m, t0, t1, t2, edges)).toBe(6);
});

test('need to walk during call', () => {
  const n = 3, m = 2;
  const t0 = 20, t1 = 2, t2 = 7;
  const edges = [
    [1, 2, 3, 8],
    [2, 3, 3, 7]
  ];
  expect(solve(n, m, t0, t1, t2, edges)).toBe(11);
});

test('cannot reach on time, output -1', () => {
  const n = 2, m = 1;
  const t0 = 4, t1 = 1, t2 = 2;
  const edges = [
    [1, 2, 3, 5]
  ];
  expect(solve(n, m, t0, t1, t2, edges)).toBe(-1);
});

test('choice between bus and walking required', () => {
  const n = 3, m = 3;
  const t0 = 25, t1 = 9, t2 = 13;
  const edges = [
    [1, 2, 4, 12],
    [2, 3, 4, 9],
    [1, 3, 15, 23]
  ];
  expect(solve(n, m, t0, t1, t2, edges)).toBe(13);
});

test('longer phone call, must walk entire way', () => {
  const n = 2, m = 1;
  const t0 = 15, t1 = 3, t2 = 14;
  const edges = [
    [1, 2, 4, 10]
  ];
  expect(solve(n, m, t0, t1, t2, edges)).toBe(5);
});

test('graph with many intersections and edges', () => {
  const n = 5, m = 6;
  const t0 = 50, t1 = 10, t2 = 20;
  const edges = [
    [1, 2, 9, 20],
    [2, 3, 7, 18],
    [3, 4, 10, 30],
    [4, 5, 14, 40],
    [2, 5, 25, 40],
    [1, 3, 19, 35]
  ];
  expect(solve(n, m, t0, t1, t2, edges)).toBe(10);
});

test('choose path to avoid walking during call', () => {
  const n = 4, m = 4;
  const t0 = 30, t1 = 5, t2 = 7;
  const edges = [
    [1, 2, 3, 10],
    [2, 3, 2, 11],
    [3, 4, 2, 8],
    [1, 4, 15, 30]
  ];
  expect(solve(n, m, t0, t1, t2, edges)).toBe(13);
});