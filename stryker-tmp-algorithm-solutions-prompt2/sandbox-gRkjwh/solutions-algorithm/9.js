// Core logic function
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
export function solve(original, firstRemoved, secondRemoved) {
  if (stryMutAct_9fa48("1029")) {
    {}
  } else {
    stryCov_9fa48("1029");
    // Frequency map after first removal
    const freq = {};
    for (const num of original) {
      if (stryMutAct_9fa48("1030")) {
        {}
      } else {
        stryCov_9fa48("1030");
        freq[num] = stryMutAct_9fa48("1031") ? (freq[num] || 0) - 1 : (stryCov_9fa48("1031"), (stryMutAct_9fa48("1034") ? freq[num] && 0 : stryMutAct_9fa48("1033") ? false : stryMutAct_9fa48("1032") ? true : (stryCov_9fa48("1032", "1033", "1034"), freq[num] || 0)) + 1);
      }
    }
    for (const num of firstRemoved) {
      if (stryMutAct_9fa48("1035")) {
        {}
      } else {
        stryCov_9fa48("1035");
        stryMutAct_9fa48("1036") ? freq[num]++ : (stryCov_9fa48("1036"), freq[num]--);
      }
    }
    let firstMissing;
    for (const key in freq) {
      if (stryMutAct_9fa48("1037")) {
        {}
      } else {
        stryCov_9fa48("1037");
        if (stryMutAct_9fa48("1041") ? freq[key] <= 0 : stryMutAct_9fa48("1040") ? freq[key] >= 0 : stryMutAct_9fa48("1039") ? false : stryMutAct_9fa48("1038") ? true : (stryCov_9fa48("1038", "1039", "1040", "1041"), freq[key] > 0)) {
          if (stryMutAct_9fa48("1042")) {
            {}
          } else {
            stryCov_9fa48("1042");
            firstMissing = stryMutAct_9fa48("1043") ? -key : (stryCov_9fa48("1043"), +key);
            break;
          }
        }
      }
    }

    // Frequency map after second removal
    const freq2 = {};
    for (const num of original) {
      if (stryMutAct_9fa48("1044")) {
        {}
      } else {
        stryCov_9fa48("1044");
        freq2[num] = stryMutAct_9fa48("1045") ? (freq2[num] || 0) - 1 : (stryCov_9fa48("1045"), (stryMutAct_9fa48("1048") ? freq2[num] && 0 : stryMutAct_9fa48("1047") ? false : stryMutAct_9fa48("1046") ? true : (stryCov_9fa48("1046", "1047", "1048"), freq2[num] || 0)) + 1);
      }
    }
    for (const num of secondRemoved) {
      if (stryMutAct_9fa48("1049")) {
        {}
      } else {
        stryCov_9fa48("1049");
        stryMutAct_9fa48("1050") ? freq2[num]++ : (stryCov_9fa48("1050"), freq2[num]--);
      }
    }
    stryMutAct_9fa48("1051") ? freq2[firstMissing]++ : (stryCov_9fa48("1051"), freq2[firstMissing]--); // remove the first missing one more time

    let secondMissing;
    for (const key in freq2) {
      if (stryMutAct_9fa48("1052")) {
        {}
      } else {
        stryCov_9fa48("1052");
        if (stryMutAct_9fa48("1056") ? freq2[key] <= 0 : stryMutAct_9fa48("1055") ? freq2[key] >= 0 : stryMutAct_9fa48("1054") ? false : stryMutAct_9fa48("1053") ? true : (stryCov_9fa48("1053", "1054", "1055", "1056"), freq2[key] > 0)) {
          if (stryMutAct_9fa48("1057")) {
            {}
          } else {
            stryCov_9fa48("1057");
            secondMissing = stryMutAct_9fa48("1058") ? -key : (stryCov_9fa48("1058"), +key);
            break;
          }
        }
      }
    }
    return stryMutAct_9fa48("1059") ? [] : (stryCov_9fa48("1059"), [firstMissing, secondMissing]);
  }
}

// Test function
// function testing_test() {
//     const original = [1, 5, 8, 123, 7];
//     const firstRemoved = [123, 7, 5, 1];
//     const secondRemoved = [5, 1, 7];
//     const expected = [8, 123];

//     const result = solve(original, firstRemoved, secondRemoved);

//     const pass = JSON.stringify(result) === JSON.stringify(expected);
//     console.log(`Test 1: Expected = [${expected}], Got = [${result}] => ${pass ? "PASS" : "FAIL"}`);
// }

// // Run test if run directly
// if (require.main === module) {
//     testing_test();
// }