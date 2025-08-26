import { solve } from '../../../solutions-algorithm/40.js';

describe('solve', () => {
    test('example case: a=2, b=3 should return 6', () => {
        expect(solve(2, 3)).toBe(6);
    });

    test('smallest possible values: a=1, b=2 should return 4', () => {
        expect(solve(1, 2)).toBe(4);
    });

    test('when a and b are coprime: a=3, b=11 should return 33', () => {
        expect(solve(3, 11)).toBe(33);
    });

    test('when a=1 and b is larger: a=1, b=5 should return 25', () => {
        expect(solve(1, 5)).toBe(25);
    });

    test('when b is multiple of a: a=5, b=10 should return 20', () => {
        expect(solve(5, 10)).toBe(20);
    });

    test('composite numbers case: a=4, b=6 should return 12', () => {
        expect(solve(4, 6)).toBe(12);
    });

    test('perfect square case: a=3, b=9 should return 27', () => {
        expect(solve(3, 9)).toBe(27);
    });

    test('large numbers near upper bound: a=250000000, b=500000000 should return 1000000000', () => {
        expect(solve(250000000, 500000000)).toBe(1000000000);
    });
});
