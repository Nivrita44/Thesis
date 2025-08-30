import { solve } from '../../../solutions-descriptive/5.js';

describe('solve function tests', () => {
    test('exactly 81 should return only exclamation', () => {
        expect(solve(81)).toEqual(['!']);
    });

    test('number greater than 81', () => {
        expect(solve(100)).toEqual(['add 19', '!']);
    });

    test('zero input', () => {
        expect(solve(0)).toEqual(['add -81', '!']);
    });

    test('small positive number', () => {
        expect(solve(5)).toEqual(['add -76', '!']);
    });

    test('number just below 81', () => {
        expect(solve(80)).toEqual(['add -1', '!']);
    });

    test('number just above 81', () => {
        expect(solve(82)).toEqual(['add 1', '!']);
    });

    test('large positive number', () => {
        expect(solve(1000)).toEqual(['add 919', '!']);
    });

    test('negative number input', () => {
        expect(solve(-50)).toEqual(['add -131', '!']);
    });
});
