// @ts-nocheck
import { solve } from '../../../solutions-descriptive/19.js'

test('example case -=2, a=2, b=2', () => {
    expect(solve(2, 2, 2)).toBe(6);
});

test('minimal case -=2, a=1, b=1', () => {
    expect(solve(2, 1, 1)).toBe(6);
});

test('edge case -=2, large a,b', () => {
    expect(solve(2, 1000000, 1000000)).toBe(6);
});

test('large case', () => {
    expect(solve(1000000, 5, 5)).toBe(4000000);
});

test('coprimeumbers case', () => {
    expect(solve(3, 7, 13)).toBe(10);
});

test('different a,b values', () => {
    expect(solve(4, 6, 9)).toBe(16);
});

test('n equals a,b case', () => {
    expect(solve(5, 5, 5)).toBe(25);
});

test('power of 2 values', () => {
    expect(solve(8, 4, 8)).toBe(40);
});

test('mixed values case', () => {
    expect(solve(10, 15, 20)).toBe(55);
});