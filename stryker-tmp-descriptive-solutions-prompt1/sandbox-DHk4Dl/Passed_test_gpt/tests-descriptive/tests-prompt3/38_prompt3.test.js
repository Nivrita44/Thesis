import { solve } from '../../../solutions-descriptive/38.js';

test('01 string', () => {
    expect(solve('01')).toBe(1);
});

test('111 string', () => {
    expect(solve('111')).toBe(1);
});

test('edge case: empty string', () => {
    expect(solve('')).toBe(0);
});