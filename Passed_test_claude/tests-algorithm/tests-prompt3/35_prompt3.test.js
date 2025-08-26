import { solve } from '../../../solutions-algorithm/35.js';

describe('Operation Count Calculator', () => {
    test('basic example from description', () => {
        expect(solve([[5, 2]])[0]).toBe(2);
    });

    test('when k is greater than n', () => {
        expect(solve([[3, 5]])[0]).toBe(3);
    });

    test('perfect power case', () => {
        expect(solve([[16, 4]])[0]).toBe(1);
    });

    test('large number case', () => {
        expect(solve([[100, 3]])[0]).toBe(4);
    });

    test('when k is 1', () => {
        expect(solve([[10, 1]])[0]).toBe(10);
    });

    test('multiple test cases at once', () => {
        expect(solve([[5, 2], [3, 5], [16, 4]])).toEqual([2, 3, 1]);
    });

    test('large input with base 10', () => {
        expect(solve([[6492, 10]])[0]).toBe(21);
    });

    test('edge case with n=1', () => {
        expect(solve([[1, 2]])[0]).toBe(1);
    });

    test('maximum allowed input', () => {
        expect(solve([[999999999, 999999999]])[0]).toBe(1);
    });
});
