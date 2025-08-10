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

test('simple tree with 5 nodes', () => {
    const input = `5 4
1 2
2 3
3 4
4 5`.trim();
    expect(solve(input)).toEqual([6]); 
});

test('cycle with 4 nodes', () => {
    const input = `4 4
1 2
2 3
3 4
4 1`.trim();
    expect(solve(input)).toEqual([4]);
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

test('bridge edge case', () => {
    const input = `6 5
1 2
2 3
3 4
4 5
5 6`.trim();
    expect(solve(input)).toEqual([8]);
});

test('multiple components after removal', () => {
    const input = `8 8
1 2
2 3
3 4
4 1
5 6
6 7
7 8
8 5`.trim();
    expect(solve(input)).toEqual([12]);
});

test('large graph with multiple cycles', () => {
    const input = `10 12
1 2
2 3
3 4
4 1
5 6
6 7
7 8
8 5
1 5
2 6
3 7
4 8`.trim();
    expect(solve(input)).toEqual([36]);
});

test('minimum edge case n=2', () => {
    const input = `2 1
1 2`.trim();
    expect(solve(input)).toEqual([0]);
});
