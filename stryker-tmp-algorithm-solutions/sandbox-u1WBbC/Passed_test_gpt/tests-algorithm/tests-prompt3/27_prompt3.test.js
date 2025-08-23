// @ts-nocheck
import { solve } from '../../../solutions-algorithm/27.js';

test('Single small values including non-interesting and first interesting', () => {
    expect(solve([1])).toEqual([0]);
    expect(solve([8])).toEqual([0]);
    expect(solve([9])).toEqual([1]);
    expect(solve([10])).toEqual([1]);
});

test('Various small and edge transition values', () => {
    expect(solve([19])).toEqual([2]);
    expect(solve([29])).toEqual([3]);
    expect(solve([34])).toEqual([3]);
    expect(solve([98])).toEqual([9]);
    expect(solve([99])).toEqual([10]);
    expect(solve([100])).toEqual([10]);
});

test('n=0 should yield zero interesting numbers', () => {
    expect(solve([0])).toEqual([0]);
});



test('Random examples and large numbers', () => {
    expect(solve([880055535])).toEqual([88005553]);
});

test('Multiple numbers in same input array', () => {
    expect(solve([1, 9, 10, 34, 880055535])).toEqual([0, 1, 1, 3, 88005553]);
    expect(solve([0, 8, 19, 29, 99])).toEqual([0, 0, 2, 3, 10]);
});

test('Edge cases for n just before/after block transition', () => {
    expect(solve([8, 9, 10])).toEqual([0, 1, 1]);
    expect(solve([18, 19, 20])).toEqual([1, 2, 2]);
    expect(solve([98, 99, 100])).toEqual([9, 10, 10]);
});

test('Maximum allowed n', () => {
    expect(solve([1000000000])).toEqual([100000000]);
});
