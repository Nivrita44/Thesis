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
  if (stryMutAct_9fa48("1329")) {
    {}
  } else {
    stryCov_9fa48("1329");
    const segments = stryMutAct_9fa48("1330") ? ["Stryker was here"] : (stryCov_9fa48("1330"), []);
    let currentSegment;
    for (let i = 0; stryMutAct_9fa48("1333") ? i >= length : stryMutAct_9fa48("1332") ? i <= length : stryMutAct_9fa48("1331") ? false : (stryCov_9fa48("1331", "1332", "1333"), i < length); stryMutAct_9fa48("1334") ? i-- : (stryCov_9fa48("1334"), i++)) {
      if (stryMutAct_9fa48("1335")) {
        {}
      } else {
        stryCov_9fa48("1335");
        if (stryMutAct_9fa48("1338") ? binaryString[i] !== binaryString[i - 1] : stryMutAct_9fa48("1337") ? false : stryMutAct_9fa48("1336") ? true : (stryCov_9fa48("1336", "1337", "1338"), binaryString[i] === binaryString[stryMutAct_9fa48("1339") ? i + 1 : (stryCov_9fa48("1339"), i - 1)])) {
          if (stryMutAct_9fa48("1340")) {
            {}
          } else {
            stryCov_9fa48("1340");
            stryMutAct_9fa48("1341") ? currentSegment.count-- : (stryCov_9fa48("1341"), currentSegment.count++);
            currentSegment.right = i;
          }
        } else {
          if (stryMutAct_9fa48("1342")) {
            {}
          } else {
            stryCov_9fa48("1342");
            currentSegment = stryMutAct_9fa48("1343") ? {} : (stryCov_9fa48("1343"), {
              count: 1,
              left: i,
              right: i
            });
            segments.push(currentSegment);
          }
        }
      }
    }
    if (stryMutAct_9fa48("1346") ? currentSegment.count === length || binaryString[0] === '0' : stryMutAct_9fa48("1345") ? false : stryMutAct_9fa48("1344") ? true : (stryCov_9fa48("1344", "1345", "1346"), (stryMutAct_9fa48("1348") ? currentSegment.count !== length : stryMutAct_9fa48("1347") ? true : (stryCov_9fa48("1347", "1348"), currentSegment.count === length)) && (stryMutAct_9fa48("1350") ? binaryString[0] !== '0' : stryMutAct_9fa48("1349") ? true : (stryCov_9fa48("1349", "1350"), binaryString[0] === (stryMutAct_9fa48("1351") ? "" : (stryCov_9fa48("1351"), '0')))))) {
      if (stryMutAct_9fa48("1352")) {
        {}
      } else {
        stryCov_9fa48("1352");
        return arithmeticSum(1, stryMutAct_9fa48("1353") ? length + 1 : (stryCov_9fa48("1353"), length - 1));
      }
    }
    let maxValue = 0;
    for (let i = 0; stryMutAct_9fa48("1356") ? i >= segments.length : stryMutAct_9fa48("1355") ? i <= segments.length : stryMutAct_9fa48("1354") ? false : (stryCov_9fa48("1354", "1355", "1356"), i < segments.length); stryMutAct_9fa48("1357") ? i-- : (stryCov_9fa48("1357"), i++)) {
      if (stryMutAct_9fa48("1358")) {
        {}
      } else {
        stryCov_9fa48("1358");
        const segment = segments[i];
        if (stryMutAct_9fa48("1361") ? binaryString[segment.left] !== '1' : stryMutAct_9fa48("1360") ? false : stryMutAct_9fa48("1359") ? true : (stryCov_9fa48("1359", "1360", "1361"), binaryString[segment.left] === (stryMutAct_9fa48("1362") ? "" : (stryCov_9fa48("1362"), '1')))) {
          if (stryMutAct_9fa48("1363")) {
            {}
          } else {
            stryCov_9fa48("1363");
            let tempSum;
            if (stryMutAct_9fa48("1367") ? segment.count <= 1 : stryMutAct_9fa48("1366") ? segment.count >= 1 : stryMutAct_9fa48("1365") ? false : stryMutAct_9fa48("1364") ? true : (stryCov_9fa48("1364", "1365", "1366", "1367"), segment.count > 1)) {
              if (stryMutAct_9fa48("1368")) {
                {}
              } else {
                stryCov_9fa48("1368");
                tempSum = stryMutAct_9fa48("1369") ? 1 - Math.max(computeTailSum(segments[i - 1], false), computeTailSum(segments[i + 1], true)) : (stryCov_9fa48("1369"), 1 + (stryMutAct_9fa48("1370") ? Math.min(computeTailSum(segments[i - 1], false), computeTailSum(segments[i + 1], true)) : (stryCov_9fa48("1370"), Math.max(computeTailSum(segments[stryMutAct_9fa48("1371") ? i + 1 : (stryCov_9fa48("1371"), i - 1)], stryMutAct_9fa48("1372") ? true : (stryCov_9fa48("1372"), false)), computeTailSum(segments[stryMutAct_9fa48("1373") ? i - 1 : (stryCov_9fa48("1373"), i + 1)], stryMutAct_9fa48("1374") ? false : (stryCov_9fa48("1374"), true))))));
              }
            } else {
              if (stryMutAct_9fa48("1375")) {
                {}
              } else {
                stryCov_9fa48("1375");
                tempSum = stryMutAct_9fa48("1376") ? 1 + computeTailSum(segments[i - 1], false) - computeTailSum(segments[i + 1], true) : (stryCov_9fa48("1376"), (stryMutAct_9fa48("1377") ? 1 - computeTailSum(segments[i - 1], false) : (stryCov_9fa48("1377"), 1 + computeTailSum(segments[stryMutAct_9fa48("1378") ? i + 1 : (stryCov_9fa48("1378"), i - 1)], stryMutAct_9fa48("1379") ? true : (stryCov_9fa48("1379"), false)))) + computeTailSum(segments[stryMutAct_9fa48("1380") ? i - 1 : (stryCov_9fa48("1380"), i + 1)], stryMutAct_9fa48("1381") ? false : (stryCov_9fa48("1381"), true)));
              }
            }
            maxValue = stryMutAct_9fa48("1382") ? Math.min(maxValue, tempSum) : (stryCov_9fa48("1382"), Math.max(maxValue, tempSum));
          }
        }
      }
    }
    return maxValue;
    function computeTailSum(segment, isRightSide) {
      if (stryMutAct_9fa48("1383")) {
        {}
      } else {
        stryCov_9fa48("1383");
        if (stryMutAct_9fa48("1386") ? false : stryMutAct_9fa48("1385") ? true : stryMutAct_9fa48("1384") ? segment : (stryCov_9fa48("1384", "1385", "1386"), !segment)) return 0;
        return isRightSide ? arithmeticSum(segment.left, segment.count) : arithmeticSum(stryMutAct_9fa48("1387") ? length - 1 + segment.right : (stryCov_9fa48("1387"), (stryMutAct_9fa48("1388") ? length + 1 : (stryCov_9fa48("1388"), length - 1)) - segment.right), segment.count);
      }
    }
    function arithmeticSum(start, count) {
      if (stryMutAct_9fa48("1389")) {
        {}
      } else {
        stryCov_9fa48("1389");
        return stryMutAct_9fa48("1390") ? (start + start + count - 1) * count * 2 : (stryCov_9fa48("1390"), (stryMutAct_9fa48("1391") ? (start + start + count - 1) / count : (stryCov_9fa48("1391"), (stryMutAct_9fa48("1392") ? start + start + count + 1 : (stryCov_9fa48("1392"), (stryMutAct_9fa48("1393") ? start + start - count : (stryCov_9fa48("1393"), (stryMutAct_9fa48("1394") ? start - start : (stryCov_9fa48("1394"), start + start)) + count)) - 1)) * count)) / 2);
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