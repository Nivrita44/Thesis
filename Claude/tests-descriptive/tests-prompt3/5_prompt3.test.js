import { solve } from '../../solutions-descriptive/5.js';

describe('solve', () => {
    test('n equals 81 returns just completion command', () => {
        expect(solve(81)).toEqual(['!']);
    });

    test('n equals 100 returns command to subtract to 81', () => {
        expect(solve(100)).toEqual(['add 19', '!']);
    });

    test('n equals 1 returns command to subtract to 81', () => {
        expect(solve(1)).toEqual(['add -80', '!']);
    });

    test('n equals 1000000000 (upper bound)', () => {
        expect(solve(1000000000)).toEqual(['add 999999919', '!']);
    });

    test('n equals 2 returns appropriate adjustment', () => {
        expect(solve(2)).toEqual(['add -79', '!']);
    });

    test('n equals 50 returns appropriate adjustment', () => {
        expect(solve(50)).toEqual(['add -31', '!']);
    });

    test('n equals 999999999 returns large adjustment', () => {
        expect(solve(999999999)).toEqual(['add 999999918', '!']);
    });

    test('n equals 82 returns small positive adjustment', () => {
        expect(solve(82)).toEqual(['add 1', '!']);
    });
});