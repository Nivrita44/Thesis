// @ts-nocheck
// 
import { solve } from '../../solutions-descriptive/16.js';

test('example from description: s = "ABBA", a=1 b=1 ab=1 ba=1', () => {
  expect(solve("ABBA\n1 1 1 1")).toBe("YES");
});

test('single character string: s = "A", all counts 0', () => {
  expect(solve("A\n0 0 0 0")).toBe("NO");
});

test('single character string: s = "A", a=1', () => {
  expect(solve("A\n1 0 0 0")).toBe("YES");
});

test('prohibited "AA": s="AA", a=2', () => {
  expect(solve("AA\n2 0 0 0")).toBe("NO");
});

test('only singletons allowed: s="ABAB", big a and b, ab=0, ba=0', () => {
  expect(solve("ABAB\n4 4 0 0")).toBe("YES");
});

test('needs to use full ab and ba: s="ABBAAB", a=0, b=0, ab=2, ba=1', () => {
  expect(solve("ABBAAB\n0 0 2 1")).toBe("YES");
});

test('not enough ab/ba allowed: s="ABABAB", a=0, b=0, ab=1, ba=1', () => {
  expect(solve("ABABAB\n0 0 1 1")).toBe("NO");
});

test('large input: alternating, enough allowance', () => {
  const s = "AB".repeat(200000); // length 400000
  expect(solve(`${s}\n0 0 200000 200000`)).toBe("YES");
});

test('all single "B"s, only B allowed: s="BBB", b=3', () => {
  expect(solve("BBB\n0 3 0 0")).toBe("YES");
});

test('string ending on block, tricky ab/ba: s="ABBA", a=0, b=0, ab=1, ba=1', () => {
  expect(solve("ABBA\n0 0 1 1")).toBe("YES");
});



// √ example from description: s = "ABBA", a=1 b=1 ab=1 ba=1 (3 ms)
//   √ single character string: s = "A", all counts 0 (3 ms)
//   √ single character string: s = "A", a=1 (1 ms)
//   × prohibited "AA": s="AA", a=2 (4 ms)
//   √ only singletons allowed: s="ABAB", big a and b, ab=0, ba=0 (3 ms)
//   √ needs to use full ab and ba: s="ABBAAB", a=0, b=0, ab=2, ba=1
//   √ not enough ab/ba allowed: s="ABABAB", a=0, b=0, ab=1, ba=1
//   √ large input: alternating, enough allowance (58 ms)
//   √ all single "B"s, only B allowed: s="BBB", b=3 (1 ms) 
//   √ string ending on block, tricky ab/ba: s="ABBA", a=0, b=0, ab=1, ba=1 (2 ms)

