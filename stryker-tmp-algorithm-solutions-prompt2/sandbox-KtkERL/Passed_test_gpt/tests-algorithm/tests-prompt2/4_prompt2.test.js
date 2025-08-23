import { solve } from '../../../solutions-algorithm/4.js';

test('typical case [4, 7, 3, 5]', () => {
    expect(solve([4, 7, 3, 5])).toEqual([-3, 2, -4, -2]);
});

test('two elements [1, 2]', () => {
    expect(solve([1, 2])).toEqual([-1, 1]);
});

test('increasing sequence [1, 2, 3, 4, 5]', () => {
    expect(solve([1, 2, 3, 4, 5])).toEqual([-4, -3, -2, -1, 1]);
});

test('duplicate non-max and max [4, 9, 4]', () => {
    expect(solve([4, 9, 4])).toEqual([-5, 5, -5]);
});

test('all elements equal [4, 4, 4, 4]', () => {
    expect(solve([4, 4, 4, 4])).toEqual([0, 0, 0, 0]);
});

test('negative numbers [-3, -2, -1]', () => {
    expect(solve([-3, -2, -1])).toEqual([-2, -1, 1]);
});


test('large numbers [1000, 2000, 3000, 4000]', () => {
    expect(solve([1000, 2000, 3000, 4000])).toEqual([-3000, -2000, -1000, 1000]);
});

test('array with duplicate max values [3, 6, 6, 2]', () => {
    expect(solve([3, 6, 6, 2])).toEqual([-3, 0, 0, -4]);
});

test('empty array', () => {
    expect(solve([])).toEqual([]);
});



