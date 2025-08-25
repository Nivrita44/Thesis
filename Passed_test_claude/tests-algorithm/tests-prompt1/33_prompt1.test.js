import { solve } from '../../../solutions-algorithm/33.js';

describe('solve', () => {
    

    test('minimum input case', () => {
        const input = [{ n: 1, a: [1] }];
        expect(solve(input)).toEqual([1]);
    });


    test('case with non-sequential numbers', () => {
        const input = [{ n: 4, a: [2, 4, 1, 3] }];
        expect(solve(input)).toEqual([4]);
    });

    
});