import { solve } from '../../../solutions-descriptive/4.js';

test('n=3, all 1s', () => {
    expect(solve([1, 1, 1])).toBe(1);
});

test('n=3, varied values', () => {
    expect(solve([2, 3, 4])).toBe(24);
});

test('n=4, all equal values', () => {
    expect(solve([5, 5, 5, 5])).toBe(125);
});

test('n=3, max values', () => {
    expect(solve([1000, 1000, 1000])).toBe(1000000000);
});

test('n=3, minimum values', () => {
    expect(solve([1, 1, 1])).toBe(1);
});