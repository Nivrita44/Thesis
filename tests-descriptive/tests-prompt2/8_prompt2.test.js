import { solve } from '../../solutions-descriptive/8.js';

test('n and m are equal, simple arrays', () => {
    expect(solve(2, 2, [1, 3], [2, 4])).toBe('1\n2');
});

test('n and m are minimal, single elements', () => {
    expect(solve(1, 1, [5], [10])).toBe('0');
});

test('more elements, typical arrays', () => {
    expect(solve(4, 4, [1, 5, 2, 8], [3, 7, 4, 6])).toBe('2\n7 12');
}); //fail

test('n > m', () => {
    expect(solve(5, 3, [2, 3, 4, 5, 6], [1, 7, 8])).toBe('2\n7 10');
}); //fail

test('m > n', () => {
    expect(solve(3, 5, [7, 3, 9], [2, 5, 10, 8, 6])).toBe('2\n7 13');
}); //fail

test('arrays with identical values', () => {
    expect(solve(4, 4, [5, 5, 5, 5], [5, 5, 5, 5])).toBe('2\n0 0');
});

test('arrays with negatives', () => {
    expect(solve(3, 3, [-2, 0, 2], [-3, 0, 3])).toBe('2\n5 10');
}); //fail

test('all zeros', () => {
    expect(solve(6, 6, [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0])).toBe('4\n0 0 0 0');
});

test('maxTeams in (n+m)//3 form', () => {
    expect(solve(4, 5, [1, 2, 3, 4], [5, 6, 7, 8, 9])).toBe('3\n8 14 20');
}); //fail
test('n or m is zero', () => {
    expect(solve(0, 3, [], [1, 2, 3])).toBe('0');
    expect(solve(3, 0, [1, 2, 3], [])).toBe('0');
});

test('odd n and even m with small values', () => {
    expect(solve(3, 4, [1, 3, 5], [2, 4, 6, 8])).toBe('2\n7 12');
}); //fail