import { solve } from '../../solutions-descriptive/32.js';

describe('Prime Factor Tests', () => {
  const setupTest = (n, array) => {
    let inputIndex = 0;
    global.readInt = () => {
      if (inputIndex === 0) {
        inputIndex++;
        return n;
      }
      return array[inputIndex++ - 1];
    };
    let output;
    global.writeInt = (value) => {
      output = value;
    };
    solve();
    return output;
  };

  test('Simple array with composite numbers should return 2', () => {
    expect(setupTest(3, [8, 9, 10])).toBe(2);
  });

  test('Array with multiple primes should return -1', () => {
    expect(setupTest(4, [2, 3, 4, 5])).toBe(-1);
  });

  test('Array with single prime factor should return that prime', () => {
    expect(setupTest(2, [147, 154])).toBe(7);
  });

  test('Large numbers with common prime factor', () => {
    expect(setupTest(3, [399999, 399996, 399993])).toBe(3);
  });

  test('Numbers near upper limit should work', () => {
    expect(setupTest(2, [400000, 399998])).toBe(2);
  });

  test('Single element array with prime number', () => {
    expect(setupTest(1, [17])).toBe(-1);
  });

  test('Array with all even numbers', () => {
    expect(setupTest(4, [4, 6, 8, 10])).toBe(2);
  });

  test('Array with incompatible prime factorizations', () => {
    expect(setupTest(3, [25, 35, 55])).toBe(5);
  });
});