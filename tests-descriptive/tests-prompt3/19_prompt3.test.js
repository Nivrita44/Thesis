import { solve } from '../../solutions-descriptive/19.js'

test('GCD base: solve(10, 5) should be 5', () => {
    expect(solve(10, 5)).toBe(5)
})

test('GCD symmetry: solve(5, 10) should be 5', () => {
    expect(solve(5, 10)).toBe(5)
})

test('GCD coprime: solve(5, 2) should be 1', () => {
    expect(solve(5, 2)).toBe(1)
})

test('GCD itself: solve(100, 100) should be 100', () => {
    expect(solve(100, 100)).toBe(100)
})

test('GCD minimal first parameter: solve(1, 1000000) should be 1', () => {
    expect(solve(1, 1000000)).toBe(1)
})

test('GCD minimal b: solve(1000000, 1) should be 1', () => {
    expect(solve(1000000, 1)).toBe(1)
})

test('GCD maximal input: solve(1000000, 1000000) should be 1000000', () => {
    expect(solve(1000000, 1000000)).toBe(1000000)
})

test('GCD one is zero: solve(0, 13) should be 13', () => {
    expect(solve(0, 13)).toBe(13)
})

test('GCD zero is one: solve(17, 0) should be 17', () => {
    expect(solve(17, 0)).toBe(17)
})

test('GCD both one: solve(1, 1) should be 1', () => {
    expect(solve(1, 1)).toBe(1)
})

test('GCD odd example: solve(33, 24) should be 3', () => {
    expect(solve(33, 24)).toBe(3)
})

test('GCD negatives: solve(-12, 18) should be 6', () => {
    expect(solve(-12, 18)).toBe(6)
})

test('GCD negatives: solve(12, -18) should be 6', () => {
    expect(solve(12, -18)).toBe(6)
})

test('GCD both negative: solve(-12, -18) should be 6', () => {
    expect(solve(-12, -18)).toBe(6)
})

test('GCD large coprime: solve(10**6, 10**6 - 1) should be 1', () => {
    expect(solve(1000000, 999999)).toBe(1)
})

// FAIL tests - descriptive / tests - prompt3 / 19 _prompt3.test.js√ GCD base: solve(10, 5) should be 5(2 ms)√ GCD symmetry: solve(5, 10) should be 5√ GCD coprime: solve(5, 2) should be 1√ GCD itself: solve(100, 100) should be 100√ GCD minimal first parameter: solve(1, 1000000) should be 1√ GCD minimal b: solve(1000000, 1) should be 1√ GCD maximal input: solve(1000000, 1000000) should be 1000000(1 ms)√ GCD one is zero: solve(0, 13) should be 13(1 ms)√ GCD zero is one: solve(17, 0) should be 17(1 ms)√ GCD both one: solve(1, 1) should be 1(1 ms)√ GCD odd example: solve(33, 24) should be 3√ GCD negatives: solve(-12, 18) should be 6(1 ms)× GCD negatives: solve(12, -18) should be 6(2 ms)× GCD both negative: solve(-12, -18) should be 6√ GCD large coprime: solve(10 ** 6, 10 ** 6 - 1) should be 1(1 ms)

// ● GCD negatives: solve(12, -18) should be 6

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: -6

// 50 |
//     51 | test('GCD negatives: solve(12, -18) should be 6', () => { >
//         52 | expect(solve(12, -18)).toBe(6) |
//             ^
//             53 |
//     })
// 54 |
//     55 | test('GCD both negative: solve(-12, -18) should be 6', () => {

//             at Object.toBe(tests - descriptive / tests - prompt3 / 19 _prompt3.test.js: 52: 26)

//             ● GCD both negative: solve(-12, -18) should be 6

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 6
//             Received: -6

//             54 |
//                 55 | test('GCD both negative: solve(-12, -18) should be 6', () => { >
//                     56 | expect(solve(-12, -18)).toBe(6) |
//                         ^
//                         57 |
//                 })
//             58 |
//                 59 | test('GCD large coprime: solve(10**6, 10**6 - 1) should be 1', () => {

//                         at Object.toBe(tests - descriptive / tests - prompt3 / 19 _prompt3.test.js: 56: 27)