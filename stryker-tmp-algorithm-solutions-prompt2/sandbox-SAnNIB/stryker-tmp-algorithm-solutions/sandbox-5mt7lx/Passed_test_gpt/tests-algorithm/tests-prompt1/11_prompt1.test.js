// @ts-nocheck
// 
import { solve } from '../../../solutions-algorithm/11.js'

test('sum of digits for 10', () => {
    expect(solve([10])).toEqual([1])
})

test('sum of digits for 99', () => {
    expect(solve([99])).toEqual([18])
})

test('sum of digits for typical value 23', () => {
    expect(solve([23])).toEqual([5])
})

test('sum of digits for 55', () => {
    expect(solve([55])).toEqual([10])
})

test('sum of digits for 70', () => {
    expect(solve([70])).toEqual([7])
})

test('sum of digits for 47', () => {
    expect(solve([47])).toEqual([11])
})