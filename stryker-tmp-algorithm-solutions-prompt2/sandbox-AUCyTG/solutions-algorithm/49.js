// Functional logic
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
export function solve(n, m, k) {
  if (stryMutAct_9fa48("956")) {
    {}
  } else {
    stryCov_9fa48("956");
    return (stryMutAct_9fa48("959") ? n * m - 1 !== k : stryMutAct_9fa48("958") ? false : stryMutAct_9fa48("957") ? true : (stryCov_9fa48("957", "958", "959"), (stryMutAct_9fa48("960") ? n * m + 1 : (stryCov_9fa48("960"), (stryMutAct_9fa48("961") ? n / m : (stryCov_9fa48("961"), n * m)) - 1)) === k)) ? stryMutAct_9fa48("962") ? "" : (stryCov_9fa48("962"), 'YES') : stryMutAct_9fa48("963") ? "" : (stryCov_9fa48("963"), 'NO');
  }
}

// Testing logic
// function testing_test() {
//     const tests = [
//         { input: [1, 1, 0], expected: 'YES' },
//         { input: [1, 5, 5], expected: 'NO' },
//         { input: [2, 2, 3], expected: 'YES' },
//         { input: [2, 2, 4], expected: 'NO' },
//         { input: [1, 4, 3], expected: 'YES' },
//         { input: [100, 100, 10000], expected: 'NO' },
//     ];

//     tests.forEach(({ input, expected }, idx) => {
//         const result = solve(...input);
//         const pass = result === expected ? '✅ PASS' : '❌ FAIL';
//         console.log(`Test ${idx + 1} | Input: ${input.join(' ')} | Output: ${result} | Expected: ${expected} | ${pass}`);
//     });
// }

// // Run tests
// testing_test();