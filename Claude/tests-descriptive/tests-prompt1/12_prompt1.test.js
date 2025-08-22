import {
    solve
} from '../../../solutions-descriptive/12.js';

test('example from description', () => {
    const input = {
        values: [3, 1, 5],
        updates: [
            [2, 4]
        ]
    };
    expect(solve(input.values, input.updates)).toEqual([1, 1]);
});

test('minimal input case', () => {
    const input = {
        values: [1],
        updates: []
    };
    expect(solve(input.values, input.updates)).toEqual([0]);
});

test('edge case with all same values', () => {
    const input = {
        values: [5, 5, 5, 5],
        updates: [
            [1, 5],
            [2, 5]
        ]
    };
    expect(solve(input.values, input.updates)).toEqual([0, 0, 0]);
});

test('upper bound case', () => {
    const input = {
        values: [1000000000, 1, 999999999],
        updates: [
            [1, 1]
        ]
    };
    expect(solve(input.values, input.updates)).toEqual([999999997, 999999997]);
});

test('tricky case with multiple changes', () => {
    const input = {
        values: [4, 2, 6, 3],
        updates: [
            [1, 5],
            [2, 1],
            [4, 7]
        ]
    };
    expect(solve(input.values, input.updates)).toEqual([2, 2, 3, 4]);
});

test('generic case 1', () => {
    const input = {
        values: [10, 20, 30],
        updates: [
            [2, 15]
        ]
    };
    expect(solve(input.values, input.updates)).toEqual([18, 18]);
});

test('generic case 2', () => {
    const input = {
        values: [7, 3, 9, 5],
        updates: [
            [3, 4],
            [1, 8]
        ]
    };
    expect(solve(input.values, input.updates)).toEqual([4, 3, 3]);
});

test('corner case with single element updates', () => {
    const input = {
        values: [5],
        updates: [
            [1, 10],
            [1, 1],
            [1, 100]
        ]
    };
    expect(solve(input.values, input.updates)).toEqual([0, 0, 0, 0]);
});