import { solve } from '../../../solutions-descriptive/37.js'



test('minimal array case with single element', () => {
    expect(solve(1, 0, [5])).toBe('1');
});

test('case whereo beautiful subarray exists', () => {
    expect(solve(3, 10, [1, 2, 3])).toBe('-1');
});

test('case with all zeros', () => {
    expect(solve(4, 1, [0, 0, 0, 0])).toBe('-1');
});

test('case with repeatingumbers', () => {
    expect(solve(5, 3, [2, 2, 2, 2, 2])).toBe('-1');
});

test('case with power of 2 values', () => {
    expect(solve(4, 8, [4, 8, 16, 32])).toBe('2');
});