// @ts-nocheck
import { solve } from '../../../solutions-algorithm/5.js'

test('example case from description', () => {
    expect(solve([3, 1, 4, 3])).toBe(1);
});

test('minimal case with single element', () => {
    expect(solve([1])).toBe(0);
});

test('edge case with all same numbers', () => {
    expect(solve([1, 1, 1, 1, 1])).toBe(4);
});

test('large case with all unique numbers', () => {
    expect(solve([1, 2, 3, 4, 5, 6])).toBe(0);
});

test('tricky case with duplicates at end', () => {
    expect(solve([5, 4, 3, 2, 2])).toBe(4);
});

test('case with multiple duplicates', () => {
    expect(solve([1, 2, 1, 3, 2, 4, 5])).toBe(3);
});

test('case where removing one element is not enough', () => {
    expect(solve([1, 2, 2, 1, 3, 3])).toBe(4);
});

test('case with duplicate at start', () => {
    expect(solve([2, 2, 3, 4, 5])).toBe(1);
});