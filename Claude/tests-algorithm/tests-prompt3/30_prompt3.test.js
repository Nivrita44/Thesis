import { solve } from '../../../solutions-algorithm/30.js';

describe('Monocarp Sum Tests', () => {
    test('example test case 1', () => {
        const result = solve(4, [10, 4, 15, 9]);
        expect(result).toStrictEqual([
            "YES", "5 4 1",
            "NO",
            "YES", "8 5 2", 
            "NO"
        ]);
    });

    test('example test case 2', () => {
        const result = solve(3, [3, 5, 6]);
        expect(result).toStrictEqual([
            "NO",
            "YES", "2 2 1",
            "YES", "2 3 1"
        ]);
    });

    test('minimum valid input', () => {
        const result = solve(1, [4]);
        expect(result).toStrictEqual(["YES", "2 1 1"]);
    });

    test('large valid number', () => {
        const result = solve(1, [100]);
        expect(result[0]).toBe("YES");
        const nums = result[1].split(' ').map(Number);
        expect(nums.reduce((a,b) => a+b)).toBe(100);
        expect(nums.every(n => n%3 !== 0)).toBe(true);
    });

    test('all numbers divisible by 3', () => {
        const result = solve(1, [9]);
        expect(result).toStrictEqual(["NO"]);
    });

    test('multiple test cases with NO results', () => {
        const result = solve(3, [3, 6, 9]);
        expect(result).toStrictEqual(["NO", "YES", "4 1 1", "NO"]);
    });

    test('boundary test with small numbers', () => {
        const result = solve(5, [1, 2, 3, 4, 5]);
        expect(result).toStrictEqual([
            "NO", 
            "NO",
            "NO", 
            "YES", "2 1 1",
            "YES", "2 2 1"
        ]);
    });
});
