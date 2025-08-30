import { solve } from '../../../solutions-descriptive/38.js';

describe('solve function tests', () => {


  

    test('empty string', () => {
        expect(solve('')).toBe(0);
    });

    test('performance test with large string', () => {
        const largeString = '01'.repeat(10000);
        expect(typeof solve(largeString)).toBe('number');
    });
});
