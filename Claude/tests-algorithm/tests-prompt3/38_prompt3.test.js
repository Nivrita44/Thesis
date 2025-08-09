import { solve } from '../../solutions-algorithm/38.js';

describe('GCD of Range Tests', () => {

  test('Same number returns the number itself', () => {
    expect(solve("10", "10")).toBe("10");
  });

  test('Consecutive numbers return 1', () => {
    expect(solve("5", "6")).toBe("1");
  });

  test('Small range returns 1', () => {
    expect(solve("1", "5")).toBe("1"); 
  });

  test('Large range returns 1', () => {
    expect(solve("1", "1000000")).toBe("1");
  });

  test('Very large equal numbers', () => {
    expect(solve(
      "123456789123456789123456789",
      "123456789123456789123456789"
    )).toBe("123456789123456789123456789");
  });

  test('Numbers near googol', () => {
    expect(solve(
      "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
      "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
    )).toBe("1");
  });

  test('Large range with different digits', () => {
    expect(solve(
      "12345678901234567890",
      "98765432109876543210"
    )).toBe("1");
  });

  test('Edge case of 1 to larger number', () => {
    expect(solve("1", "999999999999999999")).toBe("1");
  });

});