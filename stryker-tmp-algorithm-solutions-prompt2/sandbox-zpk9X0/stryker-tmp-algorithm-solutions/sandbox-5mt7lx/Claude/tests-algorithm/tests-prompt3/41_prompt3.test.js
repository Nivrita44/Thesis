// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/41.js';

describe('Shortest Path in Weighted Graph', () => {
    test('Example case with multiple paths', () => {
        expect(solve(5, [[1,2,2], [2,5,5], [2,3,4], [1,4,1], [4,3,3], [3,5,1]])).toBe("1 4 3 5");
    });

    test('Simple linear path', () => {
        expect(solve(3, [[1,2,1], [2,3,1]])).toBe("1 2 3");
    });

    test('No path exists', () => {
        expect(solve(3, [[1,2,1]])).toBe("-1");
    });

    test('Minimum vertices with direct path', () => {
        expect(solve(2, [[1,2,5]])).toBe("1 2");
    });

    test('Large weights', () => {
        expect(solve(4, [[1,2,1000000], [2,3,1000000], [3,4,1000000]])).toBe("1 2 3 4");
    });

    test('Multiple edges between same vertices', () => {
        expect(solve(3, [[1,2,5], [1,2,3], [2,3,1]])).toBe("1 2 3");
    });

    test('Complex graph with multiple paths', () => {
        expect(solve(6, [
            [1,2,2], [2,3,2], [3,6,2],
            [1,4,1], [4,5,1], [5,6,1]
        ])).toBe("1 4 5 6");
    });

    test('Empty edge list', () => {
        expect(solve(5, [])).toBe("-1");
    });

    test('Maximum vertices with single path', () => {
        const edges = Array.from({length: 99999}, (_, i) => [i+1, i+2, 1]);
        expect(solve(100000, edges)).toBe([...Array(100000).keys()].map(x => x+1).join(" "));
    });
});
