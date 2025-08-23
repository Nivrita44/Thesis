// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/24.js';

test('should return 2 for 4 as example case', () => {
    expect(solve([4])).toEqual([2]);
});

test('should return 1 for 2 as minimal case', () => {
    expect(solve([2])).toEqual([1]);
});

test('should return 500000 for 1000000 as upper bound case', () => {
    expect(solve([1000000])).toEqual([500000]);
});

test('should return 3 for 6 as typical case', () => {
    expect(solve([6])).toEqual([3]);
});

test('should return 4 for 8 as typical case', () => {
    expect(solve([8])).toEqual([4]);
});

test('should return 5 for 10 as typical case', () => {
    expect(solve([10])).toEqual([5]);
});

test('should return 6 for 12 as typical case', () => {
    expect(solve([12])).toEqual([6]);
});

test('should return 100 for 200 as larger case', () => {
    expect(solve([200])).toEqual([100]);
});

test('should return 42 for 84 as tricky case', () => {
    expect(solve([84])).toEqual([42]);
});