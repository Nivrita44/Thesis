import { solve } from '../../../solutions-descriptive/43.js'


test('all zero values', () => {
    expect(solve(4, 1, [0, 0, 0, 0], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(0);
});

