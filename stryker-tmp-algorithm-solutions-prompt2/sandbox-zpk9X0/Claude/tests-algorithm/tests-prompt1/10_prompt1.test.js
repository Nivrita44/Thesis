// @ts-nocheck
import { solve } from '../../../solutions-algorithm/10.js'

function expectParts(n, expectedParts) {
    const result = solve(n)
    const combined = [result.count, ...result.parts] // build array with count first
    expect(combined).toEqual(expectedParts)
}

test('example case 5009', () => {
    expectParts(5009, [3, 5000, 8, 1])
})

test('single digit case', () => {
    expectParts(7, [1, 7])
})

test('maximum input 10000', () => {
    expectParts(10000, [1, 10000])
})

test('minimum input 1', () => {
    expectParts(1, [1, 1])
})

test('number requiring multiple round numbers 999', () => {
    expectParts(999, [3, 900, 90, 9])
})

test('number with all different digits 2475', () => {
    expectParts(2475, [4, 2000, 400, 70, 5])
})

test('number ending in zero 1200', () => {
    expectParts(1200, [2, 1000, 200])
})

test('number requiring max digits 9999', () => {
    expectParts(9999, [4, 9000, 900, 90, 9])
})

test('tricky case 1001', () => {
    expectParts(1001, [2, 1000, 1])
})