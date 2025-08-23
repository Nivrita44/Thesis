// @ts-nocheck
import { solve } from '../../../solutions-algorithm/36.js';

test('Example from description', () => {
  expect(solve("75619")).toEqual(["9", "7", "561"]);
});

test('Minimum edge: n=2', () => {
  expect(solve("2")).toEqual(["2", "2"]);
});

test('Smallest odd prime (n=3)', () => {
  expect(solve("3")).toEqual(["3", "3"]);
});

test('Two digit prime', () => {
  expect(solve("13")).toEqual(["3", "1"]);
});

test('Three digit prime', () => {
  expect(solve("101")).toEqual(["1", "1", "0"]);
});

test('Largest value n=100003', () => {
  expect(solve("100003")).toEqual(["3", "1", "0000"]);
});

test('n=9973 (four digit prime)', () => {
  expect(solve("9973")).toEqual(["3", "9", "97"]);
});

test('n=11 (two same digits)', () => {
  expect(solve("11")).toEqual(["1", "1"]);
});

test('n=19 (prime ending in 9)', () => {
  expect(solve("19")).toEqual(["9", "1"]);
});

test('n=71 (prime with digits 7 and 1)', () => {
  expect(solve("71")).toEqual(["1", "7"]);
});