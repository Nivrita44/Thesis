import { solve } from '../../solutions-descriptive/47.js';

describe('solve', () => {
    test('example case from problem description', () => {
        const input = [{
            n: 3, k: 4,
            a: [5, 6, 7],
            b: [2, 3, 4]
        }];
        expect(solve(input)).toEqual(['21']);
    });

    test('larger input with mixed values', () => {
        const input = [{
            n: 5, k: 9,
            a: [32, 52, 68, 64, 14],
            b: [18, 14, 53, 24, 8]
        }];
        expect(solve(input)).toEqual(['349']);
    });

    test('small values with large k', () => {
        const input = [{
            n: 5, k: 1000,
            a: [1, 2, 3, 4, 5],
            b: [5, 4, 3, 2, 1]
        }];
        expect(solve(input)).toEqual(['27']);
    });

    test('single large value', () => {
        const input = [{
            n: 1, k: 1000000,
            a: [1000000],
            b: [1]
        }];
        expect(solve(input)).toEqual(['500000500000']);
    });

    test('multiple cases with similar values', () => {
        const input = [{
            n: 10, k: 6,
            a: [3, 3, 5, 10, 6, 8, 6, 8, 7, 7],
            b: [6, 1, 7, 4, 1, 1, 8, 9, 3, 1]
        }];
        expect(solve(input)).toEqual(['47']);
    });

    test('minimum possible inputs', () => {
        const input = [{
            n: 1, k: 1,
            a: [1],
            b: [1]
        }];
        expect(solve(input)).toEqual(['1']);
    });

    test('multiple test cases together', () => {
        const input = [
            {
                n: 2, k: 3,
                a: [4, 6],
                b: [2, 3]
            },
            {
                n: 3, k: 2,
                a: [3, 2, 1],
                b: [1, 1, 1]
            }
        ];
        expect(solve(input)).toEqual(['14', '5']);
    });
});