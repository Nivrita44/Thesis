import { solve } from '../../../solutions-descriptive/33.js';

describe('solve function tests', () => {
    beforeEach(() => {
        Kattio.index = 0;
    });

    test('example case from problem description', () => {
        Kattio.setInput([0, 2, 0, 2]);
        expect(solve()).toBe(1);
    });

    test('edge case with minimal width and height', () => {
        Kattio.setInput([0, 1, 0, 1]);
        expect(solve()).toBe(1);
    });

    test('large rectangle covering multiple powers of 2', () => {
        Kattio.setInput([0, 8, 0, 8]);
        expect(solve()).toBe(1);
    });

    test('asymmetric rectangle spanning different quadrants', () => {
        Kattio.setInput([1, 3, 1, 4]);
        expect(solve()).toBe(4);
    });

    test('rectangle with odd coordinates', () => {
        Kattio.setInput([3, 7, 2, 6]);
        expect(solve()).toBe(8);
    });

    test('rectangle crossing power of 2 boundary', () => {
        Kattio.setInput([2, 5, 2, 5]);
        expect(solve()).toBe(9);
    });

    test('small rectangle not aligned with power of 2', () => {
        Kattio.setInput([1, 2, 1, 2]);
        expect(solve()).toBe(1);
    });

    test('rectangle requiring multiple splits', () => {
        Kattio.setInput([1, 6, 1, 6]);
        expect(solve()).toBe(12);
    });

    test('maximum size rectangle', () => {
        Kattio.setInput([0, 1000000, 0, 1000000]);
        expect(solve()).toBe(1);
    });
});