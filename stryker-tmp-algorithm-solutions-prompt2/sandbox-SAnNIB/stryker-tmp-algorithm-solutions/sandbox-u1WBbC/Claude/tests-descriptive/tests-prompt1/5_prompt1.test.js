// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/5.js'

test('basic case=5', () => {
    expect(solve(5)).toBe(4);
});

test('single digit=9', () => {
    expect(solve(9)).toBe(4);
});

test('largeumber=999999999', () => {
    expect(solve(999999999)).toBe(8);
});

test('minimum=1', () => {
    expect(solve(1)).toBe(3);
});

test('power of 10=1000000000', () => {
    expect(solve(1000000000)).toBe(8);
});

test('number requiring digit sum=123', () => {
    expect(solve(123)).toBe(6);
});

test('primeumber=997', () => {
    expect(solve(997)).toBe(6);
});

test('number with many factors=360', () => {
    expect(solve(360)).toBe(6);
});