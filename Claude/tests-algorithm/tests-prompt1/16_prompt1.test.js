import { solve } from '../../../solutions-algorithm/16.js';

test('example case n=6', () => {
    expect(solve(6).parts).toEqual([3, 2, 2]);
});

test('minimum input=2', () => {
    expect(solve(2).parts).toEqual([2]);
});

test('minimum composite=4', () => {
    expect(solve(4).parts).toEqual([2, 2]);
});

test('large prime=97', () => {
    expect(solve(97).parts).toEqual([97]);
});

test('large composite=99999', () => {
    const result = solve(99999).parts;
    const sum = result.reduce((a, b) => a + b, 0);
    expect(sum).toBe(99999);
    expect(result.every(x => x === 2 || x === 3)).toBe(true);
});

test('number requiring mix of 2s and 3s=11', () => {
    const result = solve(11).parts;
    const sum = result.reduce((a, b) => a + b, 0);
    expect(sum).toBe(11);
    expect(result.length).toBe(5);
});

test('edge case=100000', () => {
    const result = solve(100000).parts;
    const sum = result.reduce((a, b) => a + b, 0);
    expect(sum).toBe(100000);
    expect(result.every(x => x === 2 || x === 3)).toBe(true);
});

test('typical case=15', () => {
    const result = solve(15).parts;
    const sum = result.reduce((a, b) => a + b, 0);
    expect(sum).toBe(15);
    expect(result.length).toBe(7);
});