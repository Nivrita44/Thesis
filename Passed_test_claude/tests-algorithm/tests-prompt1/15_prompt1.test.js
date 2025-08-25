import { solve } from '../../../solutions-algorithm/15.js';

describe('Chess King Movement Tests', () => {


    test('same square case - no moves needed', () => {
        const result = solve('a1', 'a1');
        expect(result).toEqual({
            count: 0,
            directions: []
        });
    });

    test('diagonal move case', () => {
        const result = solve('c3', 'd4');
        expect(result).toEqual({
            count: 1,
            directions: ['RU']
        });
    });

    test('opposite corners case', () => {
        const result = solve('a1', 'h8');
        expect(result).toEqual({
            count: 7,
            directions: ['RU', 'RU', 'RU', 'RU', 'RU', 'RU', 'RU']
        });
    });

    test('adjacent squares case', () => {
        const result = solve('d4', 'd5');
        expect(result).toEqual({
            count: 1,
            directions: ['U']
        });
    });

    test('knight move pattern case', () => {
        const result = solve('b2', 'd3');
        expect(result).toEqual({
            count: 2,
            directions: ['RU', 'R'] // assuming one diagonal and one horizontal move
        });
    });

    test('large distance horizontal move', () => {
        const result = solve('a4', 'h4');
        expect(result).toEqual({
            count: 7,
            directions: ['R', 'R', 'R', 'R', 'R', 'R', 'R']
        });
    });

    test('large distance vertical move', () => {
        const result = solve('e1', 'e8');
        expect(result).toEqual({
            count: 7,
            directions: ['U', 'U', 'U', 'U', 'U', 'U', 'U']
        });
    });

    
});