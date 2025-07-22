import { solve } from '../../solutions-descriptive/33.js';

const originalKattio = global.Kattio;

function setKattioInput(arr) {
    global.Kattio = {
        input: arr,
        index: 0,
        setInput(arr2) {
            this.input = arr2;
            this.index = 0;
        },
        nextNumber() {
            return this.input[this.index++];
        },
    };
    global.Kattio.setInput(arr);
}

afterEach(() => {
    global.Kattio = originalKattio;
});

test('case [0,1,1,2] returns 1', () => {
    setKattioInput([0,1,1,2]);
    expect(solve()).toBe(1);
});

test('case [0,2,0,2] returns 1', () => {
    setKattioInput([0,2,0,2]);
    expect(solve()).toBe(1);
});

test('case [1,3,1,3] returns 4', () => {
    setKattioInput([1,3,1,3]);
    expect(solve()).toBe(4);
});

test('case [0,2,1,5] returns 5', () => {
    setKattioInput([0,2,1,5]);
    expect(solve()).toBe(5);
});

test('case [9,98,244,353] returns 374', () => {
    setKattioInput([9,98,244,353]);
    expect(solve()).toBe(374);
});

test('fully disjoint intervals [0,1,2,3] returns 1', () => {
    setKattioInput([0,1,2,3]);
    expect(solve()).toBe(1);
});

test('zero-length intervals [5,5,5,5] returns 0', () => {
    setKattioInput([5,5,5,5]);
    expect(solve()).toBe(0);
});

test('one element each: [2,3,4,5] returns 1', () => {
    setKattioInput([2,3,4,5]);
    expect(solve()).toBe(1);
});

test('large adjacent intervals [0,1048576,0,1048576]', () => {
    setKattioInput([0,1048576,0,1048576]);
    expect(typeof solve()).toBe('number');
});