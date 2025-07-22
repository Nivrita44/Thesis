import { solve } from '../../solutions-descriptive/32.js'

let inputData = [];
let outputData = [];
global.readInt = () => inputData.shift();
global.writeInt = (x, nl) => outputData.push(x);

beforeEach(() => {
  inputData = [];
  outputData = [];
});

test('all primes, n = 1', () => {
  inputData = [1, 2];
  solve();
  expect(outputData[0]).toBe(2);
});

test('all even, no prime', () => {
  inputData = [3, 4, 6, 8];
  solve();
  expect(outputData[0]).toBe(2);
});

test('array has a single prime, easy case', () => {
  inputData = [3, 13, 18, 24];
  solve();
  expect(outputData[0]).toBe(13);
});

test('array has multiple primes', () => {
  inputData = [4, 7, 13];
  solve();
  expect(outputData[0]).toBe(-1);
});

test('only composite', () => {
  inputData = [2, 4, 9, 27];
  solve();
  expect(outputData[0]).toBe(2);
});

test('primes with constraint failure on even', () => {
  inputData = [7, 8];
  solve();
  expect(outputData[0]).toBe(-1);
});

test('primes with constraint failure on odd', () => {
  inputData = [11, 13];
  solve();
  expect(outputData[0]).toBe(-1);
});

test('prime, big even passes', () => {
  inputData = [3, 20];
  solve();
  expect(outputData[0]).toBe(3);
});

test('prime, big odd passes', () => {
  inputData = [13, 40];
  solve();
  expect(outputData[0]).toBe(13);
});

test('one element array, composite', () => {
  inputData = [1, 9];
  solve();
  expect(outputData[0]).toBe(2);
});

test('one element array, prime', () => {
  inputData = [1, 17];
  solve();
  expect(outputData[0]).toBe(17);
});

test('constraint fails for composite odd', () => {
  inputData = [3, 9, 12];
  solve();
  expect(outputData[0]).toBe(-1);
});

test('minimal input, just one prime', () => {
  inputData = [1, 3];
  solve();
  expect(outputData[0]).toBe(3);
});

test('2 primes and other values', () => {
  inputData = [5, 2, 7, 6, 14, 21, 24];
  solve();
  expect(outputData[0]).toBe(-1);
});

test('prime and mixed numbers, valid', () => {
  inputData = [4, 5, 10, 12, 16];
  solve();
  expect(outputData[0]).toBe(5);
});

test('prime and mixed numbers, fail on composite', () => {
  inputData = [3, 5, 8, 9];
  solve();
  expect(outputData[0]).toBe(-1);
});

test('largest values under limit, only composite', () => {
  inputData = [3, 400000, 399996, 399992];
  solve();
  expect(outputData[0]).toBe(2);
});

test('largest value is prime', () => {
  inputData = [2, 399989, 100000];
  solve();
  expect(outputData[0]).toBe(399989);
});