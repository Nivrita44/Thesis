import { solve } from '../../../solutions-descriptive/34.js';



test('large array with no valid k should return -1', () => {
    expect(solve(4, [1000000, 999999, 999998, 999997], [0, 1, 2, 4])).toBe('-1');
});
