// @ts-nocheck
import { solve } from '../../../solutions-algorithm/22.js';

test('example case=4', () => {
    expect(solve([4])).toEqual(["First"]);
});

test('edge case=1000', () => {
    expect(solve([1000])).toEqual(["First"]);
});

test('minimum value=1', () => {
    expect(solve([1])).toEqual(["First"]);
});

test('when is already divisible by 3', () => {
    expect(solve([3])).toEqual(["First"]);
});

test('when optimal play leads to Vova win', () => {
    expect(solve([5])).toEqual(["Second"]);
});

test('generic case=10', () => {
    expect(solve([10])).toEqual(["First"]);
});

test('generic case=17', () => {
    expect(solve([17])).toEqual(["First"]);
});

test('tricky case one move from divisible by 3', () => {
    expect(solve([8])).toEqual(["First"]);
});

test('large case=999', () => {
    expect(solve([999])).toEqual(["First"]);
});