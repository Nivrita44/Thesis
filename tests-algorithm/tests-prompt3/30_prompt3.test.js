import { solve } from '../../solutions-algorithm/30.js';

describe('solve', () => {
  test('should return correct triplet for valid n, basic examples', () => {
    expect(solve(4, [10, 4, 15, 9])).toEqual([
      "YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/),
      "NO",
      "YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/),
      "NO"
    ]);
    const [yes1, triplet1, no1, yes2, triplet2, no2] = solve(4, [10, 4, 15, 9]);
    const t1 = triplet1.split(' ').map(Number);
    expect(t1.length).toBe(3);
    t1.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
    expect(new Set(t1).size).toBe(3);
    expect(t1.reduce((a,b) => a+b, 0)).toBe(10);
    const t2 = triplet2.split(' ').map(Number);
    expect(t2.length).toBe(3);
    t2.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
    expect(new Set(t2).size).toBe(3);
    expect(t2.reduce((a,b) => a+b, 0)).toBe(15);
  });

  test('should handle no possible triplet', () => {
    expect(solve(2, [1, 2])).toEqual(["NO", "NO"]);
    expect(solve(3, [3, 6, 9])).toEqual(["NO", "NO", "NO"]);
  });

  test('should handle edge cases for small n', () => {
    expect(solve(5, [1, 2, 3, 4, 5])).toEqual([
      "NO", "NO", "NO", "NO", "YES", expect.stringMatching(/^[1-9] [1-9] [1-9]$/)
    ]);
    const out = solve(5, [1, 2, 3, 4, 5]);
    if (out[4] === "YES") {
      const x = out[5].split(' ').map(Number);
      expect(x[0] + x[1] + x[2]).toBe(5);
      expect(new Set(x).size).toBe(3);
      x.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
    }
  });

  test('should return YES and valid output for n=7', () => {
    const res = solve(1, [7]);
    expect(res[0]).toBe("YES");
    const vals = res[1].split(' ').map(Number);
    expect(vals.reduce((a,b)=>a+b,0)).toBe(7);
    expect(new Set(vals).size).toBe(3);
    vals.forEach(v => expect(v>0 && v%3!==0).toBe(true));
  });

  test('should reject if a value would be 0 or divisible by 3', () => {
    expect(solve(1, [6])).toEqual(["NO"]);
    expect(solve(1, [9])).toEqual(["NO"]);
    expect(solve(1, [12])).toEqual(["YES", expect.stringMatching(/^[1-9][0-9]* [1-9][0-9]* [1-9][0-9]*$/)]);
    const out = solve(1, [12]);
    if (out[0] === "YES") {
      const t = out[1].split(' ').map(Number);
      expect(t.reduce((a,b)=>a+b,0)).toBe(12);
      expect(new Set(t).size).toBe(3);
      t.forEach(v => expect(v>0 && v%3!==0).toBe(true));
    }
  });

  test('should handle maximum possible n for performance and correctness', () => {
    const res = solve(1, [1000000000]);
    expect(res[0]).toBe("YES");
    const triplet = res[1].split(' ').map(Number);
    expect(triplet.reduce((a,b)=>a+b,0)).toBe(1000000000);
    expect(new Set(triplet).size).toBe(3);
    triplet.forEach(v => expect(v>0 && v%3!==0).toBe(true));
  });

  test('triplet values are all distinct and none divisible by 3, if YES', () => {
    for (let n = 7; n <= 20; n++) {
      const res = solve(1, [n]);
      if (res[0] === 'YES') {
        const vals = res[1].split(' ').map(Number);
        expect(vals.length).toBe(3);
        expect(new Set(vals).size).toBe(3);
        vals.forEach(v => expect(v > 0 && v % 3 !== 0).toBe(true));
        expect(vals.reduce((a,b)=>a+b,0)).toBe(n);
      }
    }
  });
});