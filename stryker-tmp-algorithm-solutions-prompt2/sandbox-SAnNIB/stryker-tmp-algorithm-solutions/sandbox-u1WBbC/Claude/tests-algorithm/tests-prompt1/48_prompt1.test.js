// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/48.js'

test('example case', () => {
    expect(solve(4, 2, 3, [
        [1, 2],
        [1, 3],
        [2, 4]
    ])).toBe(2);
});

test('minimum tree size with minimum water and coins', () => {
    expect(solve(2, 0, 0, [
        [1, 2]
    ])).toBe(0);
});

test('large tree with max water and coins', () => {
    expect(solve(100000, 1000000000, 1000000000, Array.from({ length: 99999 }, (_, i) => [1, i + 2]))).toBe(1000000000);
});

test('no water available', () => {
    expect(solve(5, 0, 100, [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ])).toBe(0);
});

test('no coins available', () => {
    expect(solve(4, 5, 0, [
        [1, 2],
        [1, 3],
        [2, 4]
    ])).toBe(5);
});

test('balanced tree with limited coins', () => {
    expect(solve(7, 6, 4, [
        [1, 2],
        [1, 3],
        [2, 4],
        [2, 5],
        [3, 6],
        [3, 7]
    ])).toBe(4);
});

test('linear tree with sufficient resources', () => {
    expect(solve(5, 4, 10, [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ])).toBe(4);
});

test('star shaped tree', () => {
    expect(solve(6, 5, 8, [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6]
    ])).toBe(5);
});