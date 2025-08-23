// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/9.js';

function convertEdges(edges) {
    return edges.map(([a, b]) => [a - 1, b - 1]);
}

test('example case with 4 nodes', () => {
    expect(solve(4, [2, 4, 1, 3], convertEdges([
        [1, 2],
        [2, 3],
        [2, 4]
    ]))).toBe(2);
});

test('minimal tree with 1 node', () => {
    expect(solve(1, [1], [])).toBe(1);
});

test('linear tree with 3 nodes in decreasing values', () => {
    expect(solve(3, [3, 2, 1], convertEdges([
        [1, 2],
        [2, 3]
    ]))).toBe(1);
});

test('star tree with center having lowest value', () => {
    expect(solve(4, [1, 4, 3, 2], convertEdges([
        [1, 2],
        [1, 3],
        [1, 4]
    ]))).toBe(2);
});

test('binary tree with all equal values', () => {
    expect(solve(7, [1, 1, 1, 1, 1, 1, 1], convertEdges([
        [1, 2],
        [1, 3],
        [2, 4],
        [2, 5],
        [3, 6],
        [3, 7]
    ]))).toBe(0);
});

test('path tree with alternating values', () => {
    expect(solve(5, [2, 1, 4, 3, 5], convertEdges([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ]))).toBe(3);
});

test('complete binary tree with increasing values', () => {
    expect(solve(7, [1, 2, 3, 4, 5, 6, 7], convertEdges([
        [1, 2],
        [1, 3],
        [2, 4],
        [2, 5],
        [3, 6],
        [3, 7]
    ]))).toBe(7);
});

test('tree with single path and maximum value in middle', () => {
    expect(solve(5, [3, 2, 5, 1, 4], convertEdges([
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ]))).toBe(3);
});