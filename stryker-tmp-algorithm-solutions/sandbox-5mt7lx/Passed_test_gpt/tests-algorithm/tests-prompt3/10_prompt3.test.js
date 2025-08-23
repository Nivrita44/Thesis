// @ts-nocheck
import { solve } from "../../../solutions-algorithm/10.js";

test("example from description: n = 5009", () => {
  const res = solve(5009);
  expect(res[0]).toBe(2);
  expect(res[1].sort((a, b) => a - b)).toEqual([9, 5000]);
});

test("single digit edge case: n = 7", () => {
  const res = solve(7);
  expect(res[0]).toBe(1);
  expect(res[1]).toEqual([7]);
});

test("upper bound: n = 10000", () => {
  const res = solve(10000);
  expect(res[0]).toBe(1);
  expect(res[1]).toEqual([10000]);
});

test("multiple digits, all nonzero: n = 9876", () => {
  const res = solve(9876);
  expect(res[0]).toBe(4);
  expect(res[1].sort((a, b) => a - b)).toEqual([6, 70, 800, 9000]);
});

test("small round number: n = 10", () => {
  const res = solve(10);
  expect(res[0]).toBe(1);
  expect(res[1]).toEqual([10]);
});

test("lowest bound: n = 1", () => {
  const res = solve(1);
  expect(res[0]).toBe(1);
  expect(res[1]).toEqual([1]);
});

test("max parts (n=1111)", () => {
  const res = solve(1111);
  expect(res[0]).toBe(4);
  expect(res[1].sort((a, b) => a - b)).toEqual([1, 10, 100, 1000]);
});

test("tricky input: n = 1001", () => {
  const res = solve(1001);
  expect(res[0]).toBe(2);
  expect(res[1].sort((a, b) => a - b)).toEqual([1, 1000]);
});

test("input with middle zeros: n = 4070", () => {
  const res = solve(4070);
  expect(res[0]).toBe(2);
  expect(res[1].sort((a, b) => a - b)).toEqual([70, 4000]);
});
