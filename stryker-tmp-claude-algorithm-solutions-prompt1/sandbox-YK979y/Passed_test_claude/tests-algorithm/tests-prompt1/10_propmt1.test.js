import { solve } from '../../../solutions-algorithm/10.js'

function expectParts(n, expectedParts) {
    const result = solve(n)
    expect(result).toEqual(expectedParts)
}

test('single digit case', () => {
    expectParts(7, [1, [7]])
})

test('maximum input 10000', () => {
    expectParts(10000, [1, [10000]])
})

test('minimum input 1', () => {
    expectParts(1, [1, [1]])
})
