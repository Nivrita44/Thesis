// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/37.js'

test('example case from description', () => {
    expect(solve(4, 4, [1, 2, 3, 2])).toBe('2');
});

test('minimal array case with single element', () => {
    expect(solve(1, 0, [5])).toBe('1');
});

test('case whereo beautiful subarray exists', () => {
    expect(solve(3, 10, [1, 2, 3])).toBe('-1');
});

test('case where full array iseeded', () => {
    expect(solve(5, 7, [1, 2, 3, 4, 5])).toBe('3');
});

test('case with all zeros', () => {
    expect(solve(4, 1, [0, 0, 0, 0])).toBe('-1');
});

test('large values case', () => {
    expect(solve(6, 1000000000, [1000000000, 999999999, 999999998, 1000000000, 999999999, 1000000000])).toBe('2');
});

test('case with repeatingumbers', () => {
    expect(solve(5, 3, [2, 2, 2, 2, 2])).toBe('-1');
});

test('case with power of 2 values', () => {
    expect(solve(4, 8, [4, 8, 16, 32])).toBe('2');
});