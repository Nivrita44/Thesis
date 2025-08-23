// @ts-nocheck
import { solve } from '../../../solutions-algorithm/7.js'

test('single hero card only', () => {
    expect(solve(1, [0])).toBe(0)
})

test('single bonus card only', () => {
    expect(solve(1, [5])).toBe(0)
})

test('hero then bonus', () => {
    expect(solve(2, [0, 5])).toBe(0)
})

test('bonus then hero', () => {
    expect(solve(2, [5, 0])).toBe(5)
})

test('bonus, bonus, hero', () => {
    expect(solve(3, [3, 7, 0])).toBe(7)
})

test('bonus, hero, hero', () => {
    expect(solve(3, [10, 0, 0])).toBe(10)
})

test('hero, bonus, hero', () => {
    expect(solve(3, [0, 10, 0])).toBe(10)
})

test('two bonuses, two heroes', () => {
    expect(solve(4, [4, 9, 0, 0])).toBe(13)
})

test('alternating hero and bonus', () => {
    expect(solve(4, [0, 5, 0, 6])).toBe(6)
})

test('all hero cards', () => {
    expect(solve(5, [0, 0, 0, 0, 0])).toBe(0)
})

test('all bonus cards', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toBe(0)
})

test('only one bonus, many heroes', () => {
    expect(solve(5, [7, 0, 0, 0, 0])).toBe(7)
})

test('hero at end, large numbers', () => {
    expect(solve(3, [1e9, 3, 0])).toBe(3)
})

test('heroes and bonuses mixed', () => {
    expect(solve(6, [1, 0, 2, 0, 3, 0])).toBe(6)
})

test('choose higher bonus for last hero', () => {
    expect(solve(4, [1, 8, 0, 0])).toBe(9)
})

test('bonus between two heroes', () => {
    expect(solve(4, [0, 5, 0, 6])).toBe(6)
})

test('multiple ways, choose optimal', () => {
    expect(solve(6, [5, 2, 0, 4, 0, 0])).toBe(11)
})

test('complex order, force discard', () => {
    expect(solve(6, [8, 0, 1, 0, 3, 0])).toBe(12)
})

test('all bonus at start, all hero at end', () => {
    expect(solve(7, [2, 8, 5, 7, 0, 0, 0])).toBe(20)
})

test('large numbers of cards', () => {
    const arr = Array(1000).fill(0).map((_, i) => (i % 2 === 0 ? 0 : 1e9));
    expect(solve(1000, arr)).toBe(500e9)
})


// ● alternating hero and bonus

// expect(received).toBe(expected) // Object.is equality

// Expected: 6
// Received: 5

// 34 |
//     35 | test('alternating hero and bonus', () => { >
//         36 | expect(solve(4, [0, 5, 0, 6])).toBe(6) |
//             ^
//             37 |
//     })
// 38 |
//     39 | test('all hero cards', () => {

//             at Object.toBe(tests - algorithm / tests - prompt1 / 7 _prompt1.test.js: 36: 36)

//             ● hero at end, large numbers

//             expect(received).toBe(expected) // Object.is equality

//             Expected: 3
//             Received: 1000000000

//             50 |
//                 51 | test('hero at end, large numbers', () => { >
//                     52 | expect(solve(3, [1e9, 3, 0])).toBe(3) |
//                         ^
//                         53 |
//                 })
//             54 |
//                 55 | test('heroes and bonuses mixed', () => {

//                         at Object.toBe(tests - algorithm / tests - prompt1 / 7 _prompt1.test.js: 52: 35)

//                         ● bonus between two heroes

//                         expect(received).toBe(expected) // Object.is equality

//                         Expected: 6
//                         Received: 5

//                         62 |
//                             63 | test('bonus between two heroes', () => { >
//                                 64 | expect(solve(4, [0, 5, 0, 6])).toBe(6) |
//                                     ^
//                                     65 |
//                             })
//                         66 |
//                             67 | test('multiple ways, choose optimal', () => {

//                                     at Object.toBe(tests - algorithm / tests - prompt1 / 7 _prompt1.test.js: 64: 36)

//                                     ● large numbers of cards

//                                     expect(received).toBe(expected) // Object.is equality

//                                     Expected: 500000000000
//                                     Received: 499000000000

//                                     79 | test('large numbers of cards', () => {
//                                         80 |
//                                             const arr = Array(1000).fill(0).map((_, i) => (i % 2 === 0 ? 0 : 1e9)); >
//                                         81 | expect(solve(1000, arr)).toBe(500e9) |
//                                             ^
//                                             82 |
//                                     })
