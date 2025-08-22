import { solve } from '../../../solutions-descriptive/49.js';

test('example from description', () => {
    const input = `4 4
1 2
2 3
3 4
4 1`;
    expect(solve(input)).toEqual([4]);
});

test('minimal case - 2 vertices, 1 edge', () => {
    const input = `2 1
1 2`;
    expect(solve(input)).toEqual([0]);
});

test('edge case - single connected component after removal', () => {
    const input = `3 3
1 2
2 3
3 1`;
    expect(solve(input)).toEqual([3]);
});

test('upper bound case', () => {
    const input = `5 7
1 2
1 3
1 4
2 3
2 5
3 4
4 5`;
    expect(solve(input)).toEqual([10]);
});

test('cycle with spoke', () => {
    const input = `4 4
1 2
2 3
3 1
3 4`;
    expect(solve(input)).toEqual([4]);
});

test('tree structure', () => {
    const input = `5 4
1 2
2 3
3 4
4 5`;
    expect(solve(input)).toEqual([6]);
});

test('dense graph', () => {
    const input = `4 5
1 2
2 3
3 4
4 1
1 3`;
    expect(solve(input)).toEqual([5]);
});

test('bridge edge case', () => {
    const input = `6 6
1 2
2 3
3 1
4 5
5 6
6 4`;
    expect(solve(input)).toEqual([6]);
});