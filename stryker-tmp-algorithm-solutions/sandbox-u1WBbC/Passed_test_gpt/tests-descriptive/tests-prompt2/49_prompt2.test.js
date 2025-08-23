// @ts-nocheck
import { solve } from '../../../solutions-descriptive/49.js';

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

test('large complete graph n=10', () => {
  const n = 10;
  const pairs = [];
  for (let i = 1; i <= n; ++i) for (let j = i+1; j <= n; ++j) pairs.push(`${i} ${j}`);
  expect(solve(`${n} ${pairs.length}\n${pairs.join('\n')}`)).toEqual([45]);
});