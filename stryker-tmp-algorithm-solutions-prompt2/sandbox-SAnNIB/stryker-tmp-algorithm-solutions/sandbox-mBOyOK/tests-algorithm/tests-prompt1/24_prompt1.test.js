// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/24.js';

test('n=2', () => {
    expect(solve([2])).toEqual([1]);
});

test('n=3', () => {
    expect(solve([3])).toEqual([1]);
});

test('n=4', () => {
    expect(solve([4])).toEqual([2]);
});

test('n=5', () => {
    expect(solve([5])).toEqual([2]);
});

test('n=6', () => {
    expect(solve([6])).toEqual([3]);
});

test('n=7', () => {
    expect(solve([7])).toEqual([3]);
});

test('n=8', () => {
    expect(solve([8])).toEqual([4]);
});

test('n=9', () => {
    expect(solve([9])).toEqual([4]);
});

test('n=10', () => {
    expect(solve([10])).toEqual([5]);
});

test('n=100', () => {
    expect(solve([100])).toEqual([50]);
});

test('n=15', () => {
    expect(solve([15])).toEqual([7]);
});

test('n=99', () => {
    expect(solve([99])).toEqual([49]);
});

test('n=1000', () => {
    expect(solve([1000])).toEqual([500]);
});

test('n=999999', () => {
    expect(solve([999999])).toEqual([499999]);
});

test('n=1000000', () => {
    expect(solve([1000000])).toEqual([500000]);
});
