// @ts-nocheck
import { solve } from '../../../solutions-descriptive/26.js'

test('example from description - 3x3 grid', () => {
    expect(solve(3, "101")).toBe(2);
});

test('minimal 1x1 grid with 1', () => {
    expect(solve(1, "1")).toBe(0);
});

test('minimal 1x1 grid with 0', () => {
    expect(solve(1, "0")).toBe(1);
});

test('2x2 grid all zeros', () => {
    expect(solve(2, "00")).toBe(4);
});

test('2x2 grid all ones', () => {
    expect(solve(2, "11")).toBe(2);
});

test('4x4 grid alternating pattern', () => {
    expect(solve(4, "1010")).toBe(8);
});

test('5x5 grid with isolated zeros', () => {
    expect(solve(5, "11011")).toBe(3);
});

test('large input with all ones', () => {
    expect(solve(100000, "1".repeat(100000))).toBe(100000);
});

test('large input with alternating pattern', () => {
    expect(solve(100000, "10".repeat(50000))).toBe(150000);
});