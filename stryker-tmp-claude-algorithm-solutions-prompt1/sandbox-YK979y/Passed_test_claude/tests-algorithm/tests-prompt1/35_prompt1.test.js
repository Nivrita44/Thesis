import { solve } from '../../../solutions-algorithm/35.js'


test('n equals k case', () => {
    expect(solve([
        [5, 5]
    ])).toEqual([1]);
});

test('minimal case=1', () => {
    expect(solve([
        [1, 2]
    ])).toEqual([1]);
});

test('power of k case', () => {
    expect(solve([
        [16, 2]
    ])).toEqual([1]);
});

test('n less than k case', () => {
    expect(solve([
        [3, 5]
    ])).toEqual([3]);
});

test('consecutive powerseeded', () => {
    expect(solve([
        [12, 2]
    ])).toEqual([2]);
});
