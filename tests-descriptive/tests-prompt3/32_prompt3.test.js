import { solve } from '../../solutions-descriptive/32.js';

test('Single element array, minimal case', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect([2, -1]).toContain(output);
});

test('All elements are the same small prime', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(3);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(3);
});

test('Every element is a different composite, should return 2', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(6)
    .mockReturnValueOnce(8)
    .mockReturnValueOnce(10);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(2);
});

test('Array contains two primes, should return -1', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(11)
    .mockReturnValueOnce(13);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(-1);
});

test('Array with one prime, one composite, valid generator', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(8);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(3);
});

test('Array with one prime, one even composite less than 2*p', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(7)
    .mockReturnValueOnce(10);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(-1);
});

test('Array with one prime, one odd composite, x - facts[x] < p*2', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(7)
    .mockReturnValueOnce(15);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(-1);
});

test('All composites, fairly large numbers', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(30)
    .mockReturnValueOnce(36)
    .mockReturnValueOnce(48)
    .mockReturnValueOnce(120)
    .mockReturnValueOnce(200);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(2);
});

test('Array with a single large prime', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(399989);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(399989);
});

test('Edge case: composite just at lower bound', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(4);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect([2, 4]).toContain(output);
});

test('Array with mix, prime and composite OK at boundary', () => {
  global.readInt = jest.fn()
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(13)
    .mockReturnValueOnce(36);
  let output = null;
  global.writeInt = (x) => { output = x; };
  solve();
  expect(output).toBe(13);
});