// @ts-nocheck
// ✅ Functional logic
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
export function solve(n, y) {
  if (stryMutAct_9fa48("548")) {
    {}
  } else {
    stryCov_9fa48("548");
    return (stryMutAct_9fa48("551") ? n !== y : stryMutAct_9fa48("550") ? false : stryMutAct_9fa48("549") ? true : (stryCov_9fa48("549", "550", "551"), n === y)) ? n : stryMutAct_9fa48("552") ? "" : (stryCov_9fa48("552"), "1");
  }
}

// 🧪 Test runner
// function testing_test() {
//     const testCases = [
//         { input: ["1", "2"], expected: "1" },
//         { input: ["61803398874989484820458683436563811772030917980576", "61803398874989484820458683436563811772030917980576"], expected: "61803398874989484820458683436563811772030917980576" },
//         { input: ["1", "100"], expected: "1" },
//         { input: ["100", "100000"], expected: "1" },
//         { input: ["12345", "67890123456789123457"], expected: "1" },
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input[0], input[1]);
//         const pass = result === expected;
//         console.log(
//             `Test Case ${index + 1}: Input: ${input.join(" ")} | Output: ${result} | Expected: ${expected} | ${
//         pass ? "PASS " : "FAIL "
//       }`
//         );
//     });
// }

// // ▶️ Uncomment to run tests
// testing_test();