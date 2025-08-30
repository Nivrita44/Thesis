import { solve } from '../../../solutions-descriptive/49.js';


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

