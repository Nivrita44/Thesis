import { solve } from '../../../solutions-descriptive/35.js';

test('n=1, k=0, single element', () => {
    expect(solve(1, 0, [42])).toBe(42);
});

test('n=2, k=0, increasing elements', () => {
    expect(solve(2, 0, [1, 2])).toBe(3);
});

test('n=6, k=2, all elements are zero', () => {
    expect(solve(6, 2, [0, 0, 0, 0, 0, 0])).toBe(0);
});

test('n=3, k=0, sorted descending', () => {
    expect(solve(3, 0, [7, 6, 5])).toBe(18);
});