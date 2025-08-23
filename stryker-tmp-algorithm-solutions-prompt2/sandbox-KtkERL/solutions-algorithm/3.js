// Core function: q = number of elements, arr = array of numbers
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
export function solve(q, arr) {
  if (stryMutAct_9fa48("314")) {
    {}
  } else {
    stryCov_9fa48("314");
    // Sort the array
    stryMutAct_9fa48("315") ? arr : (stryCov_9fa48("315"), arr.sort(stryMutAct_9fa48("316") ? () => undefined : (stryCov_9fa48("316"), (a, b) => stryMutAct_9fa48("317") ? a + b : (stryCov_9fa48("317"), a - b))));
    let gaps = 0;
    for (let i = 0; stryMutAct_9fa48("320") ? i >= arr.length - 1 : stryMutAct_9fa48("319") ? i <= arr.length - 1 : stryMutAct_9fa48("318") ? false : (stryCov_9fa48("318", "319", "320"), i < (stryMutAct_9fa48("321") ? arr.length + 1 : (stryCov_9fa48("321"), arr.length - 1))); stryMutAct_9fa48("322") ? i-- : (stryCov_9fa48("322"), i++)) {
      if (stryMutAct_9fa48("323")) {
        {}
      } else {
        stryCov_9fa48("323");
        if (stryMutAct_9fa48("327") ? arr[i + 1] - arr[i] <= 1 : stryMutAct_9fa48("326") ? arr[i + 1] - arr[i] >= 1 : stryMutAct_9fa48("325") ? false : stryMutAct_9fa48("324") ? true : (stryCov_9fa48("324", "325", "326", "327"), (stryMutAct_9fa48("328") ? arr[i + 1] + arr[i] : (stryCov_9fa48("328"), arr[stryMutAct_9fa48("329") ? i - 1 : (stryCov_9fa48("329"), i + 1)] - arr[i])) > 1)) {
          if (stryMutAct_9fa48("330")) {
            {}
          } else {
            stryCov_9fa48("330");
            return stryMutAct_9fa48("331") ? "" : (stryCov_9fa48("331"), "NO");
          }
        }
      }
    }
    return stryMutAct_9fa48("332") ? "" : (stryCov_9fa48("332"), "YES");
  }
}

// Test function
// function testing_test() {
//     const testCases = [
//         { q: 3, arr: [1, 2, 2], expected: "YES" },
//         { q: 4, arr: [5, 5, 5, 5], expected: "YES" },
//         { q: 3, arr: [1, 2, 4], expected: "NO" },
//         { q: 4, arr: [1, 3, 4, 4], expected: "NO" },
//         { q: 1, arr: [100], expected: "YES" }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { q, arr, expected } = testCases[i];
//         const result = solve(q, arr);
//         const status = result === expected ? "PASS" : "FAIL";
//         console.log(`Test ${i + 1}: Expected = ${expected}, Got = ${result} => ${status}`);
//     }
// }

// // Run tests if this script is run directlyn
// if (require.main === module) {
//     testing_test();
// }