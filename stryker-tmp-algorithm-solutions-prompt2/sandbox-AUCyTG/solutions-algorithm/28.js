'use strict';

// ✅ Pure function
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
export function solve(testCases) {
  if (stryMutAct_9fa48("256")) {
    {}
  } else {
    stryCov_9fa48("256");
    const results = stryMutAct_9fa48("257") ? ["Stryker was here"] : (stryCov_9fa48("257"), []);
    for (const {
      x,
      y,
      f
    } of testCases) {
      if (stryMutAct_9fa48("258")) {
        {}
      } else {
        stryCov_9fa48("258");
        let sum = 0;
        if (stryMutAct_9fa48("261") ? x[0] === f[0] && y[0] === f[0] || (f[1] - x[1]) * (f[1] - y[1]) < 0 : stryMutAct_9fa48("260") ? false : stryMutAct_9fa48("259") ? true : (stryCov_9fa48("259", "260", "261"), (stryMutAct_9fa48("263") ? x[0] === f[0] || y[0] === f[0] : stryMutAct_9fa48("262") ? true : (stryCov_9fa48("262", "263"), (stryMutAct_9fa48("265") ? x[0] !== f[0] : stryMutAct_9fa48("264") ? true : (stryCov_9fa48("264", "265"), x[0] === f[0])) && (stryMutAct_9fa48("267") ? y[0] !== f[0] : stryMutAct_9fa48("266") ? true : (stryCov_9fa48("266", "267"), y[0] === f[0])))) && (stryMutAct_9fa48("270") ? (f[1] - x[1]) * (f[1] - y[1]) >= 0 : stryMutAct_9fa48("269") ? (f[1] - x[1]) * (f[1] - y[1]) <= 0 : stryMutAct_9fa48("268") ? true : (stryCov_9fa48("268", "269", "270"), (stryMutAct_9fa48("271") ? (f[1] - x[1]) / (f[1] - y[1]) : (stryCov_9fa48("271"), (stryMutAct_9fa48("272") ? f[1] + x[1] : (stryCov_9fa48("272"), f[1] - x[1])) * (stryMutAct_9fa48("273") ? f[1] + y[1] : (stryCov_9fa48("273"), f[1] - y[1])))) < 0)))) {
          if (stryMutAct_9fa48("274")) {
            {}
          } else {
            stryCov_9fa48("274");
            sum = stryMutAct_9fa48("275") ? Math.abs(x[1] - y[1]) - 2 : (stryCov_9fa48("275"), Math.abs(stryMutAct_9fa48("276") ? x[1] + y[1] : (stryCov_9fa48("276"), x[1] - y[1])) + 2);
          }
        } else if (stryMutAct_9fa48("279") ? x[1] === f[1] && y[1] === f[1] || (f[0] - x[0]) * (f[0] - y[0]) < 0 : stryMutAct_9fa48("278") ? false : stryMutAct_9fa48("277") ? true : (stryCov_9fa48("277", "278", "279"), (stryMutAct_9fa48("281") ? x[1] === f[1] || y[1] === f[1] : stryMutAct_9fa48("280") ? true : (stryCov_9fa48("280", "281"), (stryMutAct_9fa48("283") ? x[1] !== f[1] : stryMutAct_9fa48("282") ? true : (stryCov_9fa48("282", "283"), x[1] === f[1])) && (stryMutAct_9fa48("285") ? y[1] !== f[1] : stryMutAct_9fa48("284") ? true : (stryCov_9fa48("284", "285"), y[1] === f[1])))) && (stryMutAct_9fa48("288") ? (f[0] - x[0]) * (f[0] - y[0]) >= 0 : stryMutAct_9fa48("287") ? (f[0] - x[0]) * (f[0] - y[0]) <= 0 : stryMutAct_9fa48("286") ? true : (stryCov_9fa48("286", "287", "288"), (stryMutAct_9fa48("289") ? (f[0] - x[0]) / (f[0] - y[0]) : (stryCov_9fa48("289"), (stryMutAct_9fa48("290") ? f[0] + x[0] : (stryCov_9fa48("290"), f[0] - x[0])) * (stryMutAct_9fa48("291") ? f[0] + y[0] : (stryCov_9fa48("291"), f[0] - y[0])))) < 0)))) {
          if (stryMutAct_9fa48("292")) {
            {}
          } else {
            stryCov_9fa48("292");
            sum = stryMutAct_9fa48("293") ? Math.abs(x[0] - y[0]) - 2 : (stryCov_9fa48("293"), Math.abs(stryMutAct_9fa48("294") ? x[0] + y[0] : (stryCov_9fa48("294"), x[0] - y[0])) + 2);
          }
        } else {
          if (stryMutAct_9fa48("295")) {
            {}
          } else {
            stryCov_9fa48("295");
            sum = stryMutAct_9fa48("296") ? Math.abs(x[0] - y[0]) - Math.abs(x[1] - y[1]) : (stryCov_9fa48("296"), Math.abs(stryMutAct_9fa48("297") ? x[0] + y[0] : (stryCov_9fa48("297"), x[0] - y[0])) + Math.abs(stryMutAct_9fa48("298") ? x[1] + y[1] : (stryCov_9fa48("298"), x[1] - y[1])));
          }
        }
        results.push(sum);
      }
    }
    return results;
  }
}

//Test function
// function testing_test() {
//     const testCases = [{
//         input: [
//             { x: [1, 1], y: [3, 3], f: [2, 2] },
//             { x: [2, 5], y: [2, 1], f: [2, 3] },
//             { x: [1000, 42], y: [1000, 1], f: [1000, 1000] },
//             { x: [1, 10], y: [3, 10], f: [2, 10] },
//             { x: [3, 8], y: [7, 8], f: [3, 7] },
//             { x: [2, 1], y: [4, 1], f: [1, 1] },
//             { x: [1, 344], y: [1, 10], f: [1, 1] }
//         ],
//         expected: [4, 6, 41, 4, 4, 2, 334]
//     }];

//     console.log("Running Tests...\n");

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
//         const pass = JSON.stringify(result) === JSON.stringify(expected);

//         console.log(`Test Case ${index + 1}:`);
//         input.forEach(({ x, y, f }, i) => {
//             const status = result[i] === expected[i] ? 'PASS ✅' : 'FAIL ❌';
//             console.log(`x=[${x}], y=[${y}], f=[${f}]`);
//             console.log(`Expected: ${expected[i]}, Got: ${result[i]} | ${status}\n`);
//         });
//         console.log(`Overall Status: ${pass ? 'PASS ✅' : 'FAIL ❌'}\n`);
//     });
// }

// // Run the test
// testing_test();