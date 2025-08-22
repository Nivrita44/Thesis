import { solve } from '../../../solutions-descriptive/20.js'

test('example case with three elements', () => {
    expect(solve([2, 4, 1])).toBe(2);
});

test('already equal elements', () => {
    expect(solve([3, 3, 3, 3])).toBe(0);
});

test('impossible case', () => {
    expect(solve([1, 10])).toBe(-1);
});

test('minimal case with two elements', () => {
    expect(solve([1, 1])).toBe(0);
});

test('large input case', () => {
    expect(solve([100000000, 100000000, 100000001])).toBe(2);
});

test('tricky case with alternating values', () => {
    expect(solve([5, 1, 5, 1])).toBe(4);
});

test('generic case with five elements', () => {
    expect(solve([3, 5, 2, 4, 1])).toBe(6);
});

test('edge case with all different values', () => {
    expect(solve([1, 2, 3, 4])).toBe(4);
});

test('case with one large element', () => {
    expect(solve([2, 8, 3])).toBe(5);
});