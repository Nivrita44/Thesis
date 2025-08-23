// @ts-nocheck
import { solve } from '../../../solutions-algorithm/27.js';

test('n=1', () => {
    expect(solve([1])).toEqual([0]);
});

test('n=9', () => {
    expect(solve([9])).toEqual([1]);
});

test('n=10', () => {
    expect(solve([10])).toEqual([1]);
});

test('n=20', () => {
    expect(solve([20])).toEqual([2]);
});

test('n=19', () => {
    expect(solve([19])).toEqual([2]);
});

test('n=100', () => {
    expect(solve([100])).toEqual([10]);
});

test('n=55', () => {
    expect(solve([55])).toEqual([5]);
});

test('n=123', () => {
    expect(solve([123])).toEqual([12]);
});

test('n=999', () => {
    expect(solve([999])).toEqual([100]);
});

test('n=1000', () => {
    expect(solve([1000])).toEqual([100]);
});

test('large n=1000000000', () => {
    expect(solve([1000000000])).toEqual([100000000]);
});


