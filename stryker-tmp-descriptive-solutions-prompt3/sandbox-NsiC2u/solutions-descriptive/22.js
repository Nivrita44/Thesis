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
export function solve(numEnemies, maxHits, requiredEnemies, enemyHealth, enemyPositions) {
  if (stryMutAct_9fa48("978")) {
    {}
  } else {
    stryCov_9fa48("978");
    let minimumTime = Infinity;
    let low = 1,
      high = 1e9;
    while (stryMutAct_9fa48("981") ? low > high : stryMutAct_9fa48("980") ? low < high : stryMutAct_9fa48("979") ? false : (stryCov_9fa48("979", "980", "981"), low <= high)) {
      if (stryMutAct_9fa48("982")) {
        {}
      } else {
        stryCov_9fa48("982");
        const midTime = Math.floor(stryMutAct_9fa48("983") ? (low + high) * 2 : (stryCov_9fa48("983"), (stryMutAct_9fa48("984") ? low - high : (stryCov_9fa48("984"), low + high)) / 2));
        const attackRanges = stryMutAct_9fa48("985") ? ["Stryker was here"] : (stryCov_9fa48("985"), []);
        for (let i = 0; stryMutAct_9fa48("988") ? i >= numEnemies : stryMutAct_9fa48("987") ? i <= numEnemies : stryMutAct_9fa48("986") ? false : (stryCov_9fa48("986", "987", "988"), i < numEnemies); stryMutAct_9fa48("989") ? i-- : (stryCov_9fa48("989"), i++)) {
          if (stryMutAct_9fa48("990")) {
            {}
          } else {
            stryCov_9fa48("990");
            const hitsNeeded = Math.ceil(stryMutAct_9fa48("991") ? enemyHealth[i] * midTime : (stryCov_9fa48("991"), enemyHealth[i] / midTime));
            const extraHits = stryMutAct_9fa48("992") ? maxHits + hitsNeeded : (stryCov_9fa48("992"), maxHits - hitsNeeded);
            const rangeStart = stryMutAct_9fa48("993") ? enemyPositions[i] + extraHits : (stryCov_9fa48("993"), enemyPositions[i] - extraHits);
            const rangeEnd = stryMutAct_9fa48("994") ? enemyPositions[i] - extraHits : (stryCov_9fa48("994"), enemyPositions[i] + extraHits);
            if (stryMutAct_9fa48("998") ? rangeStart > rangeEnd : stryMutAct_9fa48("997") ? rangeStart < rangeEnd : stryMutAct_9fa48("996") ? false : stryMutAct_9fa48("995") ? true : (stryCov_9fa48("995", "996", "997", "998"), rangeStart <= rangeEnd)) {
              if (stryMutAct_9fa48("999")) {
                {}
              } else {
                stryCov_9fa48("999");
                attackRanges.push(stryMutAct_9fa48("1000") ? [] : (stryCov_9fa48("1000"), [rangeStart, 1])); // Start of range
                attackRanges.push(stryMutAct_9fa48("1001") ? [] : (stryCov_9fa48("1001"), [stryMutAct_9fa48("1002") ? rangeEnd - 1 : (stryCov_9fa48("1002"), rangeEnd + 1), stryMutAct_9fa48("1003") ? +1 : (stryCov_9fa48("1003"), -1)])); // End of range
              }
            }
          }
        }

        // Sort the attackRanges based on position
        stryMutAct_9fa48("1004") ? attackRanges : (stryCov_9fa48("1004"), attackRanges.sort(stryMutAct_9fa48("1005") ? () => undefined : (stryCov_9fa48("1005"), (a, b) => stryMutAct_9fa48("1006") ? a[0] + b[0] : (stryCov_9fa48("1006"), a[0] - b[0]))));
        let activeCount = 0;
        let isEnough = stryMutAct_9fa48("1007") ? true : (stryCov_9fa48("1007"), false);
        for (let j = 0; stryMutAct_9fa48("1010") ? j >= attackRanges.length : stryMutAct_9fa48("1009") ? j <= attackRanges.length : stryMutAct_9fa48("1008") ? false : (stryCov_9fa48("1008", "1009", "1010"), j < attackRanges.length); stryMutAct_9fa48("1011") ? j-- : (stryCov_9fa48("1011"), j++)) {
          if (stryMutAct_9fa48("1012")) {
            {}
          } else {
            stryCov_9fa48("1012");
            stryMutAct_9fa48("1013") ? activeCount -= attackRanges[j][1] : (stryCov_9fa48("1013"), activeCount += attackRanges[j][1]);
            if (stryMutAct_9fa48("1017") ? activeCount < requiredEnemies : stryMutAct_9fa48("1016") ? activeCount > requiredEnemies : stryMutAct_9fa48("1015") ? false : stryMutAct_9fa48("1014") ? true : (stryCov_9fa48("1014", "1015", "1016", "1017"), activeCount >= requiredEnemies)) {
              if (stryMutAct_9fa48("1018")) {
                {}
              } else {
                stryCov_9fa48("1018");
                isEnough = stryMutAct_9fa48("1019") ? false : (stryCov_9fa48("1019"), true);
                break;
              }
            }
          }
        }
        if (stryMutAct_9fa48("1021") ? false : stryMutAct_9fa48("1020") ? true : (stryCov_9fa48("1020", "1021"), isEnough)) {
          if (stryMutAct_9fa48("1022")) {
            {}
          } else {
            stryCov_9fa48("1022");
            minimumTime = midTime;
            high = stryMutAct_9fa48("1023") ? midTime + 1 : (stryCov_9fa48("1023"), midTime - 1);
          }
        } else {
          if (stryMutAct_9fa48("1024")) {
            {}
          } else {
            stryCov_9fa48("1024");
            low = stryMutAct_9fa48("1025") ? midTime - 1 : (stryCov_9fa48("1025"), midTime + 1);
          }
        }
      }
    }
    return (stryMutAct_9fa48("1028") ? minimumTime !== Infinity : stryMutAct_9fa48("1027") ? false : stryMutAct_9fa48("1026") ? true : (stryCov_9fa48("1026", "1027", "1028"), minimumTime === Infinity)) ? stryMutAct_9fa48("1029") ? +1 : (stryCov_9fa48("1029"), -1) : minimumTime;
  }
}
function testing_test() {
  if (stryMutAct_9fa48("1030")) {
    {}
  } else {
    stryCov_9fa48("1030");
    const testCases = stryMutAct_9fa48("1031") ? [] : (stryCov_9fa48("1031"), [stryMutAct_9fa48("1032") ? {} : (stryCov_9fa48("1032"), {
      input: stryMutAct_9fa48("1033") ? [] : (stryCov_9fa48("1033"), [5, 5, 3, stryMutAct_9fa48("1034") ? [] : (stryCov_9fa48("1034"), [7, 7, 7, 7, 7]), stryMutAct_9fa48("1035") ? [] : (stryCov_9fa48("1035"), [1, 2, 3, 4, 5])]),
      expected: 2
    }), stryMutAct_9fa48("1036") ? {} : (stryCov_9fa48("1036"), {
      input: stryMutAct_9fa48("1037") ? [] : (stryCov_9fa48("1037"), [9, 5, 9, stryMutAct_9fa48("1038") ? [] : (stryCov_9fa48("1038"), [2, 4, 6, 8, 10, 8, 6, 4, 2]), stryMutAct_9fa48("1039") ? [] : (stryCov_9fa48("1039"), [1, 2, 3, 4, 5, 6, 7, 8, 9])]),
      expected: 2
    }), stryMutAct_9fa48("1040") ? {} : (stryCov_9fa48("1040"), {
      input: stryMutAct_9fa48("1041") ? [] : (stryCov_9fa48("1041"), [2, 10, 2, stryMutAct_9fa48("1042") ? [] : (stryCov_9fa48("1042"), [1, 1]), stryMutAct_9fa48("1043") ? [] : (stryCov_9fa48("1043"), [1, 20])]),
      expected: stryMutAct_9fa48("1044") ? +1 : (stryCov_9fa48("1044"), -1)
    }), stryMutAct_9fa48("1045") ? {} : (stryCov_9fa48("1045"), {
      input: stryMutAct_9fa48("1046") ? [] : (stryCov_9fa48("1046"), [2, 2, 2, stryMutAct_9fa48("1047") ? [] : (stryCov_9fa48("1047"), [1000000000, 1]), stryMutAct_9fa48("1048") ? [] : (stryCov_9fa48("1048"), [1, 3])]),
      expected: 1000000000
    })]);
    for (let i = 0; stryMutAct_9fa48("1051") ? i >= testCases.length : stryMutAct_9fa48("1050") ? i <= testCases.length : stryMutAct_9fa48("1049") ? false : (stryCov_9fa48("1049", "1050", "1051"), i < testCases.length); stryMutAct_9fa48("1052") ? i-- : (stryCov_9fa48("1052"), i++)) {
      if (stryMutAct_9fa48("1053")) {
        {}
      } else {
        stryCov_9fa48("1053");
        const {
          input,
          expected
        } = testCases[i];
        const result = solve(...input);
        console.log(stryMutAct_9fa48("1054") ? `` : (stryCov_9fa48("1054"), `Test Case ${stryMutAct_9fa48("1055") ? i - 1 : (stryCov_9fa48("1055"), i + 1)}:`), (stryMutAct_9fa48("1058") ? result !== expected : stryMutAct_9fa48("1057") ? false : stryMutAct_9fa48("1056") ? true : (stryCov_9fa48("1056", "1057", "1058"), result === expected)) ? stryMutAct_9fa48("1059") ? "" : (stryCov_9fa48("1059"), "Passed") : stryMutAct_9fa48("1060") ? `` : (stryCov_9fa48("1060"), `Failed (Expected: ${expected}, Got: ${result})`));
      }
    }
  }
}
testing_test();