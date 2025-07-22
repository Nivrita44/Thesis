import { solve } from '../../solutions-descriptive/33.js'

const setKattioInput = (inputArr) => {
    global.Kattio = {
        input: inputArr,
        index: 0,
        nextNumber() {
            return this.input[this.index++]
        }
    }
}

describe('solve', () => {
    test('1x1 region', () => {
        setKattioInput([0, 1, 1, 2])
        expect(solve()).toBe(1)
    })
    test('full 2x2 region', () => {
        setKattioInput([0, 2, 0, 2])
        expect(solve()).toBe(1)
    })
    test('offset 2x2 region', () => {
        setKattioInput([1, 3, 1, 3])
        expect(solve()).toBe(4)
    })
    test('non-square region', () => {
        setKattioInput([0, 2, 1, 5])
        expect(solve()).toBe(5)
    })
    test('larger region', () => {
        setKattioInput([9, 98, 244, 353])
        expect(solve()).toBe(374)
    })
    test('minimum area at origin', () => {
        setKattioInput([0, 1, 0, 1])
        expect(solve()).toBe(1)
    })
    test('vertical line region', () => {
        setKattioInput([3, 8, 2, 3])
        expect(solve()).toBe(5)
    })
    test('horizontal line region', () => {
        setKattioInput([4, 5, 10, 27])
        expect(solve()).toBe(17)
    })
    test('tiny non-aligned region', () => {
        setKattioInput([5, 7, 8, 10])
        expect(solve()).toBe(4)
    })
    test('maximum input values', () => {
        setKattioInput([0, 1048576, 0, 1048576])
        expect(solve()).toBe(1)
    })
    test('1x1 region somewhere not at (0,0)', () => {
        setKattioInput([100, 101, 1000, 1001])
        expect(solve()).toBe(1)
    })
    test('cross 2 power boundaries', () => {
        setKattioInput([511, 513, 1023, 1025])
        expect(solve()).toBe(4)
    })
    test('vertical stripe of width 1', () => {
        setKattioInput([3, 4, 0, 16])
        expect(solve()).toBe(1)
    })
    test('horizontal stripe of height 1', () => {
        setKattioInput([0, 16, 3, 4])
        expect(solve()).toBe(1)
    })
    test('arbitrary region', () => {
        setKattioInput([12345, 23456, 34567, 45678])
        expect(solve()).toBe(11111)
    })
})