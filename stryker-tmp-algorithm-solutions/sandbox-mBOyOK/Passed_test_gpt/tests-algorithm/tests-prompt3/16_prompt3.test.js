// @ts-nocheck
import { solve } from '../../../solutions-algorithm/16.js';

test('n=2 (smallest even)', () => {
    const res = solve(2);
    expect(res.count).toBe(1);
    expect(res.parts).toEqual([2]);
});

test('n=3 (smallest odd)', () => {
    const res = solve(3);
    expect(res.count).toBe(1);
    expect(res.parts).toEqual([3]);
});

test('n=4 (even)', () => {
    const res = solve(4);
    expect(res.count).toBe(2);
    expect(res.parts).toEqual([2,2]);
});

test('n=5 (odd)', () => {
    const res = solve(5);
    expect(res.count).toBe(2);
    expect(res.parts).toEqual([3,2]);
});

test('n=6 (even)', () => {
    const res = solve(6);
    expect(res.count).toBe(3);
    expect(res.parts).toEqual([2,2,2]);
});

test('n=7 (odd)', () => {
    const res = solve(7);
    expect(res.count).toBe(3);
    expect(res.parts).toEqual([3,2,2]);
});

test('n=8 (even)', () => {
    const res = solve(8);
    expect(res.count).toBe(4);
    expect(res.parts).toEqual([2,2,2,2]);
});

test('n=9 (odd)', () => {
    const res = solve(9);
    expect(res.count).toBe(4);
    expect(res.parts).toEqual([3,2,2,2]);
});

test('n=10 (even)', () => {
    const res = solve(10);
    expect(res.count).toBe(5);
    expect(res.parts).toEqual([2,2,2,2,2]);
});

test('n=11 (odd)', () => {
    const res = solve(11);
    expect(res.count).toBe(5);
    expect(res.parts).toEqual([3,2,2,2,2]);
});

test('n=100000 (largest even)', () => {
    const res = solve(100000);
    expect(res.count).toBe(50000);
    expect(res.parts.length).toBe(50000);
    res.parts.forEach(p => expect(p).toBe(2));
    expect(res.parts.reduce((a,b) => a+b, 0)).toBe(100000);
});

test('n=99999 (largest odd)', () => {
    const res = solve(99999);
    expect(res.count).toBe(49999);
    expect(res.parts.length).toBe(49999);
    expect(res.parts[0]).toBe(3);
    res.parts.slice(1).forEach(p => expect(p).toBe(2));
    expect(res.parts.reduce((a,b) => a+b, 0)).toBe(99999);
});

test('All primes in output', () => {
    const checkPrime = n => n === 2 || n === 3;
    for (let n = 2; n <= 20; ++n) {
        const { parts } = solve(n);
        parts.forEach(p => expect(checkPrime(p)).toBe(true));
    }
});

test('sum of output parts equals n for several values', () => {
    for (let n = 2; n <= 30; ++n) {
        const { parts } = solve(n);
        expect(parts.reduce((a,b)=>a+b,0)).toBe(n);
    }
});

test('return value is always object with correct keys', () => {
    for (let n = 2; n <= 10; ++n) {
        const res = solve(n);
        expect(typeof res).toBe('object');
        expect(res).toHaveProperty('count');
        expect(res).toHaveProperty('parts');
        expect(Array.isArray(res.parts)).toBe(true);
        expect(res.count).toBe(res.parts.length);
    }
});

test('parts sequence matches expected for random even/odd', () => {
    expect(solve(12).parts).toEqual([2,2,2,2,2,2]);
    expect(solve(13).parts).toEqual([3,2,2,2,2,2]);
    expect(solve(14).parts).toEqual([2,2,2,2,2,2,2]);
    expect(solve(15).parts).toEqual([3,2,2,2,2,2,2]);
});