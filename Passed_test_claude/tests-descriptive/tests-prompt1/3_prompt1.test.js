import { solve } from '../../../solutions-descriptive/3.js'



test('minimal 1x1 square', () => {
    expect(solve(0, 1, 0, 1)).toBe(1);
});

test('rectangular region - 1x2', () => {
    expect(solve(0, 1, 0, 2)).toBe(2);
});

test('offset square region', () => {
    expect(solve(1, 3, 1, 3)).toBe(4);
});

