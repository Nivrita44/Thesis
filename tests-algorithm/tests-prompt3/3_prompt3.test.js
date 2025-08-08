import { solve } from '../../solutions-algorithm/3.js'

test('Single element array', () => {
    expect(solve(1, [1])).toBe('YES')
    expect(solve(1, [100])).toBe('YES')
    expect(solve(1, [50])).toBe('YES')
})

test('All equal elements', () => {
    expect(solve(4, [5, 5, 5, 5])).toBe('YES')
    expect(solve(2, [7, 7])).toBe('YES')
})

test('Elements all consecutive', () => {
    expect(solve(3, [1, 2, 2])).toBe('YES')
    expect(solve(4, [2, 3, 2, 3])).toBe('YES')
    expect(solve(5, [4, 3, 4, 5, 3])).toBe('YES')
})

test('Array with a gap > 1', () => {
    expect(solve(3, [1, 2, 4])).toBe('NO')
    expect(solve(4, [1, 3, 4, 4])).toBe('NO')
    expect(solve(5, [1, 2, 3, 5, 6])).toBe('NO')
    expect(solve(6, [10, 10, 11, 12, 17, 18])).toBe('NO')
})

test('Only two consecutive elements', () => {
    expect(solve(2, [1, 2])).toBe('YES')
    expect(solve(2, [2, 1])).toBe('YES')
})

test('Only two with gap', () => {
    expect(solve(2, [1, 3])).toBe('NO')
    expect(solve(2, [8, 10])).toBe('NO')
})

test('Mixed edge cases', () => {
    expect(solve(3, [3, 3, 3])).toBe('YES')
    expect(solve(4, [100, 99, 98, 99])).toBe('YES')
    expect(solve(4, [1, 2, 100, 100])).toBe('NO')
})

test('Max size valid', () => {
    expect(solve(50, Array(50).fill(50))).toBe('YES')
    expect(solve(50, Array.from({ length: 50 }, (_, i) => 1))).toBe('YES')
    expect(solve(50, Array.from({ length: 50 }, (_, i) => i + 50))).toBe('NO')
    expect(solve(50, Array.from({ length: 50 }, (_, i) => 100 - Math.floor(i / 2))).toBe('YES'))
})

// ● Max size valid

// expect(received).toBe(expected) // Object.is equality

// Expected: "NO"
// Received: "YES"

// 44 | expect(solve(50, Array(50).fill(50))).toBe('YES')
// 45 | expect(solve(50, Array.from({ length: 50 }, (_, i) => 1))).toBe('YES') >
//     46 | expect(solve(50, Array.from({ length: 50 }, (_, i) => i + 50))).toBe('NO') |
//     ^
//     47 | expect(solve(50, Array.from({ length: 50 }, (_, i) => 100 - Math.floor(i / 2))).toBe('YES'))
// 48 |
// })

// at Object.toBe(tests - algorithm / tests - prompt3 / 3 _prompt3.test.js: 46: 69)