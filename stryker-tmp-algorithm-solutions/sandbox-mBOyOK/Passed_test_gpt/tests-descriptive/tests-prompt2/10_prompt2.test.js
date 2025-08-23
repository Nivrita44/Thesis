// @ts-nocheck
import { solve } from '../../../solutions-descriptive/10.js';

test('single node', () => {
    expect(solve(1, [5], [10], [])).toBe(5);
});

test('simple chain, no adjustment', () => {
    expect(solve(2, [3, 4], [5, 6], [
        [1, 2]
    ])).toBe(4);
});

test('simple chain, needs adjustment', () => {
    expect(solve(2, [5, 4], [5, 6], [
        [1, 2]
    ])).toBe(5);
});

test('three node chain, no adjustment', () => {
    expect(solve(3, [2, 3, 4], [3, 4, 5], [
        [1, 2],
        [2, 3]
    ])).toBe(4);
});

test('three node chain, adjust at leaf', () => {
    expect(solve(3, [5, 3, 2], [5, 4, 3], [
        [1, 2],
        [2, 3]
    ])).toBe(5);
});

test('three node chain, adjust at root', () => {
    expect(solve(3, [3, 3, 8], [7, 7, 8], [
        [1, 2],
        [2, 3]
    ])).toBe(8);
});

test('star tree, all equal', () => {
    expect(solve(4, [3, 3, 3, 3], [5, 5, 5, 5], [
        [1, 2],
        [1, 3],
        [1, 4]
    ])).toBe(3);
});


test('tight constraints', () => {
    expect(solve(3, [6, 2, 3], [6, 5, 6], [
        [1, 2],
        [1, 3]
    ])).toBe(6);
});

test('bigger star with varying l/r', () => {
    expect(solve(5, [10, 4, 5, 1, 8], [11, 8, 8, 5, 9], [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5]
    ])).toBe(10);
});

test('path with back-to-back large differences', () => {
    expect(solve(4, [2, 100, 200, 300], [5, 150, 250, 350], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(300);
});

test('all l are larger than next r', () => {
    expect(solve(3, [10, 20, 30], [10, 20, 30], [
        [1, 2],
        [2, 3]
    ])).toBe(30);
});