import solve from '../../solutions-descriptive/12.js';

test('typical case 1', () => {
    const input = [{
        size: 2,
        queries: 2,
        values: [1, 10],
        updates: [
            [1, 10],
            [2, 2],
        ],
    }, ];
    const result = solve(input);
    expect(result).toEqual([
        [0, 0, 0]
    ]);
});

test('typical case 2', () => {
    const input = [{
        size: 5,
        queries: 3,
        values: [1, 2, 3, 4, 5],
        updates: [
            [3, 7],
            [1, 4],
            [5, 2],
        ],
    }, ];
    const result = solve(input);
    expect(result).toEqual([
        [0, 0, 0, 0]
    ]);
});

test('typical case 3', () => {
    const input = [{
        size: 8,
        queries: 5,
        values: [7, 4, 2, 4, 8, 2, 1, 4],
        updates: [
            [5, 4],
            [1, 10],
            [3, 2],
            [8, 11],
            [7, 7],
        ],
    }, ];
    const result = solve(input);
    expect(result).toEqual([
        [0, 0, 0, 0, 0, 0]
    ]);
});

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

test('edge case: negative values', () => {
    const input = [{
        size: 3,
        queries: 2,
        values: [-1, -2, -3],
        updates: [
            [2, -5],
            [3, -10],
        ],
    }, ];
    const result = solve(input);
    expect(result).toEqual([
        [0, 0, 0]
    ]);
});

test('multiple test cases', () => {
    const input = [{
            size: 2,
            queries: 2,
            values: [1, 10],
            updates: [
                [1, 10],
                [2, 2]
            ],
        },
        {
            size: 5,
            queries: 3,
            values: [1, 2, 3, 4, 5],
            updates: [
                [3, 7],
                [1, 4],
                [5, 2]
            ],
        },
        {
            size: 8,
            queries: 5,
            values: [7, 4, 2, 4, 8, 2, 1, 4],
            updates: [
                [5, 4],
                [1, 10],
                [3, 2],
                [8, 11],
                [7, 7]
            ],
        }
    ];
    const result = solve(input);
    expect(result).toEqual([
        [0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]);
});