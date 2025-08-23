// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/24.js'

test('example case with x=2, y=3, z=8, k=2', () => {
    expect(solve(2, 3, 8, 2)).toBe(13);
});

test('minimal case with all values 1', () => {
    expect(solve(1, 1, 1, 1)).toBe(2);
});

test('edge case with equal values', () => {
    expect(solve(5, 5, 5, 5)).toBe(15);
});

test('large case within bounds', () => {
    expect(solve(100000000, 100000000, 100000000, 100000000)).toBe(500000000);
});

test('case where attacking immediately is optimal', () => {
    expect(solve(10, 1, 1, 5)).toBe(1);
});

test('case requiring maximum k upgrades', () => {
    expect(solve(1, 2, 10, 3)).toBe(11);
});

test('case with high health but cheap attacks', () => {
    expect(solve(5, 1, 20, 4)).toBe(20);
});

test('balanced case with moderate values', () => {
    expect(solve(3, 4, 15, 3)).toBe(22);
});