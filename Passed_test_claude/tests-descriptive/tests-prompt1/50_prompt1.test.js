import { solve } from '../../../solutions-descriptive/50.js';



test('array with single element', () => {
    expect(solve([1])).toBe(0);
});

test('array with all same elements', () => {
    expect(solve([5, 5, 5, 5])).toBe(0);
});

