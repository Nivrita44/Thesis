// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/10.js';

test('example case', () => {
    expect(solve(
        4, [
            [1, 3],
            [0, 2],
            [1, 3],
            [0, 4]
        ], // first range array
        [
            [1, 2],
            [2, 3],
            [1, 4]
        ], // second range array
        [
            [1, 2],
            [2, 3],
            [1, 4]
        ] // edges array
    )).toBe(2);
});

test('single node case', () => {
    expect(solve(
        1, [
            [5, 10]
        ], [
            [5, 10]
        ], []
    )).toBe(5);
});

test('line of nodes with same range', () => {
    expect(solve(
        3, [
            [1, 1],
            [1, 1],
            [1, 1]
        ], [
            [1, 1],
            [1, 1],
            [1, 1]
        ], [
            [1, 2],
            [2, 3]
        ]
    )).toBe(1);
});

test('star shaped tree', () => {
    expect(solve(
        4, [
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5]
        ], [
            [0, 5],
            [0, 5],
            [0, 5],
            [0, 5]
        ], [
            [1, 2],
            [1, 3],
            [1, 4]
        ]
    )).toBe(0);
});

test('large ranges', () => {
    expect(solve(
        3, [
            [0, 1000000000],
            [0, 1000000000],
            [0, 1000000000]
        ], [
            [0, 1000000000],
            [0, 1000000000],
            [0, 1000000000]
        ], [
            [1, 2],
            [2, 3]
        ]
    )).toBe(0);
});

test('different ranges requiring increase', () => {
    expect(solve(
        3, [
            [3, 5],
            [4, 7],
            [5, 8]
        ], [
            [3, 5],
            [4, 7],
            [5, 8]
        ], [
            [1, 2],
            [2, 3]
        ]
    )).toBe(5);
});

test('nodes with non-overlapping ranges', () => {
    expect(solve(
        4, [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8]
        ], [
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8]
        ], [
            [1, 2],
            [2, 3],
            [3, 4]
        ]
    )).toBe(7);
});

test('binary tree shape', () => {
    expect(solve(
        7, [
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3]
        ], [
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3],
            [1, 3]
        ], [
            [1, 2],
            [1, 3],
            [2, 4],
            [2, 5],
            [3, 6],
            [3, 7]
        ]
    )).toBe(1);
});

test('tree with varied ranges', () => {
    expect(solve(
        5, [
            [2, 4],
            [3, 6],
            [1, 5],
            [2, 7],
            [4, 8]
        ], [
            [2, 4],
            [3, 6],
            [1, 5],
            [2, 7],
            [4, 8]
        ], [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5]
        ]
    )).toBe(4);
});