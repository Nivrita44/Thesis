import { solve } from '../../solutions-algorithm/14.js';

describe('solve', () => {
    test('basic case with single swap', () => {
        expect(solve(5, 1, 'BGGBG')).toBe('GBGGB');
    });

    test('multiple swaps required', () => {
        expect(solve(8, 3, 'BBGBGBGB')).toBe('GGBGBBBB');
    });

    test('no swaps needed', () => {
        expect(solve(3, 2, 'GBG')).toBe('GBG');
    });

    test('all boys followed by all girls', () => {
        expect(solve(6, 3, 'BBBGGG')).toBe('GGBBBB');
    });

    test('alternating pattern', () => {
        expect(solve(8, 4, 'BGBGBGBG')).toBe('GBGBGBGB');
    });

    test('single character string', () => {
        expect(solve(1, 1, 'B')).toBe('B');
    });

    test('empty string', () => {
        expect(solve(0, 0, '')).toBe('');
    });

    test('large number of swaps', () => {
        expect(solve(10, 100, 'BBBBGGGGGG')).toBe('GGGGGGBBBB');
    });

    test('maximum length string', () => {
        const input = 'BG'.repeat(50);
        const expected = 'GB'.repeat(50);
        expect(solve(100, 1, input)).toBe(expected);
    });
});