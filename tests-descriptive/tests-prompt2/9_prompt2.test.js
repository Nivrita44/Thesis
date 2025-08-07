import { solve } from '../../solutions-descriptive/9.js'

test('single node', () => {
    expect(solve(1, [3], [])).toBe(0)
})

test('two nodes, same label', () => {
    expect(solve(2, [1, 1], [
        [0, 1]
    ])).toBe(0)
})

test('two nodes, different label', () => {
        const res = solve(2, [1, 2], [
            [0, 1]
        ])
        expect([1, 2]).toContain(res)
    }) //fail

test('three nodes, straight line, incrementing labels', () => {
        const a = solve(3, [1, 2, 3], [
            [0, 1],
            [1, 2]
        ])
        expect([1, 2, 3]).toContain(a)
    }) //fail

test('three nodes, all same label', () => {
    expect(solve(3, [4, 4, 4], [
        [0, 1],
        [1, 2]
    ])).toBe(0)
})

test('three nodes, two max labels', () => {
        const a = solve(3, [2, 3, 3], [
            [0, 1],
            [0, 2]
        ])
        expect([2, 3]).toContain(a)
    }) //fail

test('star shape with n=5, same label', () => {
    expect(solve(5, [5, 5, 5, 5, 5], [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4]
    ])).toBe(0)
})

test('star shape, max labels on leaves', () => {
        const a = solve(5, [1, 2, 2, 3, 3], [
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4]
        ])
        expect([4, 5]).toContain(a)
    }) //fail

test('labels are decreasing', () => {
    const a = solve(4, [8, 7, 6, 5], [
        [0, 1],
        [1, 2],
        [2, 3]
    ])
    expect([1, 2, 3, 4]).toContain(a)
})

test('labels same except one', () => {
        expect(solve(4, [1, 1, 2, 1], [
            [0, 1],
            [1, 2],
            [2, 3]
        ])).toBe(3)
    }) //fail

test('balanced tree with two max-valued leaves', () => {
        const a = solve(7, [1, 2, 3, 4, 4, 2, 1], [
            [0, 1],
            [0, 2],
            [1, 3],
            [1, 4],
            [2, 5],
            [2, 6]
        ])
        expect([4, 5]).toContain(a)
    }) //fail

test('big labels, disconnected node with highest label', () => {
        expect(solve(3, [10, 2, 10], [
            [0, 1],
            [1, 2]
        ])).toBe(1)
    }) //fail

test('case with multiple max, winning option', () => {
        const a = solve(6, [7, 4, 7, 5, 6, 5], [
            [0, 1],
            [1, 2],
            [2, 3],
            [2, 4],
            [4, 5]
        ])
        expect([1, 3]).toContain(a)
    }) //fail

test('linear tree, alternate labels', () => {
        expect(solve(5, [1, 2, 1, 2, 1], [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4]
        ])).toBe(0)
    }) //fail