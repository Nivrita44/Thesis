import { solve } from '../../../solutions-descriptive/39.js'

test('minimal length sequence', () => {
    expect(solve(1, [5])).toBe(1);
});

test('sequence with all zeros', () => {
    expect(solve(4, [0, 0, 0, 0])).toBe(1);
});

test('sequence with strictly increasing values', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(5);
});

test('sequence with repeated values', () => {
    expect(solve(4, [2, 2, 2, 2])).toBe(4);
});

test('large values in sequence', () => {
    expect(solve(3, [1000000000, 999999999, 999999998])).toBe(3);
});
