// @ts-nocheck
// 
import { solve } from '../../../solutions-descriptive/32.js';

describe('Problem 32 Tests', () => {
    let output;

    // Helper to mock readInt() and capture writeInt() output
    const setupIO = (inputs) => {
        let idx = 0;
        output = [];

        // Mock readInt so solve() can consume test inputs
        global.readInt = jest.fn(() => inputs[idx++]);

        // Mock writeInt to capture solve() output
        global.writeInt = jest.fn((val, isLast) => {
            output.push(val);
        });
    };

    test('example case from description', () => {
        setupIO([2, 8, 10]);
        solve();
        expect(output[0]).toBe(3);
    });

    test('single element array', () => {
        setupIO([1, 4]);
        solve();
        expect(output[0]).toBe(2);
    });

    test('large numbers', () => {
        setupIO([3, 398000, 399000, 400000]);
        solve();
        expect(output[0]).not.toBe(-1);
    });

    test('minimal input', () => {
        setupIO([2, 2]);
        solve();
        expect(output[0]).toBe(2);
    });

    test('impossible case', () => {
        setupIO([5, 6, 7, 8, 9, 10]);
        solve();
        expect(output[0]).toBe(-1);
    });

    test('small consecutive numbers', () => {
        setupIO([2, 4, 6]);
        solve();
        expect(output[0]).toBe(2);
    });

    test('numbers with common divisors', () => {
        setupIO([3, 12, 18, 24]);
        solve();
        expect(output[0]).toBe(6);
    });

    test('mixed numbers requiring multiple steps', () => {
        setupIO([3, 15, 20, 25]);
        solve();
        expect(output[0]).not.toBe(-1);
    });
});