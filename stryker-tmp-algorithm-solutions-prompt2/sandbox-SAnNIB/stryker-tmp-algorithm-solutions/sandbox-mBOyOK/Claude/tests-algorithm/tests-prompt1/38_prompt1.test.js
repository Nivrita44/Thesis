// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/38.js'

test('example case where a=3, b=5 should return 1', () => {
    expect(solve("3", "5")).toBe("1");
});

test('minimal case where a=b=1', () => {
    expect(solve("1", "1")).toBe("1");
});

test('consecutiveumbers a=10, b=11 should return 1', () => {
    expect(solve("10", "11 ")).toBe("1");
});

test('sameumbers a=12, b=12 should return 12', () => {
    expect(solve("12", "12")).toBe("12");
});

test('large gap case a=100, b=200 should return 1', () => {
    expect(solve("100", "200")).toBe("1");
});

test('numbers with common factors a=24, b=28 should return 4', () => {
    expect(solve("24", "28")).toBe("4");
});

test('largeumbers case', () => {
    expect(solve("1000000000", "1000000100")).toBe("1");
});

test('power of 2 range', () => {
    expect(solve("16", "32")).toBe("1");
});