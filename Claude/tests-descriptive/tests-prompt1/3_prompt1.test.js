import { solve } from '../../../solutions-descriptive/3.js'

test('example case from description - 2x2 square', () => {
    expect(solve(0, 2, 0, 2)).toBe(4);
});

test('minimal 1x1 square', () => {
    expect(solve(0, 1, 0, 1)).toBe(1);
});

test('edge case - maximal 1M x 1M square', () => {
    expect(solve(0, 1000000, 0, 1000000)).toBe(4);
});

test('rectangular region - 1x2', () => {
    expect(solve(0, 1, 0, 2)).toBe(2);
});

test('offset square region', () => {
    expect(solve(1, 3, 1, 3)).toBe(4);
});

test('largeon-power-of-2 region', () => {
    expect(solve(0, 3, 0, 3)).toBe(9);
});

test('asymmetric region', () => {
    expect(solve(1, 4, 2, 6)).toBe(12);
});

test('misaligned region requiring manyodes', () => {
    expect(solve(3, 7, 3, 7)).toBe(16);
});

test('rectangular region with odd dimensions', () => {
    expect(solve(2, 5, 3, 8)).toBe(15);
});