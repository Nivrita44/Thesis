import { solve } from '../../../solutions-descriptive/34.js';

test('solve totalX < totalY', () => {
    expect(solve([1, 2, 3], [10, 10, 10])).toBe("-1");
});

test('solve identical arrays, peak+1 > 1e9', () => {
    expect(solve([1000000000], [1000000000])).toBe("-1");
});

test('solve arrays not matching when totals equal', () => {
    expect(solve([1, 2, 7], [2, 3, 5])).toBe("-1");
});

test('solve diffVal case that works (simple mod mapping)', () => {
    expect(solve([8, 9, 10], [2, 3, 4])).toBe("6");
});

test('solve no valid candidateFactor', () => {
    expect(solve([1, 2, 3], [0, 2, 5])).toBe("-1");
});

test('solve duplicate values, not matching for mod', () => {
    expect(solve([3, 3, 3], [0, 1, 2])).toBe("-1");
});