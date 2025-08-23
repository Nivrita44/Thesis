// @ts-nocheck
import { solve } from '../../solutions-descriptive/38.js';

test('basic case 1', () => {
    expect(solve(1, '0')).toBe(0);
});

test('basic case 2', () => {
    expect(solve(2, '00')).toBe(1);
});

test('basic case 3', () => {
    expect(solve(2, '01')).toBe(0);
});

test('basic case 4', () => {
    expect(solve(2, '10')).toBe(0);
});

test('three chars all zero', () => {
    expect(solve(3, '000')).toBe(3);
});

test('three chars mixed', () => {
    expect(solve(3, '101')).toBe(0);
});

test('three chars with ones and zeros', () => {
    expect(solve(3, '100')).toBe(0);
    expect(solve(3, '001')).toBe(0);
});

test('four chars all zeros', () => {
    expect(solve(4, '0000')).toBe(6);
});

test('all ones', () => {
    expect(solve(4, '1111')).toBe(0);
});

test('alternate 01', () => {
    expect(solve(4, '0101')).toBe(0);
});

test('larger n, edge only zeros', () => {
    expect(solve(5, '00001')).toBe(4);
});

test('mid zeros', () => {
    expect(solve(5, '11000')).toBe(4);
});

test('longer random 1', () => {
    expect(solve(6, '100011')).toBe(3);
});

test('no possible moves', () => {
    expect(solve(5, '11111')).toBe(0);
});

test('mixed zeros and ones', () => {
    expect(solve(5, '00100')).toBe(5);
});

test('possible pair at the end', () => {
    expect(solve(5, '10000')).toBe(4);
});

test('single zero', () => {
    expect(solve(2, '01')).toBe(0);
    expect(solve(2, '10')).toBe(0);
});

test('n=3, all pairs', () => {
    expect(solve(3, '011')).toBe(0);
    expect(solve(3, '110')).toBe(0);
    expect(solve(3, '101')).toBe(0);
});

test('maximal size single zero', () => {
    expect(solve(5, '10001')).toBe(1);
});

test('interleaved zeros example', () => {
    expect(solve(6, '010101')).toBe(0);
});

test('long chain zeros', () => {
    expect(solve(7, '0000000')).toBe(21);
});



// if (character === '0') {
//     31 | a.push(1);
//     32 |
// } else {

//     at s(solutions - descriptive / 38. js: 29: 29)
//     at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 4: 10)

//     ● basic
//     case 2

//     TypeError:
//         s is not iterable

//         27 |
//             const a = [];
//         28 |
//             >
//             29 |
//             for (const character of s) { |
//                 ^
//                 30 |
//                     if (character === '0') {
//                         31 | a.push(1);
//                         32 |
//                     } else {

//                         at s(solutions - descriptive / 38. js: 29: 29)
//                         at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 8: 10)

//                         ● basic
//                         case 3

//                         TypeError:
//                             s is not iterable

//                             27 |
//                                 const a = [];
//                             28 |
//                                 >
//                                 29 |
//                                 for (const character of s) { |
//                                     ^
//                                     30 |
//                                         if (character === '0') {
//                                             31 | a.push(1);
//                                             32 |
//                                         } else {

//                                             at s(solutions - descriptive / 38. js: 29: 29)
//                                             at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 12: 10)

//                                             ● basic
//                                             case 4

//                                             TypeError:
//                                                 s is not iterable

//                                                 27 |
//                                                     const a = [];
//                                                 28 |
//                                                     >
//                                                     29 |
//                                                     for (const character of s) { |
//                                                         ^
//                                                         30 |
//                                                             if (character === '0') {
//                                                                 31 | a.push(1);
//                                                                 32 |
//                                                             } else {

//                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 16: 10)

//                                                                 ● three chars all zero

//                                                                 TypeError: s is not iterable

//                                                                 27 |
//                                                                     const a = [];
//                                                                 28 |
//                                                                     >
//                                                                     29 |
//                                                                     for (const character of s) { |
//                                                                         ^
//                                                                         30 |
//                                                                             if (character === '0') {
//                                                                                 31 | a.push(1);
//                                                                                 32 |
//                                                                             } else {

//                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 20: 10)

//                                                                                 ● three chars mixed

//                                                                                 TypeError: s is not iterable

//                                                                                 27 |
//                                                                                     const a = [];
//                                                                                 28 |
//                                                                                     >
//                                                                                     29 |
//                                                                                     for (const character of s) { |
//                                                                                         ^
//                                                                                         30 |
//                                                                                             if (character === '0') {
//                                                                                                 31 | a.push(1);
//                                                                                                 32 |
//                                                                                             } else {

//                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 24: 10)

//                                                                                                 ● three chars with ones and zeros

//                                                                                                 TypeError: s is not iterable

