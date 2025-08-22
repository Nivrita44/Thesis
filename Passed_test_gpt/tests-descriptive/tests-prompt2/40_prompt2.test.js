import { solve } from '../../solutions-descriptive/40.js';

test('negOneGroup only', () => {
    expect(solve(1, [-1])).toEqual([1]);
});

test('all -1 pattern', () => {
    expect(solve(3, [-1, -1, -1])).toEqual([1, undefined, undefined]);
});