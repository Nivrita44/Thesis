// @ts-nocheck
// 
// ✅ Pure functional logic
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
  if (stryMutAct_9fa48("553")) {
    {}
  } else {
    stryCov_9fa48("553");
    if (stryMutAct_9fa48("556") ? n !== 1 || n % 2 === 1 : stryMutAct_9fa48("555") ? false : stryMutAct_9fa48("554") ? true : (stryCov_9fa48("554", "555", "556"), (stryMutAct_9fa48("558") ? n === 1 : stryMutAct_9fa48("557") ? true : (stryCov_9fa48("557", "558"), n !== 1)) && (stryMutAct_9fa48("560") ? n % 2 !== 1 : stryMutAct_9fa48("559") ? true : (stryCov_9fa48("559", "560"), (stryMutAct_9fa48("561") ? n * 2 : (stryCov_9fa48("561"), n % 2)) === 1)))) {
      if (stryMutAct_9fa48("562")) {
        {}
      } else {
        stryCov_9fa48("562");
        return stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), 'YES');
      }
    }
    if (stryMutAct_9fa48("566") ? n !== 1 : stryMutAct_9fa48("565") ? false : stryMutAct_9fa48("564") ? true : (stryCov_9fa48("564", "565", "566"), n === 1)) {
      if (stryMutAct_9fa48("567")) {
        {}
      } else {
        stryCov_9fa48("567");
        return stryMutAct_9fa48("568") ? "" : (stryCov_9fa48("568"), 'NO');
      }
    }
    return solve(Math.floor(stryMutAct_9fa48("569") ? n * 2 : (stryCov_9fa48("569"), n / 2)));
  }
}

// 🧪 Test function
// function testing_test() {
//     const inputs = [2, 3, 4, 5, 998244353, 1099511627776];
//     const expected = ['NO', 'YES', 'NO', 'YES', 'YES', 'NO'];
//     let allPassed = true;

//     console.log("Running Tests...\n");
//     for (let i = 0; i < inputs.length; i++) {
//         const result = solve(inputs[i]);
//         const pass = result === expected[i];
//         console.log(
//             `Test Case ${i + 1}: Input: ${inputs[i]} | Output: ${result} | Expected: ${expected[i]} | ${pass ? 'PASS ✅' : 'FAIL ❌'}`
//         );
//         if (!pass) allPassed = false;
//     }

//     if (allPassed) {
//         console.log("\n✅ All tests passed!");
//     } else {
//         console.log("\n❌ Some tests failed.");
//     }
// }

// // ▶️ Run tests
// testing_test();