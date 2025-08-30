import { solve } from '../../../solutions-descriptive/49.js';

test('example test case from description', () => {
    const input = `2 1
1 2
3 3
1 2
2 3
1 3`.trim();
    expect(solve(input)).toEqual([0, 3]);
});

test('complete graph with 4 nodes', () => {
    const input = `4 6
1 2
1 3
1 4
2 3
2 4
3 4`.trim();
    expect(solve(input)).toEqual([6]);
});


test('minimum edge case n=2', () => {
    const input = `2 1
1 2`.trim();
    expect(solve(input)).toEqual([0]);
});
