import { solve } from '../../../solutions-algorithm/49.js'

test('example case - 2x2 grid with k=3', () => {
    expect(solve(2, 2, 3)).toBe('YES');
});

test('minimal 1x1 grid with k=0', () => {
    expect(solve(1, 1, 0)).toBe('YES');
});

test('impossible case - k too small', () => {
    expect(solve(2, 2, 1)).toBe('NO');
});

test('large grid with exact sum', () => {
    expect(solve(3, 4, 9)).toBe('YES');
});

test('edge case - 1xm grid', () => {
    expect(solve(1, 5, 4)).toBe('YES');
});

test('tricky case - multiple possible paths but wrong k', () => {
    expect(solve(3, 3, 8)).toBe('NO');
});

test('maximum size grid with valid path', () => {
    expect(solve(100, 100, 10000)).toBe('YES');
});

test('medium grid with impossible k', () => {
    expect(solve(4, 4, 25)).toBe('NO');
});