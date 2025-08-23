// @ts-nocheck
import { solve } from '../../../solutions-algorithm/41.js';

test('typical case, multiple paths, pick shortest', () => {
  const n = 5;
  const edges = [
    [1, 2, 2],
    [2, 5, 5],
    [2, 3, 4],
    [1, 4, 1],
    [4, 3, 3],
    [3, 5, 1],
  ];
  expect(solve(n, edges)).toBe('1 4 3 5');
});

test('simple chain', () => {
  const n = 3;
  const edges = [
    [1, 2, 1],
    [2, 3, 1],
  ];
  expect(solve(n, edges)).toBe('1 2 3');
});

test('destination unreachable', () => {
  const n = 3;
  const edges = [
    [1, 2, 1],
  ];
  expect(solve(n, edges)).toBe('-1');
});

test('self-loop edge should be ignored', () => {
  const n = 3;
  const edges = [
    [1, 1, 10],
    [1, 2, 3],
    [2, 3, 5],
  ];
  expect(solve(n, edges)).toBe('1 2 3');
});

test('disconnected graph, no path', () => {
  const n = 4;
  const edges = [
    [1, 2, 1],
    [3, 4, 1],
  ];
  expect(solve(n, edges)).toBe('-1');
});

test('single node graph', () => {
  const n = 1;
  const edges = [];
  expect(solve(n, edges)).toBe('1');
});

test('two nodes, direct edge', () => {
  const n = 2;
  const edges = [
    [1, 2, 8]
  ];
  expect(solve(n, edges)).toBe('1 2');
});

test('multiple paths, check correctness', () => {
  const n = 4;
  const edges = [
    [1, 2, 1],
    [2, 4, 10],
    [1, 3, 1],
    [3, 4, 1],
    [2, 3, 1]
  ];
  expect(solve(n, edges)).toBe('1 3 4');
});

test('all edges have same weight, check lex smallest path', () => {
  const n = 3;
  const edges = [
    [1, 2, 1],
    [2, 3, 1],
    [1, 3, 2],
  ];
  expect(solve(n, edges)).toBe('1 2 3');
});

test('edge case, start equals end', () => {
  const n = 1;
  const edges = [
    [1, 1, 0],
  ];
  expect(solve(n, edges)).toBe('1');
});

test('edges with negative weight should work but likely wouldn\'t be present', () => {
  const n = 3;
  const edges = [
    [1, 2, -1],
    [2, 3, -2],
  ];
  expect(solve(n, edges)).toBe('1 2 3');
});


// all edges have same weight, check lex smallest path

//     expect(received).toBe(expected) // Object.is equality

//     Expected: "1 2 3"
//     Received: "1 3"

//       83 |     [1, 3, 2],
//       84 |   ];
//     > 85 |   expect(solve(n, edges)).toBe('1 2 3');
//          |                           ^
//       86 | });
//       87 |
//       88 | test('edge case, start equals end', () => {

//       at Object.toBe (tests-algorithm/tests-prompt2/41_prompt2.test.js:85:27)
