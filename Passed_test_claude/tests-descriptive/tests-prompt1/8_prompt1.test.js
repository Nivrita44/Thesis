import { solve } from '../../../solutions-descriptive/8.js'

test('example case from description', () => {
    expect(solve(2, 2, [1, 3], [2, 4])).toBe('1\n2');
});

test('minimal input case', () => {
    expect(solve(1, 1, [0], [0])).toBe('0');
});

