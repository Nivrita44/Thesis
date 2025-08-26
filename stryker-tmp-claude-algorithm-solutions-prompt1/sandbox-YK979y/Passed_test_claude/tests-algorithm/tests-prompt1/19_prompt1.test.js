import { solve } from '../../../solutions-algorithm/19.js'

test('example case from description with x=5', () => {
    expect(solve(5)).toBe(1);
});

test('minimal case x=1', () => {
    expect(solve(1)).toBe(1);
});

test('edge case x=6 requiring 2 steps', () => {
    expect(solve(6)).toBe(2);
});

test('large input case x=1000000', () => {
    expect(solve(1000000)).toBe(200000);
});

test('case where x=12 requiring 3 steps', () => {
    expect(solve(12)).toBe(3);
});

test('case with x=25 requiring 5 steps', () => {
    expect(solve(25)).toBe(5);
});

test('tricky case x=14 requiring 3 steps', () => {
    expect(solve(14)).toBe(3);
});

test('case with x=100 requiring 20 steps', () => {
    expect(solve(100)).toBe(20);
});