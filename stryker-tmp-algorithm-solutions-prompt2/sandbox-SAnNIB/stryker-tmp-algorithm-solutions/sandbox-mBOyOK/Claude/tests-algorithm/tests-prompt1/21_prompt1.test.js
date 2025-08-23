// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/21.js';

test('basic example where sum exists', () => {
    expect(solve([
        [1, 2, 3]
    ])).toEqual(['YES']);
});

test('edge case with all zeros', () => {
    expect(solve([
        [0, 0, 0]
    ])).toEqual(['NO']);
});

test('large numbers within bounds', () => {
    expect(solve([
        [20, 20, 20]
    ])).toEqual(['NO']);
});

test('minimal case with small numbers', () => {
    expect(solve([
        [1, 1, 2]
    ])).toEqual(['YES']);
});

test('tricky case with same numbers', () => {
    expect(solve([
        [5, 5, 10]
    ])).toEqual(['YES']);
});

test('random valid case 1', () => {
    expect(solve([
        [7, 3, 4]
    ])).toEqual(['YES']);
});

test('random valid case 2', () => {
    expect(solve([
        [8, 15, 7]
    ])).toEqual(['YES']);
});

test('random case where sum does not exist', () => {
    expect(solve([
        [5, 8, 14]
    ])).toEqual(['NO']);
});