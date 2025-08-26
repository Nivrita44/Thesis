import { solve } from '../../../solutions-algorithm/30.js';

describe('Monocarp Sum Tests', () => {


    test('minimum valid input', () => {
        const result = solve(1, [4]);
        expect(result).toStrictEqual(["YES", "2 1 1"]);
    });

    test('large valid number', () => {
        const result = solve(1, [100]);
        expect(result[0]).toBe("YES");
        const nums = result[1].split(' ').map(Number);
        expect(nums.reduce((a, b) => a + b)).toBe(100);
        expect(nums.every(n => n % 3 !== 0)).toBe(true);
    });

});