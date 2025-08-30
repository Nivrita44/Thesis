import { solve } from '../../../solutions-descriptive/1.js';

test('edge case where x equals y', () => {
    expect(solve(5, 5, 2)).toBe(0);
});

test('minimal input case', () => {
    expect(solve(1, 1, 1)).toBe(0);
});

test('impossible transformation case', () => {
    expect(solve(7, 11, 2)).toBe(-1);
});

test('single operation multiplication case', () => {
    expect(solve(2, 6, 3)).toBe(1);
});

test('single operation power case', () => {
    expect(solve(2, 4, 2)).toBe(1);
});
