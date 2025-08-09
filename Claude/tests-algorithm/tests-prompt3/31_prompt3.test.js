import { solve } from '../../solutions-algorithm/31.js';

describe('Funny Permutation Tests', () => {
    test('Example from description', () => {
        expect(solve(1, [4])).toStrictEqual(['4 3 1 2']);
    });

    test('Multiple test cases including n=3 edge case', () => {
        expect(solve(5, [4, 3, 7, 5, 2])).toStrictEqual([
            '4 3 1 2',
            '-1',
            '7 6 1 2 3 4 5', 
            '5 4 1 2 3',
            '2 1'
        ]);
    });

    test('Minimum valid input n=2', () => {
        expect(solve(1, [2])).toStrictEqual(['2 1']);
    });

    test('n=3 always returns -1', () => {
        expect(solve(1, [3])).toStrictEqual(['-1']);
    });

    test('Large valid input', () => {
        expect(solve(1, [6])).toStrictEqual(['6 5 1 2 3 4']);
    });

    test('Multiple large inputs', () => {
        expect(solve(3, [8, 9, 10])).toStrictEqual([
            '8 7 1 2 3 4 5 6',
            '9 8 1 2 3 4 5 6 7',
            '10 9 1 2 3 4 5 6 7 8'
        ]);
    });

    test('Mix of valid and invalid inputs', () => {
        expect(solve(4, [2, 3, 4, 3])).toStrictEqual([
            '2 1',
            '-1',
            '4 3 1 2',
            '-1'
        ]);
    });
});