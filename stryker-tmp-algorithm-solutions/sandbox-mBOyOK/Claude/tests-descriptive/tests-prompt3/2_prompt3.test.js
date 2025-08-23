// @ts-nocheck
import { solve } from '../../../solutions-descriptive/2.js';

describe('solve', () => {
    test('example case 1', () => {
        expect(solve(9, 3n)).toBe(10);
    });

    test('example case 2', () => {
        expect(solve(19, 84n)).toBe(2006);
    });

    test('large n with moderate k', () => {
        expect(solve(9982, 44353n)).toBe(120792461);
    });

    test('maximum n with MOD k', () => {
        expect(solve(100000, 1000000007n)).toBe(584502117);
    });

    test('small numbers case', () => {
        expect(solve(17, 30n)).toBe(775);
    });

    test('moderate n with maximum k', () => {
        expect(solve(777, 1000000000000000000n)).toBe(46058362);
    });

    test('edge case - n equals k', () => {
        expect(solve(5, 5n)).toBe(82);
    });

    test('edge case - minimum inputs', () => {
        expect(solve(1, 2n)).toBe(1);
    });

    test('edge case - k much larger than n', () => {
        expect(solve(10, 1000n)).toBe(495804488);
    });
});
