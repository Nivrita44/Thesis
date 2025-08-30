import { solve } from '../../../solutions-descriptive/24.js'


test('minimal case with all values 1', () => {
    expect(solve(1, 1, 1, 1)).toBe(2);
});

test('case with high health but cheap attacks', () => {
    expect(solve(5, 1, 20, 4)).toBe(20);
});
