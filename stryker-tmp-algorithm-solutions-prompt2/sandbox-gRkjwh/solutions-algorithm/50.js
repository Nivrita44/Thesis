// Functional logic: Computes prefix sums and returns query results
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
export function solve(s, queries) {
  if (stryMutAct_9fa48("977")) {
    {}
  } else {
    stryCov_9fa48("977");
    const a = stryMutAct_9fa48("978") ? [] : (stryCov_9fa48("978"), [0]); // prefix sum array

    for (let i = 0; stryMutAct_9fa48("981") ? i >= s.length : stryMutAct_9fa48("980") ? i <= s.length : stryMutAct_9fa48("979") ? false : (stryCov_9fa48("979", "980", "981"), i < s.length); stryMutAct_9fa48("982") ? i-- : (stryCov_9fa48("982"), i++)) {
      if (stryMutAct_9fa48("983")) {
        {}
      } else {
        stryCov_9fa48("983");
        const x = stryMutAct_9fa48("984") ? s.charCodeAt(i) + 96 : (stryCov_9fa48("984"), s.charCodeAt(i) - 96); // 'a' = 1, 'b' = 2, ...
        a.push(stryMutAct_9fa48("985") ? x - a[i] : (stryCov_9fa48("985"), x + a[i]));
      }
    }
    return queries.map(stryMutAct_9fa48("986") ? () => undefined : (stryCov_9fa48("986"), ([l, r]) => stryMutAct_9fa48("987") ? a[r] + a[l - 1] : (stryCov_9fa48("987"), a[r] - a[stryMutAct_9fa48("988") ? l + 1 : (stryCov_9fa48("988"), l - 1)])));
  }
}

// Test function
// function testing_test() {
//     const tests = [{
//             input: {
//                 s: "abacaba",
//                 queries: [
//                     [1, 3],
//                     [2, 5],
//                     [1, 7]
//                 ]
//             },
//             expected: [4, 7, 11]
//         },
//         {
//             input: {
//                 s: "sonoshikumiwo",
//                 queries: [
//                     [1, 5],
//                     [2, 10],
//                     [7, 7],
//                     [1, 13],
//                     [4, 8],
//                     [2, 5],
//                     [3, 9]
//                 ]
//             },
//             expected: [82, 125, 9, 191, 62, 63, 97]
//         }
//     ];

//     for (let i = 0; i < tests.length; i++) {
//         const { s, queries } = tests[i].input;
//         const result = solve(s, queries);
//         const expected = tests[i].expected;

//         const pass = JSON.stringify(result) === JSON.stringify(expected);
//         console.log(
//             `Test ${i + 1} | Input: ${s} ${JSON.stringify(queries)} | Output: ${result} | Expected: ${expected} | ${
//         pass ? "✅ PASS" : "❌ FAIL"
//       }`
//         );
//     }
// }

// // Run tests
// testing_test();