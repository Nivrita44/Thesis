import { solve } from '../../../solutions-algorithm/28.js';

test('A and B not aligned, F not on path', () => {
    const input = [
        { x: [1, 2], y: [3, 4], f: [5, 5] }
    ];
    expect(solve(input)).toEqual([4]);
});

test('A and B are vertically aligned, F not between', () => {
    const input = [
        { x: [2, 3], y: [2, 8], f: [1, 5] }
    ];
    expect(solve(input)).toEqual([5]);
});

test('A and B are vertically aligned, F between', () => {
    const input = [
        { x: [3, 2], y: [3, 6], f: [3, 4] }
    ];
    expect(solve(input)).toEqual([6]);
});

test('A and B are horizontally aligned, F not between', () => {
    const input = [
        { x: [4, 7], y: [8, 7], f: [4, 8] }
    ];
    expect(solve(input)).toEqual([4]);
});

test('A and B are horizontally aligned, F between', () => {
    const input = [
        { x: [6, 5], y: [2, 5], f: [4, 5] }
    ];
    expect(solve(input)).toEqual([6]);
});

test('A and B aligned, F at one end but not between', () => {
    const input = [
        { x: [7, 2], y: [7, 5], f: [7, 2] },
        { x: [7, 2], y: [7, 5], f: [7, 5] }
    ];
    expect(solve(input)).toEqual([3, 3]);
});

test('A and B diagonal, F on non-path cell', () => {
    const input = [
        { x: [1, 1], y: [4, 4], f: [2, 5] }
    ];
    expect(solve(input)).toEqual([6]);
});

test('All coordinates are at maximum, F not interfering', () => {
    const input = [
        { x: [1000, 1000], y: [999, 1000], f: [998, 998] }
    ];
    expect(solve(input)).toEqual([1]);
});

test('A and B are horizontally aligned, F not exactly between but on line', () => {
    const input = [
        { x: [10, 10], y: [13, 10], f: [12, 10] }
    ];
    expect(solve(input)).toEqual([5]);
});