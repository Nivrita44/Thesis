import { solve } from '../../../solutions-algorithm/41.js';

test('example path with 4 vertices and 4 edges', () => {
    expect(solve(4, [
        [1, 2, 1],
        [4, 1, 2],
        [2, 3, 2],
        [3, 4, 3]
    ])).toBe('6');
});

test('disconnected graph witho path', () => {
    expect(solve(3, [
        [1, 2, 1]
    ])).toBe('-1');
});

test('large graph with multiple paths', () => {
    expect(solve(5, [
        [1, 2, 1],
        [2, 3, 2],
        [3, 5, 3],
        [1, 4, 2],
        [4, 5, 4],
        [1, 5, 10]
    ])).toBe('6');
});

test('minimal graph with direct edge', () => {
    expect(solve(2, [
        [1, 2, 5]
    ])).toBe('5');
});

test('graph with multiple edges between same vertices', () => {
    expect(solve(3, [
        [1, 2, 3],
        [2, 3, 1],
        [1, 2, 1],
        [2, 3, 4]
    ])).toBe('2');
});

test('graph with loop edge', () => {
    expect(solve(3, [
        [1, 1, 5],
        [1, 2, 2],
        [2, 3, 3]
    ])).toBe('5');
});

test('graph with all possible edges', () => {
    expect(solve(4, [
        [1, 2, 1],
        [2, 3, 1],
        [3, 4, 1],
        [1, 3, 3],
        [2, 4, 3],
        [1, 4, 5]
    ])).toBe('3');
});

test('empty graph with just vertices', () => {
    expect(solve(5, [])).toBe('-1');
});