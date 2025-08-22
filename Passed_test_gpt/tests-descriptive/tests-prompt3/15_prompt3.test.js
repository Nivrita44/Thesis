import { solve } from '../../../solutions-descriptive/15.js';

test('minimal size deck', () => {
    expect(
        solve(2, 1, 2, [2, 1])
    ).toBe('2 2');
});