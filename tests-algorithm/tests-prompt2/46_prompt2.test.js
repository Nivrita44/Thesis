import { solve } from '../../../solutions-algorithm/46.js';

test('typical organization chart with multiple roots and varying management levels', () => {
  expect(solve(5, [-1, 1, 2, 1, -1])).toBe(3);
});

test('linear management chain (maximum depth equals n)', () => {
  expect(solve(4, [-1, 1, 2, 3])).toBe(4);
});

test('multiple roots one subordinate', () => {
  expect(solve(3, [-1, -1, 1])).toBe(2);
});

test('three separate components with similar depths', () => {
  expect(solve(12, [-1, 1, 2, 3, -1, 5, 6, 7, -1, 9, 10, 11])).toBe(4);
});

test('one root with deep and shallow branches', () => {
  expect(solve(6, [-1, 1, 1, 1, 2, 3])).toBe(3);
});

test('single employee (n=1)', () => {
  expect(solve(1, [-1])).toBe(1);
});

test('all employees are roots', () => {
  expect(solve(3, [-1, -1, -1])).toBe(1);
});

test('chain with alternating deep and shallow branches', () => {
  expect(solve(7, [-1, 1, 1, 2, 3, 3, 4])).toBe(5);
});

test('edge case: empty organization', () => {
  expect(solve(0, [])).toBe(0);
});

test('two employees, one is the manager of the other', () => {
  expect(solve(2, [-1, 1])).toBe(2);
});


// chain with alternating deep and shallow branches

//     expect(received).toBe(expected) // Object.is equality

//     Expected: 5
//     Received: 4

//       30 |
//       31 | test('chain with alternating deep and shallow branches', () => {
//     > 32 |   expect(solve(7, [-1, 1, 1, 2, 3, 3, 4])).toBe(5);
//          |                                            ^
//       33 | });
//       34 |
//       35 | test('edge case: empty organization', () => {

//       at Object.toBe (tests-algorithm/tests-prompt2/46_prompt2.test.js:32:44)

//   ● edge case: empty organization

//     TypeError: graph[node] is not iterable

//       15 |     function dfs(node, depth) {
//       16 |         maxDepth = Math.max(maxDepth, depth);
//     > 17 |         for (const child of graph[node]) {
//          |                                  ^
//       18 |             dfs(child, depth + 1);
//       19 |         }
//       20 |     }

//       at dfs (solutions-algorithm/46.js:17:34)
//       at dfs (solutions-algorithm/46.js:22:5)
//       at Object.solve (tests-algorithm/tests-prompt2/46_prompt2.test.js:36:10)
