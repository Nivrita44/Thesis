// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/33.js';

describe('Quadtree Region Query Tests', () => {
    test('basic single unit region', () => {
        Kattio.setInput([0, 1, 1, 2]);
        expect(solve()).toBe(1n);
    });

    test('2x2 square region at origin', () => {
        Kattio.setInput([0, 2, 0, 2]);
        expect(solve()).toBe(1n);
    });

    test('2x2 square region not at origin', () => {
        Kattio.setInput([1, 3, 1, 3]);
        expect(solve()).toBe(4n);
    });

    test('rectangular region', () => {
        Kattio.setInput([0, 2, 1, 5]);
        expect(solve()).toBe(5n);
    });

    test('large region with non-power-of-2 boundaries', () => {
        Kattio.setInput([9, 98, 244, 353]);
        expect(solve()).toBe(374n);
    });

    test('region at maximum bounds', () => {
        Kattio.setInput([0, 1000000, 0, 1000000]);
        expect(solve()).toBe(1n);
    });

    test('thin vertical strip', () => {
        Kattio.setInput([5, 6, 0, 100]);
        expect(solve()).toBe(7n);
    });

    test('thin horizontal strip', () => {
        Kattio.setInput([0, 100, 5, 6]);
        expect(solve()).toBe(7n);
    });
});
