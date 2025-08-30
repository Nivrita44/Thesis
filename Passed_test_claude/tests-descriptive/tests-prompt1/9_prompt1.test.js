import { solve } from '../../../solutions-descriptive/9.js';

function convertEdges(edges) {
    return edges.map(([a, b]) => [a - 1, b - 1]);
}
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

