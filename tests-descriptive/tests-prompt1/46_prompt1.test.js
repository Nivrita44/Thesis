import solve from '../../solutions-descriptive/46.js';

test('Single vertex', () => {
  expect(solve(1, [1])).toBe("Yes");
});

test('All equal values', () => {
  expect(solve(3, [2, 2, 2])).toBe("No");
});

test('Simple connectable graph', () => {
  const res = solve(3, [1, 2, 3]);
  expect(typeof res).toBe("string");
  expect(res.toLowerCase().startsWith("yes")).toBe(true);
  const lines = res.split('\n');
  expect(lines.length).toBe(3); 
});

test('Some values equal, some different', () => {
  const res = solve(4, [5, 5, 8, 7]);
  expect(typeof res).toBe("string");
  if(res.toLowerCase().startsWith("yes")) {
    const lines = res.split('\n');
    expect(lines.length).toBe(4); 
  } else {
    expect(res).toBe("No");
  }
});

test('Impossible case', () => {
  expect(solve(2, [3, 3])).toBe("No");
});

test('Two distinct values', () => {
  const res = solve(2, [1, 2]);
  expect(typeof res).toBe("string");
  expect(['yes', 'no'].includes(res.trim().toLowerCase())).toBe(true);
});

test('Mix of large and small values', () => {
  const res = solve(5, [1000000000, 2, 3, 999999999, 4]);
  expect(typeof res).toBe("string");
  if(res.toLowerCase().startsWith("yes")) {
    const lines = res.split('\n');
    expect(lines.length).toBe(5); 
  } else {
    expect(res).toBe("No");
  }
});

test('All values sequential', () => {
  const res = solve(5, [1,2,3,4,5]);
  expect(typeof res).toBe("string");
  if(res.toLowerCase().startsWith("yes")) {
    const lines = res.split('\n');
    expect(lines.length).toBe(5); 
  } else {
    expect(res).toBe("No");
  }
});