// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/24.js';

describe('solve', () => {
    test('example case 1', () => {
        expect(solve(2, 3, 5, 5)).toBe(12);
    });

    test('example case 2', () => {
        expect(solve(10, 20, 40, 5)).toBe(190); 
    });

    test('example case 3', () => {
        expect(solve(1, 60, 100, 10)).toBe(280);
    });

    test('example case 4', () => {
        expect(solve(60, 1, 100, 10)).toBe(160);
    });

    test('minimal input', () => {
        expect(solve(1, 1, 1, 1)).toBe(2);
    });

    test('large monster health', () => {
        expect(solve(5, 10, 1000, 20)).toBe(5300);
    });

    test('expensive weapon upgrade', () => {
        expect(solve(100, 1, 50, 10)).toBe(150);
    });

    test('expensive attack cost', () => {
        expect(solve(1, 100, 50, 10)).toBe(950);
    });

    test('max possible values', () => {
        expect(solve(100000000, 100000000, 100000000, 100000000)).toBe(100000000);
    });
});
