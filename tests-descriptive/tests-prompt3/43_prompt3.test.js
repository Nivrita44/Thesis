import { solve } from '../../solutions-descriptive/43.js';

test('single camp, positive gold', () => {
    expect(solve(1, 1, [10], [])).toBe(10);
});

test('single camp, negative gold', () => {
    expect(solve(1, 100, [-1000], [])).toBe(0);
});

test('two camps, strengthen either', () => {
    expect(solve(2, 3, [7, 8], [[1,2]])).toBe(8);
});

test('three camps, chain, must choose optimal', () => {
    expect(solve(3, 2, [5, 6, 7], [[1,2],[2,3]])).toBe(12);
});

test('tree: star 4 nodes, choose one', () => {
    expect(solve(4, 10, [3, 3, 3, 100], [[1,2],[1,3],[1,4]])).toBe(100);
});

test('tree: star 5 nodes, all negative', () => {
    expect(solve(5, 2, [-3, -3, -1, -2, -4], [[1,2],[1,3],[1,4],[1,5]])).toBe(0);
});

test('tree: all positives, must avoid double c subtraction', () => {
    expect(solve(4, 1, [4, 5, 6, 7], [[1,2],[2,3],[2,4]])).toBe(17);
});

test('c greater than possible sum, prefer not strengthening', () => {
    expect(solve(3, 1000, [10, 10, 10], [[1,2],[2,3]])).toBe(10);
});

test('edge: disconnected node (impossible - tree invariant), should not be needed', () => {
    expect(solve(2, 1, [2, 4], [[1,2]])).toBe(4);
});

test('all negatives, prefer empty', () => {
    expect(solve(3, 10, [-10, -5, -7], [[1,2],[2,3]])).toBe(0);
});

test('chain, alternate strengthening', () => {
    expect(solve(5, 1, [2, 3, 4, 5, 6], [[1,2],[2,3],[3,4],[4,5]])).toBe(13);
});

test('chain, large cost, negative optimal', () => {
    expect(solve(4, 100, [10, 100, 10, 10], [[1,2],[2,3],[3,4]])).toBe(100);

});

test('chain, negative gold camps, skip all', () => {
    expect(solve(4, 1, [-2, -3, -4, -5], [[1,2],[2,3],[3,4]])).toBe(0);
});

test('minimum gold can go negative, but solution prevents negatives', () => {
    expect(solve(3, 100, [1, 2, 3], [[1,2],[2,3]])).toBe(3);
});

test('c=0, all can be strengthened', () => {
    expect(solve(4, 0, [1, 2, 3, 4], [[1,2],[1,3],[1,4]])).toBe(10);
});

test('large input, balanced binary tree', () => {
    const n = 15;
    const values = Array.from({length: n}, (_,i) => i+1);
    const edges = [];
    for(let i=2;i<=n;i++) edges.push([Math.floor(i/2), i]);
    expect(solve(n, 1, values, edges)).toBeGreaterThan(0);
});

test('two camps, negative gold, negative optimal', () => {
    expect(solve(2, 2, [-5, -10], [[1,2]])).toBe(0);
});