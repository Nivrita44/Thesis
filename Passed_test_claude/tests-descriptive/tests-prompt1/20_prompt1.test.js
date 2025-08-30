import { solve } from '../../../solutions-descriptive/20.js'

test('already equal elements', () => {
    expect(solve([3, 3, 3, 3])).toBe(0);
});

test('minimal case with two elements', () => {
    expect(solve([1, 1])).toBe(0);
});

