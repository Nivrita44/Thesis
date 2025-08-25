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
function maxOperations(start, target) {
  if (stryMutAct_9fa48("1512")) {
    {}
  } else {
    stryCov_9fa48("1512");
    let temp = start;
    while (stryMutAct_9fa48("1514") ? temp % 2 === 0 || Math.floor(temp / 2) !== target : stryMutAct_9fa48("1513") ? false : (stryCov_9fa48("1513", "1514"), (stryMutAct_9fa48("1516") ? temp % 2 !== 0 : stryMutAct_9fa48("1515") ? true : (stryCov_9fa48("1515", "1516"), (stryMutAct_9fa48("1517") ? temp * 2 : (stryCov_9fa48("1517"), temp % 2)) === 0)) && (stryMutAct_9fa48("1519") ? Math.floor(temp / 2) === target : stryMutAct_9fa48("1518") ? true : (stryCov_9fa48("1518", "1519"), Math.floor(stryMutAct_9fa48("1520") ? temp * 2 : (stryCov_9fa48("1520"), temp / 2)) !== target)))) {
      if (stryMutAct_9fa48("1521")) {
        {}
      } else {
        stryCov_9fa48("1521");
        temp = Math.floor(stryMutAct_9fa48("1522") ? temp * 2 : (stryCov_9fa48("1522"), temp / 2));
      }
    }
    if (stryMutAct_9fa48("1525") ? temp % 2 !== 1 : stryMutAct_9fa48("1524") ? false : stryMutAct_9fa48("1523") ? true : (stryCov_9fa48("1523", "1524", "1525"), (stryMutAct_9fa48("1526") ? temp * 2 : (stryCov_9fa48("1526"), temp % 2)) === 1)) {
      if (stryMutAct_9fa48("1527")) {
        {}
      } else {
        stryCov_9fa48("1527");
        return Math.floor(stryMutAct_9fa48("1528") ? start * temp : (stryCov_9fa48("1528"), start / temp));
      }
    }
    let smallestOdd = temp;
    while (stryMutAct_9fa48("1530") ? smallestOdd % 2 !== 0 : stryMutAct_9fa48("1529") ? false : (stryCov_9fa48("1529", "1530"), (stryMutAct_9fa48("1531") ? smallestOdd * 2 : (stryCov_9fa48("1531"), smallestOdd % 2)) === 0)) {
      if (stryMutAct_9fa48("1532")) {
        {}
      } else {
        stryCov_9fa48("1532");
        smallestOdd = Math.floor(stryMutAct_9fa48("1533") ? smallestOdd * 2 : (stryCov_9fa48("1533"), smallestOdd / 2));
      }
    }
    return stryMutAct_9fa48("1534") ? 1 - Math.floor((start - temp) / smallestOdd) : (stryCov_9fa48("1534"), 1 + Math.floor(stryMutAct_9fa48("1535") ? (start - temp) * smallestOdd : (stryCov_9fa48("1535"), (stryMutAct_9fa48("1536") ? start + temp : (stryCov_9fa48("1536"), start - temp)) / smallestOdd)));
  }
}

