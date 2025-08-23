// @ts-nocheck
import { solve } from '../../../solutions-algorithm/18.js';

test('Example 1: l=1, r=2', () => {
    expect(solve([
        [1, 2]
    ])[0].map(Number)).toEqual([1, 2]);
});

test('Example minimum case where answer possible: l=2, r=4', () => {
    const res = solve([
        [2, 4]
    ])[0].map(Number);
    expect(res[0]).toBeGreaterThanOrEqual(2);
    expect(res[1]).toBeGreaterThan(res[0]);
    expect(res[1]).toBeLessThanOrEqual(4);
    const lcm = (a, b) => a * b / gcd(a, b);

    function gcd(a, b) { return b ? gcd(b, a % b) : a; }
    expect(lcm(res[0], res[1])).toBeGreaterThanOrEqual(2);
    expect(lcm(res[0], res[1])).toBeLessThanOrEqual(4);
});

test('Case: r < 2*l, impossible case l=5, r=9', () => {
    expect(solve([
        [5, 9]
    ])[0]).toEqual(['-1', '-1']);
});

test('Case: r = 2*l - 1, impossible: l=7, r=13', () => {
    expect(solve([
        [7, 13]
    ])[0]).toEqual(['-1', '-1']);
});

test('Case: r = 2*l, possible: l=8, r=16', () => {
    const res = solve([
        [8, 16]
    ])[0].map(Number);
    expect(res[0]).toBeGreaterThanOrEqual(8);
    expect(res[1]).toBeGreaterThan(res[0]);
    expect(res[1]).toBeLessThanOrEqual(16);
    const lcm = (a, b) => a * b / gcd(a, b);

    function gcd(a, b) { return b ? gcd(b, a % b) : a; }
    expect(lcm(res[0], res[1])).toBeGreaterThanOrEqual(8);
    expect(lcm(res[0], res[1])).toBeLessThanOrEqual(16);
});

test('Case: large l and r where answer is possible', () => {
    const l = 100000000,
        r = 200000000;
    const res = solve([
        [l, r]
    ])[0].map(Number);
    expect(res[0]).toBeGreaterThanOrEqual(l);
    expect(res[1]).toBeGreaterThan(res[0]);
    expect(res[1]).toBeLessThanOrEqual(r);
    const lcm = (a, b) => a * b / gcd(a, b);

    function gcd(a, b) { return b ? gcd(b, a % b) : a; }
    expect(lcm(res[0], res[1])).toBeGreaterThanOrEqual(l);
    expect(lcm(res[0], res[1])).toBeLessThanOrEqual(r);
});

test('Case: adjacent numbers at limit l=1, r=1000000000', () => {
    const res = solve([
        [1, 1000000000]
    ])[0].map(Number);
    expect(res[0]).toBeGreaterThanOrEqual(1);
    expect(res[1]).toBeGreaterThan(res[0]);
    expect(res[1]).toBeLessThanOrEqual(1000000000);
    const lcm = (a, b) => a * b / gcd(a, b);

    function gcd(a, b) { return b ? gcd(b, a % b) : a; }
    expect(lcm(res[0], res[1])).toBeGreaterThanOrEqual(1);
    expect(lcm(res[0], res[1])).toBeLessThanOrEqual(1000000000);
});

test('Smallest possible l and r, l=1, r=3', () => {
    const res = solve([
        [1, 3]
    ])[0].map(Number);
    expect(res[0]).toBeGreaterThanOrEqual(1);
    expect(res[1]).toBeGreaterThan(res[0]);
    expect(res[1]).toBeLessThanOrEqual(3);
    const lcm = (a, b) => a * b / gcd(a, b);

    function gcd(a, b) { return b ? gcd(b, a % b) : a; }
    expect(lcm(res[0], res[1])).toBeGreaterThanOrEqual(1);
    expect(lcm(res[0], res[1])).toBeLessThanOrEqual(3);
});

test('Impossible: l=10, r=19', () => {
    expect(solve([
        [10, 19]
    ])[0]).toEqual(['-1', '-1']);
});
