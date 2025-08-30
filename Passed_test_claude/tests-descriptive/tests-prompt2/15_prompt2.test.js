import { solve } from '../../../solutions-descriptive/15.js';

test('basic case with middle selection', () => {
    expect(solve(6, 5, 3, [1, 2, 3])).toBe('2 3 5');
});

test('small array with repeated selections', () => {
    expect(solve(2, 1, 4, [2, 1, 1, 2])).toBe('2 2 2 2');
});

test('single query at current position', () => {
    expect(solve(5, 3, 1, [3])).toBe('2');
});

test('selections before current position', () => {
    expect(solve(3, 2, 4, [2, 1, 1, 1])).toBe('2 3 3 3');
});

test('large array with mixed selections', () => {
    expect(solve(18, 15, 4, [13, 15, 1, 16])).toBe('2 4 6 8');
});

test('edge case with array size 1', () => {
    expect(solve(1, 1, 1, [1])).toBe('1');
});


