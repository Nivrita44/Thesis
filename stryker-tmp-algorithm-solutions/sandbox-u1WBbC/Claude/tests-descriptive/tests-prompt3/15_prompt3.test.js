// @ts-nocheck
import { solve } from '../../../solutions-descriptive/15.js';

test('Example test case from problem description', () => {
    expect(solve(6, 5, 3, [1, 2, 3])).toBe("2 3 5");
});

test('Small deck with joker at start', () => {
    expect(solve(2, 1, 4, [2, 1, 1, 2])).toBe("2 2 2 2");
});

test('Joker in middle position', () => {
    expect(solve(5, 3, 1, [3])).toBe("2");
});

test('Multiple operations with same position', () => {
    expect(solve(3, 2, 4, [2, 1, 1, 1])).toBe("2 3 3 3");
});

test('Large deck with multiple operations', () => {
    expect(solve(18, 15, 4, [13, 15, 1, 16])).toBe("2 4 6 8");
});

test('Edge case - minimum deck size', () => {
    expect(solve(2, 2, 1, [1])).toBe("2");
});

test('Edge case - maximum position movement', () => {
    expect(solve(10, 5, 3, [10, 1, 5])).toBe("2 4 6");
});

test('Complex sequence of movements', () => {
    expect(solve(8, 4, 5, [1, 4, 8, 2, 6])).toBe("2 4 6 7 8");
});
