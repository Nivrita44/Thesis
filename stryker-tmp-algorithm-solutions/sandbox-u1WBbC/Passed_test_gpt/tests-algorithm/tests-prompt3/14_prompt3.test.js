// @ts-nocheck
import { solve } from '../../../solutions-algorithm/14.js'

test('single swap', () => {
    expect(solve(1, 2, 'BG')).toBe('GB')
})

test('no swap needed', () => {
    expect(solve(5, 5, 'GGGGG')).toBe('GGGGG')
    expect(solve(5, 5, 'BBBBB')).toBe('BBBBB')
})

test('from sample', () => {
    expect(solve(5, 1, 'BGGBG')).toBe('GBGGB')
    expect(solve(8, 3, 'BBGBGBGB')).toBe('GGBGBBBB')
})

test('t greater than possible swaps', () => {
    expect(solve(10, 3, 'BBGG')).toBe('GGBB')
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