//canReachTargetOperations -> solve
export function solve(n, k, values) {
  if (stryMutAct_9fa48("1537")) {
    {}
  } else {
    stryCov_9fa48("1537");
    const prefix = (stryMutAct_9fa48("1538") ? new Array() : (stryCov_9fa48("1538"), new Array(n))).fill(0);
    for (let i = 1; stryMutAct_9fa48("1541") ? i >= n : stryMutAct_9fa48("1540") ? i <= n : stryMutAct_9fa48("1539") ? false : (stryCov_9fa48("1539", "1540", "1541"), i < n); stryMutAct_9fa48("1542") ? i-- : (stryCov_9fa48("1542"), i++)) {
      if (stryMutAct_9fa48("1543")) {
        {}
      } else {
        stryCov_9fa48("1543");
        prefix[i] = stryMutAct_9fa48("1544") ? prefix[i - 1] - maxOperations(values[i - 1], values[i]) : (stryCov_9fa48("1544"), prefix[stryMutAct_9fa48("1545") ? i + 1 : (stryCov_9fa48("1545"), i - 1)] + maxOperations(values[stryMutAct_9fa48("1546") ? i + 1 : (stryCov_9fa48("1546"), i - 1)], values[i]));
      }
    }
    const suffix = (stryMutAct_9fa48("1547") ? new Array() : (stryCov_9fa48("1547"), new Array(n))).fill(0);
    for (let i = stryMutAct_9fa48("1548") ? n + 2 : (stryCov_9fa48("1548"), n - 2); stryMutAct_9fa48("1551") ? i < 0 : stryMutAct_9fa48("1550") ? i > 0 : stryMutAct_9fa48("1549") ? false : (stryCov_9fa48("1549", "1550", "1551"), i >= 0); stryMutAct_9fa48("1552") ? i++ : (stryCov_9fa48("1552"), i--)) {
      if (stryMutAct_9fa48("1553")) {
        {}
      } else {
        stryCov_9fa48("1553");
        suffix[i] = stryMutAct_9fa48("1554") ? suffix[i + 1] - maxOperations(values[i + 1], values[i]) : (stryCov_9fa48("1554"), suffix[stryMutAct_9fa48("1555") ? i - 1 : (stryCov_9fa48("1555"), i + 1)] + maxOperations(values[stryMutAct_9fa48("1556") ? i - 1 : (stryCov_9fa48("1556"), i + 1)], values[i]));
      }
    }
    for (let i = 0; stryMutAct_9fa48("1559") ? i >= n : stryMutAct_9fa48("1558") ? i <= n : stryMutAct_9fa48("1557") ? false : (stryCov_9fa48("1557", "1558", "1559"), i < n); stryMutAct_9fa48("1560") ? i-- : (stryCov_9fa48("1560"), i++)) {
      if (stryMutAct_9fa48("1561")) {
        {}
      } else {
        stryCov_9fa48("1561");
        const totalOps = stryMutAct_9fa48("1562") ? maxOperations(values[i], 0) + prefix[i] - suffix[i] : (stryCov_9fa48("1562"), (stryMutAct_9fa48("1563") ? maxOperations(values[i], 0) - prefix[i] : (stryCov_9fa48("1563"), maxOperations(values[i], 0) + prefix[i])) + suffix[i]);
        if (stryMutAct_9fa48("1567") ? totalOps < k : stryMutAct_9fa48("1566") ? totalOps > k : stryMutAct_9fa48("1565") ? false : stryMutAct_9fa48("1564") ? true : (stryCov_9fa48("1564", "1565", "1566", "1567"), totalOps >= k)) {
          if (stryMutAct_9fa48("1568")) {
            {}
          } else {
            stryCov_9fa48("1568");
            return stryMutAct_9fa48("1569") ? "" : (stryCov_9fa48("1569"), "YES"); // string
          }
        }
      }
    }
    return stryMutAct_9fa48("1570") ? "" : (stryCov_9fa48("1570"), "NO"); // string
  }
}

// function testing_test() {
//     const testCases = [
//         { n: 3, k: 3, values: [2, 1, 4], expected: "YES" },
//         { n: 3, k: 7, values: [2, 1, 4], expected: "NO" },
//         { n: 2, k: 15, values: [2, 16], expected: "YES" },
//         { n: 3, k: 10, values: [256, 32, 1], expected: "YES" },
//         { n: 3, k: 289, values: [768, 96, 1], expected: "YES" },
//         { n: 3, k: 290, values: [768, 96, 1], expected: "NO" },
//         { n: 5, k: 7, values: [5, 1, 6, 3, 10], expected: "YES" },
//         { n: 4, k: 6, values: [6, 8, 5, 10], expected: "YES" },
//     ];

//     for (const { n, k, values, expected } of testCases) {
//         const result = solve(n, k, values);
//         console.log(`Input: n=${n}, k=${k}, values=${values}`);
//         console.log(`Expected: ${expected}, Got: ${result}`);
//         console.log(result === expected ? "Test Passed" : "Test Failed");
//         console.log("------------");
//     }
// }

// testing_test();