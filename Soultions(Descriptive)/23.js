function solveQuery(l, r, i, k) {
    const getXor = (n, i, k) => {
      let ans = 0n;
  
      for (let r = 0n; r < n % 4n; r++) {
        ans ^= n - (n % 4n) + r;
      }
  
      n -= k + 1n;
      if (n >= 0n) {
        n = n / (1n << i);
        n += 1n;
  
        for (let r = 0n; r < n % 4n; r++) {
          ans ^= (n - (n % 4n) + r) * (1n << i);
        }
  
        if (n % 2n === 1n) {
          ans ^= k;
        }
      }
  
      return ans;
    };
  
    const result = getXor(r + 1n, i, k) ^ getXor(l, i, k);
    return result;
  }

  function testSolveQuery() {
    const testCases = [
      { input: [1n, 3n, 1n, 0n], expected: 2n },
      { input: [2n, 28n, 3n, 7n], expected: 2n },
      { input: [15n, 43n, 1n, 0n], expected: 13n },
      { input: [57n, 2007n, 1n, 0n], expected: 0n },
      { input: [1010n, 1993n, 2n, 2n], expected: 4n },
      { input: [1n, 1000000000n, 30n, 1543n], expected: 1000000519n },
    ];
  
    let passed = true;
  
    for (let i = 0; i < testCases.length; i++) {
      const { input, expected } = testCases[i];
      const result = solveQuery(...input);
      if (result === expected) {
        console.log(`Test case ${i + 1}: ✅ Passed`);
      } else {
        console.log(`Test case ${i + 1}: ❌ Failed (Got ${result}, Expected ${expected})`);
        passed = false;
      }
    }
  
    if (passed) {
      console.log("All test cases passed! 🎉");
    }
  }
  
  testSolveQuery();
  