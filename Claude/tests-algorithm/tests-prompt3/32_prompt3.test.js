import { solve } from '../../../solutions-algorithm/32.js';

describe('Permutation Cycle Tests', () => {

    test('Example test case from description', () => {
        const input = [{
            N: 7,
            A: [1, 2, 3, 4, 5, 6, 7],
            B: [2, 3, 1, 7, 6, 5, 4],
            C: [2, 0, 1, 0, 0, 0, 0]
        }];
        expect(solve(input)).toStrictEqual([4]);
    });

    test('Single element permutation', () => {
        const input = [{
            N: 1,
            A: [1],
            B: [1], 
            C: [0]
        }];
        expect(solve(input)).toStrictEqual([1]);
    });

    test('All values fixed case', () => {
        const input = [{
            N: 10,
            A: [1, 8, 6, 2, 4, 7, 9, 3, 10, 5],
            B: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5],
            C: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5]
        }];
        expect(solve(input)).toStrictEqual([1]);
    });

    test('No fixed values case', () => {
        const input = [{
            N: 7,
            A: [1, 2, 3, 4, 5, 6, 7],
            B: [2, 3, 1, 7, 6, 5, 4],
            C: [0, 0, 0, 0, 0, 0, 0]
        }];
        expect(solve(input)).toStrictEqual([8]);
    });

    test('Identical permutations', () => {
        const input = [{
            N: 5,
            A: [1, 2, 3, 4, 5],
            B: [1, 2, 3, 4, 5],
            C: [0, 0, 0, 0, 0]
        }];
        expect(solve(input)).toStrictEqual([1]);
    });

    test('Multiple test cases', () => {
        const input = [
            {
                N: 3,
                A: [1, 2, 3],
                B: [3, 1, 2],
                C: [0, 0, 0]
            },
            {
                N: 5,
                A: [1, 2, 3, 4, 5],
                B: [1, 2, 3, 5, 4],
                C: [0, 0, 0, 0, 0]
            }
        ];
        expect(solve(input)).toStrictEqual([2, 2]);
    });

    test('Partially fixed values', () => {
        const input = [{
            N: 8,
            A: [1, 6, 4, 7, 2, 3, 8, 5],
            B: [3, 2, 8, 1, 4, 5, 6, 7],
            C: [1, 0, 0, 7, 0, 3, 0, 5]
        }];
        expect(solve(input)).toStrictEqual([2]);
    });

});
