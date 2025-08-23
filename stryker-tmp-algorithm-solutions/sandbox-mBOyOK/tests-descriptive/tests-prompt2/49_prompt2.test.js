// @ts-nocheck
import { solve } from '../../solutions-descriptive/49.js';

test('single node, no edges', () => {
  expect(solve('1 0')).toEqual([0]);
});

test('two nodes, one edge', () => {
  expect(solve('2 1\n1 2')).toEqual([0]);
});

test('three nodes, line', () => {
  expect(solve('3 2\n1 2\n2 3')).toEqual([1]);
});

test('three nodes, triangle', () => {
  expect(solve('3 3\n1 2\n2 3\n3 1')).toEqual([3]);
});

test('four nodes, disconnected two edges', () => {
  expect(solve('4 2\n1 2\n3 4')).toEqual([0]);
});

test('four nodes, star', () => {
  expect(solve('4 3\n1 2\n1 3\n1 4')).toEqual([3]);
});

test('four nodes, cycle', () => {
  expect(solve('4 4\n1 2\n2 3\n3 4\n4 1')).toEqual([6]);
});

test('five nodes, line', () => {
  expect(solve('5 4\n1 2\n2 3\n3 4\n4 5')).toEqual([4]);
});

test('five nodes, star', () => {
  expect(solve('5 4\n1 2\n1 3\n1 4\n1 5')).toEqual([6]);
});

test('five nodes, fully connected', () => {
  const pairs = [];
  for (let i = 1; i <= 5; ++i) for (let j = i+1; j <=5; ++j) pairs.push(`${i} ${j}`);
  expect(solve(`5 10\n${pairs.join('\n')}`)).toEqual([10]);
});

test('multiple test cases', () => {
  const input = [
    '3 3',
    '1 2',
    '2 3',
    '3 1',
    '4 2',
    '1 2',
    '3 4'
  ].join('\n');
  expect(solve(input)).toEqual([3, 0]);
});

test('disconnected components', () => {
  expect(solve('6 3\n1 2\n3 4\n5 6')).toEqual([0]);
});

test('large complete graph n=10', () => {
  const n = 10;
  const pairs = [];
  for (let i = 1; i <= n; ++i) for (let j = i+1; j <= n; ++j) pairs.push(`${i} ${j}`);
  expect(solve(`${n} ${pairs.length}\n${pairs.join('\n')}`)).toEqual([45]);
});

test('bridge edge in the graph', () => {
  expect(solve('4 3\n1 2\n2 3\n3 4')).toEqual([3]);
});

test('empty input', () => {
  expect(solve('')).toEqual([]);
});




  // four nodes, disconnected two edges

  //     expect(received).toEqual(expected) // deep equality

  //     - Expected  - 1
  //     + Received  + 1

  //       Array [
  //     -   0,
  //     +   3,
  //       ]

  //       18 |
  //       19 | test('four nodes, disconnected two edges', () => {
  //     > 20 |   expect(solve('4 2\n1 2\n3 4')).toEqual([0]);
  //          |                                  ^
  //       21 | });
  //       22 |
  //       23 | test('four nodes, star', () => {

  //       at Object.toEqual (tests-descriptive/tests-prompt2/49_prompt2.test.js:20:34)

  //   ● multiple test cases

  //     expect(received).toEqual(expected) // deep equality

  //     - Expected  - 1
  //     + Received  + 1

  //       Array [
  //         3,
  //     -   0,
  //     +   3,
  //       ]

  //       53 |     '3 4'
  //       54 |   ].join('\n');
  //     > 55 |   expect(solve(input)).toEqual([3, 0]);
  //          |                        ^
  //       56 | });
  //       57 |
  //       58 | test('disconnected components', () => {

  //       at Object.toEqual (tests-descriptive/tests-prompt2/49_prompt2.test.js:55:24)

  //   ● disconnected components

  //     expect(received).toEqual(expected) // deep equality

  //     - Expected  - 1
  //     + Received  + 1

  //       Array [
  //     -   0,
  //     +   10,
  //       ]

  //       57 |
  //       58 | test('disconnected components', () => {
  //     > 59 |   expect(solve('6 3\n1 2\n3 4\n5 6')).toEqual([0]);
  //          |                                       ^
  //       60 | });
  //       61 |
  //       62 | test('large complete graph n=10', () => {

  //       at Object.toEqual (tests-descriptive/tests-prompt2/49_prompt2.test.js:59:39)

  //   ● bridge edge in the graph

  //     expect(received).toEqual(expected) // deep equality

  //     - Expected  - 1
  //     + Received  + 1

  //       Array [
  //     -   3,
  //     +   2,
  //       ]

  //       68 |
  //       69 | test('bridge edge in the graph', () => {
  //     > 70 |   expect(solve('4 3\n1 2\n2 3\n3 4')).toEqual([3]);
  //          |                                       ^
  //       71 | });
  //       72 |
  //       73 | test('empty input', () => {

  //       at Object.toEqual (tests-descriptive/tests-prompt2/49_prompt2.test.js:70:39)

  //   ● empty input

  //     expect(received).toEqual(expected) // deep equality

  //     - Expected  - 1
  //     + Received  + 3

  //     - Array []
  //     + Array [
  //     +   -0,
  //     + ]

  //       72 |
  //       73 | test('empty input', () => {
  //     > 74 |   expect(solve('')).toEqual([]);
  //          |                     ^
  //       75 | });

  //       at Object.toEqual (tests-descriptive/tests-prompt2/49_prompt2.test.js:74:21)
