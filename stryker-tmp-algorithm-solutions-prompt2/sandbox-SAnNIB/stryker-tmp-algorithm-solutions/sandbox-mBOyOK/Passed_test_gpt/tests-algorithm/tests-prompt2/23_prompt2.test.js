// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/23.js';

test('solve typical cases', () => {
    expect(solve([
        [7, 5, 12345],
        [5, 0, 4],
        [10, 5, 15],
        [17, 8, 54321],
        [499999993, 9, 1000000000],
        [10, 5, 187],
        [2, 0, 999999999]
    ])).toEqual([
        12339,
        0,
        15,
        54306,
        999999995,
        185,
        999999998
    ]);
});


test('solve minimum values and edge cases', () => {
    expect(solve([
        [1, 0, 0]
    ])).toEqual([0]);
    expect(solve([
        [1, 0, 1]
    ])).toEqual([1]);
    expect(solve([
        [1, 1, 1]
    ])).toEqual([1]);
});

test('solve n < b edge case', () => {
    expect(solve([
        [3, 5, 4]
    ])).toEqual([2]);
    expect(solve([
        [100, 50, 20]
    ])).toEqual([-50]);
});

test('solve large values', () => {
    expect(solve([
        [1000000, 0, 1000000000]
    ])).toEqual([1000000000]);
    expect(solve([
        [1, 1000000000, 1000000000]
    ])).toEqual([1000000000]);
});

test('solve empty array', () => {
    expect(solve([])).toEqual([]);
});
