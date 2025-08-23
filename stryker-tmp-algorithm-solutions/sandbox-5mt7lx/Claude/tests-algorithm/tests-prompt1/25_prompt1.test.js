// @ts-nocheck
import { solve } from '../../../solutions-algorithm/25.js';

test('example case with k=2 where product of first 2 equals product of last 2', () => {
    expect(solve([{ n: 4, arr: [1, 2, 1, 2] }])).toEqual([2]);
});

test('minimal case with 2 elements that cannot be split equally', () => {
    expect(solve([{ n: 2, arr: [1, 2] }])).toEqual([-1]);
});

test('edge case where all elements are 1', () => {
    expect(solve([{ n: 5, arr: [1, 1, 1, 1, 1] }])).toEqual([1]);
});

test('large case with alternating 1s and 2s', () => {
    expect(solve([{ n: 8, arr: [2, 1, 2, 1, 2, 1, 2, 1] }])).toEqual([4]);
});

test('case where only last position works', () => {
    expect(solve([{ n: 6, arr: [2, 2, 2, 1, 1, 1] }])).toEqual([3]);
});

test('case with multiple valid k values should return smallest', () => {
    expect(solve([{ n: 6, arr: [1, 1, 1, 1, 1, 1] }])).toEqual([1]);
});

test('case where split point exists', () => {
    expect(solve([{ n: 5, arr: [2, 2, 2, 1, 1] }])).toEqual([-1]);
});

test('tricky case with 2s followed by 1s', () => {
    expect(solve([{ n: 7, arr: [2, 2, 2, 1, 1, 1, 1] }])).toEqual([-1]);
});