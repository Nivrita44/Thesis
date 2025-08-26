import { solve } from '../../../solutions-algorithm/9.js';

describe('solve function tests', () => {

    test('numbers not in sequential order', () => {
        expect(solve([1, 5, 8, 123, 7], [123, 7, 5, 1], [5, 1, 7])).toEqual([8, 123]);
    });

    test('all same numbers except missing', () => {
        expect(solve([1, 1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1])).toEqual([1, 1]);
    });
});