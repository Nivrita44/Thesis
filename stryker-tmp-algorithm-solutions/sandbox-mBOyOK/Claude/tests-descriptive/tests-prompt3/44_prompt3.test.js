// @ts-nocheck
import { solve } from '../../../solutions-descriptive/44.js';

describe('Stone Game Test Cases', () => {

    test('Example case - [3, 2, 9] should return Bob', () => {
        expect(solve([3, 2, 9])).toBe('Bob');
    });

    test('Example case - [3, 3, 6, 1] should return Alice', () => {
        expect(solve([3, 3, 6, 1])).toBe('Alice');
    });

    test('Single pile with prime number - [7] should return Alice', () => {
        expect(solve([7])).toBe('Alice');
    });

    test('Single pile with composite number - [9] should return Alice', () => {
        expect(solve([9])).toBe('Alice');
    });

    test('All even numbers - [2, 4, 6, 8] should return Bob', () => {
        expect(solve([2, 4, 6, 8])).toBe('Bob');
    });

    test('Large prime numbers - [10000019, 10000079] should return Bob', () => {
        expect(solve([10000019, 10000079])).toBe('Bob');
    });

    test('Mix of primes and composites - [2, 3, 4, 5, 6, 7, 8, 9] should return Alice', () => {
        expect(solve([2, 3, 4, 5, 6, 7, 8, 9])).toBe('Alice');
    });

    test('Edge case with single stone - [1] should return Alice', () => {
        expect(solve([1])).toBe('Alice');
    });

    test('Large array with repeated numbers - [5, 5, 5, 5, 5] should return Alice', () => {
        expect(solve([5, 5, 5, 5, 5])).toBe('Alice');
    });
});
