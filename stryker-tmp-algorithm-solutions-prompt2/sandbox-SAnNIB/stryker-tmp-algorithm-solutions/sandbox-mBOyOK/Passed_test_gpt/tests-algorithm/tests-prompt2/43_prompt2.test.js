// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/43.js';

test('typical case 1', () => {
    expect(solve(5, [4, 0, 3, 1, 2])).toEqual([3, 2]);
});

test('typical case 2', () => {
    expect(solve(5, [1, 2, 3, 4, 0])).toEqual([3, 4]);
});

test('typical case 3', () => {
    expect(solve(5, [1, 3, 4, 0, 2])).toEqual([4, 5]);
});

test('single element', () => {
    expect(solve(1, [7])).toEqual([Number.MAX_SAFE_INTEGER, 0]);
});

test('two elements increasing', () => {
    expect(solve(2, [1, 2])).toEqual([0, 1]);
});

test('two elements decreasing', () => {
    expect(solve(2, [2, 1])).toEqual([0, 1]);
});

test('n = 0, empty array', () => {
    expect(solve(0, [])).toEqual([Number.MAX_SAFE_INTEGER, 0]);
});

test('minimum allowed input (n=1)', () => {
    expect(solve(1, [0])).toEqual([Number.MAX_SAFE_INTEGER, 0]);
});
