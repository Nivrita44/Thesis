// @ts-nocheck
import { solve } from '../../../solutions-algorithm/22.js';

test('n = 1', () => {
    expect(solve([1])).toEqual(['First']);
});

test('n = 2', () => {
    expect(solve([2])).toEqual(['First']);
});

test('n = 3', () => {
    expect(solve([3])).toEqual(['Second']);
});

test('n = 4', () => {
    expect(solve([4])).toEqual(['First']);
});

test('n = 5', () => {
    expect(solve([5])).toEqual(['First']);
});

test('n = 6', () => {
    expect(solve([6])).toEqual(['Second']);
});

test('n = 9', () => {
    expect(solve([9])).toEqual(['Second']);
});

test('n = 7', () => {
    expect(solve([7])).toEqual(['First']);
});

test('n = 8', () => {
    expect(solve([8])).toEqual(['First']);
});

test('n = 10', () => {
    expect(solve([10])).toEqual(['First']);
});

test('n = 11', () => {
    expect(solve([11])).toEqual(['First']);
});

test('n = 12', () => {
    expect(solve([12])).toEqual(['Second']);
});

test('n = 15', () => {
    expect(solve([15])).toEqual(['Second']);
});

test('n = 20', () => {
    expect(solve([20])).toEqual(['First']);
});

test('n = 27', () => {
    expect(solve([27])).toEqual(['Second']);
});

test('n = 30', () => {
    expect(solve([30])).toEqual(['Second']);
});

test('n = 100', () => {
    expect(solve([100])).toEqual(['First']);
});

test('n = 999', () => {
    expect(solve([999])).toEqual(['Second']);
});

test('n = 1000', () => {
    expect(solve([1000])).toEqual(['First']);
});