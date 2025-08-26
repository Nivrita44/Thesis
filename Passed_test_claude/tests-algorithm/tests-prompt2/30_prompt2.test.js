import { solve } from '../../../solutions-algorithm/30.js';

describe('solve', () => {


    test('boundary case with minimum valid sum', () => {
        expect(solve(1, [4])).toEqual(['YES', '2 1 1']);
    });

});