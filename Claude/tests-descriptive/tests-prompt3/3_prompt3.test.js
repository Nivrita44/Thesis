import { solve } from '../../solutions-descriptive/3.js';

describe('Quadtree Region Coverage', () => {
    test('single unit square region', () => {
        expect(solve(0, 1, 1, 2)).toBe(1n);
    });

    test('2x2 square at origin', () => {
        expect(solve(0, 2, 0, 2)).toBe(1n);
    });

    test('2x2 square offset from origin', () => {
        expect(solve(1, 3, 1, 3)).toBe(4n);
    });

    test('2x4 rectangular region', () => {
        expect(solve(0, 2, 1, 5)).toBe(5n);
    });

    test('large region with offset', () => {
        expect(solve(9, 98, 244, 353)).toBe(374n);
    });

    test('maximum possible input', () => {
        expect(solve(0, 1000000, 0, 1000000)).toBe(1n);
    });

    test('thin vertical strip', () => {
        expect(solve(500, 501, 0, 1000)).toBe(1000n);
    });

    test('thin horizontal strip', () => {
        expect(solve(0, 1000, 500, 501)).toBe(1000n);
    });

    test('small region at large coordinates', () => {
        expect(solve(999998, 1000000, 999998, 1000000)).toBe(4n);
    });
});