// @ts-nocheck
import { solve } from '../../../solutions-algorithm/46.js'

test('example case from description', () => {
    expect(solve(5, [-1, 1, 2, 1, -1])).toBe(2);
});

test('single employee case', () => {
    expect(solve(1, [-1])).toBe(1);
});

test('large linear chain case', () => {
    expect(solve(5, [-1, 1, 2, 3, 4])).toBe(5);
});

test('all employees report to one manager', () => {
    expect(solve(4, [-1, 1, 1, 1])).toBe(2);
});

test('no managers case', () => {
    expect(solve(3, [-1, -1, -1])).toBe(1);
});

test('multiple independent chains', () => {
    expect(solve(6, [-1, 1, -1, 3, 3, 3])).toBe(3);
});

test('two level hierarchy case', () => {
    expect(solve(7, [-1, 1, 1, 2, 2, 3, 3])).toBe(3);
});

test('complex hierarchy case', () => {
    expect(solve(8, [-1, 1, 1, 2, 2, 3, 3, 4])).toBe(4);
});

test('alternating managers case', () => {
    expect(solve(6, [-1, -1, 1, 2, 3, 4])).toBe(3);
});