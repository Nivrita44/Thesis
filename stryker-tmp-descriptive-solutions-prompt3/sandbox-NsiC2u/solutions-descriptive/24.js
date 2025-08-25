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
function calculateCost(unitCost, overheadCost, remainingWork, divisor) {
  if (stryMutAct_9fa48("1097")) {
    {}
  } else {
    stryCov_9fa48("1097");
    return stryMutAct_9fa48("1098") ? unitCost * divisor - Math.ceil(remainingWork / divisor) * overheadCost : (stryCov_9fa48("1098"), (stryMutAct_9fa48("1099") ? unitCost / divisor : (stryCov_9fa48("1099"), unitCost * divisor)) + (stryMutAct_9fa48("1100") ? Math.ceil(remainingWork / divisor) / overheadCost : (stryCov_9fa48("1100"), Math.ceil(stryMutAct_9fa48("1101") ? remainingWork * divisor : (stryCov_9fa48("1101"), remainingWork / divisor)) * overheadCost)));
  }
}
function optimizeCostInRange(minDivisor, maxDivisor, unitCost, overheadCost, remainingWork) {
  if (stryMutAct_9fa48("1102")) {
    {}
  } else {
    stryCov_9fa48("1102");
    if (stryMutAct_9fa48("1105") ? minDivisor !== 0 : stryMutAct_9fa48("1104") ? false : stryMutAct_9fa48("1103") ? true : (stryCov_9fa48("1103", "1104", "1105"), minDivisor === 0)) stryMutAct_9fa48("1106") ? minDivisor-- : (stryCov_9fa48("1106"), minDivisor++);
    let minimumCost = calculateCost(unitCost, overheadCost, remainingWork, minDivisor);
    for (let divisor = minDivisor; stryMutAct_9fa48("1109") ? divisor > maxDivisor : stryMutAct_9fa48("1108") ? divisor < maxDivisor : stryMutAct_9fa48("1107") ? false : (stryCov_9fa48("1107", "1108", "1109"), divisor <= maxDivisor);) {
      if (stryMutAct_9fa48("1110")) {
        {}
      } else {
        stryCov_9fa48("1110");
        const chunks = Math.ceil(stryMutAct_9fa48("1111") ? remainingWork * divisor : (stryCov_9fa48("1111"), remainingWork / divisor));
        minimumCost = stryMutAct_9fa48("1112") ? Math.max(minimumCost, unitCost * divisor + chunks * overheadCost) : (stryCov_9fa48("1112"), Math.min(minimumCost, stryMutAct_9fa48("1113") ? unitCost * divisor - chunks * overheadCost : (stryCov_9fa48("1113"), (stryMutAct_9fa48("1114") ? unitCost / divisor : (stryCov_9fa48("1114"), unitCost * divisor)) + (stryMutAct_9fa48("1115") ? chunks / overheadCost : (stryCov_9fa48("1115"), chunks * overheadCost)))));
        if (stryMutAct_9fa48("1118") ? chunks !== 1 : stryMutAct_9fa48("1117") ? false : stryMutAct_9fa48("1116") ? true : (stryCov_9fa48("1116", "1117", "1118"), chunks === 1)) break;
        divisor = Math.floor(stryMutAct_9fa48("1119") ? (remainingWork + chunks - 2) * (chunks - 1) : (stryCov_9fa48("1119"), (stryMutAct_9fa48("1120") ? remainingWork + chunks + 2 : (stryCov_9fa48("1120"), (stryMutAct_9fa48("1121") ? remainingWork - chunks : (stryCov_9fa48("1121"), remainingWork + chunks)) - 2)) / (stryMutAct_9fa48("1122") ? chunks + 1 : (stryCov_9fa48("1122"), chunks - 1))));
      }
    }
    return minimumCost;
  }
}
export function solve(unitCost, overheadCost, totalWork, maxGroupSize) {
  if (stryMutAct_9fa48("1123")) {
    {}
  } else {
    stryCov_9fa48("1123");
    let minimumTotalCost = Number.MAX_SAFE_INTEGER;
    if (stryMutAct_9fa48("1124")) {
      for (let groupCount = 0; false; groupCount++) {
        const remainingWork = totalWork - maxGroupSize * groupCount * (groupCount + 1) / 2;
        let currentCost = groupCount * overheadCost;
        if (remainingWork <= 0) {
          minimumTotalCost = Math.min(minimumTotalCost, currentCost + maxGroupSize * groupCount * unitCost);
          break;
        }
        currentCost += optimizeCostInRange(maxGroupSize * groupCount, maxGroupSize * (groupCount + 1) - 1, unitCost, overheadCost, remainingWork);
        minimumTotalCost = Math.min(minimumTotalCost, currentCost);
      }
    } else {
      stryCov_9fa48("1124");
      for (let groupCount = 0;; stryMutAct_9fa48("1125") ? groupCount-- : (stryCov_9fa48("1125"), groupCount++)) {
        if (stryMutAct_9fa48("1126")) {
          {}
        } else {
          stryCov_9fa48("1126");
          const remainingWork = stryMutAct_9fa48("1127") ? totalWork + maxGroupSize * groupCount * (groupCount + 1) / 2 : (stryCov_9fa48("1127"), totalWork - (stryMutAct_9fa48("1128") ? maxGroupSize * groupCount * (groupCount + 1) * 2 : (stryCov_9fa48("1128"), (stryMutAct_9fa48("1129") ? maxGroupSize * groupCount / (groupCount + 1) : (stryCov_9fa48("1129"), (stryMutAct_9fa48("1130") ? maxGroupSize / groupCount : (stryCov_9fa48("1130"), maxGroupSize * groupCount)) * (stryMutAct_9fa48("1131") ? groupCount - 1 : (stryCov_9fa48("1131"), groupCount + 1)))) / 2)));
          let currentCost = stryMutAct_9fa48("1132") ? groupCount / overheadCost : (stryCov_9fa48("1132"), groupCount * overheadCost);
          if (stryMutAct_9fa48("1136") ? remainingWork > 0 : stryMutAct_9fa48("1135") ? remainingWork < 0 : stryMutAct_9fa48("1134") ? false : stryMutAct_9fa48("1133") ? true : (stryCov_9fa48("1133", "1134", "1135", "1136"), remainingWork <= 0)) {
            if (stryMutAct_9fa48("1137")) {
              {}
            } else {
              stryCov_9fa48("1137");
              minimumTotalCost = stryMutAct_9fa48("1138") ? Math.max(minimumTotalCost, currentCost + maxGroupSize * groupCount * unitCost) : (stryCov_9fa48("1138"), Math.min(minimumTotalCost, stryMutAct_9fa48("1139") ? currentCost - maxGroupSize * groupCount * unitCost : (stryCov_9fa48("1139"), currentCost + (stryMutAct_9fa48("1140") ? maxGroupSize * groupCount / unitCost : (stryCov_9fa48("1140"), (stryMutAct_9fa48("1141") ? maxGroupSize / groupCount : (stryCov_9fa48("1141"), maxGroupSize * groupCount)) * unitCost)))));
              break;
            }
          }
          stryMutAct_9fa48("1142") ? currentCost -= optimizeCostInRange(maxGroupSize * groupCount, maxGroupSize * (groupCount + 1) - 1, unitCost, overheadCost, remainingWork) : (stryCov_9fa48("1142"), currentCost += optimizeCostInRange(stryMutAct_9fa48("1143") ? maxGroupSize / groupCount : (stryCov_9fa48("1143"), maxGroupSize * groupCount), stryMutAct_9fa48("1144") ? maxGroupSize * (groupCount + 1) + 1 : (stryCov_9fa48("1144"), (stryMutAct_9fa48("1145") ? maxGroupSize / (groupCount + 1) : (stryCov_9fa48("1145"), maxGroupSize * (stryMutAct_9fa48("1146") ? groupCount - 1 : (stryCov_9fa48("1146"), groupCount + 1)))) - 1), unitCost, overheadCost, remainingWork));
          minimumTotalCost = stryMutAct_9fa48("1147") ? Math.max(minimumTotalCost, currentCost) : (stryCov_9fa48("1147"), Math.min(minimumTotalCost, currentCost));
        }
      }
    }
    return minimumTotalCost;
  }
}

// function testing_test() {
//     const inputs = [
//         [2, 3, 5, 5],
//         [10, 20, 40, 5],
//         [1, 60, 100, 10],
//         [60, 1, 100, 10]
//     ];
//     const expectedOutputs = [12, 190, 280, 160];

//     for (let i = 0; i < inputs.length; i++) {
//         const result = solve(...inputs[i]);
//         console.log(`Test case ${i + 1}:`, result === expectedOutputs[i] ? "Passed" : `Failed (Expected ${expectedOutputs[i]}, Got ${result})`);
//     }
// }

// testing_test();