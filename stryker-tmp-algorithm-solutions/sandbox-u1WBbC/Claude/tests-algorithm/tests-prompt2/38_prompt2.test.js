// @ts-nocheck
import { solve } from '../../../solutions-algorithm/38.js';

describe('solve function tests', () => {
    test('equal small numbers return the same number', () => {
        expect(solve("5", "5")).toBe("5");
    });

    test('unequal small numbers return "1"', () => {
        expect(solve("1", "2")).toBe("1");
    });

    test('equal large numbers return the same number', () => {
        const bigNum = "61803398874989484820458683436563811772030917980576";
        expect(solve(bigNum, bigNum)).toBe(bigNum);
    });

    test('unequal large numbers return "1"', () => {
        expect(solve("12345", "67890123456789123457")).toBe("1");
    });

    test('numbers with different lengths return "1"', () => {
        expect(solve("100", "100000")).toBe("1");
    });

    test('same single digit numbers return the digit', () => {
        expect(solve("9", "9")).toBe("9");
    });

    test('zero values are handled correctly', () => {
        expect(solve("0", "0")).toBe("0");
        expect(solve("0", "1")).toBe("1");
    });

    test('very large equal numbers return correctly', () => {
        const hugeNum = "9".repeat(1000);
        expect(solve(hugeNum, hugeNum)).toBe(hugeNum);
    });
});
