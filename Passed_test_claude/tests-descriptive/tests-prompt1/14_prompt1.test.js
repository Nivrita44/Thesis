import { solve } from '../../../solutions-descriptive/14.js'

test('single scarecrow case', () => {
    expect(solve(1, 3, 10, [0])).toBe(14);
});

test('all scarecrows at start case', () => {
    expect(solve(5, 2, 10, [0, 0, 0, 0, 0])).toBe(16);
});