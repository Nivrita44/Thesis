// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/50.js';

test('example case', () => {
    expect(solve('abbcb', [
        [1, 5]
    ])).toEqual([10]);
});

test('single character segment', () => {
    expect(solve('abc', [
        [1, 1]
    ])).toEqual([1]);
});

test('maximum length string', () => {
    expect(solve('zzzzzz', [
        [1, 6]
    ])).toEqual([156]);
});

test('minimum length string', () => {
    expect(solve('aaaaa', [
        [1, 5]
    ])).toEqual([5]);
});

test('mixed case with repeats', () => {
    expect(solve('abcabc', [
        [2, 5]
    ])).toEqual([10]);
});

test('single letter repeated', () => {
    expect(solve('bbbb', [
        [1, 4]
    ])).toEqual([8]);
});

test('whole alphabet sequence', () => {
    expect(solve('abcdefghijklmnopqrstuvwxyz', [
        [1, 26]
    ])).toEqual([351]);
});

test('partial segment', () => {
    expect(solve('helloworld', [
        [3, 7]
    ])).toEqual([24]);
});

test('alternating letters', () => {
    expect(solve('ababab', [
        [2, 5]
    ])).toEqual([9]);
});