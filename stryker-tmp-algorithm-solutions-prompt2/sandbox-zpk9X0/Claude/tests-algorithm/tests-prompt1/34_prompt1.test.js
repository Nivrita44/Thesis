// @ts-nocheck
import { solve } from '../../../solutions-algorithm/34.js'

test('example with x=8', () => {
    expect(solve([8])).toEqual([6]);
});

test('minimal input x=2', () => {
    expect(solve([2])).toEqual([1]);
});

test('primeumber x=17', () => {
    expect(solve([17])).toEqual([16]);
});

test('large composite x=1000', () => {
    expect(solve([1000])).toEqual([999]);
});

test('power of 2 x=16', () => {
    expect(solve([16])).toEqual([15]);
});

test('medium composite x=24', () => {
    expect(solve([24])).toEqual([18]);
});

test('perfect square x=25', () => {
    expect(solve([25])).toEqual([24]);
});

test('edge case x=999', () => {
    expect(solve([999])).toEqual([998]);
});