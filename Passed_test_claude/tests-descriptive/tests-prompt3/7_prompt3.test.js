import { solve } from '../../../solutions-descriptive/7.js';

describe('Triangle Tree Path Tests', () => {

    test('example test case 1 - simple 3 node tree', () => {
        expect(solve(['3', '1 2', '3 2'])).toBe('0');
    });

    test('example test case 2 - 5 node tree', () => {
        expect(solve(['5', '2 3', '1 5', '4 2', '1 2'])).toBe('4'); 
    });

    test('example test case 3 - 11 node tree', () => {
        expect(solve(['11', '2 1', '2 3', '2 4', '4 5', '6 5', '5 7', '4 8', '8 9', '7 10', '10 11'])).toBe('29');
    });

    test('minimal tree - 1 node', () => {
        expect(solve(['1'])).toBe('0');
    });

   

});
