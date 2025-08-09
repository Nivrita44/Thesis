import { solve } from '../../solutions-algorithm/12.js';

describe('solve function tests', () => {
    test('even number input returns [8, n-8]', () => {
        expect(solve(12)).toStrictEqual([8, 4]);
        expect(solve(100)).toStrictEqual([8, 92]);
    });

    test('odd number input returns [9, n-9]', () => {
        expect(solve(23)).toStrictEqual([9, 14]);
        expect(solve(99)).toStrictEqual([9, 90]);
    });

    test('large number input', () => {
        expect(solve(63874)).toStrictEqual([8, 63866]);
        expect(solve(999999)).toStrictEqual([9, 999990]);
    });

    test('zero input', () => {
        expect(solve(0)).toStrictEqual([8, -8]);
    });

    test('small positive numbers', () => {
        expect(solve(1)).toStrictEqual([9, -8]);
        expect(solve(2)).toStrictEqual([8, -6]);
    });

    test('negative numbers', () => {
        expect(solve(-5)).toStrictEqual([9, -14]);
        expect(solve(-10)).toStrictEqual([8, -18]);
    });

    test('floating point numbers', () => {
        expect(solve(10.5)).toStrictEqual([8, 2.5]);
    });
});