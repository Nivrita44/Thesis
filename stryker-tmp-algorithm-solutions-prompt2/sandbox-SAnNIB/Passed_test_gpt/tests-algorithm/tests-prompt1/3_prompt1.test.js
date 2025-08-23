// @ts-nocheck
import {
    solve
} from '../../../solutions-algorithm/3.js';

test('single element array', () => {
    expect(solve(1, [5])).toBe('YES');
});

test('array with equal elements', () => {
    expect(solve(4, [3, 3, 3, 3])).toBe('YES');
});

test('array with all elements consecutive', () => {
    expect(solve(3, [1, 2, 3])).toBe('YES');
});

test('array with all elements not more than 1 apart', () => {
    expect(solve(5, [4, 5, 5, 4, 5])).toBe('YES');
});

test('array with a larger gap', () => {
    expect(solve(3, [1, 2, 4])).toBe('NO');
});

test('two elements with difference 1', () => {
    expect(solve(2, [6, 7])).toBe('YES');
});

test('two elements with difference greater than 1', () => {
    expect(solve(2, [8, 10])).toBe('NO');
});

test('mixed elements, difference greater than 1 exists', () => {
    expect(solve(5, [1, 2, 2, 1, 5])).toBe('NO');
});

test('array with maximum allowed numbers and valid', () => {
    const arr = Array(50).fill(99).map((x, i) => x - (i % 2));
    expect(solve(50, arr)).toBe('YES');
});

test('array with maximum allowed numbers and invalid', () => {
    const arr = Array(50).fill(100);
    arr[0] = 1;
    expect(solve(50, arr)).toBe('NO');
});


// FAIL tests - algorithm / tests - prompt1 / 3 _prompt1.test.js× single element array(3 ms)× array with equal elements(1 ms)× array with all elements consecutive× array with all elements not more than 1 apart(1 ms)× array with a larger gap× two elements with difference 1(1 ms)× two elements with difference greater than 1(1 ms)× mixed elements, difference greater than 1 exists× array with maximum allowed numbers and valid× array with maximum allowed numbers and invalid(1 ms)

// ● single element array

// TypeError: Cannot read properties of undefined(reading 'sort')

// 2 |
//     export function solve(q, arr) {
//         3 | // Sort the array
//             >
//             4 | arr.sort((a, b) => a - b); |
//         ^
//         5 |
//             6 |
//             let gaps = 0;
//         7 |
//             for (let i = 0; i < arr.length - 1; i++) {

//                 at sort(solutions - algorithm / 3. js: 4: 9)
//                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 6: 12)

//                 ● array with equal elements

//                 TypeError: Cannot read properties of undefined(reading 'sort')

//                 2 |
//                     export function solve(q, arr) {
//                         3 | // Sort the array
//                             >
//                             4 | arr.sort((a, b) => a - b); |
//                         ^
//                         5 |
//                             6 |
//                             let gaps = 0;
//                         7 |
//                             for (let i = 0; i < arr.length - 1; i++) {

//                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 10: 12)

//                                 ● array with all elements consecutive

//                                 TypeError: Cannot read properties of undefined(reading 'sort')

//                                 2 |
//                                     export function solve(q, arr) {
//                                         3 | // Sort the array
//                                             >
//                                             4 | arr.sort((a, b) => a - b); |
//                                         ^
//                                         5 |
//                                             6 |
//                                             let gaps = 0;
//                                         7 |
//                                             for (let i = 0; i < arr.length - 1; i++) {

//                                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 14: 12)

//                                                 ● array with all elements not more than 1 apart

//                                                 TypeError: Cannot read properties of undefined(reading 'sort')

//                                                 2 |
//                                                     export function solve(q, arr) {
//                                                         3 | // Sort the array
//                                                             >
//                                                             4 | arr.sort((a, b) => a - b); |
//                                                         ^
//                                                         5 |
//                                                             6 |
//                                                             let gaps = 0;
//                                                         7 |
//                                                             for (let i = 0; i < arr.length - 1; i++) {

//                                                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 18: 12)

//                                                                 ● array with a larger gap

//                                                                 TypeError: Cannot read properties of undefined(reading 'sort')

