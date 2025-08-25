import { solve } from '../../../solutions-descriptive/38.js';

test('all ones', () => {
    expect(solve('11111')).toBe(0);
});

test('empty string', () => {
    expect(solve('')).toBe(0);
});