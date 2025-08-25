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
export function solve(xBig, yBig) {
  if (stryMutAct_9fa48("1425")) {
    {}
  } else {
    stryCov_9fa48("1425");
    const MAX_BITS = 60;
    const powersOfTwo = stryMutAct_9fa48("1426") ? Array().fill(1n) : (stryCov_9fa48("1426"), Array(stryMutAct_9fa48("1427") ? MAX_BITS - 1 : (stryCov_9fa48("1427"), MAX_BITS + 1)).fill(1n));
    for (let i = 1; stryMutAct_9fa48("1430") ? i > MAX_BITS : stryMutAct_9fa48("1429") ? i < MAX_BITS : stryMutAct_9fa48("1428") ? false : (stryCov_9fa48("1428", "1429", "1430"), i <= MAX_BITS); stryMutAct_9fa48("1431") ? i-- : (stryCov_9fa48("1431"), i++)) {
      if (stryMutAct_9fa48("1432")) {
        {}
      } else {
        stryCov_9fa48("1432");
        powersOfTwo[i] = stryMutAct_9fa48("1433") ? powersOfTwo[i - 1] / 2n : (stryCov_9fa48("1433"), powersOfTwo[stryMutAct_9fa48("1434") ? i + 1 : (stryCov_9fa48("1434"), i - 1)] * 2n);
      }
    }
    const dp = Array.from(stryMutAct_9fa48("1435") ? {} : (stryCov_9fa48("1435"), {
      length: stryMutAct_9fa48("1436") ? MAX_BITS - 1 : (stryCov_9fa48("1436"), MAX_BITS + 1)
    }), stryMutAct_9fa48("1437") ? () => undefined : (stryCov_9fa48("1437"), () => Array.from(stryMutAct_9fa48("1438") ? {} : (stryCov_9fa48("1438"), {
      length: stryMutAct_9fa48("1439") ? MAX_BITS - 1 : (stryCov_9fa48("1439"), MAX_BITS + 1)
    }), stryMutAct_9fa48("1440") ? () => undefined : (stryCov_9fa48("1440"), () => stryMutAct_9fa48("1441") ? Array().fill(Infinity) : (stryCov_9fa48("1441"), Array(stryMutAct_9fa48("1442") ? MAX_BITS - 1 : (stryCov_9fa48("1442"), MAX_BITS + 1)).fill(Infinity))))));
    dp[0][0].fill(0n);
    function update(i, j, k, val) {
      if (stryMutAct_9fa48("1443")) {
        {}
      } else {
        stryCov_9fa48("1443");
        if (stryMutAct_9fa48("1446") ? i <= MAX_BITS || j <= MAX_BITS : stryMutAct_9fa48("1445") ? false : stryMutAct_9fa48("1444") ? true : (stryCov_9fa48("1444", "1445", "1446"), (stryMutAct_9fa48("1449") ? i > MAX_BITS : stryMutAct_9fa48("1448") ? i < MAX_BITS : stryMutAct_9fa48("1447") ? true : (stryCov_9fa48("1447", "1448", "1449"), i <= MAX_BITS)) && (stryMutAct_9fa48("1452") ? j > MAX_BITS : stryMutAct_9fa48("1451") ? j < MAX_BITS : stryMutAct_9fa48("1450") ? true : (stryCov_9fa48("1450", "1451", "1452"), j <= MAX_BITS)))) {
          if (stryMutAct_9fa48("1453")) {
            {}
          } else {
            stryCov_9fa48("1453");
            dp[i][j][k] = (stryMutAct_9fa48("1457") ? dp[i][j][k] >= val : stryMutAct_9fa48("1456") ? dp[i][j][k] <= val : stryMutAct_9fa48("1455") ? false : stryMutAct_9fa48("1454") ? true : (stryCov_9fa48("1454", "1455", "1456", "1457"), dp[i][j][k] < val)) ? dp[i][j][k] : val;
          }
        }
      }
    }
    for (let i = 0; stryMutAct_9fa48("1460") ? i > MAX_BITS : stryMutAct_9fa48("1459") ? i < MAX_BITS : stryMutAct_9fa48("1458") ? false : (stryCov_9fa48("1458", "1459", "1460"), i <= MAX_BITS); stryMutAct_9fa48("1461") ? i-- : (stryCov_9fa48("1461"), i++)) {
      if (stryMutAct_9fa48("1462")) {
        {}
      } else {
        stryCov_9fa48("1462");
        for (let j = 0; stryMutAct_9fa48("1465") ? j > MAX_BITS : stryMutAct_9fa48("1464") ? j < MAX_BITS : stryMutAct_9fa48("1463") ? false : (stryCov_9fa48("1463", "1464", "1465"), j <= MAX_BITS); stryMutAct_9fa48("1466") ? j-- : (stryCov_9fa48("1466"), j++)) {
          if (stryMutAct_9fa48("1467")) {
            {}
          } else {
            stryCov_9fa48("1467");
            for (let k = MAX_BITS; stryMutAct_9fa48("1470") ? k < 1 : stryMutAct_9fa48("1469") ? k > 1 : stryMutAct_9fa48("1468") ? false : (stryCov_9fa48("1468", "1469", "1470"), k >= 1); stryMutAct_9fa48("1471") ? k++ : (stryCov_9fa48("1471"), k--)) {
              if (stryMutAct_9fa48("1472")) {
                {}
              } else {
                stryCov_9fa48("1472");
                if (stryMutAct_9fa48("1475") ? dp[i][j][k] !== Infinity : stryMutAct_9fa48("1474") ? false : stryMutAct_9fa48("1473") ? true : (stryCov_9fa48("1473", "1474", "1475"), dp[i][j][k] === Infinity)) continue;
                const cost = stryMutAct_9fa48("1476") ? dp[i][j][k] - powersOfTwo[k - 1] : (stryCov_9fa48("1476"), dp[i][j][k] + powersOfTwo[stryMutAct_9fa48("1477") ? k + 1 : (stryCov_9fa48("1477"), k - 1)]);
                update(stryMutAct_9fa48("1478") ? i + k + 1 : (stryCov_9fa48("1478"), (stryMutAct_9fa48("1479") ? i - k : (stryCov_9fa48("1479"), i + k)) - 1), j, stryMutAct_9fa48("1480") ? k + 1 : (stryCov_9fa48("1480"), k - 1), cost);
                update(i, stryMutAct_9fa48("1481") ? j + k + 1 : (stryCov_9fa48("1481"), (stryMutAct_9fa48("1482") ? j - k : (stryCov_9fa48("1482"), j + k)) - 1), stryMutAct_9fa48("1483") ? k + 1 : (stryCov_9fa48("1483"), k - 1), cost);
                update(i, j, stryMutAct_9fa48("1484") ? k + 1 : (stryCov_9fa48("1484"), k - 1), dp[i][j][k]);
              }
            }
            for (let k = 1; stryMutAct_9fa48("1487") ? k > MAX_BITS : stryMutAct_9fa48("1486") ? k < MAX_BITS : stryMutAct_9fa48("1485") ? false : (stryCov_9fa48("1485", "1486", "1487"), k <= MAX_BITS); stryMutAct_9fa48("1488") ? k-- : (stryCov_9fa48("1488"), k++)) {
              if (stryMutAct_9fa48("1489")) {
                {}
              } else {
                stryCov_9fa48("1489");
                update(i, j, 0, dp[i][j][k]);
              }
            }
          }
        }
      }
    }
    const xAncestors = new Map();
    let x = xBig;
    for (let i = 0; stryMutAct_9fa48("1492") ? i > MAX_BITS : stryMutAct_9fa48("1491") ? i < MAX_BITS : stryMutAct_9fa48("1490") ? false : (stryCov_9fa48("1490", "1491", "1492"), i <= MAX_BITS); stryMutAct_9fa48("1493") ? i-- : (stryCov_9fa48("1493"), i++)) {
      if (stryMutAct_9fa48("1494")) {
        {}
      } else {
        stryCov_9fa48("1494");
        xAncestors.set(x, i);
        if (stryMutAct_9fa48("1497") ? x !== 0n : stryMutAct_9fa48("1496") ? false : stryMutAct_9fa48("1495") ? true : (stryCov_9fa48("1495", "1496", "1497"), x === 0n)) break;
        x = stryMutAct_9fa48("1498") ? x * 2n : (stryCov_9fa48("1498"), x / 2n);
      }
    }
    let y = yBig;
    let answer = Infinity;
    for (let i = 0; stryMutAct_9fa48("1501") ? i > MAX_BITS : stryMutAct_9fa48("1500") ? i < MAX_BITS : stryMutAct_9fa48("1499") ? false : (stryCov_9fa48("1499", "1500", "1501"), i <= MAX_BITS); stryMutAct_9fa48("1502") ? i-- : (stryCov_9fa48("1502"), i++)) {
      if (stryMutAct_9fa48("1503")) {
        {}
      } else {
        stryCov_9fa48("1503");
        if (stryMutAct_9fa48("1505") ? false : stryMutAct_9fa48("1504") ? true : (stryCov_9fa48("1504", "1505"), xAncestors.has(y))) {
          if (stryMutAct_9fa48("1506")) {
            {}
          } else {
            stryCov_9fa48("1506");
            const j = xAncestors.get(y);
            answer = (stryMutAct_9fa48("1510") ? answer >= dp[j][i][0] : stryMutAct_9fa48("1509") ? answer <= dp[j][i][0] : stryMutAct_9fa48("1508") ? false : stryMutAct_9fa48("1507") ? true : (stryCov_9fa48("1507", "1508", "1509", "1510"), answer < dp[j][i][0])) ? answer : dp[j][i][0];
          }
        }
        y = stryMutAct_9fa48("1511") ? y * 2n : (stryCov_9fa48("1511"), y / 2n);
      }
    }
    return answer;
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [0n, 1n], expected: 2n },
//         { input: [6n, 2n], expected: 6n },
//         { input: [3n, 3n], expected: 0n },
//         { input: [13n, 37n], expected: 26n },
//         { input: [4238659325782394n, 12983091057341925n], expected: 32764n }
//     ];

//     let allPassed = true;
//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(...input);
//         if (result === expected) {
//             console.log(`Test case ${index + 1}: ✅ Passed`);
//         } else {
//             console.log(`Test case ${index + 1}: ❌ Failed (Got ${result}, Expected ${expected})`);
//             allPassed = false;
//         }
//     });

//     if (allPassed) {
//         console.log("🎉 All test cases passed!");
//     }
// }

// testing_test();