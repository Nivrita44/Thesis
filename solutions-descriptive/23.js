export function solve(left, right, bitIndex, xorConstant) {
  const computeXor = (limit, bitIndex, xorConstant) => {
      let xorResult = 0n;

      
      for (let rem = 0n; rem < limit % 4n; rem++) {
          xorResult ^= limit - (limit % 4n) + rem;
      }

      
      limit -= xorConstant + 1n;
      if (limit >= 0n) {
          let shiftedCount = limit / (1n << bitIndex);
          shiftedCount += 1n;

          
          for (let rem = 0n; rem < shiftedCount % 4n; rem++) {
              xorResult ^= (shiftedCount - (shiftedCount % 4n) + rem) * (1n << bitIndex);
          }

          
          if (shiftedCount % 2n === 1n) {
              xorResult ^= xorConstant;
          }
      }

      return xorResult;
  };

  const finalXor = computeXor(right + 1n, bitIndex, xorConstant) ^ computeXor(left, bitIndex, xorConstant);
  return finalXor;
}

  function testing_test() {
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
      const result = solve(...input);
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
  
  testing_test();
  