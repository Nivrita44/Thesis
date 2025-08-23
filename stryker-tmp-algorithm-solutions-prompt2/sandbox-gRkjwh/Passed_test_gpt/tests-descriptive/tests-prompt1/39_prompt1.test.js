import { solve } from '../../../solutions-descriptive/39.js';

test('single element', () => {
    expect(solve(1, [3])).toBe(1);
});

test('all different consecutive numbers', () => {
    expect(solve(4, [0, 1, 2, 3])).toBe(4);
});

test('strictly decreasing', () => {
    expect(solve(5, [10, 8, 6, 4, 2])).toBe(5);
});

test('works with missing numbers', () => {
    expect(solve(6, [0, 2, 3, 7, 5, 1])).toBe(6);
});

test('all same numbers', () => {
    expect(solve(5, [1, 1, 1, 1, 1])).toBe(5);
});

test('alternating numbers', () => {
    expect(solve(7, [1, 0, 1, 0, 1, 0, 1])).toBe(7);
});


test('contains all from 0 to n-1 shuffled', () => {
    expect(solve(5, [3, 0, 4, 2, 1])).toBe(5);
});


test('maximize with gaps', () => {
    expect(solve(8, [2, 3, 1, 5, 0, 6, 4, 7])).toBe(8);
});
