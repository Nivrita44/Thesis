import { solve } from '../../../solutions-algorithm/23.js';

test('example case', () => {
    expect(solve([
        [7, 5, 12345]
    ])).toEqual([12339]);
});

test('minimal possible values', () => {
    expect(solve([
        [2, 0, 2]
    ])).toEqual([2]);
});

test('y equals x-1', () => {
    expect(solve([
        [5, 4, 100]
    ])).toEqual([99]);
});

test('y equals 0', () => {
    expect(solve([
        [4, 0, 16]
    ])).toEqual([16]);
});

test('n equals y', () => {
    expect(solve([
        [10, 5, 5]
    ])).toEqual([5]);
});

test('large numbers', () => {
    expect(solve([
        [1000000000, 999999999, 1000000000]
    ])).toEqual([999999999]);
});

test('n much larger than x', () => {
    expect(solve([
        [3, 2, 1000]
    ])).toEqual([998]);
});

test('x equals', () => {
    expect(solve([
        [100, 50, 100]
    ])).toEqual([50]);
});