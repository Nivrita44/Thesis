// @ts-nocheck
import { solve } from '../../../solutions-descriptive/47.js';

describe('solve', () => {
    test('example from description', () => {
        const input = [{
            n: 3,
            k: 3,
            a: [3, 2, 4],
            b: [1, 2, 1]
        }];
        expect(solve(input)).toEqual(['9']);
    });

    test('minimal case', () => {
        const input = [{
            n: 1,
            k: 1,
            a: [1],
            b: [1]
        }];
        expect(solve(input)).toEqual(['1']);
    });

    test('all elements consumed in single operation', () => {
        const input = [{
            n: 3,
            k: 3,
            a: [5, 5, 5],
            b: [10, 10, 10]
        }];
        expect(solve(input)).toEqual(['15']);
    });

    test('repeated operations on same element', () => {
        const input = [{
            n: 1,
            k: 4,
            a: [10],
            b: [3]
        }];
        expect(solve(input)).toEqual(['16']);
    });

    test('large k but limited by array depletion', () => {
        const input = [{
            n: 2,
            k: 1000,
            a: [2, 3],
            b: [1, 1]
        }];
        expect(solve(input)).toEqual(['7']);
    });

    test('optimal selection order matters', () => {
        const input = [{
            n: 3,
            k: 4,
            a: [5, 3, 4],
            b: [2, 1, 2]
        }];
        expect(solve(input)).toEqual(['14']);
    });

    test('large numbers within bounds', () => {
        const input = [{
            n: 2,
            k: 2,
            a: [1000000000, 999999999],
            b: [1, 999999999]
        }];
        expect(solve(input)).toEqual(['1999999999']);
    });

    test('single element multiple operations', () => {
        const input = [{
            n: 1,
            k: 5,
            a: [7],
            b: [2]
        }];
        expect(solve(input)).toEqual(['15']);
    });

    test('alternating between elements', () => {
        const input = [{
            n: 2,
            k: 4,
            a: [6, 6],
            b: [2, 3]
        }];
        expect(solve(input)).toEqual(['18']);
    });
});