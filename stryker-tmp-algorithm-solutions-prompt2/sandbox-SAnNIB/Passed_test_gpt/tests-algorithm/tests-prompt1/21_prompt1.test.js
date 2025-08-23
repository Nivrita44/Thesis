// @ts-nocheck
import { solve } from '../../../solutions-algorithm/21.js';

test('a is sum of b and c', () => {
    expect(solve([
        [5, 2, 3]
    ])).toEqual(['YES']);
});

test('b is sum of a and c', () => {
    expect(solve([
        [2, 7, 5]
    ])).toEqual(['YES']);
});

test('c is sum of a and b', () => {
    expect(solve([
        [8, 9, 17]
    ])).toEqual(['YES']);
});

test('none is sum of the others', () => {
    expect(solve([
        [2, 3, 6]
    ])).toEqual(['NO']);
});

test('all zeros', () => {
    expect(solve([
        [0, 0, 0]
    ])).toEqual(['YES']);
});

test('two zeros, nonzero sum', () => {
    expect(solve([
        [0, 0, 5]
    ])).toEqual(['NO']);
});

test('two numbers are the same, one is their sum', () => {
    expect(solve([
        [10, 5, 5]
    ])).toEqual(['YES']);
});

test('negative case, numbers not equal to sum', () => {
    expect(solve([
        [7, 8, 2]
    ])).toEqual(['NO']);
});

test('max values', () => {
    expect(solve([
        [20, 0, 20]
    ])).toEqual(['YES']);
});

test('one is sum, all are different', () => {
    expect(solve([
        [6, 13, 7]
    ])).toEqual(['YES']);
});