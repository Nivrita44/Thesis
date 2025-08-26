import { solve } from '../../../solutions-algorithm/47.js'



test('already sorted permutation', () => {
    expect(solve(4, 2, [1, 2, 3, 4])).toBe(0);
});


test('minimum size case', () => {
    expect(solve(2, 2, [2, 1])).toBe(1);
});

test('k equals array length', () => {
    expect(solve(5, 5, [5, 4, 3, 2, 1])).toBe(1);
});

test('random permutation case 2', () => {
    expect(solve(7, 4, [4, 2, 7, 1, 6, 3, 5])).toBe(2);
});