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
  if (stryMutAct_9fa48("3549")) {
    {}
  } else {
    stryCov_9fa48("3549");
    const steps = stryMutAct_9fa48("3550") ? ["Stryker was here"] : (stryCov_9fa48("3550"), []);
    if (stryMutAct_9fa48("3553") ? n !== 81 : stryMutAct_9fa48("3552") ? false : stryMutAct_9fa48("3551") ? true : (stryCov_9fa48("3551", "3552", "3553"), n === 81)) {
      if (stryMutAct_9fa48("3554")) {
        {}
      } else {
        stryCov_9fa48("3554");
        steps.push(stryMutAct_9fa48("3555") ? "" : (stryCov_9fa48("3555"), "!"));
      }
    } else {
      if (stryMutAct_9fa48("3556")) {
        {}
      } else {
        stryCov_9fa48("3556");
        steps.push(stryMutAct_9fa48("3557") ? `` : (stryCov_9fa48("3557"), `add ${stryMutAct_9fa48("3558") ? n + 81 : (stryCov_9fa48("3558"), n - 81)}`));
        steps.push(stryMutAct_9fa48("3559") ? "" : (stryCov_9fa48("3559"), "!"));
      }
    }
    return steps;
  }
}
// function testing_test() {
//     const testCases = [
//         { input: 100, expected: ["add -19", "!"] },
//         { input: 0, expected: ["add -81", "!"] },
//         { input: 1, expected: ["add -80", "!"] },
//         { input: 5, expected: ["add -76", "!"] }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({ input, expected }, i) => {
//         const result = solve(input);
//         console.log(`Test ${i+1}:`);
//         console.log(`Input: ${input}`);
//         console.log(`Expected: ${JSON.stringify(expected)}`);
//         console.log(`Received: ${JSON.stringify(result)}`);
//         console.log(`Status: ${JSON.stringify(result) === JSON.stringify(expected) ? "PASS" : "FAIL"}\n`);
//     });
// }

//  testing_test();