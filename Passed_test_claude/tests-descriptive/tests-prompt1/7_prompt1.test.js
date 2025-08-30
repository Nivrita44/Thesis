import { solve } from '../../../solutions-descriptive/7.js';

describe('solve', () => {

    test('minimal tree with 2 vertices', () => {
        const input = ['2', '1 2'];
        const output = '0';
        expect(solve(input)).toBe(output);
    });

    test('star tree with root in center', () => {
        const input = ['4', '1 2', '1 3', '1 4'];
        const output = '3';
        expect(solve(input)).toBe(output);
    });

});