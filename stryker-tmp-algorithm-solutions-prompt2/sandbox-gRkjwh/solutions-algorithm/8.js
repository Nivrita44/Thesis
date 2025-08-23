// Core function
// n = length of array, queries = array of query indices (1-based)
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
export function solve(n, arr, queries) {
  if (stryMutAct_9fa48("1019")) {
    {}
  } else {
    stryCov_9fa48("1019");
    const temp = stryMutAct_9fa48("1020") ? new Array() : (stryCov_9fa48("1020"), new Array(n));
    const set = new Set();
    for (let i = stryMutAct_9fa48("1021") ? n + 1 : (stryCov_9fa48("1021"), n - 1); stryMutAct_9fa48("1024") ? i < 0 : stryMutAct_9fa48("1023") ? i > 0 : stryMutAct_9fa48("1022") ? false : (stryCov_9fa48("1022", "1023", "1024"), i >= 0); stryMutAct_9fa48("1025") ? i++ : (stryCov_9fa48("1025"), i--)) {
      if (stryMutAct_9fa48("1026")) {
        {}
      } else {
        stryCov_9fa48("1026");
        set.add(arr[i]);
        temp[i] = set.size;
      }
    }

    // For each query, return the value from temp at (index - 1)
    return queries.map(stryMutAct_9fa48("1027") ? () => undefined : (stryCov_9fa48("1027"), q => temp[stryMutAct_9fa48("1028") ? q + 1 : (stryCov_9fa48("1028"), q - 1)]));
  }
}

// Test function
// function testing_test() {
//     const n = 10;
//     const arr = [1, 2, 3, 4, 1, 2, 3, 4, 100000, 99999];
//     const queries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const expected = [6, 6, 6, 6, 6, 5, 4, 3, 2, 1];

//     const result = solve(n, arr, queries);

//     const pass = JSON.stringify(result) === JSON.stringify(expected);
//     console.log(`Test 1: Expected = [${expected}], Got = [${result}] => ${pass ? "PASS" : "FAIL"}`);
// }

// // Run test if run directly
// if (require.main === module) {
//     testing_test();
// }