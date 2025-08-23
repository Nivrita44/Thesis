// @ts-nocheck
// 
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
export function solve(n, k) {
  if (stryMutAct_9fa48("767")) {
    {}
  } else {
    stryCov_9fa48("767");
    if (stryMutAct_9fa48("770") ? k % 2 === 0 && k > 2 * n - 1 : stryMutAct_9fa48("769") ? false : stryMutAct_9fa48("768") ? true : (stryCov_9fa48("768", "769", "770"), (stryMutAct_9fa48("772") ? k % 2 !== 0 : stryMutAct_9fa48("771") ? false : (stryCov_9fa48("771", "772"), (stryMutAct_9fa48("773") ? k * 2 : (stryCov_9fa48("773"), k % 2)) === 0)) || (stryMutAct_9fa48("776") ? k <= 2 * n - 1 : stryMutAct_9fa48("775") ? k >= 2 * n - 1 : stryMutAct_9fa48("774") ? false : (stryCov_9fa48("774", "775", "776"), k > (stryMutAct_9fa48("777") ? 2 * n + 1 : (stryCov_9fa48("777"), (stryMutAct_9fa48("778") ? 2 / n : (stryCov_9fa48("778"), 2 * n)) - 1)))))) return stryMutAct_9fa48("779") ? +1 : (stryCov_9fa48("779"), -1);
    const a = Array.from(stryMutAct_9fa48("780") ? {} : (stryCov_9fa48("780"), {
      length: stryMutAct_9fa48("781") ? n - 2 : (stryCov_9fa48("781"), n + 2)
    }), stryMutAct_9fa48("782") ? () => undefined : (stryCov_9fa48("782"), (_, i) => i)); // 1-based indexing
    stryMutAct_9fa48("783") ? k++ : (stryCov_9fa48("783"), k--);
    function mg(l, r) {
      if (stryMutAct_9fa48("784")) {
        {}
      } else {
        stryCov_9fa48("784");
        if (stryMutAct_9fa48("787") ? k === 0 && l === r - 1 : stryMutAct_9fa48("786") ? false : stryMutAct_9fa48("785") ? true : (stryCov_9fa48("785", "786", "787"), (stryMutAct_9fa48("789") ? k !== 0 : stryMutAct_9fa48("788") ? false : (stryCov_9fa48("788", "789"), k === 0)) || (stryMutAct_9fa48("791") ? l !== r - 1 : stryMutAct_9fa48("790") ? false : (stryCov_9fa48("790", "791"), l === (stryMutAct_9fa48("792") ? r + 1 : (stryCov_9fa48("792"), r - 1)))))) return;
        stryMutAct_9fa48("793") ? k += 2 : (stryCov_9fa48("793"), k -= 2);
        const mid = Math.floor(stryMutAct_9fa48("794") ? (l + r) * 2 : (stryCov_9fa48("794"), (stryMutAct_9fa48("795") ? l - r : (stryCov_9fa48("795"), l + r)) / 2));
        [a[mid], a[stryMutAct_9fa48("796") ? mid + 1 : (stryCov_9fa48("796"), mid - 1)]] = stryMutAct_9fa48("797") ? [] : (stryCov_9fa48("797"), [a[stryMutAct_9fa48("798") ? mid + 1 : (stryCov_9fa48("798"), mid - 1)], a[mid]]);
        mg(l, mid);
        mg(mid, r);
      }
    }
    mg(1, stryMutAct_9fa48("799") ? n - 1 : (stryCov_9fa48("799"), n + 1));
    return stryMutAct_9fa48("800") ? a : (stryCov_9fa48("800"), a.slice(1, stryMutAct_9fa48("801") ? n - 1 : (stryCov_9fa48("801"), n + 1)));
  }
}

// Test runner
// function testing_test() {
//     const cases = [
//         { input: [3, 3], expected: [2, 1, 3] },
//         { input: [4, 1], expected: [1, 2, 3, 4] },
//         { input: [5, 6], expected: -1 }
//     ];

//     for (const { input, expected, expectedLength, expectedType }
//         of cases) {
//         const result = solve(...input);

//         let pass = false;

//         if (expected !== undefined) {
//             if (Array.isArray(expected)) {
//                 pass = JSON.stringify(result) === JSON.stringify(expected);
//             } else {
//                 pass = result === expected;
//             }
//         } else {
//             pass =
//                 (expectedType === "array" && Array.isArray(result)) &&
//                 (expectedLength === undefined || result.length === expectedLength);
//         }

//         console.log(
//                 `Input: ${input.join(" ")} | Output: ${Array.isArray(result) ? result.join(" ") : result} | ${
//                 expected !== undefined
//                     ? `Expected: ${Array.isArray(expected) ? expected.join(" ") : expected}`
//                     : `Type: ${expectedType}, Length: ${expectedLength}`
//             } | ${pass ? "✅ PASS" : "❌ FAIL"}`
//         );
//     }
// }

// // Run tests
// testing_test();