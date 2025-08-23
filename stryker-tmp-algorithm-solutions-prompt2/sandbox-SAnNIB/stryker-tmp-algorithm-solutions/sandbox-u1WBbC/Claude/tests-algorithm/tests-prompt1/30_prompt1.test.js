// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/30.js';

test('basic example - sum of 17', () => {
    expect(solve(1, [17])).toEqual(['YES', '1 4 12']);
});

test('minimum valid number that works - 7', () => {
    expect(solve(1, [7])).toEqual(['YES', '1 2 4']);
});

test('edge case - very small number 3', () => {
    expect(solve(1, [3])).toEqual(['NO']);
});

test('large number case', () => {
    expect(solve(1, [1000000000])).toEqual(['YES', '1 4 999999995']);
});

test('number barely enough for three distinct numbers', () => {
    expect(solve(1, [8])).toEqual(['YES', '1 2 5']);
});

test('medium sized number', () => {
    expect(solve(1, [42])).toEqual(['YES', '1 4 37']);
});

test('tricky case with many multiples of 3', () => {
    expect(solve(1, [20])).toEqual(['YES', '1 4 15']);
});

test('random valid case 1', () => {
    expect(solve(1, [100])).toEqual(['YES', '1 4 95']);
});

test('random valid case 2', () => {
    expect(solve(1, [50])).toEqual(['YES', '1 4 45']);
});