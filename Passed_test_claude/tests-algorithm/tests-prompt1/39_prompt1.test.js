import { solve } from '../../../solutions-algorithm/39.js'

test('example case=6 has odd divisor 3', () => {
    expect(solve(6)).toBe('YES');
});

test('example case=4 haso odd divisors', () => {
    expect(solve(4)).toBe('NO');
});

test('minimum input=2', () => {
    expect(solve(2)).toBe('NO');
});

test('large inputear upper bound', () => {
    expect(solve(999999999999999)).toBe('YES');
});

test('power of 2 haso odd divisors', () => {
    expect(solve(1024)).toBe('NO');
});

test('oddumber always has odd divisor', () => {
    expect(solve(15)).toBe('YES');
});

test('product of odd and evenumbers', () => {
    expect(solve(30)).toBe('YES');
});

test('large power of 2', () => {
    expect(solve(2 ** 40)).toBe('NO');
});