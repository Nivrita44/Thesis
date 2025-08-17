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

test('large input case=5 k=7', () => {
    expect(solve(5, 7)).toEqual([3, 1, 5, 2, 4]);
});

test('minimum valid k for=4', () => {
    expect(solve(4, 4)).toEqual([2, 1, 4, 3]);
});

test('maximum valid k for=3', () => {
    expect(solve(3, 5)).toEqual([-1]);
});

test('generic case=6 k=9', () => {
    expect(solve(6, 9)).toEqual([3, 1, 5, 2, 6, 4]);
});

test('generic case=7 k=11', () => {
    expect(solve(7, 11)).toEqual([4, 1, 6, 2, 7, 3, 5]);
});