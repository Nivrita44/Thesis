// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/25.js';

test('typical cases', () => {
    expect(
        solve([
            { n: 6, arr: [2, 2, 1, 2, 1, 2] },
            { n: 3, arr: [1, 2, 1] },
            { n: 4, arr: [1, 1, 1, 1] }
        ])
    ).toEqual([2, -1, -1]);
});

test('all 2s, even count', () => {
    expect(
        solve([
            { n: 4, arr: [2, 2, 2, 2] }
        ])
    ).toEqual([2]);
});

test('all 2s, odd count', () => {
    expect(
        solve([
            { n: 5, arr: [2, 2, 2, 2, 2] }
        ])
    ).toEqual([-1]);
});

test('minimum possible valid split', () => {
    expect(
        solve([
            { n: 2, arr: [2, 2] }
        ])
    ).toEqual([1]);
});

test('0 twos', () => {
    expect(
        solve([
            { n: 5, arr: [1, 3, 4, 5, 6] }
        ])
    ).toEqual([-1]);
});

test('no 2s with other numbers', () => {
    expect(
        solve([
            { n: 6, arr: [1, 4, 3, 7, 5, 9] }
        ])
    ).toEqual([-1]);
});

test('single element array (2)', () => {
    expect(
        solve([
            { n: 1, arr: [2] }
        ])
    ).toEqual([-1]);
});

test('single element array (not 2)', () => {
    expect(
        solve([
            { n: 1, arr: [1] }
        ])
    ).toEqual([-1]);
});

test('mix of twos and other numbers, odd number of twos', () => {
    expect(
        solve([
            { n: 7, arr: [2, 1, 2, 1, 2, 4, 3] }
        ])
    ).toEqual([-1]);
});


