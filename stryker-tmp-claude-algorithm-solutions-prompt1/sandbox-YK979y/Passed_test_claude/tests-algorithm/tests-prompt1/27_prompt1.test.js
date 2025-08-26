import { solve } from '../../../solutions-algorithm/27.js'

test('example case n=10 should find 1 interesting number', () => {
    expect(solve([10])).toEqual([1]);
});

test('minimum input n=1 should find 0 interesting numbers', () => {
    expect(solve([1])).toEqual([0]);
});

test('edge case n=9 should find 0 interesting numbers', () => {
    expect(solve([1])).toEqual([0]);
});


test('upper bound case n=1000000000 should work', () => {
    expect(solve([1000000000])).toEqual([100000000]);
});


test('generic case n=55 should find interesting numbers', () => {
    expect(solve([55])).toEqual([5]);
});