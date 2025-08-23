// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/5.js';
//all fail
test('n = 1', () => {
    expect(solve(1)).toBe(2);
});

test('n = 10', () => {
    expect(solve(10)).toBe(3);
});

test('n = 19', () => {
    expect(solve(19)).toBe(3);
});

test('n = 99', () => {
    expect(solve(99)).toBe(3);
});

test('n = 100', () => {
    expect(solve(100)).toBe(3);
});

test('n = 123', () => {
    expect(solve(123)).toBe(3);
});

test('n = 999', () => {
    expect(solve(999)).toBe(3);
});

test('n = 1000', () => {
    expect(solve(1000)).toBe(3);
});

test('n = 9999', () => {
    expect(solve(9999)).toBe(3);
});

test('n = 1000000000', () => {
    expect(solve(1000000000)).toBe(3);
});