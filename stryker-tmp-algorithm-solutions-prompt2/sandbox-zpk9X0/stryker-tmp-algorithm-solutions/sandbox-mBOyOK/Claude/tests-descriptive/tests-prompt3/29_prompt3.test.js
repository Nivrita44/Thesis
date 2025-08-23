// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/29.js';

test('basic test case with small array', () => {
    expect(solve(3, 3, [2, 1, 4])).toBe("YES");
});

test('insufficient operations', () => {
    expect(solve(3, 7, [2, 1, 4])).toBe("NO"); 
});

test('power of 2 test case', () => {
    expect(solve(2, 15, [2, 16])).toBe("YES");
});

test('descending powers test', () => {
    expect(solve(3, 10, [256, 32, 1])).toBe("YES");
});

test('large numbers test - possible', () => {
    expect(solve(3, 289, [768, 96, 1])).toBe("YES");
});

test('large numbers test - impossible', () => {
    expect(solve(3, 290, [768, 96, 1])).toBe("NO");
});

test('longer array test', () => {
    expect(solve(5, 7, [5, 1, 6, 3, 10])).toBe("YES");
});

test('minimum length array', () => {
    expect(solve(1, 5, [7])).toBe("YES");
});

test('array with max allowed values', () => {
    expect(solve(3, 1000000, [1000000000, 1, 1000000000])).toBe("YES");
});

test('edge case with maximum operations needed', () => {
    expect(solve(2, 30, [1000000000, 1])).toBe("YES");
});
