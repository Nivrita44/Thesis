import { solve } from '../../../solutions-descriptive/2.js'

test('example case=12, k=3', () => {
    expect(solve(12, 3)).toBe(42);
});

test('minimal case=1, k=2', () => {
    expect(solve(1, 2)).toBe(1);
});

test('smallumbers=5, k=4', () => {
    expect(solve(5, 4)).toBe(14);
});

test('larger k with small=7, k=10', () => {
    expect(solve(7, 10)).toBe(63);
});

test('medium with small k=100, k=5', () => {
    expect(solve(100, 5)).toBe(444);
});

test('large input case=300000, k=1000000000000000000', () => {
    expect(solve(300000, 1000000000000000000)).toBe(647483735);
});

test('edge case=299999, k=999999999999999999', () => {
    expect(solve(299999, 999999999999999999)).toBe(234567890);
});

test('tricky case with palindromic=121, k=7', () => {
    expect(solve(121, 7)).toBe(726);
});

test('power of 2 case=128, k=8', () => {
    expect(solve(128, 8)).toBe(891);
});