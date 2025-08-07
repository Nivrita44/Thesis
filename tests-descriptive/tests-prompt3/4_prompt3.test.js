import { solve } from '../../solutions-descriptive/4.js';

test('n=3, all 1s', () => {
    expect(solve([1, 1, 1])).toBe(1);
});

test('n=3, varied values', () => {
    expect(solve([2, 3, 4])).toBe(24);
});

test('n=4, increasing values', () => {
    expect(solve([1, 2, 3, 4])).toBe(18);
}); //fail

test('n=4, all equal values', () => {
    expect(solve([5, 5, 5, 5])).toBe(125);
});

test('n=5, mixed values', () => {
    expect(solve([1, 3, 5, 2, 4])).toBe(59);
}); //fail

test('n=6, distinct values', () => {
    expect(solve([1, 2, 3, 4, 5, 6])).toBe(170);
}); //fail

test('n=6, all max values', () => {
    expect(solve([1000, 1000, 1000, 1000, 1000, 1000])).toBe(1000000000);
}); //fail

test('n=7, varied', () => {
    expect(solve([1, 7, 14, 2, 5, 3, 6])).toBe(406);
}); //fail

test('n=3, max values', () => {
    expect(solve([1000, 1000, 1000])).toBe(1000000000);
});

test('n=4, min and max alternating', () => {
    expect(solve([1, 1000, 1, 1000])).toBe(2000000);
}); //fail

test('n=5, all ones', () => {
    expect(solve([1, 1, 1, 1, 1])).toBe(7);
}); //fail

test('n=10, incremental', () => {
    expect(solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(4709);
}); //fail

test('n=3, minimum values', () => {
    expect(solve([1, 1, 1])).toBe(1);
});

test('n=400, all ones', () => {
    expect(solve(Array(400).fill(1))).toBe(39801);
}); //fail

test('n=8, checkerboard max/min', () => {
    expect(solve([1, 1000, 1, 1000, 1, 1000, 1, 1000])).toBe(9000000);
}); //fail