import { solve } from '../../../solutions-algorithm/9.js';
test('case 1', () => {
    expect(
        solve([1, 2, 3], [2, 1], [1])
    ).toEqual([3, 2]);
});

test('case 2', () => {
    expect(
        solve([4, 3, 2, 1, 5], [3, 2, 1, 5], [3, 2, 5])
    ).toEqual([4, 1]);
});

test('case 3', () => {
    expect(
        solve([2, 4, 6, 8], [4, 8, 2], [4, 2])
    ).toEqual([6, 8]);
});

test('descending order', () => {
    expect(
        solve([5, 4, 3, 2, 1], [4, 3, 2, 1], [3, 2, 1])
    ).toEqual([5, 4]);
});

test('random order', () => {
    expect(
        solve([10, 20, 30, 40, 50, 60], [60, 50, 40, 30, 10], [50, 30, 60, 10])
    ).toEqual([20, 40]);
});

test('large numbers', () => {
    expect(
        solve([1000000000, 999999999, 999999998], [1000000000, 999999999], [999999999])
    ).toEqual([999999998, 1000000000]);
});

test('duplicates not present', () => {
    expect(
        solve([5, 7, 9, 2], [2, 7, 5], [2, 7])
    ).toEqual([9, 5]);
});