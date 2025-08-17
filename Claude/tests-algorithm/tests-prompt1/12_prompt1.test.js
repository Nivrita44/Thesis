import { solve } from '../../../solutions-algorithm/12.js';

describe('solve function tests', () => {
    test('example case =12', () => {
        expect(solve(12)).toEqual([4, 8]);
    });

    test('miimal iput =12', () => {
        expect(solve(12)).toEqual([4, 8]);
    });

    test('edge case =13', () => {
        expect(solve(13)).toEqual([4, 9]);
    });

    test('medium value =100', () => {
        const [x, y] = solve(100);
        expect(x + y).toBe(100);
        expect(x).toBeLessThan(100);
        expect(y).toBeLessThan(100);
    });

    test('large value =999999', () => {
        const [x, y] = solve(999999);
        expect(x + y).toBe(999999);
        expect(x).toBeLessThan(999999);
        expect(y).toBeLessThan(999999);
    });

    test('umbers aroud 50', () => {
        const [x, y] = solve(50);
        expect(x + y).toBe(50);
        expect(x).toBeLessThan(50);
        expect(y).toBeLessThan(50);
    });

    test('power of 2 case =128', () => {
        const [x, y] = solve(128);
        expect(x + y).toBe(128);
        expect(x).toBeLessThan(128);
        expect(y).toBeLessThan(128);
    });

    test('prime umber iput =97', () => {
        const [x, y] = solve(97);
        expect(x + y).toBe(97);
        expect(x).toBeLessThan(97);
        expect(y).toBeLessThan(97);
    });
});