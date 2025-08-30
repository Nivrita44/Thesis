import { solve } from '../../../solutions-descriptive/45.js';

describe('solve function tests', () => {


    test('large time values case', () => {
        expect(solve(2, 1, [
            [1, 2, 100, 200]
        ], 1000000000, 500000000, 750000000)).toBe(999999900);
    });

    test('impossible to reach on time case', () => {
        expect(solve(3, 2, [
            [1, 2, 3, 4],
            [2, 3, 2, 3]
        ], 5, 2, 4)).toBe(-1);
    });

    
});