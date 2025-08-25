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
export function solve(setX, setY) {
  if (stryMutAct_9fa48("1410")) {
    {}
  } else {
    stryCov_9fa48("1410");
    let totalX = 0,
      totalY = 0;
    let peakX = 0,
      peakY = 0;
    for (let i = 0; stryMutAct_9fa48("1413") ? i >= setX.length : stryMutAct_9fa48("1412") ? i <= setX.length : stryMutAct_9fa48("1411") ? false : (stryCov_9fa48("1411", "1412", "1413"), i < setX.length); stryMutAct_9fa48("1414") ? i-- : (stryCov_9fa48("1414"), i++)) {
      if (stryMutAct_9fa48("1415")) {
        {}
      } else {
        stryCov_9fa48("1415");
        stryMutAct_9fa48("1416") ? totalX -= setX[i] : (stryCov_9fa48("1416"), totalX += setX[i]);
        if (stryMutAct_9fa48("1420") ? setX[i] <= peakX : stryMutAct_9fa48("1419") ? setX[i] >= peakX : stryMutAct_9fa48("1418") ? false : stryMutAct_9fa48("1417") ? true : (stryCov_9fa48("1417", "1418", "1419", "1420"), setX[i] > peakX)) peakX = setX[i];
      }
    }
    for (let j = 0; stryMutAct_9fa48("1423") ? j >= setY.length : stryMutAct_9fa48("1422") ? j <= setY.length : stryMutAct_9fa48("1421") ? false : (stryCov_9fa48("1421", "1422", "1423"), j < setY.length); stryMutAct_9fa48("1424") ? j-- : (stryCov_9fa48("1424"), j++)) {
      if (stryMutAct_9fa48("1425")) {
        {}
      } else {
        stryCov_9fa48("1425");
        stryMutAct_9fa48("1426") ? totalY -= setY[j] : (stryCov_9fa48("1426"), totalY += setY[j]);
        if (stryMutAct_9fa48("1430") ? setY[j] <= peakY : stryMutAct_9fa48("1429") ? setY[j] >= peakY : stryMutAct_9fa48("1428") ? false : stryMutAct_9fa48("1427") ? true : (stryCov_9fa48("1427", "1428", "1429", "1430"), setY[j] > peakY)) peakY = setY[j];
      }
    }
    if (stryMutAct_9fa48("1434") ? totalX >= totalY : stryMutAct_9fa48("1433") ? totalX <= totalY : stryMutAct_9fa48("1432") ? false : stryMutAct_9fa48("1431") ? true : (stryCov_9fa48("1431", "1432", "1433", "1434"), totalX < totalY)) return stryMutAct_9fa48("1435") ? "" : (stryCov_9fa48("1435"), "-1");
    let diffVal = stryMutAct_9fa48("1436") ? totalX + totalY : (stryCov_9fa48("1436"), totalX - totalY);
    stryMutAct_9fa48("1437") ? setX : (stryCov_9fa48("1437"), setX.sort(stryMutAct_9fa48("1438") ? () => undefined : (stryCov_9fa48("1438"), (a, b) => stryMutAct_9fa48("1439") ? a + b : (stryCov_9fa48("1439"), a - b))));
    stryMutAct_9fa48("1440") ? setY : (stryCov_9fa48("1440"), setY.sort(stryMutAct_9fa48("1441") ? () => undefined : (stryCov_9fa48("1441"), (a, b) => stryMutAct_9fa48("1442") ? a + b : (stryCov_9fa48("1442"), a - b))));
    if (stryMutAct_9fa48("1445") ? diffVal !== 0 : stryMutAct_9fa48("1444") ? false : stryMutAct_9fa48("1443") ? true : (stryCov_9fa48("1443", "1444", "1445"), diffVal === 0)) {
      if (stryMutAct_9fa48("1446")) {
        {}
      } else {
        stryCov_9fa48("1446");
        return arraysMatch(setX, setY) ? (stryMutAct_9fa48("1450") ? peakX + 1 > 1000000000 : stryMutAct_9fa48("1449") ? peakX + 1 < 1000000000 : stryMutAct_9fa48("1448") ? false : stryMutAct_9fa48("1447") ? true : (stryCov_9fa48("1447", "1448", "1449", "1450"), (stryMutAct_9fa48("1451") ? peakX - 1 : (stryCov_9fa48("1451"), peakX + 1)) <= 1000000000)) ? stryMutAct_9fa48("1452") ? peakX - 1 : (stryCov_9fa48("1452"), peakX + 1) : stryMutAct_9fa48("1453") ? "" : (stryCov_9fa48("1453"), "-1") : stryMutAct_9fa48("1454") ? "" : (stryCov_9fa48("1454"), "-1");
      }
    }
    let factors = stryMutAct_9fa48("1455") ? ["Stryker was here"] : (stryCov_9fa48("1455"), []);
    for (let fac = 1; stryMutAct_9fa48("1458") ? fac * fac > diffVal : stryMutAct_9fa48("1457") ? fac * fac < diffVal : stryMutAct_9fa48("1456") ? false : (stryCov_9fa48("1456", "1457", "1458"), (stryMutAct_9fa48("1459") ? fac / fac : (stryCov_9fa48("1459"), fac * fac)) <= diffVal); stryMutAct_9fa48("1460") ? fac-- : (stryCov_9fa48("1460"), fac++)) {
      if (stryMutAct_9fa48("1461")) {
        {}
      } else {
        stryCov_9fa48("1461");
        if (stryMutAct_9fa48("1464") ? diffVal % fac !== 0 : stryMutAct_9fa48("1463") ? false : stryMutAct_9fa48("1462") ? true : (stryCov_9fa48("1462", "1463", "1464"), (stryMutAct_9fa48("1465") ? diffVal * fac : (stryCov_9fa48("1465"), diffVal % fac)) === 0)) {
          if (stryMutAct_9fa48("1466")) {
            {}
          } else {
            stryCov_9fa48("1466");
            factors.push(fac);
            if (stryMutAct_9fa48("1469") ? fac * fac === diffVal : stryMutAct_9fa48("1468") ? false : stryMutAct_9fa48("1467") ? true : (stryCov_9fa48("1467", "1468", "1469"), (stryMutAct_9fa48("1470") ? fac / fac : (stryCov_9fa48("1470"), fac * fac)) !== diffVal)) factors.push(stryMutAct_9fa48("1471") ? diffVal * fac : (stryCov_9fa48("1471"), diffVal / fac));
          }
        }
      }
    }
    stryMutAct_9fa48("1472") ? factors : (stryCov_9fa48("1472"), factors.sort(stryMutAct_9fa48("1473") ? () => undefined : (stryCov_9fa48("1473"), (a, b) => stryMutAct_9fa48("1474") ? a + b : (stryCov_9fa48("1474"), a - b))));
    for (let candidateFactor of factors) {
      if (stryMutAct_9fa48("1475")) {
        {}
      } else {
        stryCov_9fa48("1475");
        if (stryMutAct_9fa48("1478") ? (candidateFactor <= peakY || candidateFactor > peakX) && candidateFactor > 1000000000 : stryMutAct_9fa48("1477") ? false : stryMutAct_9fa48("1476") ? true : (stryCov_9fa48("1476", "1477", "1478"), (stryMutAct_9fa48("1480") ? candidateFactor <= peakY && candidateFactor > peakX : stryMutAct_9fa48("1479") ? false : (stryCov_9fa48("1479", "1480"), (stryMutAct_9fa48("1483") ? candidateFactor > peakY : stryMutAct_9fa48("1482") ? candidateFactor < peakY : stryMutAct_9fa48("1481") ? false : (stryCov_9fa48("1481", "1482", "1483"), candidateFactor <= peakY)) || (stryMutAct_9fa48("1486") ? candidateFactor <= peakX : stryMutAct_9fa48("1485") ? candidateFactor >= peakX : stryMutAct_9fa48("1484") ? false : (stryCov_9fa48("1484", "1485", "1486"), candidateFactor > peakX)))) || (stryMutAct_9fa48("1489") ? candidateFactor <= 1000000000 : stryMutAct_9fa48("1488") ? candidateFactor >= 1000000000 : stryMutAct_9fa48("1487") ? false : (stryCov_9fa48("1487", "1488", "1489"), candidateFactor > 1000000000)))) continue;
        let remainders = stryMutAct_9fa48("1490") ? ["Stryker was here"] : (stryCov_9fa48("1490"), []);
        for (let x of setX) {
          if (stryMutAct_9fa48("1491")) {
            {}
          } else {
            stryCov_9fa48("1491");
            remainders.push(stryMutAct_9fa48("1492") ? x * candidateFactor : (stryCov_9fa48("1492"), x % candidateFactor));
          }
        }
        stryMutAct_9fa48("1493") ? remainders : (stryCov_9fa48("1493"), remainders.sort(stryMutAct_9fa48("1494") ? () => undefined : (stryCov_9fa48("1494"), (a, b) => stryMutAct_9fa48("1495") ? a + b : (stryCov_9fa48("1495"), a - b))));
        if (stryMutAct_9fa48("1497") ? false : stryMutAct_9fa48("1496") ? true : (stryCov_9fa48("1496", "1497"), arraysMatch(remainders, setY))) {
          if (stryMutAct_9fa48("1498")) {
            {}
          } else {
            stryCov_9fa48("1498");
            return candidateFactor.toString();
          }
        }
      }
    }
    return stryMutAct_9fa48("1499") ? "" : (stryCov_9fa48("1499"), "-1");
  }
}
function arraysMatch(arr1, arr2) {
  if (stryMutAct_9fa48("1500")) {
    {}
  } else {
    stryCov_9fa48("1500");
    if (stryMutAct_9fa48("1503") ? arr1.length === arr2.length : stryMutAct_9fa48("1502") ? false : stryMutAct_9fa48("1501") ? true : (stryCov_9fa48("1501", "1502", "1503"), arr1.length !== arr2.length)) return stryMutAct_9fa48("1504") ? true : (stryCov_9fa48("1504"), false);
    for (let i = 0; stryMutAct_9fa48("1507") ? i >= arr1.length : stryMutAct_9fa48("1506") ? i <= arr1.length : stryMutAct_9fa48("1505") ? false : (stryCov_9fa48("1505", "1506", "1507"), i < arr1.length); stryMutAct_9fa48("1508") ? i-- : (stryCov_9fa48("1508"), i++)) {
      if (stryMutAct_9fa48("1509")) {
        {}
      } else {
        stryCov_9fa48("1509");
        if (stryMutAct_9fa48("1512") ? arr1[i] === arr2[i] : stryMutAct_9fa48("1511") ? false : stryMutAct_9fa48("1510") ? true : (stryCov_9fa48("1510", "1511", "1512"), arr1[i] !== arr2[i])) return stryMutAct_9fa48("1513") ? true : (stryCov_9fa48("1513"), false);
      }
    }
    return stryMutAct_9fa48("1514") ? false : (stryCov_9fa48("1514"), true);
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 setX: [3, 5, 2, 7],
//                 setY: [0, 1, 1, 1]
//             },
//             expected: "2"
//         },
//         {
//             input: {
//                 setX: [3, 1, 5, 2, 4],
//                 setY: [1, 2, 3, 4, 5]
//             },
//             expected: "31415926" || "6"
//         },
//         {
//             input: {
//                 setX: [2, 3, 4, 7, 8, 9],
//                 setY: [1, 2, 3, 6, 7, 8]
//             },
//             expected: "-1"
//         },
//         {
//             input: {
//                 setX: [21, 22, 25, 28, 20],
//                 setY: [0, 1, 2, 1, 0]
//             },
//             expected: "4"
//         },
//         {
//             input: {
//                 setX: [1, 1, 2, 3, 5, 8],
//                 setY: [0, 0, 1, 1, 0, 0]
//             },
//             expected: "-1"
//         }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { setX, setY } = testCases[i].input;
//         const expected = testCases[i].expected;
//         const result = solve(setX, setY);
//         console.log(`Test Case ${i + 1}: ${result === expected ? "Passed" : "Failed"}`);
//         if (result !== expected) {
//             console.log(`  Expected: ${expected}`);
//             console.log(`  Received: ${result}`);
//         }
//     }
// }

// testing_test();

//ok. output can many. verified