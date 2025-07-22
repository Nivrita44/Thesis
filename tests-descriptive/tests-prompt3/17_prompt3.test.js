import { solve } from '../../solutions-descriptive/17.js';

test('n=1, m=1', () => {
  const res = solve(1, 1);
  expect(res.startsWith('YES')).toBe(true);
  expect(res).toBe('YES\n1\n1');
});

test('n=1, m=2', () => {
  const res = solve(1, 2);
  expect(res.startsWith('NO')).toBe(true);
  expect(res).toBe('NO');
});

test('n=2, m=1', () => {
  const res = solve(2, 1);
  expect(res.startsWith('YES')).toBe(true);
  const lines = res.split('\n');
  expect(lines.length).toBe(2*2 + 1);
  for(let i=1;i<lines.length;i++){
    expect(lines[i]).toBe('1');
  }
});

test('n=3, m=7', () => {
  const res = solve(3, 7);
  expect(res.startsWith('NO')).toBe(true);
  expect(res).toBe('NO');
});

test('n=3, m=2', () => {
  const res = solve(3, 2);
  expect(res.startsWith('YES')).toBe(true);
  const lines = res.split('\n');
  expect(lines.length).toBe(7);
  lines.slice(1).forEach(row => {
    const arr = row.split(' ').map(Number);
    expect(arr.length).toBe(2);
    arr.forEach(x => expect(x >= 1 && x <= 3).toBe(true));
  });
});

test('n=5, m=3', () => {
  const res = solve(5, 3);
  expect(res.startsWith('YES')).toBe(true);
  const lines = res.split('\n');
  expect(lines.length).toBe(11);
  lines.slice(1).forEach(row => {
    const arr = row.split(' ').map(Number);
    expect(arr.length).toBe(3);
    arr.forEach(x => expect(x >= 1 && x <= 5).toBe(true));
  });
});

test('n=10, m=20', () => {
  const res = solve(10, 20);
  expect(res.startsWith('NO')).toBe(true);
  expect(res).toBe('NO');
});

test('max edge case n=1000, m=1', () => {
  const res = solve(1000, 1);
  expect(res.startsWith('YES')).toBe(true);
  const lines = res.split('\n');
  expect(lines.length).toBe(2001);
  for(let i=1;i<lines.length;i++){
    expect(lines[i]).toBe('1');
  }
});

test('max edge case n=1, m=1000', () => {
  const res = solve(1, 1000);
  expect(res.startsWith('NO')).toBe(true);
  expect(res).toBe('NO');
});

test('n=m=10, boundary check', () => {
  const res = solve(10, 10);
  expect(res.startsWith('YES')).toBe(true);
  const lines = res.split('\n');
  expect(lines.length).toBe(21);
  lines.slice(1).forEach(row => {
    const arr = row.split(' ').map(Number);
    expect(arr.length).toBe(10);
    arr.forEach(x => expect(x >= 1 && x <= 10).toBe(true));
  });
});

test('n=6, m=12 boundary fail', () => {
  const res = solve(6, 12);
  expect(res.startsWith('NO')).toBe(true);
  expect(res).toBe('NO');
});