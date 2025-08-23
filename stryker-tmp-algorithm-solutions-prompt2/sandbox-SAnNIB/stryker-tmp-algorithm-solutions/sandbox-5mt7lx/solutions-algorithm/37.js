// @ts-nocheck
// 
// ✅ Functional version (HackerRank style)
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
export function solve(n) {
  if (stryMutAct_9fa48("539")) {
    {}
  } else {
    stryCov_9fa48("539");
    const res = stryMutAct_9fa48("540") ? ["Stryker was here"] : (stryCov_9fa48("540"), []);
    for (let i = 0; stryMutAct_9fa48("543") ? i >= n : stryMutAct_9fa48("542") ? i <= n : stryMutAct_9fa48("541") ? false : (stryCov_9fa48("541", "542", "543"), i < n); stryMutAct_9fa48("544") ? i-- : (stryCov_9fa48("544"), i++)) {
      if (stryMutAct_9fa48("545")) {
        {}
      } else {
        stryCov_9fa48("545");
        res.push(stryMutAct_9fa48("546") ? 1 - 2 * i : (stryCov_9fa48("546"), 1 + (stryMutAct_9fa48("547") ? 2 / i : (stryCov_9fa48("547"), 2 * i))));
      }
    }
    return res;
  }
}

// 🧪 Test function
// function testing_test() {
//     const testCases = [
//         { input: 3, expected: [1, 3, 5] },
//         { input: 6, expected: [1, 3, 5, 7, 9, 11] },
//         { input: 1, expected: [1] },
//         { input: 5, expected: [1, 3, 5, 7, 9] }
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, idx) => {
//         const output = solve(input);
//         const passed = JSON.stringify(output) === JSON.stringify(expected);
//         console.log(
//             `Test Case ${idx + 1}: Input: ${input} | Output: ${output.join(" ")} | Expected: ${expected.join(" ")} | ${
//         passed ? "PASS ✅" : "FAIL ❌"
//       }`
//         );
//     });
// }

// // Uncomment to run tests
// testing_test();