import { solve } from '../../../solutions-algorithm/7.js'

test('example case with hero and bonus cards', () => {
    expect(solve(5, [0, 4, 0, 3, 0])).toBe(7);
});

test('all hero cards', () => {
    expect(solve(4, [0, 0, 0, 0])).toBe(0);
});

test('all bonus cards', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(0);
});

test('single hero card', () => {
    expect(solve(1, [0])).toBe(0);
});

test('alternating hero and bonus cards', () => {
    expect(solve(6, [5, 0, 4, 0, 3, 0])).toBe(12);
});

test('multiple bonus cards before hero', () => {
    expect(solve(6, [3, 4, 5, 0, 2, 0])).toBe(7);
});

test('large bonus values', () => {
    expect(solve(4, [1000000000, 0, 999999999, 0])).toBe(1999999999);
});

test('single bonus followed by hero', () => {
    expect(solve(2, [5, 0])).toBe(5);
});