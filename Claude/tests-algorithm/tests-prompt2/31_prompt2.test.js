import { solve } from '../../solutions-algorithm/31.js';

describe('solve', () => {
    test('basic test case with multiple values', () => {
        expect(solve(5, [4, 3, 7, 5, 2])).toEqual([
            "4 3 1 2",
            "-1", 
            "7 6 1 2 3 4 5",
            "5 4 1 2 3",
            "2 1"
        ]);
    });

    test('single value test case', () => {
        expect(solve(1, [4])).toEqual(["4 3 1 2"]);
    });

    test('all values are 3', () => {
        expect(solve(3, [3, 3, 3])).toEqual(["-1", "-1", "-1"]);
    });

    test('minimum valid input of 2', () => {
        expect(solve(2, [2, 2])).toEqual(["2 1", "2 1"]);
    });

    test('large valid number', () => {
        expect(solve(1, [10])).toEqual(["10 9 1 2 3 4 5 6 7 8"]);
    });

    test('empty input array', () => {
        expect(solve(0, [])).toEqual([]);
    });

    test('mix of valid numbers and 3s', () => {
        expect(solve(4, [5, 3, 4, 3])).toEqual([
            "5 4 1 2 3",
            "-1",
            "4 3 1 2", 
            "-1"
        ]);
    });

    test('consecutive increasing numbers', () => {
        expect(solve(3, [2, 3, 4])).toEqual([
            "2 1",
            "-1",
            "4 3 1 2"
        ]);
    });
});