import { solve } from '../../../solutions-algorithm/17.js';


test('minimum input=2', () => {
    expect(solve([2])).toEqual([2]);
});

test('edge case=3', () => {
    expect(solve([3])).toEqual([3]);
});
