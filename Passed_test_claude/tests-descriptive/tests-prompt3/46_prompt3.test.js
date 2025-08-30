import { solve } from '../../../solutions-descriptive/46.js';

describe('solve', () => {
    

    test('batch processing test', () => {
        const input = [[1, 4], [99, 7, 1, 13]];
        expect(solve(input)).toEqual([
            'YES\n2 1',
            'YES\n4 1\n2 1\n3 2'
        ]);
    });

   
});
