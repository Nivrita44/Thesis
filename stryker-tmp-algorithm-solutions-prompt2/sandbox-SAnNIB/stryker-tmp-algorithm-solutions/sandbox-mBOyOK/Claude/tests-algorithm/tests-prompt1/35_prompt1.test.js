// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/35.js'

test('example case', () => {
    expect(solve([
        [27, 3]
    ])).toEqual([3]);
});

test('n equals k case', () => {
    expect(solve([
        [5, 5]
    ])).toEqual([1]);
});

test('large input case', () => {
    expect(solve([
        [1000000000, 2]
    ])).toEqual([14]);
});

test('minimal case=1', () => {
    expect(solve([
        [1, 2]
    ])).toEqual([1]);
});

test('power of k case', () => {
    expect(solve([
        [16, 2]
    ])).toEqual([1]);
});

test('requires multiple operations of same power', () => {
    expect(solve([
        [15, 4]
    ])).toEqual([4]);
});

test('n less than k case', () => {
    expect(solve([
        [3, 5]
    ])).toEqual([3]);
});

test('consecutive powerseeded', () => {
    expect(solve([
        [12, 2]
    ])).toEqual([2]);
});

test('requires mix of different powers', () => {
    expect(solve([
        [63, 3]
    ])).toEqual([4]);
});