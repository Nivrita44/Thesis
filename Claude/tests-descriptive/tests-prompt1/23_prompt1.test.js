import { solve } from '../../../solutions-descriptive/23.js'

test('Example from description', () => {
    expect(solve(1, 4, 2, 1)).toBe(6);
});

test('Minimal valid input', () => {
    expect(solve(1, 1, 0, 0)).toBe(1);
});

test('Singleumber in range', () => {
    expect(solve(42, 42, 3, 2)).toBe(42);
});

test('Power of 2 range', () => {
    expect(solve(1, 8, 3, 1)).toBe(15);
});

test('Large rangeumbers', () => {
    expect(solve(1000000000000000000, 1000000000000000100, 4, 3)).toBe(1267650600228229401496703205276);
});

test('Maximum i value', () => {
    expect(solve(1, 100, 30, 0)).toBe(5050);
});

test('k equals 2^i-1', () => {
    expect(solve(10, 20, 4, 15)).toBe(30);
});

test('Generic range test', () => {
    expect(solve(100, 200, 5, 10)).toBe(15130);
});

test('Allumbers included', () => {
    expect(solve(50, 60, 1, 0)).toBe(550);
});