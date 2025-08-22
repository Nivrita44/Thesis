import { solve } from '../../solutions-descriptive/10.js';

test('single node, li=ri', () => {
    expect(solve(1, [7], [7], [])).toBe(7);
});

test('single node, li<ri', () => {
    expect(solve(1, [1], [10], [])).toBe(1);
});

test('two node, same li=ri', () => {
    expect(solve(2, [3, 3], [3, 3], [
        [1, 2]
    ])).toBe(3);
});

test('two node, li/ri mismatch', () => {
    expect(solve(2, [2, 6], [4, 6], [
        [1, 2]
    ])).toBe(4);
}); //fail

test('two node, must increase', () => {
    expect(solve(2, [7, 1], [9, 7], [
        [1, 2]
    ])).toBe(7);
});

test('tiny chain', () => {
    expect(solve(3, [1, 3, 2], [2, 5, 7], [
        [1, 2],
        [2, 3]
    ])).toBe(3);
});

test('tiny star', () => {
    expect(solve(3, [5, 1, 6], [11, 5, 9], [
        [1, 2],
        [1, 3]
    ])).toBe(6);
});

test('longer chain forced up', () => {
    expect(solve(5, [7, 6, 5, 3, 2], [7, 8, 8, 4, 3], [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5]
    ])).toBe(7);
});

test('all same', () => {
    expect(solve(4, [5, 5, 5, 5], [5, 5, 5, 5], [
        [1, 2],
        [2, 3],
        [2, 4]
    ])).toBe(5);
});

test('greedy propagation to root', () => {
    expect(solve(4, [2, 3, 1, 10], [9, 4, 7, 10], [
        [1, 2],
        [1, 3],
        [3, 4]
    ])).toBe(3);
}); //fail

test('constraints needing addition', () => {
    expect(solve(4, [3, 9, 7, 10], [3, 9, 9, 10], [
        [1, 2],
        [2, 3],
        [2, 4]
    ])).toBe(10);
});

test('chain decrease and stay in range', () => {
    expect(solve(3, [2, 1, 0], [7, 4, 1], [
        [1, 2],
        [2, 3]
    ])).toBe(2);
});

test('multiple tight constraints', () => {
    expect(solve(6, [3, 4, 4, 7, 2, 8], [9, 4, 5, 12, 7, 8], [
        [1, 2],
        [1, 3],
        [3, 4],
        [1, 5],
        [2, 6]
    ])).toBe(7);
}); //fail

test('star topology, center high constraint', () => {
    expect(solve(5, [10, 4, 4, 4, 4], [100, 5, 6, 7, 6], [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5]
    ])).toBe(10);
});

test('star topology, center low', () => {
    expect(solve(5, [2, 8, 8, 8, 8], [2, 9, 9, 9, 9], [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5]
    ])).toBe(8);
}); //fail

test('edge case, all zeros', () => {
    expect(solve(2, [0, 0], [0, 0], [
        [1, 2]
    ])).toBe(0);
});

test('tight cascading constraints', () => {
    expect(solve(4, [1, 2, 3, 4], [1, 2, 3, 4], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(4);
});

test('fitting in upper bounds', () => {
    expect(solve(4, [1, 2, 3, 10], [1, 9, 13, 10], [
        [1, 2],
        [2, 3],
        [3, 4]
    ])).toBe(10);
});

test('alternating easy', () => {
    expect(solve(4, [1, 3, 1, 3], [3, 4, 2, 6], [
        [1, 2],
        [2, 3],
        [2, 4]
    ])).toBe(3);
});
