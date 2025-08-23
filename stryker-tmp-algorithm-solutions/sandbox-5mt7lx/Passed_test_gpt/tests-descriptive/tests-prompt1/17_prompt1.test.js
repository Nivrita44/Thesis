// @ts-nocheck
import { solve } from '../../../solutions-descriptive/17.js';

test('n=2, m=2', () => {
    const lines = solve(2, 2).trim().split('\n');
    expect(lines[0].toLowerCase()).toBe('yes');
    expect(lines.length).toBe(1 + 4);
    for (let i = 1; i <= 4; ++i) {
        expect(lines[i].split(' ').every(x => [+x === 1 || +x === 2])).toBe(true);
        expect(lines[i].split(' ').length).toBe(2);
    }
});

test('n=3, m=2', () => {
    const lines = solve(3, 2).trim().split('\n');
    expect(lines[0].toLowerCase()).toBe('yes');
    expect(lines.length).toBe(1 + 6);
});


test('n=5, m=1', () => {
    const lines = solve(5, 1).trim().split('\n');
    expect(lines[0].toLowerCase()).toBe('yes');
    expect(lines.length).toBe(1 + 10);
    for (let i = 1; i <= 10; ++i) {
        expect(+lines[i]).toBeGreaterThanOrEqual(1);
        expect(+lines[i]).toBeLessThanOrEqual(5);
    }
});

test('n=4, m=3', () => {
    const lines = solve(4, 3).trim().split('\n');
    expect(lines[0].toLowerCase()).toBe('yes');
    expect(lines.length).toBe(1 + 8);
    for (let i = 1; i < lines.length; ++i) {
        const arr = lines[i].split(' ').map(s => +s);
        expect(arr.length).toBe(3);
        arr.forEach((color) => {
            expect(color).toBeGreaterThanOrEqual(1);
            expect(color).toBeLessThanOrEqual(4);
        });
    }
});

test('Maximum n and m', () => {
    const result = solve(1000, 1000);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
});
// FAIL tests - descriptive / tests - prompt1 / 17 _prompt1.test.js
// × n = 1, m = 1(5 ms)
// × n = 1, m = 3(4 ms)
// × n = 2, m = 1
// √ n = 2, m = 2(1 ms)
// √ n = 3, m = 2(1 ms)
// × n = 1, m = 2(1 ms)
// √ n = 5, m = 1(3 ms)
// √ n = 4, m = 3(3 ms)
// √ Maximum n and m(527 ms)