//                                                                                                 27 |
//                                                                                                     const a = [];
//                                                                                                 28 |
//                                                                                                     >
//                                                                                                     29 |
//                                                                                                     for (const character of s) { |
//                                                                                                         ^
//                                                                                                         30 |
//                                                                                                             if (character === '0') {
//                                                                                                                 31 | a.push(1);
//                                                                                                                 32 |
//                                                                                                             } else {

//                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 28: 10)

//                                                                                                                 ● four chars all zeros

//                                                                                                                 TypeError: s is not iterable

//                                                                                                                 27 |
//                                                                                                                     const a = [];
//                                                                                                                 28 |
//                                                                                                                     >
//                                                                                                                     29 |
//                                                                                                                     for (const character of s) { |
//                                                                                                                         ^
//                                                                                                                         30 |
//                                                                                                                             if (character === '0') {
//                                                                                                                                 31 | a.push(1);
//                                                                                                                                 32 |
//                                                                                                                             } else {

//                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 33: 10)

//                                                                                                                                 ● all ones

//                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                 27 |
//                                                                                                                                     const a = [];
//                                                                                                                                 28 |
//                                                                                                                                     >
//                                                                                                                                     29 |
//                                                                                                                                     for (const character of s) { |
//                                                                                                                                         ^
//                                                                                                                                         30 |
//                                                                                                                                             if (character === '0') {
//                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                 32 |
//                                                                                                                                             } else {

//                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 37: 10)

//                                                                                                                                                 ● alternate 01

//                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                 27 |
//                                                                                                                                                     const a = [];
//                                                                                                                                                 28 |
//                                                                                                                                                     >
//                                                                                                                                                     29 |
//                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                         ^
//                                                                                                                                                         30 |
//                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                 32 |
//                                                                                                                                                             } else {

//                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 41: 10)

//                                                                                                                                                                 ● larger n, edge only zeros

//                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                 27 |
//                                                                                                                                                                     const a = [];
//                                                                                                                                                                 28 |
//                                                                                                                                                                     >
//                                                                                                                                                                     29 |
//                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                         ^
//                                                                                                                                                                         30 |
//                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                 32 |
//                                                                                                                                                                             } else {

//                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 45: 10)

//                                                                                                                                                                                 ● mid zeros

//                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                 27 |
//                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                 28 |
//                                                                                                                                                                                     >
//                                                                                                                                                                                     29 |
//                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                         ^
//                                                                                                                                                                                         30 |
//                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                 32 |
//                                                                                                                                                                                             } else {

//                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 49: 10)

//                                                                                                                                                                                                 ● longer random 1

//                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                     >
//                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                         ^
//                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 53: 10)

//                                                                                                                                                                                                                 ● no possible moves

//                                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                                     >
//                                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 57: 10)

//                                                                                                                                                                                                                                 ● mixed zeros and ones

//                                                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                                                     >
//                                                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 61: 10)

//                                                                                                                                                                                                                                                 ● possible pair at the end

//                                                                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                                                                     >
//                                                                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 65: 10)

//                                                                                                                                                                                                                                                                 ● single zero

//                                                                                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                                                                                     >
//                                                                                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 69: 10)

//                                                                                                                                                                                                                                                                                 ● n = 3, all pairs

//                                                                                                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                                                                                                     >
//                                                                                                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 74: 10)

//                                                                                                                                                                                                                                                                                                 ● maximal size single zero

//                                                                                                                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                                                                                                                     >
//                                                                                                                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 80: 10)

//                                                                                                                                                                                                                                                                                                                 ● interleaved zeros example

//                                                                                                                                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                                                                                                                                     >
//                                                                                                                                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 84: 10)

//                                                                                                                                                                                                                                                                                                                                 ● long chain zeros

//                                                                                                                                                                                                                                                                                                                                 TypeError: s is not iterable

//                                                                                                                                                                                                                                                                                                                                 27 |
//                                                                                                                                                                                                                                                                                                                                     const a = [];
//                                                                                                                                                                                                                                                                                                                                 28 |
//                                                                                                                                                                                                                                                                                                                                     >
//                                                                                                                                                                                                                                                                                                                                     29 |
//                                                                                                                                                                                                                                                                                                                                     for (const character of s) { |
//                                                                                                                                                                                                                                                                                                                                         ^
//                                                                                                                                                                                                                                                                                                                                         30 |
//                                                                                                                                                                                                                                                                                                                                             if (character === '0') {
//                                                                                                                                                                                                                                                                                                                                                 31 | a.push(1);
//                                                                                                                                                                                                                                                                                                                                                 32 |
//                                                                                                                                                                                                                                                                                                                                             } else {

//                                                                                                                                                                                                                                                                                                                                                 at s(solutions - descriptive / 38. js: 29: 29)
//                                                                                                                                                                                                                                                                                                                                                 at Object.solve(tests - descriptive / tests - prompt1 / 38 _prompt1.test.js: 88: 10)