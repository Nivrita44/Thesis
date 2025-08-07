import solve from '../../solutions-descriptive/6.js';
//fail all
test('Single element', () => {
    expect(solve(1, [3])).toBe(3);
});

test('Two identical elements', () => {
    expect(solve(2, [1, 1])).toBe(9);
});

test('Two different elements', () => {
    expect(solve(2, [2, 3])).toBe(6);
});

test('Three elements, all same', () => {
    expect(solve(3, [5, 5, 5])).toBe(27);
});

test('Three distinct elements', () => {
    expect(solve(3, [1, 2, 3])).toBe(12);
});

test('n=4, all elements same', () => {
    expect(solve(4, [4, 4, 4, 4])).toBe(81);
});

test('n=4, mixed elements', () => {
    expect(solve(4, [1, 2, 1, 3])).toBe(36);
});

test('Edge case: All elements are 1', () => {
    expect(solve(5, [1, 1, 1, 1, 1])).toBe(243);
});

test('Edge case: Increasing sequence', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(72);
});

test('n=6, alternating elements', () => {
    expect(solve(6, [2, 3, 2, 3, 2, 3])).toBe(216);
});

test('Edge case: Large values', () => {
    expect(solve(2, [10 ** 9, 10 ** 9])).toBe(9);
});