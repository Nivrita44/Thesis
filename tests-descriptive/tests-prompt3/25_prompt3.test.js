import { solve } from '../../solutions-descriptive/25.js';

test('n=1, k=1', () => {
  expect(solve(1, 1)).toEqual([['1']]);
});

test('n=1, k=2 (no solution)', () => {
  expect(solve(1, 2)).toBe(null);
});

test('n=2, k=2', () => {
  expect(solve(2, 2)).toEqual([['1 2', '2 1']]);
});

test('n=2, k=1 (no solution)', () => {
  expect(solve(2, 1)).toBe(null);
});

test('n=2, k=3 (no solution)', () => {
  expect(solve(2, 3)).toBe(null);
});

test('n=3, k=1 (no solution)', () => {
  expect(solve(3, 1)).toBe(null);
});

test('n=3, k=2', () => {
  const output = solve(3, 2);
  expect(output.length).toBe(2);
  expect(new Set(output)).toHaveLength(2);
  const perms = new Set(output.map(s => s.split(' ').sort().join(' ')));
  expect(perms.has('1 2 3')).toBe(true);
});

test('n=3, k=3', () => {
  const output = solve(3, 3);
  expect(output.length).toBe(3);
  const permSets = output.map(s => s.split(' ').map(Number));
  permSets.forEach(a => {
    expect(new Set(a).size).toBe(3);
    expect(a.filter(x=>x>=1 && x<=3).length).toBe(3);
  });
  for (let i = 0; i < 3; i++) {
    let sum = permSets[0][i] + permSets[1][i] + permSets[2][i];
    for (let j = 0; j < 3; j++) {
      expect(
        permSets[0][j] + permSets[1][j] + permSets[2][j]
      ).toBe(sum);
    }
  }
});

test('n=4, k=1 (no solution)', () => {
  expect(solve(4, 1)).toBe(null);
});

test('n=4, k=2', () => {
  const output = solve(4,2);
  expect(output.length).toBe(2);
  expect(new Set(output)).toHaveLength(2);
  output.forEach(p => {
    const arr = p.split(' ').map(Number);
    expect(new Set(arr).size).toBe(4);
    expect(arr.filter(x => x >= 1 && x <= 4).length).toBe(4);
  });
});

test('n=4, k=3 (no solution -- even n, odd k)', () => {
  expect(solve(4,3)).toBe(null);
});

test('n=6, k=4', () => {
  const output = solve(6,4);
  expect(output.length).toBe(4);
  const perms = output.map(a => a.split(' ').map(Number));
  perms.forEach(p => {
    expect(new Set(p).size).toBe(6);
  });
});

test('n=7, k=2', () => {
  const output = solve(7,2);
  expect(output.length).toBe(2);
  const s = new Set(output);
  expect(s.size).toBe(2);
});

test('n=7, k=7', () => {
  const output = solve(7,7);
  expect(output.length).toBe(7);
});

test('n=8, k=2', () => {
  const output = solve(8,2);
  expect(output.length).toBe(2);
  output.forEach(a => {
    const vals = a.split(' ').map(Number);
    expect(new Set(vals).size).toBe(8);
  });
});

test('n=8, k=4200 (no solution, as k > 8!)', () => {
  expect(solve(8,4200)).toBe(null);
});

test('large n odd, k even', () => {
  const n = 51;
  const k = 4;
  const output = solve(n,k);
  expect(output.length).toBe(k);
  output.forEach(s => {
    const arr = s.split(' ').map(Number);
    expect(new Set(arr).size).toBe(n);
  });
});

test('large n, k=1 (no solution)', () => {
  expect(solve(20000,1)).toBe(null);
});

test('large n even, k odd (should be impossible)', () => {
  expect(solve(10000,3)).toBe(null);
});

test('n odd, k odd, n<=8, k=fact(n)-1 (no solution)', () => {
  expect(solve(5, 119)).toBe(null);
});

test('n odd, k=3', () => {
  const output = solve(9,3);
  expect(output.length).toBe(3);
  output.forEach(a => {
    const vals = a.split(' ').map(Number);
    expect(new Set(vals).size).toBe(9);
  });
});

test('n large odd, k odd', () => {
  const n = 99, k = 5;
  const output = solve(n,k);
  expect(output.length).toBe(k);
  output.forEach(a => {
    const vals = a.split(' ').map(Number);
    expect(new Set(vals).size).toBe(n);
  });
});


// n=3, k=2

//     TypeError: expect(received).toHaveLength(expected)

//     Matcher error: received value must have a length property whose value must be a number

//     Received has type:  set
//     Received has value: Set {"1 2 3", "3 2 1"}

//       28 |   const output = solve(3, 2);
//       29 |   expect(output.length).toBe(2);
//     > 30 |   expect(new Set(output)).toHaveLength(2);
//          |                           ^
//       31 |   const perms = new Set(output.map(s => s.split(' ').sort().join(' ')));
//       32 |   expect(perms.has('1 2 3')).toBe(true);
//       33 | });

//       at Object.toHaveLength (tests-descriptive/tests-prompt3/25_prompt3.test.js:30:27)

//   ● n=4, k=2

//     TypeError: expect(received).toHaveLength(expected)

//     Matcher error: received value must have a length property whose value must be a number

//     Received has type:  set
//     Received has value: Set {"1 2 3 4", "4 3 2 1"}

//       58 |   const output = solve(4,2);
//       59 |   expect(output.length).toBe(2);
//     > 60 |   expect(new Set(output)).toHaveLength(2);
//          |                           ^
//       61 |   output.forEach(p => {
//       62 |     const arr = p.split(' ').map(Number);
//       63 |     expect(new Set(arr).size).toBe(4);

//       at Object.toHaveLength (tests-descriptive/tests-prompt3/25_prompt3.test.js:60:27)

//   ● n=8, k=4200 (no solution, as k > 8!)

//     expect(received).toBe(expected) // Object.is equality

//     Expected: null
//     Received: ["1 2 3 4 5 6 7 8", "8 7 6 5 4 3 2 1", "1 2 3 4 5 6 8 7", "8 7 6 5 4 3 1 2", "1 2 3 4 5 7 6 8", "8 7 6 5 4 2 3 1", "1 2 3 4 5 7 8 6", "8 7 6 5 4 2 1 3", "1 2 3 4 5 8 6 7", "8 7 6 5 4 1 3 2", …]

//       101 |
//       102 | test('n=8, k=4200 (no solution, as k > 8!)', () => {
//     > 103 |   expect(solve(8,4200)).toBe(null);
//           |                         ^
//       104 | });
//       105 |
//       106 | test('large n odd, k even', () => {

//       at Object.toBe (tests-descriptive/tests-prompt3/25_prompt3.test.js:103:25)