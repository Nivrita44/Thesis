import { solve } from '../../../solutions-algorithm/12.js';

test('example case', () => {
    expect(solve(4, [1, 2, 3, 4])).toEqual([8, -4]);
});

test('case with all same numbers', () => {
    expect(solve(3, [5, 5, 5])).toEqual([9, -6]);
});

test('case with no duplicates', () => {
    expect(solve(3, [1, 2, 3])).toEqual([9, -6]);
});

test('case with one duplicate', () => {
    expect(solve(4, [1, 2, 2, 3])).toEqual([8, -4]);
});

test('case with multiple duplicates', () => {
    expect(solve(5, [1, 1, 2, 2, 3])).toEqual([9, -4]);
});

