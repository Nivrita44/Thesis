import { solve } from '../../../solutions-descriptive/27.js';

describe('Lightbulb Treasure Finder', () => {
    test('example test case', () => {
        const result = solve(7, [
            [7, 26],
            [6, 27],
            [6, 28], 
            [7, 27],
            [8, 26],
            [8, 27],
            [7, 28]
        ]);
        expect(result).toEqual([7, 27]);
    });

    test('larger test case', () => {
        const result = solve(11, [
            [70, 9],
            [69, 8],
            [69, 0],
            [73, 5], 
            [70, -1],
            [70, 5],
            [71, 7],
            [70, 4],
            [73, 4],
            [71, 3],
            [72, 3]
        ]);
        expect(result).toEqual([72, 7]);
    });

    test('minimal case with single point', () => {
        const result = solve(1, [[0, 0]]);
        expect(result).toEqual([0, 0]);
    });

    test('scattered points pattern', () => {
        const result = solve(7, [
            [1, 1],
            [0, 2],
            [0, 1],
            [1, 0],
            [2, 0],
            [2, 1],
            [1, 2]
        ]);
        expect(result).toEqual([1, 1]);
    });

});
