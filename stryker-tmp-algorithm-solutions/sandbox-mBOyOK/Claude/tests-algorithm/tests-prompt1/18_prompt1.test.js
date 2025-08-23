// @ts-nocheck
import { solve } from '../../../solutions-algorithm/18.js'

test('example with l=1, r=4', () => {
    expect(solve([1, 4])).toEqual([2, 4]);
});

test('minimal case with l=1, r=2', () => {
    expect(solve([1, 2])).toEqual([1, 2]);
});

test('edge case when LCM exceeds r', () => {
    expect(solve([10, 12])).toEqual([-1, -1]);
});

test('largeumbers case', () => {
    expect(solve([998, 1000])).toEqual([998, 999]);
});

test('consecutiveumbers case', () => {
    expect(solve([5, 8])).toEqual([6, 8]);
});

test('case whenumbers are powers of 2', () => {
    expect(solve([4, 16])).toEqual([4, 8]);
});

test('case with primeumbers range', () => {
    expect(solve([11, 15])).toEqual([12, 15]);
});

test('corner case with small gap', () => {
    expect(solve([999999998, 1000000000])).toEqual([999999998, 999999999]);
});