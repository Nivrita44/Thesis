import { solve } from '../../solutions-algorithm/10.js';

test('solve for 5009', () => {
  const res = solve(5009);
  expect(Array.isArray(res)).toBe(true);
  expect(res[0]).toBe(2);
  expect(new Set(res.slice(1))).toEqual(new Set([5000,9]));
});

test('solve for 9', () => {
  const res = solve(9);
  expect(res[0]).toBe(1);
  expect(res[1]).toBe(9);
});

test('solve for 4000', () => {
  const res = solve(4000);
  expect(res[0]).toBe(1);
  expect(res[1]).toBe(4000);
});

test('solve for 7010', () => {
  const res = solve(7010);
  expect(res[0]).toBe(2);
  expect(new Set(res.slice(1))).toEqual(new Set([7000,10]));
});

test('solve for 1234', () => {
  const res = solve(1234);
  expect(res[0]).toBe(4);
  expect(new Set(res.slice(1))).toEqual(new Set([1000,200,30,4]));
});

test('solve for 10001', () => {
  const res = solve(10001);
  expect(res[0]).toBe(2);
  expect(new Set(res.slice(1))).toEqual(new Set([10000,1]));
});

test('solve for 110', () => {
  const res = solve(110);
  expect(res[0]).toBe(2);
  expect(new Set(res.slice(1))).toEqual(new Set([100,10]));
});

test('solve for 1111', () => {
  const res = solve(1111);
  expect(res[0]).toBe(4);
  expect(new Set(res.slice(1))).toEqual(new Set([1000,100,10,1]));
});

test('solve for 90', () => {
  const res = solve(90);
  expect(res[0]).toBe(1);
  expect(res[1]).toBe(90);
});

test('solve for 10', () => {
  const res = solve(10);
  expect(res[0]).toBe(1);
  expect(res[1]).toBe(10);
});

test('solve for 100', () => {
  const res = solve(100);
  expect(res[0]).toBe(1);
  expect(res[1]).toBe(100);
});

test('solve for 9999', () => {
  const res = solve(9999);
  expect(res[0]).toBe(4);
  expect(new Set(res.slice(1))).toEqual(new Set([9000,900,90,9]));
});

test('solve for 8080', () => {
  const res = solve(8080);
  expect(res[0]).toBe(2);
  expect(new Set(res.slice(1))).toEqual(new Set([8000,80]));
});

test('solve for 1', () => {
  const res = solve(1);
  expect(res[0]).toBe(1);
  expect(res[1]).toBe(1);
});

test('solve for 222', () => {
  const res = solve(222);
  expect(res[0]).toBe(3);
  expect(new Set(res.slice(1))).toEqual(new Set([200,20,2]));
});