// @ts-nocheck
import { solve } from '../../../solutions-algorithm/9.js'

test('example case', () => {
    expect(solve([1, 5, 8, 123, 7], [123, 7, 5, 1], [123, 7, 1])).toEqual([8, 5]);
});

test('minimal case with 3 errors', () => {
    expect(solve([1, 2, 3], [1, 2], [1])).toEqual([3, 2]);
});

test('large numbers case', () => {
    expect(solve([1000000000, 999999999, 999999998, 999999997], [999999999, 999999998, 999999997], [999999999, 999999997])).toEqual([1000000000, 999999998]);
});

test('all numbers in ascending order', () => {
    expect(solve([1, 2, 3, 4], [1, 2, 4], [1, 2])).toEqual([3, 4]);
});

test('all numbers in descending order', () => {
    expect(solve([4, 3, 2, 1], [4, 2, 1], [4, 1])).toEqual([3, 2]);
});

test('repeated numbers in different order', () => {
    expect(solve([5, 5, 5, 1, 2, 3], [5, 5, 1, 2, 3], [5, 5, 1, 3])).toEqual([5, 2]);
});

test('sequential numbers with gap', () => {
    expect(solve([1, 2, 4, 5, 6], [2, 4, 5, 6], [2, 4, 6])).toEqual([1, 5]);
});

test('power of 2 numbers', () => {
    expect(solve([2, 4, 8, 16], [2, 4, 8], [2, 4])).toEqual([16, 8]);
});