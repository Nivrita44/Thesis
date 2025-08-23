// @ts-nocheck
import { solve } from '../../../solutions-descriptive/9.js'

test('single node', () => {
    expect(solve(1, [3], [])).toBe(0)
})

test('two nodes, same label', () => {
    expect(solve(2, [1, 1], [
        [0, 1]
    ])).toBe(0)
})


test('three nodes, all same label', () => {
    expect(solve(3, [4, 4, 4], [
        [0, 1],
        [1, 2]
    ])).toBe(0)
})


test('star shape with n=5, same label', () => {
    expect(solve(5, [5, 5, 5, 5, 5], [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4]
    ])).toBe(0)
})



test('labels are decreasing', () => {
    const a = solve(4, [8, 7, 6, 5], [
        [0, 1],
        [1, 2],
        [2, 3]
    ])
    expect([1, 2, 3, 4]).toContain(a)
})

