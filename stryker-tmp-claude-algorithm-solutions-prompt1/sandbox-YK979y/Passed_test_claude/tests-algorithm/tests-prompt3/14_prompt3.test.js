import { solve } from '../../../solutions-algorithm/14.js';

describe('Queue Arrangement Tests', () => {

    test('Example case 2', () => {
        expect(solve(2, 4, 'BGGB')).toBe('GGBB');
    });

    test('Single character queue', () => {
        expect(solve(1, 1, 'B')).toBe('B');
        expect(solve(1, 1, 'G')).toBe('G');
    });

    test('All boys queue', () => {
        expect(solve(5, 5, 'BBBBB')).toBe('BBBBB');
    });

    test('All girls queue', () => {
        expect(solve(5, 5, 'GGGGG')).toBe('GGGGG');
    });

});