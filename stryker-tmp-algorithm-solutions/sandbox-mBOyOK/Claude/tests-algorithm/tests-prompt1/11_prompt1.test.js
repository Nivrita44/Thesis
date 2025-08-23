// @ts-nocheck
import { solve } from '../../../solutions-algorithm/11.js'

test('example case - sum digits of 47', () => {
    expect(solve([47])).toEqual([11]);
});

test('edge case - sum digits of 99', () => {
    expect(solve([99])).toEqual([18]);
});

test('lower bound case - sum digits of 10', () => {
    expect(solve([10])).toEqual([1]);
});

test('number with zero - sum digits of 50', () => {
    expect(solve([50])).toEqual([5]);
});

test('repeated digits - sum digits of 22', () => {
    expect(solve([22])).toEqual([4]);
});

test('random case 1 - sum digits of 75', () => {
    expect(solve([75])).toEqual([12]);
});

test('random case 2 - sum digits of 31', () => {
    expect(solve([31])).toEqual([4]);
});

test('typical case - sum digits of 85', () => {
    expect(solve([85])).toEqual([13]);
});