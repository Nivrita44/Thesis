// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/49.js';

test('basic graph with single edge', () => {
    const input = `2 1\n1 2`;
    expect(solve(input)).toEqual([0]);
});

test('triangle graph', () => {
    const input = `3 3\n1 2\n2 3\n1 3`;
    expect(solve(input)).toEqual([3]);
});

test('simple tree with bridge', () => {
    const input = `5 4\n1 2\n2 3\n3 4\n4 5`;
    expect(solve(input)).toEqual([6]);
});

test('cycle with branch', () => {
    const input = `5 5\n1 2\n1 3\n3 4\n4 5\n5 3`;
    expect(solve(input)).toEqual([4]);
});

test('multiple components with bridges', () => {
    const input = `6 7\n1 2\n1 3\n2 3\n3 4\n4 5\n4 6\n5 6`;
    expect(solve(input)).toEqual([6]);
});

test('complex graph with multiple cycles', () => {
    const input = `10 12\n1 2\n1 3\n2 3\n2 4\n4 5\n5 6\n6 7\n7 4\n3 8\n8 9\n9 10\n10 8`;
    expect(solve(input)).toEqual([21]);
});

test('multiple test cases in single input', () => {
    const input = `2 1\n1 2\n3 3\n1 2\n2 3\n1 3`;
    expect(solve(input)).toEqual([0, 3]);
});

test('empty graph', () => {
    const input = `1 0`;
    expect(solve(input)).toEqual([0]);
});
