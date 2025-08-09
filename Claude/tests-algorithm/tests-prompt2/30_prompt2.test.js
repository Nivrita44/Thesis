import { solve } from '../../solutions-algorithm/30.js';

describe('solve', () => {
    test('basic case with valid partitions', () => {
        expect(solve(1, [10])).toEqual([
            'YES',
            '5 4 1'
        ]);
    });

    test('multiple test cases with mixed results', () => {
        expect(solve(4, [10, 4, 15, 9])).toEqual([
            'YES', '5 4 1',
            'NO',
            'YES', '8 5 2',
            'NO'
        ]);
    });

    test('small numbers', () => {
        expect(solve(3, [3, 5, 6])).toEqual([
            'NO',
            'YES', '2 2 1',
            'YES', '2 3 1'
        ]);
    });

    test('single impossible case', () => {
        expect(solve(1, [3])).toEqual(['NO']);
    });

    test('multiple impossible cases', () => {
        expect(solve(3, [3, 6, 9])).toEqual(['NO', 'YES', '4 1 1', 'NO']);
    });

    test('boundary case with minimum valid sum', () => {
        expect(solve(1, [4])).toEqual(['YES', '2 1 1']);
    });

    test('large numbers within constraints', () => {
        expect(solve(2, [100, 999])).toEqual([
            'YES', '34 33 33',
            'YES', '334 333 332'
        ]);
    });

    test('edge case with single digit inputs', () => {
        expect(solve(4, [1, 2, 3, 4])).toEqual([
            'NO',
            'NO',
            'NO',
            'YES', '2 1 1'
        ]);
    });
});