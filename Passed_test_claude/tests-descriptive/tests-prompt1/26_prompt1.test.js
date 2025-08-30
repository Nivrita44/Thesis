import { solve } from '../../../solutions-descriptive/26.js'

test('example from description - 3x3 grid', () => {
    expect(solve(3, "101")).toBe(2);
});

test('5x5 grid with isolated zeros', () => {
    expect(solve(5, "11011")).toBe(3);
});