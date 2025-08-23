// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/13.js'

test('example case from description with [1, 2, 2]', () => {
    expect(solve([
        [1, 2, 2]
    ])).toEqual([4]);
});

test('minimal single element array', () => {
    expect(solve([
        [5]
    ])).toEqual([1]);
});

test('edge case with all same elements', () => {
    expect(solve([
        [3, 3, 3, 3]
    ])).toEqual([10]);
});

test('large array with alternating values', () => {
    expect(solve([
        [1, 2, 1, 2, 1, 2, 1, 2]
    ])).toEqual([20]);
});

test('tricky case with mixed medians', () => {
    expect(solve([
        [1, 3, 2, 3, 1]
    ])).toEqual([9]);
});

test('random valid case with even length', () => {
    expect(solve([
        [4, 4, 5, 5]
    ])).toEqual([7]);
});

test('random valid case with ascending values', () => {
    expect(solve([
        [1, 2, 3, 4, 5]
    ])).toEqual([9]);
});

test('maximum length case with repeating pattern', () => {
    expect(solve([
        [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
    ])).toEqual([35]);
});