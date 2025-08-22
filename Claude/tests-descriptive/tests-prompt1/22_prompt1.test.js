import { solve } from '../../../solutions-descriptive/22.js'

test('example case from description', () => {
    expect(solve(3, 3, 2, [7, 3, 6], [2, 4, 5])).toBe(3);
});

test('edge case - single enemy', () => {
    expect(solve(1, 5, 1, [10], [3])).toBe(2);
});

test('upper bound case - largeumber of enemies', () => {
    expect(solve(5, 2, 3, [10, 10, 10, 10, 10], [1, 3, 5, 7, 9])).toBe(-1);
});

test('minimal case - k=1 with minimum damage', () => {
    expect(solve(2, 1, 1, [1, 1], [1, 2])).toBe(1);
});

test('impossible case - damage too small', () => {
    expect(solve(3, 1, 3, [10, 10, 10], [1, 2, 3])).toBe(-1);
});

test('all enemies in same position', () => {
    expect(solve(3, 4, 2, [5, 5, 5], [2, 3, 4])).toBe(2);
});

test('enemies spread far apart', () => {
    expect(solve(4, 3, 2, [5, 5, 5, 5], [1, 10, 20, 30])).toBe(2);
});

test('exact damageeeded', () => {
    expect(solve(2, 5, 2, [10, 10], [1, 2])).toBe(2);
});