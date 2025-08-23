// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/13.js';

test('example case n=4 should return 3 pairs', () => {
    expect(solve([4])).toEqual([3]);
});

test('minimum valid input n=2 should return 1 pair', () => {
    expect(solve([2])).toEqual([1]);
});

test('maximum valid input n=100 should return 99 pairs', () => {
    expect(solve([100])).toEqual([99]);
});

test('small input n=3 should return 2 pairs', () => {
    expect(solve([3])).toEqual([2]);
});

test('medium input n=10 should return 9 pairs', () => {
    expect(solve([10])).toEqual([9]);
});

test('typical input n=50 should return 49 pairs', () => {
    expect(solve([50])).toEqual([49]);
});

test('large input n=75 should return 74 pairs', () => {
    expect(solve([75])).toEqual([74]);
});

test('random input n=23 should return 22 pairs', () => {
    expect(solve([23])).toEqual([22]);
});