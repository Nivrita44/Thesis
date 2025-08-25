// function solve(n, a) {
//     const m = 1000000007;

//     const e = new Uint32Array(n + 1);
//     for (let i = 0; i < n; i++) {
//         e[i + 1] = e[i] ^ a[i];
//     }

//     const d = new Map();
//     d.set(0, 1);

//     for (let i = 1; i <= n; i++) {
//         const prev = e[i - 1];
//         const curr = e[i];
//         const v = d.get(prev) || 0;
//         const u = d.get(curr) || 0;
//         d.set(prev, (3 * v + 2 * u) % m);
//     }

//     let s = 0;
//     for (const v of d.values()) {
//         s = (s + v) % m;
//     }

//     return s;
// }

// function test() {
//     const testCases = [
//         { n: 3, a: [1, 7, 9], expected: 3 },
//         { n: 4, a: [179, 1, 1,179], expected: 9 },
//         { n: 5, a: [1, 2, 3,3, 2], expected: 39 },
//         { n: 12, a: [8 ,2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4], expected: 123 },
//         { n: 1, a: [1000000000], expected: 3 }
//     ];

//     for (const { n, a, expected } of testCases) {
//         const result = solve(n, a);
//         console.log(`n=${n}, a=${a}: Expected=${expected}, Got=${result}`);
//         console.log(result === expected ? "PASS" : "FAIL");
//     }
// }

// test();
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
export function solve(arrayLength, numbers) {
  if (stryMutAct_9fa48("3618")) {
    {}
  } else {
    stryCov_9fa48("3618");
    const MODULO = 1000000007;
    const prefixXOR = new Uint32Array(stryMutAct_9fa48("3619") ? arrayLength - 1 : (stryCov_9fa48("3619"), arrayLength + 1));
    for (let currentIndex = 0; stryMutAct_9fa48("3622") ? currentIndex >= arrayLength : stryMutAct_9fa48("3621") ? currentIndex <= arrayLength : stryMutAct_9fa48("3620") ? false : (stryCov_9fa48("3620", "3621", "3622"), currentIndex < arrayLength); stryMutAct_9fa48("3623") ? currentIndex-- : (stryCov_9fa48("3623"), currentIndex++)) {
      if (stryMutAct_9fa48("3624")) {
        {}
      } else {
        stryCov_9fa48("3624");
        prefixXOR[stryMutAct_9fa48("3625") ? currentIndex - 1 : (stryCov_9fa48("3625"), currentIndex + 1)] = prefixXOR[currentIndex] ^ numbers[currentIndex];
      }
    }
    const xorFrequencyMap = new Map();
    xorFrequencyMap.set(0, 1);
    for (let endIndex = 1; stryMutAct_9fa48("3628") ? endIndex > arrayLength : stryMutAct_9fa48("3627") ? endIndex < arrayLength : stryMutAct_9fa48("3626") ? false : (stryCov_9fa48("3626", "3627", "3628"), endIndex <= arrayLength); stryMutAct_9fa48("3629") ? endIndex-- : (stryCov_9fa48("3629"), endIndex++)) {
      if (stryMutAct_9fa48("3630")) {
        {}
      } else {
        stryCov_9fa48("3630");
        const previousXOR = prefixXOR[stryMutAct_9fa48("3631") ? endIndex + 1 : (stryCov_9fa48("3631"), endIndex - 1)];
        const currentXOR = prefixXOR[endIndex];
        const previousCount = stryMutAct_9fa48("3634") ? xorFrequencyMap.get(previousXOR) && 0 : stryMutAct_9fa48("3633") ? false : stryMutAct_9fa48("3632") ? true : (stryCov_9fa48("3632", "3633", "3634"), xorFrequencyMap.get(previousXOR) || 0);
        const currentCount = stryMutAct_9fa48("3637") ? xorFrequencyMap.get(currentXOR) && 0 : stryMutAct_9fa48("3636") ? false : stryMutAct_9fa48("3635") ? true : (stryCov_9fa48("3635", "3636", "3637"), xorFrequencyMap.get(currentXOR) || 0);
        xorFrequencyMap.set(previousXOR, stryMutAct_9fa48("3638") ? (3 * previousCount + 2 * currentCount) * MODULO : (stryCov_9fa48("3638"), (stryMutAct_9fa48("3639") ? 3 * previousCount - 2 * currentCount : (stryCov_9fa48("3639"), (stryMutAct_9fa48("3640") ? 3 / previousCount : (stryCov_9fa48("3640"), 3 * previousCount)) + (stryMutAct_9fa48("3641") ? 2 / currentCount : (stryCov_9fa48("3641"), 2 * currentCount)))) % MODULO));
      }
    }
    let totalSpecialSubarrays = 0;
    for (const frequency of xorFrequencyMap.values()) {
      if (stryMutAct_9fa48("3642")) {
        {}
      } else {
        stryCov_9fa48("3642");
        totalSpecialSubarrays = stryMutAct_9fa48("3643") ? (totalSpecialSubarrays + frequency) * MODULO : (stryCov_9fa48("3643"), (stryMutAct_9fa48("3644") ? totalSpecialSubarrays - frequency : (stryCov_9fa48("3644"), totalSpecialSubarrays + frequency)) % MODULO);
      }
    }
    return totalSpecialSubarrays;
  }
}

// function testing_test() {
//     const testCases = [
//         { 
//             description: "Small array with distinct elements",
//             arrayLength: 3, 
//             numbers: [1, 7, 9], 
//             expected: 3 
//         },
//         { 
//             description: "Symmetric array with repeated elements",
//             arrayLength: 4, 
//             numbers: [179, 1, 1, 179], 
//             expected: 9 
//         },
//         { 
//             description: "Array with mirrored pattern",
//             arrayLength: 5, 
//             numbers: [1, 2, 3, 3, 2], 
//             expected: 39 
//         },
//         { 
//             description: "Larger array with varied elements",
//             arrayLength: 12, 
//             numbers: [8, 2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4], 
//             expected: 123 
//         },
//         { 
//             description: "Single element array with large value",
//             arrayLength: 1, 
//             numbers: [1000000000], 
//             expected: 3 
//         }
//     ];

//     testCases.forEach(({ description, arrayLength, numbers, expected }) => {
//         const result = solve(arrayLength, numbers);
//         const testStatus = result === expected ? "PASSED" : "FAILED";

//         console.log(`Test Case: ${description}`);
//         console.log(`Input: [${numbers.join(', ')}]`);
//         console.log(`Expected: ${expected}, Actual: ${result}`);
//         console.log(`Status: ${testStatus}\n`);
//     });
// }

// testing_test();