// @ts-nocheck
import { solve } from '../../solutions-descriptive/7.js';
//all fail
test('smallest tree, n = 1', () => {
    expect(solve(1, [])).toBe(0);
});

test('line tree n=2', () => {
    expect(solve(2, [
        [1, 2]
    ])).toBe(0);
});

test('line tree n=3', () => {
    expect(solve(3, [
        [1, 2],
        [2, 3]
    ])).toBe(0);
});

test('star tree n=3', () => {
    expect(solve(3, [
        [1, 2],
        [1, 3]
    ])).toBe(0);
});

test('star tree n=4', () => {
    expect(solve(4, [
        [1, 2],
        [1, 3],
        [1, 4]
    ])).toBe(0);
});

test('small binary tree n=4', () => {
    expect(solve(4, [
        [1, 2],
        [1, 3],
        [2, 4]
    ])).toBe(1);
});

test('balanced binary tree n=7', () => {
    expect(solve(7, [
        [1, 2],
        [1, 3],
        [2, 4],
        [2, 5],
        [3, 6],
        [3, 7]
    ])).toBe(12);
});

test('unbalanced tree n=5', () => {
    expect(solve(5, [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ])).toBe(0);
});

test('random tree n=6', () => {
    expect(solve(6, [
        [1, 2],
        [1, 3],
        [3, 4],
        [3, 5],
        [5, 6]
    ])).toBe(5);
});

test('another simple tree n=4', () => {
    expect(solve(4, [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(0);
});

test('star plus leaf n=5', () => {
    expect(solve(5, [
        [1, 2],
        [1, 3],
        [1, 4],
        [4, 5]
    ])).toBe(2);
});


//all wrong