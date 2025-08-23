// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/43.js';

test('single camp', () => {
    expect(
        solve(1, 100, [50], [])
    ).toBe(50);
});

test('simple chain 2 camps, high c', () => {
    expect(
        solve(2, 100, [10, 20], [
            [1, 2]
        ])
    ).toBe(20);
});



test('star with center rich', () => {
    expect(
        solve(5, 2, [5, 1, 1, 1, 1], [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5]
        ])
    ).toBe(5);
});

test('star with leaves rich', () => {
    expect(
        solve(5, 2, [1, 5, 5, 5, 5], [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5]
        ])
    ).toBe(20);
});

test('star with c exceeding neighbors', () => {
    expect(
        solve(3, 1000, [1, 100, 100], [
            [1, 2],
            [1, 3]
        ])
    ).toBe(200);
});

test('line of camps', () => {
    expect(
        solve(4, 5, [5, 10, 20, 15], [
            [1, 2],
            [2, 3],
            [3, 4]
        ])
    ).toBe(30);
});

test('negative initial gold', () => {
    expect(
        solve(3, 2, [-5, 0, 10], [
            [1, 2],
            [2, 3]
        ])
    ).toBe(10);
});

test('bush with multiple equal best', () => {
    expect(
        solve(4, 10, [40, 10, 10, 10], [
            [1, 2],
            [1, 3],
            [1, 4]
        ])
    ).toBe(40);
});

test('all zeros', () => {
    expect(
        solve(5, 2, [0, 0, 0, 0, 0], [
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5]
        ])
    ).toBe(0);
});

// √ single camp(2 ms)
// √ simple chain 2 camps, high c(1 ms)
// × simple chain 2 camps, c = 1(2 ms)
// × small tree(1 ms)
// √ star with center rich(1 ms)
// √ star with leaves rich(1 ms)
// √ star with c exceeding neighbors(1 ms)
// √ line of camps√ negative initial gold(1 ms)
// × all negative gold(1 ms)
// × two camps both negative(1 ms)
// √ bush with multiple equal best
// × isolated positive outlier
// √ all zeros