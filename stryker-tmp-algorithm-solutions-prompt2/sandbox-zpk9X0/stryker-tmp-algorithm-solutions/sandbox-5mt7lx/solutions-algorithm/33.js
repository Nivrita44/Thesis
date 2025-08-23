// @ts-nocheck
// 
'use strict';

/**
 * Solve each test case: find the maximum reachable value using the described method.
 * @param {Array} testCases - Array of test cases, each with a number `n` and array `a`
 * @returns {Array<number>} - The resulting max values for each test case
 */
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
export function solve(testCases) {
  if (stryMutAct_9fa48("465")) {
    {}
  } else {
    stryCov_9fa48("465");
    const results = stryMutAct_9fa48("466") ? ["Stryker was here"] : (stryCov_9fa48("466"), []);
    for (const {
      n,
      a
    } of testCases) {
      if (stryMutAct_9fa48("467")) {
        {}
      } else {
        stryCov_9fa48("467");
        const s = new Set();
        const d = new Map();
        s.add(n);
        let ans = n;
        const q = stryMutAct_9fa48("468") ? [] : (stryCov_9fa48("468"), [n]);
        for (let i = 0; stryMutAct_9fa48("471") ? i >= n : stryMutAct_9fa48("470") ? i <= n : stryMutAct_9fa48("469") ? false : (stryCov_9fa48("469", "470", "471"), i < n); stryMutAct_9fa48("472") ? i-- : (stryCov_9fa48("472"), i++)) {
          if (stryMutAct_9fa48("473")) {
            {}
          } else {
            stryCov_9fa48("473");
            let e = stryMutAct_9fa48("474") ? a[i] - i : (stryCov_9fa48("474"), a[i] + i);
            if (stryMutAct_9fa48("476") ? false : stryMutAct_9fa48("475") ? true : (stryCov_9fa48("475", "476"), d.has(e))) {
              if (stryMutAct_9fa48("477")) {
                {}
              } else {
                stryCov_9fa48("477");
                d.get(e).push(i);
              }
            } else {
              if (stryMutAct_9fa48("478")) {
                {}
              } else {
                stryCov_9fa48("478");
                d.set(e, stryMutAct_9fa48("479") ? [] : (stryCov_9fa48("479"), [i]));
              }
            }
          }
        }
        for (const x of q) {
          if (stryMutAct_9fa48("480")) {
            {}
          } else {
            stryCov_9fa48("480");
            if (stryMutAct_9fa48("483") ? false : stryMutAct_9fa48("482") ? true : stryMutAct_9fa48("481") ? d.has(x) : (stryCov_9fa48("481", "482", "483"), !d.has(x))) continue;
            for (const y of d.get(x)) {
              if (stryMutAct_9fa48("484")) {
                {}
              } else {
                stryCov_9fa48("484");
                const val = stryMutAct_9fa48("485") ? x - y : (stryCov_9fa48("485"), x + y);
                if (stryMutAct_9fa48("488") ? false : stryMutAct_9fa48("487") ? true : stryMutAct_9fa48("486") ? s.has(val) : (stryCov_9fa48("486", "487", "488"), !s.has(val))) {
                  if (stryMutAct_9fa48("489")) {
                    {}
                  } else {
                    stryCov_9fa48("489");
                    q.push(val);
                    s.add(val);
                    ans = stryMutAct_9fa48("490") ? Math.min(ans, val) : (stryCov_9fa48("490"), Math.max(ans, val));
                  }
                }
              }
            }
          }
        }
        results.push(ans);
      }
    }
    return results;
  }
}

// ✅ Test function
// function testing_test() {
//     const testCases = [
//         { n: 5, a: [2, 4, 6, 2, 5] },
//         { n: 5, a: [5, 4, 4, 5, 1] },
//         { n: 4, a: [6, 8, 2, 3] },
//         { n: 1, a: [1] },
//     ];

//     const expected = [10, 11, 10, 1];
//     const result = solve(testCases);

//     console.log("Running Tests...\n");
//     let pass = true;

//     for (let i = 0; i < expected.length; i++) {
//         const res = result[i];
//         const exp = expected[i];
//         const status = res === exp ? "PASS " : `FAIL  (Expected: ${exp}, Got: ${res})`;
//         if (res !== exp) pass = false;
//         console.log(`Test Case ${i + 1}: Output = ${res} | ${status}`);
//     }

//     console.log(`\nOverall Status: ${pass ? "PASS " : "FAIL "}`);
// }

// // Run the test
// testing_test();