import { solve } from '../../solutions-algorithm/15.js';

describe('Chess King Movement Tests', () => {
    test('diagonal movement from top left to bottom right', () => {
        const result = solve('a8', 'h1');
        expect(result).toEqual({
            count: 7,
            directions: ['RD', 'RD', 'RD', 'RD', 'RD', 'RD', 'RD']
        });
    });

    test('vertical movement only', () => {
        const result = solve('b2', 'b4');
        expect(result).toEqual({
            count: 2,
            directions: ['U', 'U']
        });
    });

    test('horizontal movement only', () => {
        const result = solve('a1', 'd1');
        expect(result).toEqual({
            count: 3,
            directions: ['R', 'R', 'R']
        });
    });

    test('L-shaped movement', () => {
        const result = solve('c3', 'e5');
        expect(result).toEqual({
            count: 2,
            directions: ['RU', 'RU']
        });
    });

    test('same position (no movement)', () => {
        const result = solve('e4', 'e4');
        expect(result).toEqual({
            count: 0,
            directions: []
        });
    });

    test('corner to corner movement', () => {
        const result = solve('a1', 'h8');
        expect(result).toEqual({
            count: 7,
            directions: ['RU', 'RU', 'RU', 'RU', 'RU', 'RU', 'RU']
        });
    });

    test('complex diagonal and straight movement', () => {
        const result = solve('d5', 'g3');
        expect(result).toEqual({
            count: 3,
            directions: ['RD', 'RD', 'R']
        });
    });

    test('edge case - adjacent squares', () => {
        const result = solve('f4', 'g5');
        expect(result).toEqual({
            count: 1,
            directions: ['RU']
        });
    });
});