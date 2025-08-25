import { solve } from '../../../solutions-algorithm/28.js';

test('typical and provided cases', () => {
    const input = [
        { x: [1, 1], y: [3, 3], f: [2, 2] },
        { x: [2, 5], y: [2, 1], f: [2, 3] },
        { x: [1000, 42], y: [1000, 1], f: [1000, 1000] },
        { x: [1, 10], y: [3, 10], f: [2, 10] },
        { x: [3, 8], y: [7, 8], f: [3, 7] },
        { x: [2, 1], y: [4, 1], f: [1, 1] },
        { x: [1, 344], y: [1, 10], f: [1, 1] }
    ];
    const expected = [4, 6, 41, 4, 4, 2, 334];
    expect(solve(input)).toEqual(expected);
});

test('x, y, f in the same row but obstacle not between', () => {
    const input = [{ x: [2, 3], y: [4, 3], f: [1, 3] }];
    expect(solve(input)).toEqual([2]);
});

test('x, y, f in the same col but obstacle not between', () => {
    const input = [{ x: [0, 4], y: [0, 7], f: [0, 10] }];
    expect(solve(input)).toEqual([3]);
});

test('obstacle exactly between in same row', () => {
    const input = [{ x: [2, 1], y: [4, 1], f: [3, 1] }];
    expect(solve(input)).toEqual([4]);
});

test('no obstacle, unrelated f', () => {
    const input = [{ x: [0, 0], y: [3, 4], f: [100, 100] }];
    expect(solve(input)).toEqual([7]);
});

test('start and end are the same point', () => {
    const input = [{ x: [5, 5], y: [5, 5], f: [5, 5] }];
    expect(solve(input)).toEqual([0]);
});

test('obstacle on edge of path but not between', () => {
    const input = [{ x: [0, 0], y: [2, 0], f: [2, 0] }];
    expect(solve(input)).toEqual([2]);
});

test('negative coordinates in path', () => {
    const input = [
        { x: [-5, -5], y: [-7, -5], f: [-6, -5] },
        { x: [-2, -2], y: [-2, -6], f: [-2, -4] }
    ];
    expect(solve(input)).toEqual([4, 6]);
});

test('x, y, f all the same point', () => {
    const input = [{ x: [0, 0], y: [0, 0], f: [0, 0] }];
    expect(solve(input)).toEqual([0]);
});

test('obstacle not between in row (wrong direction)', () => {
    const input = [{ x: [4, 1], y: [2, 1], f: [3, 1] }];
    expect(solve(input)).toEqual([4]);
});

test('large identical values in one dimension, with obstacle not in path', () => {
    const input = [{ x: [100000, 1000], y: [100000, 1001], f: [200000, 1000] }];
    expect(solve(input)).toEqual([1]);
});
