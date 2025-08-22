import { solve } from '../../solutions-descriptive/39.js';

test('array contains zeros interleaved', () => {
    expect(solve(6, [1, 0, 2, 3, 0, 4])).toBe(5);
});

test('array contains only zeros', () => {
    expect(solve(4, [0, 0, 0, 0])).toBe(1);
});

test('zero at start', () => {
    expect(solve(4, [0, 1, 2, 3])).toBe(4);
});

test('zero at end', () => {
    expect(solve(5, [3, 2, 1, 5, 0])).toBe(5);
});

test('array with one element 0', () => {
    expect(solve(1, [0])).toBe(1);
});

test('random array with multiple zeros', () => {
    expect(solve(5, [0, 2, 0, 3, 0])).toBe(3);
});

test('array with sequential numbers starting from 0', () => {
    expect(solve(6, [0, 1, 2, 3, 4, 5])).toBe(6);
});

test('array with mixed zeros and negatives', () => {
    expect(solve(5, [-3, 0, -2, 0, -1])).toBe(3);
});