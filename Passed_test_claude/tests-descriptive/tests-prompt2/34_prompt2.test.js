import { solve } from '../../../solutions-descriptive/34.js';

describe('solve', () => {
    test('basic case with valid modulo solution', () => {
        expect(solve([3, 5, 2, 7], [0, 1, 1, 1])).toBe("2");
    });

    

    test('case with impossible modulo solution', () => {
        expect(solve([2, 3, 4, 7, 8, 9], [1, 2, 3, 6, 7, 8])).toBe("-1");
    });


    test('case with larger numbers', () => {
        expect(solve([21, 22, 25, 28, 20], [0, 1, 2, 1, 0])).toBe("4");
    });

    test('case with unequal sums', () => {
        expect(solve([1, 2], [2, 2])).toBe("-1");
    });

    test('edge case with single element arrays', () => {
        expect(solve([5], [2])).toBe("3");
    });


});
