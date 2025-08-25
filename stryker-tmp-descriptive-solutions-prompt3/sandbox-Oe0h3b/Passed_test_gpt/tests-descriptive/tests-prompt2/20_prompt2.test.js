import { solve } from '../../../solutions-descriptive/20.js';

test('Single element zero', () => {
    expect(solve([0])).toBe(0);
});

test('Single positive element', () => {
    expect(solve([5])).toBe(0);
});

test('Two zeros', () => {
    expect(solve([0, 0])).toBe(0);
});

test('Impossible case', () => {
    expect(solve([1000000000, -1000000000, 1000000000, -1000000000, 1000000000, -1000000000])).toBe(-1);
});

test('Empty array', () => {
    expect(solve([])).toBe(0);
});