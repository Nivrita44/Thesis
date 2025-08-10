import { solve } from '../../../solutions-algorithm/32.js';

describe('solve', () => {
    test('basic case with fixed elements', () => {
        const input = [{
            N: 7,
            A: [1, 2, 3, 4, 5, 6, 7],
            B: [2, 3, 1, 7, 6, 5, 4],
            C: [2, 0, 1, 0, 0, 0, 0]
        }];
        expect(solve(input)).toEqual([4]);
    });

    test('single element case', () => {
        const input = [{
            N: 1,
            A: [1],
            B: [1],
            C: [0]
        }];
        expect(solve(input)).toEqual([1]);
    });

    test('multiple cycles with one fixed element', () => {
        const input = [{
            N: 6,
            A: [1, 5, 2, 4, 6, 3],
            B: [6, 5, 3, 1, 4, 2],
            C: [6, 0, 0, 0, 0, 0]
        }];
        expect(solve(input)).toEqual([2]);
    });

    test('all elements are fixed', () => {
        const input = [{
            N: 10,
            A: [1, 8, 6, 2, 4, 7, 9, 3, 10, 5],
            B: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5],
            C: [1, 9, 2, 3, 4, 10, 8, 6, 7, 5]
        }];
        expect(solve(input)).toEqual([1]);
    });

    test('no fixed elements with multiple cycles', () => {
        const input = [{
            N: 7,
            A: [1, 2, 3, 4, 5, 6, 7],
            B: [2, 3, 1, 7, 6, 5, 4],
            C: [0, 0, 0, 0, 0, 0, 0]
        }];
        expect(solve(input)).toEqual([8]);
    });

    test('identity permutation with no fixed elements', () => {
        const input = [{
            N: 5,
            A: [1, 2, 3, 4, 5],
            B: [1, 2, 3, 4, 5],
            C: [0, 0, 0, 0, 0]
        }];
        expect(solve(input)).toEqual([1]);
    });

    test('single swap with no fixed elements', () => {
        const input = [{
            N: 5,
            A: [1, 2, 3, 4, 5],
            B: [1, 2, 3, 5, 4],
            C: [0, 0, 0, 0, 0]
        }];
        expect(solve(input)).toEqual([2]);
    });

    test('multiple test cases together', () => {
        const input = [
            {
                N: 3,
                A: [1, 2, 3],
                B: [3, 1, 2],
                C: [0, 0, 0]
            },
            {
                N: 1,
                A: [1],
                B: [1],
                C: [0]
            }
        ];
        expect(solve(input)).toEqual([2, 1]);
    });
});
