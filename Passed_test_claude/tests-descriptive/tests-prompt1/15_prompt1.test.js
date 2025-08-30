import { solve } from '../../../solutions-descriptive/15.js'


test('minimal case=2', () => {
    expect(solve(2, 1, 1, [2])).toBe('2');
});

test('large case', () => {
    expect(solve(1000000000, 500000000, 2, [1, 2])).toBe('2 3');
});

test('joker at start position', () => {
    expect(solve(5, 1, 3, [2, 3, 4])).toBe('2 3 4');
});

test('joker at end position', () => {
    expect(solve(5, 5, 3, [1, 2, 3])).toBe('2 3 4');
});

