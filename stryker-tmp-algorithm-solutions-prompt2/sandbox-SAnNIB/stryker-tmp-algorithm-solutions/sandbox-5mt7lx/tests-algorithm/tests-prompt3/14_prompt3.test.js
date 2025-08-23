// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/14.js'

test('single swap', () => {
    expect(solve(1, 2, 'BG')).toBe('GB')
})

test('no swap needed', () => {
    expect(solve(5, 5, 'GGGGG')).toBe('GGGGG')
    expect(solve(5, 5, 'BBBBB')).toBe('BBBBB')
})

test('multiple swaps', () => {
    expect(solve(1, 5, 'BBGBG')).toBe('BGBBG')
    expect(solve(2, 5, 'BBGBG')).toBe('GBBBG')
    expect(solve(3, 5, 'BBGBG')).toBe('GBBBG')
})

test('from sample', () => {
    expect(solve(5, 1, 'BGGBG')).toBe('GBGGB')
    expect(solve(8, 3, 'BBGBGBGB')).toBe('GGBGBBBB')
})

test('t greater than possible swaps', () => {
    expect(solve(10, 3, 'BBGG')).toBe('GGBB')
})

test('all boys at first, girls at last, enough time to completely swap', () => {
    expect(solve(100, 4, 'BBBBGGGG')).toBe('GGGGBBBB')
})

test('alternate pattern', () => {
    expect(solve(2, 6, 'BGBGBG')).toBe('GGBGBB')
    expect(solve(5, 6, 'BGBGBG')).toBe('GGGBBB')
})

test('no time, queue unchanged', () => {
    expect(solve(0, 5, 'GBGBG')).toBe('GBGBG')
})

test('edge cases: one child', () => {
    expect(solve(5, 1, 'B')).toBe('B')
    expect(solve(5, 1, 'G')).toBe('G')
})

test('all girls first, boys last, nothing changes', () => {
    expect(solve(20, 6, 'GGGBBB')).toBe('GGGBBB')
})

test('minimal input size, t=1, n=1', () => {
    expect(solve(1, 1, 'G')).toBe('G')
    expect(solve(1, 1, 'B')).toBe('B')
})

test('large t, n', () => {
    expect(solve(50, 50, 'B'.repeat(25) + 'G'.repeat(25))).toBe('G'.repeat(25) + 'B'.repeat(25))
})

test('random input', () => {
        expect(solve(3, 5, 'GBGBBB')).toBe('GGGBBB')
        expect(solve(2, 5, 'BGGGBB')).toBe('GGBGBB')
    })
    //FAIL tests - algorithm / tests - prompt3 / 14 _prompt3.test.js√ single swap(2 ms)√ no swap needed(1 ms)× multiple swaps(3 ms)√ from sample(1 ms)√ t greater than possible swaps(1 ms)× all boys at first, girls at last, enough time to completely swap(1 ms)× alternate pattern(1 ms)× no time, queue unchanged(1 ms)√ edge cases: one child(1 ms)√ all girls first, boys last, nothing changes√ minimal input size, t = 1, n = 1√ large t, n× random input

// ● multiple swaps

// expect(received).toBe(expected) // Object.is equality

// Expected: "BGBBG"
// Received: "GGBBB"

// 11 |
//     12 | test('multiple swaps', () => { >
//         13 | expect(solve(1, 5, 'BBGBG')).toBe('BGBBG') |
//             ^
//             14 | expect(solve(2, 5, 'BBGBG')).toBe('GBBBG')
//         15 | expect(solve(3, 5, 'BBGBG')).toBe('GBBBG')
//         16 |
//     })

// at Object.toBe(tests - algorithm / tests - prompt3 / 14 _prompt3.test.js: 13: 32)

// ● all boys at first, girls at last, enough time to completely swap

// expect(received).toBe(expected) // Object.is equality

// Expected: "GGGGBBBB"
// Received: "GBGBGBGB"

// 26 |
//     27 | test('all boys at first, girls at last, enough time to completely swap', () => { >
//         28 | expect(solve(100, 4, 'BBBBGGGG')).toBe('GGGGBBBB') |
//             ^
//             29 |
//     })
// 30 |
//     31 | test('alternate pattern', () => {

//             at Object.toBe(tests - algorithm / tests - prompt3 / 14 _prompt3.test.js: 28: 37)

//             ● alternate pattern

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "GGBGBB"
//             Received: "GGGBBB"

//             30 |
//                 31 | test('alternate pattern', () => { >
//                     32 | expect(solve(2, 6, 'BGBGBG')).toBe('GGBGBB') |
//                         ^
//                         33 | expect(solve(5, 6, 'BGBGBG')).toBe('GGGBBB')
//                     34 |
//                 })
//             35 |

//                 at Object.toBe(tests - algorithm / tests - prompt3 / 14 _prompt3.test.js: 32: 33)

//             ● no time, queue unchanged

//             expect(received).toBe(expected) // Object.is equality

//             Expected: "GBGBG"
//             Received: "GGGBB"

//             35 |
//                 36 | test('no time, queue unchanged', () => { >
//                     37 | expect(solve(0, 5, 'GBGBG')).toBe('GBGBG') |
//                         ^
//                         38 |
//                 })
//             39 |
//                 40 | test('edge cases: one child', () => {

//                         at Object.toBe(tests - algorithm / tests - prompt3 / 14 _prompt3.test.js: 37: 32)

//                         ● random input

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: "GGGBBB"
//                         Received: "GGBBBB"

//                         57 |
//                             58 | test('random input', () => { >
//                                 59 | expect(solve(3, 5, 'GBGBBB')).toBe('GGGBBB') |
//                                     ^
//                                     60 | expect(solve(2, 5, 'BGGGBB')).toBe('GGBGBB')
//                                 61 |
//                             })
