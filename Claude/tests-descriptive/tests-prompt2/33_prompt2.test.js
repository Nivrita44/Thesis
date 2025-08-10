import { solve } from '../../../solutions-descriptive/33.js';

describe('solve function tests', () => {
    beforeEach(() => {
        Kattio.index = 0;
    });

    test('basic case with small numbers', () => {
        Kattio.setInput([0, 1, 1, 2]);
        expect(solve()).toBe(1);
    });

    test('same range for both intervals', () => {
        Kattio.setInput([0, 2, 0, 2]);
        expect(solve()).toBe(1);
    });

    test('overlapping intervals', () => {
        Kattio.setInput([1, 3, 1, 3]);
        expect(solve()).toBe(4);
    });

    test('non-overlapping intervals', () => {
        Kattio.setInput([0, 2, 3, 5]);
        expect(solve()).toBe(6);
    });

    test('large interval range', () => {
        Kattio.setInput([9, 98, 244, 353]);
        expect(solve()).toBe(374);
    });

    test('zero length first interval', () => {
        Kattio.setInput([5, 5, 1, 3]);
        expect(solve()).toBe(0);
    });

    test('zero length second interval', () => {
        Kattio.setInput([1, 3, 7, 7]);
        expect(solve()).toBe(0);
    });

    test('maximum possible range', () => {
        Kattio.setInput([0, 1048575, 0, 1048575]);
        expect(solve()).toBeLessThan(Number.MAX_SAFE_INTEGER);
    });
});
