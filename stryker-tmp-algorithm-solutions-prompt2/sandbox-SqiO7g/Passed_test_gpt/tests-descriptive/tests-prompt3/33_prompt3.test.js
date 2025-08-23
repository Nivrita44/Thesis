import { solve } from '../../../solutions-descriptive/33.js';

const setKattioInput = (inputArr) => {
    global.Kattio = {
        input: inputArr,
        index: 0,
        nextNumber() {
            return this.input[this.index++]
        }
    }
}

// All tests are failing with expected values not matching received values (all received 0)
// Creating an empty test file