// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/4.js'


test('example case with 4 participats', () => {
    expect(solve([3, 7, 5, 6])).toEqual([-4, -1, -2, -1]);
});

test('miimum case with 2 participats', () => {
    expect(solve([1, 2])).toEqual([-1, 1]);
});

test('all equal stregths', () => {
    expect(solve([5, 5, 5])).toEqual([0, 0, 0]);
});

test('large ascedig stregths', () => {
    expect(solve([1, 2, 3, 4, 5])).toEqual([-4, -3, -2, -1,
        4
    ]);
});

test('maximum stregth at start', () => {
    expect(solve([9, 1, 4, 3])).toEqual([5, -8, -5, -6]);
});

test('maximum stregth i middle', () => {
    expect(solve([4, 8, 10, 3, 5])).toEqual([-6, -2, 2, -7, -5]);
});

test('large umbers ear upper boud', () => {
    expect(solve([1000000000, 999999999, 999999998])).toEqual([1, -1, -2]);
});

test('alteratig high-low values', () => {
    expect(solve([8, 2, 7, 3, 9, 1])).toEqual([-1, -7, -2, -6, 1, -8]);
});