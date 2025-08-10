import { solve } from '../../../solutions-algorithm/45.js';

describe('BFS Graph Count Tests', () => {
    test('example case with [1, 2, 3]', () => {
        expect(solve([1, 2, 3])).toBe(3);
    });

    test('example case with [1, 3, 2]', () => {
        expect(solve([1, 3, 2])).toBe(1);
    });

    test('medium case with [1, 3, 2, 4, 5]', () => {
        expect(solve([1, 3, 2, 4, 5])).toBe(17);
    });

    test('large case with sequential numbers', () => {
        expect(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(379394847);
    });

    test('minimal case with [1, 2]', () => {
        expect(solve([1, 2])).toBe(1);
    });

    test('zigzag pattern with [1, 3, 2, 5, 4]', () => {
        expect(solve([1, 3, 2, 5, 4])).toBe(7);
    });

    test('reverse order after 1 with [1, 5, 4, 3, 2]', () => {
        expect(solve([1, 5, 4, 3, 2])).toBe(1);
    });

    test('alternating pattern with [1, 4, 2, 5, 3]', () => {
        expect(solve([1, 4, 2, 5, 3])).toBe(3);
    });
});
