import { solve } from '../../../solutions-algorithm/6.js'

test('example case from description', () => {
    expect(solve(4, [5, 5, 5, 5])).toBe(0);
});

test('minimal array length case', () => {
    expect(solve(4, [1, 2, 3, 4])).toBe(4);
});

test('corner case - all same except one', () => {
    expect(solve(4, [1, 1, 10, 1])).toBe(9);
});

test('edge case - alternating values', () => {
    expect(solve(5, [1, 10, 1, 10, 1])).toBe(18);
});

test('random valid case', () => {
    expect(solve(6, [3, 7, 2, 9, 4, 6])).toBe(11);
});