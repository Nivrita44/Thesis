import { solve } from '../../../solutions-algorithm/1.js';

test('example 1', () => {
    expect(solve('3+2+1')).toBe('1+2+3');
});

test('example 2', () => {
    expect(solve('1+1+3+1+3')).toBe('1+1+1+3+3');
});

test('example 3', () => {
    expect(solve('2')).toBe('2');
});

test('sorted input', () => {
    expect(solve('1+2+3')).toBe('1+2+3');
});

test('all ones', () => {
    expect(solve('1+1+1')).toBe('1+1+1');
});

test('all threes', () => {
    expect(solve('3+3+3')).toBe('3+3+3');
});

test('mix all numbers equal count', () => {
    expect(solve('2+1+3+2+1+3')).toBe('1+1+2+2+3+3');
});

test('alternating numbers', () => {
    expect(solve('3+1+3+2+2+1')).toBe('1+1+2+2+3+3');
});

test('single one', () => {
    expect(solve('1')).toBe('1');
});

test('single three', () => {
    expect(solve('3')).toBe('3');
});

test('two numbers', () => {
    expect(solve('2+1')).toBe('1+2');
    expect(solve('3+2')).toBe('2+3');
});

test('long input', () => {
    expect(solve('1+3+2+3+2+1+2+3+1+2+3+2+1+3+2+3+1+2+3+1')).toBe('1+1+1+1+1+1+2+2+2+2+2+2+2+3+3+3+3+3+3');
});

// ● long input

// expect(received).toBe(expected) // Object.is equality

// Expected: "1+1+1+1+1+1+2+2+2+2+2+2+2+3+3+3+3+3+3"
// Received: "1+1+1+1+1+1+2+2+2+2+2+2+2+3+3+3+3+3+3+3"

// 47 |
//     48 | test('long input', () => { >
//         49 | expect(solve('1+3+2+3+2+1+2+3+1+2+3+2+1+3+2+3+1+2+3+1')).toBe('1+1+1+1+1+1+2+2+2+2+2+2+2+3+3+3+3+3+3'); |
//         ^
//         50 |
//     });

// at Object.toBe(tests - algorithm / tests - prompt1 / 1 _prompt1.test.js: 49: 60)
