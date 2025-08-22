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

test('zero-length intervals [5,5,5,5] returns 0', () => {
    setKattioInput([5, 5, 5, 5]);
    expect(solve()).toBe(0);
});

test('large adjacent intervals [0,1048576,0,1048576]', () => {
    setKattioInput([0, 1048576, 0, 1048576]);
    expect(typeof solve()).toBe('number');
});