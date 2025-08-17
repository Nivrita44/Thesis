import { solve } from '../../../solutions-algorithm/17.js';

test('example case=6', () => {
    expect(solve([6])).toEqual([3]);
});

test('minimum input=2', () => {
    expect(solve([2])).toEqual([2]);
});

test('maximum input=100', () => {
    expect(solve([100])).toEqual([4]);
});

test('n=10 should return 4', () => {
    expect(solve([10])).toEqual([4]);
});

test('n=20 should return 4', () => {
    expect(solve([20])).toEqual([4]);
});

test('edge case=3', () => {
    expect(solve([3])).toEqual([3]);
});

test('n=50 should return 4', () => {
    expect(solve([50])).toEqual([4]);
});

test('n=15 should return 4', () => {
    expect(solve([15])).toEqual([4]);
});