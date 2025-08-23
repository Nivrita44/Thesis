// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/29.js';

test('example case "1234"', () => {
    expect(solve(['1234'])).toEqual([7]);
});

test('same digit repeated "1111"', () => {
    expect(solve(['1111'])).toEqual([4]);
});

test('alternating far digits "1919"', () => {
    expect(solve(['1919'])).toEqual([16]);
});

test('all zeros "0000"', () => {
    expect(solve(['0000'])).toEqual([12]);
});

test('maximum moves required "0509"', () => {
    expect(solve(['0509'])).toEqual([18]);
});

test('regular sequence "5678"', () => {
    expect(solve(['5678'])).toEqual([7]);
});

test('mixed digits "4206"', () => {
    expect(solve(['4206'])).toEqual([11]);
});

test('wrap around case "9012"', () => {
    expect(solve(['9012'])).toEqual([11]);
});