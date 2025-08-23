// @ts-nocheck
import { solve } from '../../../solutions-descriptive/21.js'

test('example case with 4 cities', () => {
    expect(solve([2, 4, 6, 8])).toBe(4);
});

test('minimal case with 2 cities', () => {
    expect(solve([2, 4])).toBe(1);
});

test('large case with many cities', () => {
    expect(solve([2, 4, 6, 8, 10, 12])).toBe(32);
});

test('primeumbers case with few paths', () => {
    expect(solve([2, 3, 5, 7, 11])).toBe(0);
});

test('allumbers coprime', () => {
    expect(solve([2, 9, 25, 49])).toBe(0);
});

test('mixed GCD relationships', () => {
    expect(solve([6, 8, 12, 15, 18])).toBe(8);
});

test('consecutive multiples', () => {
    expect(solve([3, 6, 9, 12])).toBe(4);
});

test('powers of sameumber', () => {
    expect(solve([2, 4, 8, 16, 32])).toBe(16);
});