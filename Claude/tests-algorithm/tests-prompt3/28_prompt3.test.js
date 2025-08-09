import { solve } from '../../solutions-algorithm/28.js';

describe('solve', () => {
    test('example from description', () => {
        expect(solve([{x: [1,1], y: [3,3], f: [2,2]}])[0]).toBe(4);
    });

    test('forbidden cell blocks direct path', () => {
        expect(solve([{x: [2,5], y: [2,1], f: [2,3]}])[0]).toBe(6);
    });

    test('large coordinates', () => {
        expect(solve([{x: [1000,42], y: [1000,1], f: [1000,1000]}])[0]).toBe(41);
    });

    test('forbidden cell between start and end horizontally', () => {
        expect(solve([{x: [1,10], y: [3,10], f: [2,10]}])[0]).toBe(4);
    });

    test('forbidden cell not blocking shortest path', () => {
        expect(solve([{x: [3,8], y: [7,8], f: [3,7]}])[0]).toBe(4);
    });

    test('edge case - cells near forbidden cell', () => {
        expect(solve([{x: [2,1], y: [4,1], f: [1,1]}])[0]).toBe(2);
    });

    test('long vertical path', () => {
        expect(solve([{x: [1,344], y: [1,10], f: [1,1]}])[0]).toBe(334);
    });

    test('multiple test cases', () => {
        const input = [
            {x: [1,1], y: [3,3], f: [2,2]},
            {x: [2,5], y: [2,1], f: [2,3]},
            {x: [1,10], y: [3,10], f: [2,10]}
        ];
        expect(solve(input)).toEqual([4,6,4]);
    });
});