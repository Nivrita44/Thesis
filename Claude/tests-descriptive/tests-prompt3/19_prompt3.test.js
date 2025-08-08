import { solve } from '../../solutions-descriptive/19.js';

test('GCD of 48 and 18', () => {
    expect(solve(48, 18)).toBe(6);
});

test('GCD of coprime numbers 17 and 13', () => {
    expect(solve(17, 13)).toBe(1);
});

test('GCD when one number is 0', () => {
    expect(solve(15, 0)).toBe(15);
});

test('GCD of same numbers', () => {
    expect(solve(7, 7)).toBe(7);
});

test('GCD of consecutive numbers', () => {
    expect(solve(21, 20)).toBe(1);
});

test('GCD of large numbers', () => {
    expect(solve(1000000, 999999)).toBe(1);
});

test('GCD of powers of 2', () => {
    expect(solve(128, 64)).toBe(64);
});

test('GCD when second number larger than first', () => {
    expect(solve(35, 49)).toBe(7);
});

test('GCD involving 1', () => {
    expect(solve(1, 17)).toBe(1);
});

test('GCD of large coprime numbers', () => {
    expect(solve(999983, 999979)).toBe(1);
});