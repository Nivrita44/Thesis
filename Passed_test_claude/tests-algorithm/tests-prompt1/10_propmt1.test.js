import { solve } from '../../../solutions-algorithm/10.js'

function expectParts(n, expected) {
    const result = solve(n)
    expect(result).toEqual(expected)
}

test('single digit case', () => {
    expectParts(7, { count: 1, parts: [7] })
})

test('maximum input 10000', () => {
    expectParts(10000, { count: 1, parts: [10000] })
})

test('minimum input 1', () => {
    expectParts(1, { count: 1, parts: [1] })
})
