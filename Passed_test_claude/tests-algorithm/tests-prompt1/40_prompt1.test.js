import { solve } from '../../../solutions-algorithm/40.js'

test('example case with a=2, b=4 should return 8', () => {
    expect(solve(2, 4)).toBe(8);
});

test('edge case with a=1, b=2 should return 4', () => {
    expect(solve(1, 2)).toBe(4);
});


test('typical case with a=3, b=6 should return 12', () => {
    expect(solve(3, 6)).toBe(12);
});


test('medium size case with a=100, b=200 should return 400', () => {
    expect(solve(100, 200)).toBe(400);
});