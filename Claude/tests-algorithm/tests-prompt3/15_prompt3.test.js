import { solve } from '../../../solutions-algorithm/15.js';

describe('Chess King Movement', () => {
    test('diagonal movement from a8 to h1', () => {
        const result = solve('a8', 'h1');
        expect(result).toEqual({
            count: 7,
            directions: ['RD', 'RD', 'RD', 'RD', 'RD', 'RD', 'RD']
        });
    });

    test('vertical movement from b2 to b4', () => {
        const result = solve('b2', 'b4');
        expect(result).toEqual({
            count: 2,
            directions: ['U', 'U']
        });
    });

    test('horizontal movement from a1 to h1', () => {
        const result = solve('a1', 'h1');
        expect(result).toEqual({
            count: 7,
            directions: ['R', 'R', 'R', 'R', 'R', 'R', 'R']
        });
    });

    test('same position a1 to a1', () => {
        const result = solve('a1', 'a1');
        expect(result).toEqual({
            count: 0,
            directions: []
        });
    });

    test('one step diagonal movement d4 to e5', () => {
        const result = solve('d4', 'e5');
        expect(result).toEqual({
            count: 1,
            directions: ['RU']
        });
    });

    test('mixed movement from h8 to a1', () => {
        const result = solve('h8', 'a1');
        expect(result).toEqual({
            count: 7,
            directions: ['LD', 'LD', 'LD', 'LD', 'LD', 'LD', 'LD']
        });
    });

    test('L-shaped movement from c3 to e6', () => {
        const result = solve('c3', 'e6');
        expect(result).toEqual({
            count: 3,
            directions: ['RU', 'RU', 'RU']
        });
    });

    test('corner to corner a1 to h8', () => {
        const result = solve('a1', 'h8');
        expect(result).toEqual({
            count: 7,
            directions: ['RU', 'RU', 'RU', 'RU', 'RU', 'RU', 'RU']
        });
    });
});
