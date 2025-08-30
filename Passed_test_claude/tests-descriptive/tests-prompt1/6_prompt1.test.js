import { solve } from '../../../solutions-descriptive/6.js'

test('single element array', () => {
    expect(solve(1, [5])).toBe(3);
});

test('array with identical elements', () => {
    expect(solve(4, [7, 7, 7, 7])).toBe(81);
});

