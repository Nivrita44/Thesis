import { solve } from '../../../solutions-descriptive/40.js';

describe('solve', () => {
    test('basic case with 3 nodes', () => {
        expect(solve(3, [1, 1, -1])).toEqual([3, 2, 1]);
    });

    

    test('5 nodes with descending sequence', () => {
        expect(solve(5, [1, 1, 1, 1, -1])).toEqual([5, 4, 3, 2, 1]);
    });

    test('5 nodes with ascending sequence', () => {
        expect(solve(5, [-1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
    });

   

    test('single node edge case', () => {
        expect(solve(1, [-1])).toEqual([1]);
    });

    test('two nodes minimal case', () => {
        expect(solve(2, [1, -1])).toEqual([2, 1]);
    });
});
