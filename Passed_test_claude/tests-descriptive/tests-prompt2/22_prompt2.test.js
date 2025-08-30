import { solve } from '../../../solutions-descriptive/22.js';

describe('Enemy Attack Range Calculator', () => {
    test('basic case with 3 enemies', () => {
        expect(solve(3, 3, 2, [10, 10, 10], [1, 3, 5])).toBe(5);
    });

    test('impossible case returns -1', () => {
        expect(solve(3, 2, 3, [100, 100, 100], [1, 10, 20])).toBe(-1);
    });

    test('single enemy case', () => {
        expect(solve(1, 5, 1, [10], [3])).toBe(2);
    });

})