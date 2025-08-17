import { solve } from '../../../solutions-algorithm/45.js'

test('example case with=4, A=[1,2,3,4]', () => {
    expect(solve([1, 2, 3, 4])).toBe(1);
});

test('minimal case with=2, A=[1,2]', () => {
    expect(solve([1, 2])).toBe(1);
});

test('case with=3, A=[1,2,3]', () => {
    expect(solve([1, 2, 3])).toBe(2);
});

test('case with different BFS order=4, A=[1,2,4,3]', () => {
    expect(solve([1, 2, 4, 3])).toBe(2);
});

test('case with=5, A=[1,3,2,4,5]', () => {
    expect(solve([1, 3, 2, 4, 5])).toBe(4);
});

test('larger case with=6, A=[1,2,3,4,6,5]', () => {
    expect(solve([1, 2, 3, 4, 6, 5])).toBe(8);
});

test('tricky case with alternating order=5, A=[1,3,5,2,4]', () => {
    expect(solve([1, 3, 5, 2, 4])).toBe(0);
});

test('edge case with=7, A=[1,2,3,4,5,7,6]', () => {
    expect(solve([1, 2, 3, 4, 5, 7, 6])).toBe(32);
});