import { solve } from '../../../solutions-descriptive/7.js';

describe('solve', () => {
    test('simple tree with 3 nodes', () => {
        const input = ['3', '1 2', '3 2'];
        expect(solve(input)).toBe('0');
    });

    test('tree with 5 nodes', () => {
        const input = ['5', '2 3', '1 5', '4 2', '1 2'];
        expect(solve(input)).toBe('4');
    });

    test('larger tree with 11 nodes', () => {
        const input = ['11', '2 1', '2 3', '2 4', '4 5', '6 5', '5 7', '4 8', '8 9', '7 10', '10 11'];
        expect(solve(input)).toBe('29');
    });

    

    test('star-shaped tree', () => {
        const input = ['4', '1 2', '1 3', '1 4'];
        expect(solve(input)).toBe('3');
    });

    test('minimum tree size', () => {
        const input = ['2', '1 2'];
        expect(solve(input)).toBe('0');
    });

    
});
