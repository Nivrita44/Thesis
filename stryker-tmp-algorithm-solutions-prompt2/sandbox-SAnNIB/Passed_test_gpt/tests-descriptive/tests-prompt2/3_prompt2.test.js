// @ts-nocheck
import { solve } from '../../../solutions-descriptive/3.js';

test('typical case 1', () => {
    expect(solve(0, 1, 1, 2)).toBe(1);
});

test('typical case 2', () => {
    expect(solve(0, 2, 0, 2)).toBe(1);
});

test('typical case 3', () => {
    expect(solve(1, 3, 1, 3)).toBe(4);
});

test('typical case 4', () => {
    expect(solve(0, 2, 1, 5)).toBe(5);
});

test('large numbers', () => {
    expect(solve(9, 98, 244, 353)).toBe(374);
});

test('identical segments', () => {
    expect(solve(5, 6, 5, 6)).toBe(1);
});

test('single point ranges', () => {
    expect(solve(1, 1, 2, 2)).toBe(0);
});

test('non-overlapping ranges', () => {
    expect(solve(0, 1, 100, 101)).toBe(1);
});

test('large identical ranges', () => {
    expect(solve(0, 1 << 20, 0, 1 << 20)).toBe(1);
});

test('minimal left edges', () => {
    expect(solve(0, 1, 0, 1)).toBe(1);
});

test('minimal edge from right to left reversed', () => {
    expect(solve(1, 0, 2, 2)).toBe(0);
});