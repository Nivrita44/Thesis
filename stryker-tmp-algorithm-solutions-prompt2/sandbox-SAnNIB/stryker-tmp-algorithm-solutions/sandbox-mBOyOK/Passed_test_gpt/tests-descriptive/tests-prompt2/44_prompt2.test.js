// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/44.js';

test('typical case: [3,2,9]', () => {
    expect(solve([3, 2, 9])).toBe('Bob');
});

test('typical case: [3,3,6,1]', () => {
    expect(solve([3, 3, 6, 1])).toBe('Alice');
});

test('typical case: [1,2,3,4,5]', () => {
    expect(solve([1, 2, 3, 4, 5])).toBe('Bob');
});

test('edge case: empty array', () => {
    expect(solve([])).toBe('Bob');
});

test('edge case: large numbers', () => {
    expect(solve([9999991, 9999991])).toBe('Bob');
});

test('edge case: mixed primes and non-primes', () => {
    expect(solve([2, 4, 6, 7, 9])).toBe('Alice');
});

test('edge case: all even numbers', () => {
    expect(solve([2, 4, 6, 8, 10])).toBe('Bob');
});