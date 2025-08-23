// @ts-nocheck
import {solve} from '../../../solutions-descriptive/12.js';

test('empty input', () => {
    const input = [];
    const result = solve(input);
    expect(result).toEqual([]);
});

test('edge case: single element, no updates', () => {
    const input = [{
        size: 1,
        queries: 0,
        values: [42],
        updates: [],
    }, ];
    const result = solve(input);
    expect(result).toEqual([
        [0]
    ]);
});

test('edge case: all elements the same', () => {
    const input = [{
        size: 4,
        queries: 3,
        values: [9, 9, 9, 9],
        updates: [
            [2, 9],
            [3, 9],
            [1, 9],
        ],
    }, ];
    const result = solve(input);
    expect(result).toEqual([
        [0, 0, 0, 0]
    ]);
});