import { solve } from '../../../solutions-algorithm/36.js';


describe('solve', () => {
    test('example with=3 returns valid prime m where sum isot prime', () => {
        expect(solve(BigInt(3))).toBe(BigInt(2));

    });

    test('smallest possible input=2', () => {
        expect(solve(BigInt(2))).toBe(BigInt(3));

    });

    test('large prime inputear upper bound', () => {
        expect(solve(BigInt(99991))).toBe(BigInt(2));

    });

    test('common small prime=5', () => {
        expect(solve(BigInt(5))).toBe(BigInt(2));

    });

    test('prime=11 returns prime where sum is composite', () => {
        expect(solve(BigInt(11))).toBe(BigInt(2));

    });

    test('medium prime=47', () => {
        expect(solve(BigInt(47))).toBe(BigInt(2));

    });

    test('larger prime=997', () => {
        expect(solve(BigInt(997))).toBe(BigInt(2));

    });

    test('primeear 1000:=1009', () => {
        expect(solve(BigInt(1009))).toBe(BigInt(2));

    });
});