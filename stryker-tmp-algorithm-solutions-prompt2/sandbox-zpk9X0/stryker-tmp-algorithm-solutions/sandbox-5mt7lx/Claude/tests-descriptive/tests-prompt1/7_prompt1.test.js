// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/7.js';

describe('solve', () => {

    test('example tree with 3 vertices in line', () => {
        const input = ['3', '1 2', '2 3'];
        const output = '1';
        expect(solve(input)).toBe(output);
    });

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

    test('balanced binary tree', () => {
        const input = ['7', '1 2', '1 3', '2 4', '2 5', '3 6', '3 7'];
        const output = '15';
        expect(solve(input)).toBe(output);
    });

    test('long chain tree', () => {
        const input = ['5', '1 2', '2 3', '3 4', '4 5'];
        const output = '6';
        expect(solve(input)).toBe(output);
    });

    test('tree with multiple branches at different levels', () => {
        const input = ['6', '1 2', '2 3', '3 4', '2 5', '5 6'];
        const output = '9';
        expect(solve(input)).toBe(output);
    });

    test('maximum size tree with 10 vertices', () => {
        const input = ['10', '1 2', '2 3', '3 4', '4 5', '5 6', '6 7', '7 8', '8 9', '9 10'];
        const output = '36';
        expect(solve(input)).toBe(output);
    });

});