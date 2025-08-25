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
export function solve(length, binaryString) {
  if (stryMutAct_9fa48("1163")) {
    {}
  } else {
    stryCov_9fa48("1163");
    const segments = stryMutAct_9fa48("1164") ? ["Stryker was here"] : (stryCov_9fa48("1164"), []);
    let currentSegment;
    for (let i = 0; stryMutAct_9fa48("1167") ? i >= length : stryMutAct_9fa48("1166") ? i <= length : stryMutAct_9fa48("1165") ? false : (stryCov_9fa48("1165", "1166", "1167"), i < length); stryMutAct_9fa48("1168") ? i-- : (stryCov_9fa48("1168"), i++)) {
      if (stryMutAct_9fa48("1169")) {
        {}
      } else {
        stryCov_9fa48("1169");
        if (stryMutAct_9fa48("1172") ? binaryString[i] !== binaryString[i - 1] : stryMutAct_9fa48("1171") ? false : stryMutAct_9fa48("1170") ? true : (stryCov_9fa48("1170", "1171", "1172"), binaryString[i] === binaryString[stryMutAct_9fa48("1173") ? i + 1 : (stryCov_9fa48("1173"), i - 1)])) {
          if (stryMutAct_9fa48("1174")) {
            {}
          } else {
            stryCov_9fa48("1174");
            stryMutAct_9fa48("1175") ? currentSegment.count-- : (stryCov_9fa48("1175"), currentSegment.count++);
            currentSegment.right = i;
          }
        } else {
          if (stryMutAct_9fa48("1176")) {
            {}
          } else {
            stryCov_9fa48("1176");
            currentSegment = stryMutAct_9fa48("1177") ? {} : (stryCov_9fa48("1177"), {
              count: 1,
              left: i,
              right: i
            });
            segments.push(currentSegment);
          }
        }
      }
    }
    if (stryMutAct_9fa48("1180") ? currentSegment.count === length || binaryString[0] === '0' : stryMutAct_9fa48("1179") ? false : stryMutAct_9fa48("1178") ? true : (stryCov_9fa48("1178", "1179", "1180"), (stryMutAct_9fa48("1182") ? currentSegment.count !== length : stryMutAct_9fa48("1181") ? true : (stryCov_9fa48("1181", "1182"), currentSegment.count === length)) && (stryMutAct_9fa48("1184") ? binaryString[0] !== '0' : stryMutAct_9fa48("1183") ? true : (stryCov_9fa48("1183", "1184"), binaryString[0] === (stryMutAct_9fa48("1185") ? "" : (stryCov_9fa48("1185"), '0')))))) {
      if (stryMutAct_9fa48("1186")) {
        {}
      } else {
        stryCov_9fa48("1186");
        return arithmeticSum(1, stryMutAct_9fa48("1187") ? length + 1 : (stryCov_9fa48("1187"), length - 1));
      }
    }
    let maxValue = 0;
    for (let i = 0; stryMutAct_9fa48("1190") ? i >= segments.length : stryMutAct_9fa48("1189") ? i <= segments.length : stryMutAct_9fa48("1188") ? false : (stryCov_9fa48("1188", "1189", "1190"), i < segments.length); stryMutAct_9fa48("1191") ? i-- : (stryCov_9fa48("1191"), i++)) {
      if (stryMutAct_9fa48("1192")) {
        {}
      } else {
        stryCov_9fa48("1192");
        const segment = segments[i];
        if (stryMutAct_9fa48("1195") ? binaryString[segment.left] !== '1' : stryMutAct_9fa48("1194") ? false : stryMutAct_9fa48("1193") ? true : (stryCov_9fa48("1193", "1194", "1195"), binaryString[segment.left] === (stryMutAct_9fa48("1196") ? "" : (stryCov_9fa48("1196"), '1')))) {
          if (stryMutAct_9fa48("1197")) {
            {}
          } else {
            stryCov_9fa48("1197");
            let tempSum;
            if (stryMutAct_9fa48("1201") ? segment.count <= 1 : stryMutAct_9fa48("1200") ? segment.count >= 1 : stryMutAct_9fa48("1199") ? false : stryMutAct_9fa48("1198") ? true : (stryCov_9fa48("1198", "1199", "1200", "1201"), segment.count > 1)) {
              if (stryMutAct_9fa48("1202")) {
                {}
              } else {
                stryCov_9fa48("1202");
                tempSum = stryMutAct_9fa48("1203") ? 1 - Math.max(computeTailSum(segments[i - 1], false), computeTailSum(segments[i + 1], true)) : (stryCov_9fa48("1203"), 1 + (stryMutAct_9fa48("1204") ? Math.min(computeTailSum(segments[i - 1], false), computeTailSum(segments[i + 1], true)) : (stryCov_9fa48("1204"), Math.max(computeTailSum(segments[stryMutAct_9fa48("1205") ? i + 1 : (stryCov_9fa48("1205"), i - 1)], stryMutAct_9fa48("1206") ? true : (stryCov_9fa48("1206"), false)), computeTailSum(segments[stryMutAct_9fa48("1207") ? i - 1 : (stryCov_9fa48("1207"), i + 1)], stryMutAct_9fa48("1208") ? false : (stryCov_9fa48("1208"), true))))));
              }
            } else {
              if (stryMutAct_9fa48("1209")) {
                {}
              } else {
                stryCov_9fa48("1209");
                tempSum = stryMutAct_9fa48("1210") ? 1 + computeTailSum(segments[i - 1], false) - computeTailSum(segments[i + 1], true) : (stryCov_9fa48("1210"), (stryMutAct_9fa48("1211") ? 1 - computeTailSum(segments[i - 1], false) : (stryCov_9fa48("1211"), 1 + computeTailSum(segments[stryMutAct_9fa48("1212") ? i + 1 : (stryCov_9fa48("1212"), i - 1)], stryMutAct_9fa48("1213") ? true : (stryCov_9fa48("1213"), false)))) + computeTailSum(segments[stryMutAct_9fa48("1214") ? i - 1 : (stryCov_9fa48("1214"), i + 1)], stryMutAct_9fa48("1215") ? false : (stryCov_9fa48("1215"), true)));
              }
            }
            maxValue = stryMutAct_9fa48("1216") ? Math.min(maxValue, tempSum) : (stryCov_9fa48("1216"), Math.max(maxValue, tempSum));
          }
        }
      }
    }
    return maxValue;
    function computeTailSum(segment, isRightSide) {
      if (stryMutAct_9fa48("1217")) {
        {}
      } else {
        stryCov_9fa48("1217");
        if (stryMutAct_9fa48("1220") ? false : stryMutAct_9fa48("1219") ? true : stryMutAct_9fa48("1218") ? segment : (stryCov_9fa48("1218", "1219", "1220"), !segment)) return 0;
        return isRightSide ? arithmeticSum(segment.left, segment.count) : arithmeticSum(stryMutAct_9fa48("1221") ? length - 1 + segment.right : (stryCov_9fa48("1221"), (stryMutAct_9fa48("1222") ? length + 1 : (stryCov_9fa48("1222"), length - 1)) - segment.right), segment.count);
      }
    }
    function arithmeticSum(start, count) {
      if (stryMutAct_9fa48("1223")) {
        {}
      } else {
        stryCov_9fa48("1223");
        return stryMutAct_9fa48("1224") ? (start + start + count - 1) * count * 2 : (stryCov_9fa48("1224"), (stryMutAct_9fa48("1225") ? (start + start + count - 1) / count : (stryCov_9fa48("1225"), (stryMutAct_9fa48("1226") ? start + start + count + 1 : (stryCov_9fa48("1226"), (stryMutAct_9fa48("1227") ? start + start - count : (stryCov_9fa48("1227"), (stryMutAct_9fa48("1228") ? start - start : (stryCov_9fa48("1228"), start + start)) + count)) - 1)) * count)) / 2);
      }
    }
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [3, '000'], expected: 3 },
//         { input: [4, '0010'], expected: 9 },
//         { input: [7, '1011001'], expected: 10 },
//         { input: [4, '0001'], expected: 7 },
//         { input: [2, '11'], expected: 1 },
//         { input: [1, '0'], expected: 0 },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const result = solve(...input);
//         console.log(`Test case ${i + 1}:`, result === expected ? 'Passed' : `Failed (Expected ${expected}, got ${result})`);
//     }
// }

// testing_test();