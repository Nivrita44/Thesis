// @ts-nocheck
import { solve } from '../../../solutions-algorithm/16.js';

test('solve returns correct result for n=2', () => {
    expect(solve(2)).toEqual({ count: 1, parts: [2] });
});

test('solve returns correct result for n=3', () => {
    expect(solve(3)).toEqual({ count: 1, parts: [3] });
});

test('solve returns correct result for n=4', () => {
    expect(solve(4)).toEqual({ count: 2, parts: [2, 2] });
});

test('solve returns correct result for n=5', () => {
    const result = solve(5);
    expect(result.count).toBe(2);
    expect(result.parts.sort((a, b) => a - b)).toEqual([2, 3]);
    expect(result.parts.reduce((a, b) => a + b, 0)).toBe(5);
});

test('solve returns correct result for n=6', () => {
    expect(solve(6)).toEqual({ count: 3, parts: [2, 2, 2] });
});

test('solve returns correct result for n=7', () => {
    const result = solve(7);
    expect(result.count).toBe(3);
    expect(result.parts.sort((a, b) => a - b)).toEqual([2, 2, 3]);
    expect(result.parts.reduce((a, b) => a + b, 0)).toBe(7);
});

test('solve returns maximum primes for a large even n', () => {
    const n = 1000;
    const result = solve(n);
    expect(result.count).toBe(500);
    expect(result.parts.every(p => p === 2)).toBe(true);
    expect(result.parts.reduce((a, b) => a + b, 0)).toBe(1000);
});

test('solve returns maximum primes for a large odd n', () => {
    const n = 1001;
    const result = solve(n);
    expect(result.count).toBe(500);
    expect(result.parts.filter(p => p === 3).length).toBe(1);
    expect(result.parts.filter(p => p === 2).length).toBe(499);
    expect(result.parts.reduce((a, b) => a + b, 0)).toBe(1001);
});