// @ts-nocheck
"use strict";

// Core logic function for Hackerrank-style use
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
export function solve(n, a) {
  if (stryMutAct_9fa48("663")) {
    {}
  } else {
    stryCov_9fa48("663");
    const stack = stryMutAct_9fa48("664") ? ["Stryker was here"] : (stryCov_9fa48("664"), []);
    for (let i = 0; stryMutAct_9fa48("667") ? i >= n : stryMutAct_9fa48("666") ? i <= n : stryMutAct_9fa48("665") ? false : (stryCov_9fa48("665", "666", "667"), i < n); stryMutAct_9fa48("668") ? i-- : (stryCov_9fa48("668"), i++)) {
      if (stryMutAct_9fa48("669")) {
        {}
      } else {
        stryCov_9fa48("669");
        let l = 0,
          r = stack.length;
        while (stryMutAct_9fa48("672") ? l >= r : stryMutAct_9fa48("671") ? l <= r : stryMutAct_9fa48("670") ? false : (stryCov_9fa48("670", "671", "672"), l < r)) {
          if (stryMutAct_9fa48("673")) {
            {}
          } else {
            stryCov_9fa48("673");
            const m = (stryMutAct_9fa48("674") ? l - r : (stryCov_9fa48("674"), l + r)) >> 1;
            if (stryMutAct_9fa48("678") ? stack[m] > a[i] : stryMutAct_9fa48("677") ? stack[m] < a[i] : stryMutAct_9fa48("676") ? false : stryMutAct_9fa48("675") ? true : (stryCov_9fa48("675", "676", "677", "678"), stack[m] <= a[i])) {
              if (stryMutAct_9fa48("679")) {
                {}
              } else {
                stryCov_9fa48("679");
                l = stryMutAct_9fa48("680") ? m - 1 : (stryCov_9fa48("680"), m + 1);
              }
            } else {
              if (stryMutAct_9fa48("681")) {
                {}
              } else {
                stryCov_9fa48("681");
                r = m;
              }
            }
          }
        }
        stack[l] = a[i];
      }
    }
    return stack.length;
  }
}

// Test function to ensure correctness
// function testing_test() {
//     const tests = [
//         { input: { n: 3, a: [3, 1, 2] }, expected: 2 },
//         { input: { n: 5, a: [4, 2, 1, 3, 5] }, expected: 3 },
//         { input: { n: 1, a: [42] }, expected: 1 },
//         { input: { n: 10, a: [1, 9, 8, 10, 2, 3, 4, 6, 5, 7] }, expected: 6 }
//     ];

//     for (const { input, expected }
//         of tests) {
//         const result = solve(input.n, input.a);
//         console.log(`Input: ${input.a.join(' ')}`);
//         console.log(`Output: ${result} | Expected: ${expected} | ${result === expected ? "✅ PASS" : "❌ FAIL"}`);
//         console.log('---');
//     }
// }

// // Run tests
// testing_test();