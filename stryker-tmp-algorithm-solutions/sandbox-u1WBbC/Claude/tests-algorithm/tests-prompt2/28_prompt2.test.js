// @ts-nocheck
import { solve } from '../../../solutions-algorithm/28.js';

describe('solve function tests', () => {
    test('normal case - diagonal path without fence', () => {
        const input = [{ x: [1, 1], y: [3, 3], f: [2, 2] }];
        expect(solve(input)).toEqual([4]);
    });

    test('vertical path blocked by fence', () => {
        const input = [{ x: [2, 5], y: [2, 1], f: [2, 3] }];
        expect(solve(input)).toEqual([6]);
    });

    test('large coordinate values', () => {
        const input = [{ x: [1000, 42], y: [1000, 1], f: [1000, 1000] }];
        expect(solve(input)).toEqual([41]);
    });

    test('horizontal path with fence in middle', () => {
        const input = [{ x: [1, 10], y: [3, 10], f: [2, 10] }];
        expect(solve(input)).toEqual([4]);
    });

    test('multiple test cases', () => {
        const input = [
            { x: [1, 1], y: [3, 3], f: [2, 2] },
            { x: [2, 5], y: [2, 1], f: [2, 3] }
        ];
        expect(solve(input)).toEqual([4, 6]);
    });

    test('path with fence at endpoint', () => {
        const input = [{ x: [2, 1], y: [4, 1], f: [1, 1] }];
        expect(solve(input)).toEqual([2]);
    });

    test('long vertical path along same x-coordinate', () => {
        const input = [{ x: [1, 344], y: [1, 10], f: [1, 1] }];
        expect(solve(input)).toEqual([334]);
    });

    test('empty test cases array', () => {
        const input = [];
        expect(solve(input)).toEqual([]);
    });
});
