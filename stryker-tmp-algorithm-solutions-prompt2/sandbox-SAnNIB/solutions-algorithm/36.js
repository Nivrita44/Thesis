// @ts-nocheck
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
export function solve(input) {
  if (stryMutAct_9fa48("508")) {
    {}
  } else {
    stryCov_9fa48("508");
    const lines = stryMutAct_9fa48("509") ? input.split("\n") : (stryCov_9fa48("509"), input.trim().split(stryMutAct_9fa48("510") ? "" : (stryCov_9fa48("510"), "\n")));
    const n = lines[0]; // first line is the number string

    const first = n[0];
    const last = n[stryMutAct_9fa48("511") ? n.length + 1 : (stryCov_9fa48("511"), n.length - 1)];
    const middle = stryMutAct_9fa48("514") ? n.slice(1, n.length - 1) && "" : stryMutAct_9fa48("513") ? false : stryMutAct_9fa48("512") ? true : (stryCov_9fa48("512", "513", "514"), (stryMutAct_9fa48("515") ? n : (stryCov_9fa48("515"), n.slice(1, stryMutAct_9fa48("516") ? n.length + 1 : (stryCov_9fa48("516"), n.length - 1)))) || (stryMutAct_9fa48("517") ? "Stryker was here!" : (stryCov_9fa48("517"), "")));
    let result = stryMutAct_9fa48("518") ? ["Stryker was here"] : (stryCov_9fa48("518"), []);
    result.push(last);
    result.push(first);
    if (stryMutAct_9fa48("522") ? middle.length <= 0 : stryMutAct_9fa48("521") ? middle.length >= 0 : stryMutAct_9fa48("520") ? false : stryMutAct_9fa48("519") ? true : (stryCov_9fa48("519", "520", "521", "522"), middle.length > 0)) result.push(middle);
    return result;
  }
}

// Testing framework
function testing_test() {
  if (stryMutAct_9fa48("523")) {
    {}
  } else {
    stryCov_9fa48("523");
    const input = stryMutAct_9fa48("524") ? "" : (stryCov_9fa48("524"), "75619");
    const expectedOutput = stryMutAct_9fa48("525") ? [] : (stryCov_9fa48("525"), [stryMutAct_9fa48("526") ? "" : (stryCov_9fa48("526"), "9"), stryMutAct_9fa48("527") ? "" : (stryCov_9fa48("527"), "7"), stryMutAct_9fa48("528") ? "" : (stryCov_9fa48("528"), "561")]);
    const result = solve(input);
    console.log(stryMutAct_9fa48("529") ? "" : (stryCov_9fa48("529"), "Input:"), input);
    console.log(stryMutAct_9fa48("530") ? "" : (stryCov_9fa48("530"), "Expected:"), expectedOutput);
    console.log(stryMutAct_9fa48("531") ? "" : (stryCov_9fa48("531"), "Got:"), result);
    if (stryMutAct_9fa48("534") ? JSON.stringify(result) !== JSON.stringify(expectedOutput) : stryMutAct_9fa48("533") ? false : stryMutAct_9fa48("532") ? true : (stryCov_9fa48("532", "533", "534"), JSON.stringify(result) === JSON.stringify(expectedOutput))) {
      if (stryMutAct_9fa48("535")) {
        {}
      } else {
        stryCov_9fa48("535");
        console.log(stryMutAct_9fa48("536") ? "" : (stryCov_9fa48("536"), "✅ Test Passed!"));
      }
    } else {
      if (stryMutAct_9fa48("537")) {
        {}
      } else {
        stryCov_9fa48("537");
        console.log(stryMutAct_9fa48("538") ? "" : (stryCov_9fa48("538"), "❌ Test Failed!"));
      }
    }
  }
}

// Run test
testing_test();