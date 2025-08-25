import { solve } from '../../../solutions-algorithm/44.js'

test('example with=4 k=1 should return sorted array', () => {
    expect(solve(4, 1)).toEqual([1, 2, 3, 4]);
});

test('example with=3 k=3 should return [2,1,3]', () => {
    expect(solve(3, 3)).toEqual([2, 1, 3]);
});

test('edge case with=1 k=1', () => {
    expect(solve(1, 1)).toEqual([1]);
});

test('impossible case should return [-1]', () => {
    expect(solve(4, 2)).toBe(-1);
});

