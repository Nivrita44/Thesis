// @ts-nocheck
// 
// Function to compute GCD (NOD)
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
export function gcd(...args) {
  if (stryMutAct_9fa48("585")) {
    {}
  } else {
    stryCov_9fa48("585");
    let x = args[0];
    for (let i = 1; stryMutAct_9fa48("588") ? i >= args.length : stryMutAct_9fa48("587") ? i <= args.length : stryMutAct_9fa48("586") ? false : (stryCov_9fa48("586", "587", "588"), i < args.length); stryMutAct_9fa48("589") ? i-- : (stryCov_9fa48("589"), i++)) {
      if (stryMutAct_9fa48("590")) {
        {}
      } else {
        stryCov_9fa48("590");
        let y = args[i];
        while (stryMutAct_9fa48("592") ? x || y : stryMutAct_9fa48("591") ? false : (stryCov_9fa48("591", "592"), x && y)) {
          if (stryMutAct_9fa48("593")) {
            {}
          } else {
            stryCov_9fa48("593");
            (stryMutAct_9fa48("597") ? x <= y : stryMutAct_9fa48("596") ? x >= y : stryMutAct_9fa48("595") ? false : stryMutAct_9fa48("594") ? true : (stryCov_9fa48("594", "595", "596", "597"), x > y)) ? stryMutAct_9fa48("598") ? x *= y : (stryCov_9fa48("598"), x %= y) : stryMutAct_9fa48("599") ? y *= x : (stryCov_9fa48("599"), y %= x);
          }
        }
        stryMutAct_9fa48("600") ? x -= y : (stryCov_9fa48("600"), x += y);
      }
    }
    return x;
  }
}

// Function to compute the desired result for one pair (a,b)
export function solve(a, b) {
  if (stryMutAct_9fa48("601")) {
    {}
  } else {
    stryCov_9fa48("601");
    const n = gcd(a, b);
    let res = stryMutAct_9fa48("602") ? a / n / b : (stryCov_9fa48("602"), (stryMutAct_9fa48("603") ? a * n : (stryCov_9fa48("603"), a / n)) * b);
    if (stryMutAct_9fa48("606") ? res !== b : stryMutAct_9fa48("605") ? false : stryMutAct_9fa48("604") ? true : (stryCov_9fa48("604", "605", "606"), res === b)) {
      if (stryMutAct_9fa48("607")) {
        {}
      } else {
        stryCov_9fa48("607");
        if (stryMutAct_9fa48("610") ? a !== n : stryMutAct_9fa48("609") ? false : stryMutAct_9fa48("608") ? true : (stryCov_9fa48("608", "609", "610"), a === n)) {
          if (stryMutAct_9fa48("611")) {
            {}
          } else {
            stryCov_9fa48("611");
            stryMutAct_9fa48("612") ? res /= b / n : (stryCov_9fa48("612"), res *= stryMutAct_9fa48("613") ? b * n : (stryCov_9fa48("613"), b / n));
          }
        } else {
          if (stryMutAct_9fa48("614")) {
            {}
          } else {
            stryCov_9fa48("614");
            stryMutAct_9fa48("615") ? res /= 2 : (stryCov_9fa48("615"), res *= 2);
          }
        }
      }
    }
    return res;
  }
}

// Test function to verify correctness
// function testing_test() {
//     const testCases = [
//         { input: [2, 3], expected: 6 },
//         { input: [1, 2], expected: 4 },
//         { input: [3, 11], expected: 33 },
//         { input: [1, 5], expected: 25 },
//         { input: [5, 10], expected: 20 },
//         { input: [4, 6], expected: 12 },
//         { input: [3, 9], expected: 27 },
//         { input: [250000000, 500000000], expected: 1000000000 },
//     ];

//     let allPassed = true;
//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const output = solve(input[0], input[1]);
//         const pass = output === expected;
//         console.log(
//             `Test #${i + 1}: Input: ${input} | Output: ${output} | Expected: ${expected} | ${pass ? 'PASS ✅' : 'FAIL ❌'}`
//         );
//         if (!pass) allPassed = false;
//     }

//     if (allPassed) {
//         console.log('\nAll tests passed!');
//     } else {
//         console.log('\nSome tests failed.');
//     }
// }

// // Run tests
// testing_test();