//                                                                 2 |
//                                                                     export function solve(q, arr) {
//                                                                         3 | // Sort the array
//                                                                             >
//                                                                             4 | arr.sort((a, b) => a - b); |
//                                                                         ^
//                                                                         5 |
//                                                                             6 |
//                                                                             let gaps = 0;
//                                                                         7 |
//                                                                             for (let i = 0; i < arr.length - 1; i++) {

//                                                                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                                                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 22: 12)

//                                                                                 ● two elements with difference 1

//                                                                                 TypeError: Cannot read properties of undefined(reading 'sort')

//                                                                                 2 |
//                                                                                     export function solve(q, arr) {
//                                                                                         3 | // Sort the array
//                                                                                             >
//                                                                                             4 | arr.sort((a, b) => a - b); |
//                                                                                         ^
//                                                                                         5 |
//                                                                                             6 |
//                                                                                             let gaps = 0;
//                                                                                         7 |
//                                                                                             for (let i = 0; i < arr.length - 1; i++) {

//                                                                                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                                                                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 26: 12)

//                                                                                                 ● two elements with difference greater than 1

//                                                                                                 TypeError: Cannot read properties of undefined(reading 'sort')

//                                                                                                 2 |
//                                                                                                     export function solve(q, arr) {
//                                                                                                         3 | // Sort the array
//                                                                                                             >
//                                                                                                             4 | arr.sort((a, b) => a - b); |
//                                                                                                         ^
//                                                                                                         5 |
//                                                                                                             6 |
//                                                                                                             let gaps = 0;
//                                                                                                         7 |
//                                                                                                             for (let i = 0; i < arr.length - 1; i++) {

//                                                                                                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                                                                                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 30: 12)

//                                                                                                                 ● mixed elements, difference greater than 1 exists

//                                                                                                                 TypeError: Cannot read properties of undefined(reading 'sort')

//                                                                                                                 2 |
//                                                                                                                     export function solve(q, arr) {
//                                                                                                                         3 | // Sort the array
//                                                                                                                             >
//                                                                                                                             4 | arr.sort((a, b) => a - b); |
//                                                                                                                         ^
//                                                                                                                         5 |
//                                                                                                                             6 |
//                                                                                                                             let gaps = 0;
//                                                                                                                         7 |
//                                                                                                                             for (let i = 0; i < arr.length - 1; i++) {

//                                                                                                                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                                                                                                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 34: 12)

//                                                                                                                                 ● array with maximum allowed numbers and valid

//                                                                                                                                 TypeError: Cannot read properties of undefined(reading 'sort')

//                                                                                                                                 2 |
//                                                                                                                                     export function solve(q, arr) {
//                                                                                                                                         3 | // Sort the array
//                                                                                                                                             >
//                                                                                                                                             4 | arr.sort((a, b) => a - b); |
//                                                                                                                                         ^
//                                                                                                                                         5 |
//                                                                                                                                             6 |
//                                                                                                                                             let gaps = 0;
//                                                                                                                                         7 |
//                                                                                                                                             for (let i = 0; i < arr.length - 1; i++) {

//                                                                                                                                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                                                                                                                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 39: 12)

//                                                                                                                                                 ● array with maximum allowed numbers and invalid

//                                                                                                                                                 TypeError: Cannot read properties of undefined(reading 'sort')

//                                                                                                                                                 2 |
//                                                                                                                                                     export function solve(q, arr) {
//                                                                                                                                                         3 | // Sort the array
//                                                                                                                                                             >
//                                                                                                                                                             4 | arr.sort((a, b) => a - b); |
//                                                                                                                                                         ^
//                                                                                                                                                         5 |
//                                                                                                                                                             6 |
//                                                                                                                                                             let gaps = 0;
//                                                                                                                                                         7 |
//                                                                                                                                                             for (let i = 0; i < arr.length - 1; i++) {

//                                                                                                                                                                 at sort(solutions - algorithm / 3. js: 4: 9)
//                                                                                                                                                                 at Object.solve(tests - algorithm / tests - prompt1 / 3 _prompt1.test.js: 45: 12)
