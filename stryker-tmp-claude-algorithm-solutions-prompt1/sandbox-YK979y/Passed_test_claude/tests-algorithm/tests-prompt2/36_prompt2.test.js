import { solve } from '../../../solutions-algorithm/36.js';

describe('solve', () => {

    test('test_invalid_negative', () => {
        expect(() => solve(BigInt(-1))).toThrow();
    });

    test('test_non_bigint_input', () => {
        expect(() => solve(100)).toThrow();
    });
});