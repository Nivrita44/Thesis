import { solve } from '../../../solutions-descriptive/4.js';

test('typical case: [1,2,3]', () => {
    expect(solve([1, 2, 3])).toBe(6);
});


test('edge case: array of length 1', () => {
    expect(solve([7])).toBe(0);
});

test('edge case: array of length 2', () => {
    expect(solve([8, 9])).toBe(0);
});


test('with zeros: [0,2,0]', () => {
    expect(solve([0, 2, 0])).toBe(0);
});


test('alternating values: [1,100,1]', () => {
    expect(solve([1, 100, 1])).toBe(100);
});


test('edge 3 elements', () => {
    expect(solve([2, 1, 2])).toBe(4);
});