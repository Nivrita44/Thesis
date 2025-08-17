import { solve } from '../../../solutions-algorithm/28.js';

test('example case', () => {
    expect(solve([{
        x: [2, 2],
        y: [4, 2],
        f: [3, 2]
    }])).toEqual([4]);
});

test('edge case with blocked path', () => {
    expect(solve([{
        x: [1, 1],
        y: [3, 1],
        f: [2, 1]
    }])).toEqual([4]);
});

test('large coordinates', () => {
    expect(solve([{
        x: [1, 1],
        y: [1000, 1000],
        f: [500, 500]
    }])).toEqual([1998]);
});

test('minimal distance case', () => {
    expect(solve([{
        x: [1, 1],
        y: [1, 2],
        f: [3, 3]
    }])).toEqual([1]);
});

test('forbidden cell not affecting path', () => {
    expect(solve([{
        x: [1, 1],
        y: [5, 1],
        f: [1, 5]
    }])).toEqual([4]);
});

test('diagonal path blocked', () => {
    expect(solve([{
        x: [1, 1],
        y: [3, 3],
        f: [2, 2]
    }])).toEqual([4]);
});

test('same row different columns', () => {
    expect(solve([{
        x: [1, 5],
        y: [5, 5],
        f: [3, 4]
    }])).toEqual([4]);
});

test('same column different rows', () => {
    expect(solve([{
        x: [3, 1],
        y: [3, 5],
        f: [4, 3]
    }])).toEqual([4]);
});

test('points forming right angle', () => {
    expect(solve([{
        x: [1, 1],
        y: [5, 3],
        f: [3, 2]
    }])).toEqual([6]);
});