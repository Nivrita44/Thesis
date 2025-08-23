'use strict';

// Core logic
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
export function solve(pins) {
  if (stryMutAct_9fa48("299")) {
    {}
  } else {
    stryCov_9fa48("299");
    return pins.map(pin => {
      if (stryMutAct_9fa48("300")) {
        {}
      } else {
        stryCov_9fa48("300");
        let curr = 1;
        let sum = 0;
        for (let j = 0; stryMutAct_9fa48("303") ? j >= pin.length : stryMutAct_9fa48("302") ? j <= pin.length : stryMutAct_9fa48("301") ? false : (stryCov_9fa48("301", "302", "303"), j < pin.length); stryMutAct_9fa48("304") ? j-- : (stryCov_9fa48("304"), j++)) {
          if (stryMutAct_9fa48("305")) {
            {}
          } else {
            stryCov_9fa48("305");
            let next = (stryMutAct_9fa48("308") ? pin[j] !== '0' : stryMutAct_9fa48("307") ? false : stryMutAct_9fa48("306") ? true : (stryCov_9fa48("306", "307", "308"), pin[j] === (stryMutAct_9fa48("309") ? "" : (stryCov_9fa48("309"), '0')))) ? 10 : stryMutAct_9fa48("310") ? -pin[j] : (stryCov_9fa48("310"), +pin[j]);
            stryMutAct_9fa48("311") ? sum -= Math.abs(curr - next) : (stryCov_9fa48("311"), sum += Math.abs(stryMutAct_9fa48("312") ? curr + next : (stryCov_9fa48("312"), curr - next)));
            curr = next;
          }
        }
        return stryMutAct_9fa48("313") ? sum - 4 : (stryCov_9fa48("313"), sum + 4);
      }
    });
  }
}

// Test function
// function testing_test() {
//     const testCases = [{
//             input: [
//                 "1111",
//                 "1236",
//                 "1010",
//                 "1920",
//                 "9273",
//                 "0000",
//                 "7492",
//                 "8543",
//                 "0294",
//                 "8361"
//             ],
//             expected: [4, 9, 31, 27, 28, 13, 25, 16, 33, 24]
//         },
//         {
//             input: ["0000", "9999", "1234", "9876"],
//             expected: [13, 12, 7, 15] // ✅ Corrected
//         }
//     ];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);

//         console.log(`Test Case ${index + 1}:`);
//         input.forEach((pin, i) => {
//             const status = result[i] === expected[i] ? "PASS ✅" : "FAIL ❌";
//             console.log(`PIN: ${pin} | Expected: ${expected[i]} | Got: ${result[i]} | ${status}`);
//         });
//         console.log(`Overall Status: ${pass ? "PASS ✅" : "FAIL ❌"}\n`);
//     });
// }

// testing_test();