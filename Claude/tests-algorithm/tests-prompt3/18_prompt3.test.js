import { solve } from '../../solutions-algorithm/18.js';

describe('LCM Pair Finder', () => {
    test('basic example case', () => {
        expect(solve([[1, 1337]])).toEqual([['1', '2']]);
    });

    test('multiple test cases', () => {
        expect(solve([[13, 69], [2, 4], [88, 89]])).toEqual([
            ['13', '26'],
            ['2', '4'],
            ['-1', '-1']
        ]);
    });

    test('edge case - minimum possible range', () => {
        expect(solve([[1, 2]])).toEqual([['1', '2']]);
    });

    test('edge case - not enough range for lcm', () => {
        expect(solve([[10, 19]])).toEqual([['-1', '-1']]);
    });

    test('boundary test', () => {
        expect(solve([[1000000000, 1000000001]])).toEqual([['-1', '-1']]);
    });

    test('multiple pairs with mixed results', () => {
        expect(solve([[5, 20], [10, 19], [6, 11]])).toEqual([
            ['5', '10'],
            ['-1', '-1'],
            ['-1', '-1']
        ]);
    });

    test('pairs at various ranges', () => {
        expect(solve([[1, 100], [50, 150], [1000, 2500]])).toEqual([
            ['1', '2'],
            ['50', '100'],
            ['1000', '2000']
        ]);
    });

    test('edge cases with exact doubles', () => {
        expect(solve([[7, 14], [15, 30], [100, 200]])).toEqual([
            ['7', '14'],
            ['15', '30'],
            ['100', '200']
        ]);
    });
});