import { solve } from '../../../solutions-algorithm/22.js';

test('example case=4', () => {
    expect(solve([4])).toEqual(["First"]);
});

test('edge case=1000', () => {
    expect(solve([1000])).toEqual(["First"]);
});

test('minimum value=1', () => {
    expect(solve([1])).toEqual(["First"]);
});



test('generic case=10', () => {
    expect(solve([10])).toEqual(["First"]);
});

test('generic case=17', () => {
    expect(solve([17])).toEqual(["First"]);
});

test('tricky case one move from divisible by 3', () => {
    expect(solve([8])).toEqual(["First"]);
});
