// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/25.js';

test('Example and common cases', () => {
    expect(
        solve([
            { n: 6, arr: [2, 2, 1, 2, 1, 2] }
        ])
    ).toEqual([2]);
    expect(
        solve([
            { n: 3, arr: [1, 2, 1] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 4, arr: [1, 1, 1, 1] }
        ])
    ).toEqual([-1]);
});

test('No twos at all', () => {
    expect(
        solve([
            { n: 5, arr: [1, 1, 1, 1, 1] }
        ])
    ).toEqual([-1]);
});

test('All twos and even count', () => {
    expect(
        solve([
            { n: 4, arr: [2, 2, 2, 2] }
        ])
    ).toEqual([2]);
    expect(
        solve([
            { n: 2, arr: [2, 2] }
        ])
    ).toEqual([1]);
    expect(
        solve([
            { n: 6, arr: [2, 2, 2, 2, 2, 2] }
        ])
    ).toEqual([3]);
});

test('All twos but odd count', () => {
    expect(
        solve([
            { n: 3, arr: [2, 2, 2] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 5, arr: [2, 2, 2, 2, 2] }
        ])
    ).toEqual([-1]);
});




test('Edge cases: n=2', () => {
    expect(
        solve([
            { n: 2, arr: [1, 1] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 2, arr: [1, 2] }
        ])
    ).toEqual([-1]);
    expect(
        solve([
            { n: 2, arr: [2, 2] }
        ])
    ).toEqual([1]);
});

test('Multiple queries mixed', () => {
    expect(
        solve([
            { n: 3, arr: [1, 2, 1] },
            { n: 10, arr: [2, 2, 1, 2, 1, 2, 1, 2, 2, 1] },
            { n: 6, arr: [1, 1, 1, 1, 1, 1] }
        ])
    ).toEqual([-1, 4, -1]);
});

