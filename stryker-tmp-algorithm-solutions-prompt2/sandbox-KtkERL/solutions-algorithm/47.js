// Functional logic for each test case
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
export function solve(n, k, numbers) {
  if (stryMutAct_9fa48("872")) {
    {}
  } else {
    stryCov_9fa48("872");
    let check = 1;
    for (let i = 0; stryMutAct_9fa48("875") ? i >= numbers.length : stryMutAct_9fa48("874") ? i <= numbers.length : stryMutAct_9fa48("873") ? false : (stryCov_9fa48("873", "874", "875"), i < numbers.length); stryMutAct_9fa48("876") ? i-- : (stryCov_9fa48("876"), i++)) {
      if (stryMutAct_9fa48("877")) {
        {}
      } else {
        stryCov_9fa48("877");
        if (stryMutAct_9fa48("880") ? check !== numbers[i] : stryMutAct_9fa48("879") ? false : stryMutAct_9fa48("878") ? true : (stryCov_9fa48("878", "879", "880"), check === numbers[i])) stryMutAct_9fa48("881") ? check-- : (stryCov_9fa48("881"), check++);
      }
    }
    return Math.ceil(stryMutAct_9fa48("882") ? (n - check + 1) * k : (stryCov_9fa48("882"), (stryMutAct_9fa48("883") ? n - check - 1 : (stryCov_9fa48("883"), (stryMutAct_9fa48("884") ? n + check : (stryCov_9fa48("884"), n - check)) + 1)) / k));
  }
}

// Test function
// function testing_test() {
//     const cases = [{
//             input: { n: 3, k: 2, numbers: [1, 2, 3] },
//             expected: 0
//         },
//         {
//             input: { n: 3, k: 1, numbers: [3, 1, 2] },
//             expected: 1
//         },
//         {
//             input: { n: 4, k: 2, numbers: [1, 3, 2, 4] },
//             expected: 1
//         },
//         {
//             input: { n: 4, k: 2, numbers: [2, 3, 1, 4] },
//             expected: 2
//         }
//     ];

//     for (const { input, expected }
//         of cases) {
//         const result = solve(input.n, input.k, input.numbers);
//         console.log(
//             `Input: n=${input.n}, k=${input.k}, arr=[${input.numbers.join(' ')}] | Output: ${result} | Expected: ${expected} | ${
//                 result === expected ? " PASS" : " FAIL"
//             }`
//         );
//     }
// }

// // Run test cases
// testing_test();