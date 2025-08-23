// @ts-nocheck
// 
    import { solve } from '../../../solutions-descriptive/44.js';

    test('single pile, 2 stones', () => {
        expect(solve(1, [2])).toBe('Bob');
    });
    
    test('three piles [2, 2, 2]', () => {
        expect(solve(3, [2, 2, 2])).toBe('Bob');
    });
    
    test('piles [2, 3]', () => {
        expect(solve(2, [2, 3])).toBe('Bob');
    });
    
    
    test('large pile even', () => {
        expect(solve(1, [10000000])).toBe('Bob');
    });
    
   
    test('all piles even', () => {
        expect(solve(5, [2, 4, 6, 8, 10])).toBe('Bob');
    });
    
