import { solve } from '../../../solutions-descriptive/27.js';

describe('Point Pattern Finder Tests', () => {
    test('basic case with 7 points', () => {
        const points = [
            [7, 26], [6, 27], [6, 28],
            [7, 27], [8, 26], [8, 27],
            [7, 28]
        ];
        expect(solve(7, points)).toEqual([7, 27]);
    });

    test('larger pattern with 11 points', () => {
        const points = [
            [70, 9], [69, 8], [69, 0],
            [73, 5], [70, -1], [70, 5],
            [71, 7], [70, 4], [73, 4],
            [71, 3], [72, 3]
        ];
        expect(solve(11, points)).toEqual([72, 7]);
    });

   
});
