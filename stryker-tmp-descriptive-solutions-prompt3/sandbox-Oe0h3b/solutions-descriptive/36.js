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
const MOD = stryMutAct_9fa48("1515") ? 1e9 - 7 : (stryCov_9fa48("1515"), 1e9 + 7);
const MOD_CUT = stryMutAct_9fa48("1516") ? (1 << 20) * (1 << 20) * MOD : (stryCov_9fa48("1516"), (stryMutAct_9fa48("1517") ? (1 << 20) / (1 << 20) : (stryCov_9fa48("1517"), (1 << 20) * (1 << 20))) % MOD);
function add(a, b) {
  if (stryMutAct_9fa48("1518")) {
    {}
  } else {
    stryCov_9fa48("1518");
    return stryMutAct_9fa48("1519") ? (a + b) * MOD : (stryCov_9fa48("1519"), (stryMutAct_9fa48("1520") ? a - b : (stryCov_9fa48("1520"), a + b)) % MOD);
  }
}
function minus(a, b) {
  if (stryMutAct_9fa48("1521")) {
    {}
  } else {
    stryCov_9fa48("1521");
    return add(add(a, stryMutAct_9fa48("1522") ? +b : (stryCov_9fa48("1522"), -b)), MOD);
  }
}
function mul(a, b) {
  if (stryMutAct_9fa48("1523")) {
    {}
  } else {
    stryCov_9fa48("1523");
    let r = stryMutAct_9fa48("1524") ? (a >> 20) * (b >> 20) * MOD_CUT + (a & 0xfff00000) * (b & 0xfffff) - (a & 0xfffff) * b : (stryCov_9fa48("1524"), (stryMutAct_9fa48("1525") ? (a >> 20) * (b >> 20) * MOD_CUT - (a & 0xfff00000) * (b & 0xfffff) : (stryCov_9fa48("1525"), (stryMutAct_9fa48("1526") ? (a >> 20) * (b >> 20) / MOD_CUT : (stryCov_9fa48("1526"), (stryMutAct_9fa48("1527") ? (a >> 20) / (b >> 20) : (stryCov_9fa48("1527"), (a >> 20) * (b >> 20))) * MOD_CUT)) + (stryMutAct_9fa48("1528") ? (a & 0xfff00000) / (b & 0xfffff) : (stryCov_9fa48("1528"), (a & 0xfff00000) * (b & 0xfffff))))) + (stryMutAct_9fa48("1529") ? (a & 0xfffff) / b : (stryCov_9fa48("1529"), (a & 0xfffff) * b)));
    return stryMutAct_9fa48("1530") ? r * MOD : (stryCov_9fa48("1530"), r % MOD);
  }
}
function pow(a, b) {
  if (stryMutAct_9fa48("1531")) {
    {}
  } else {
    stryCov_9fa48("1531");
    let r = 1;
    let base = a;
    while (stryMutAct_9fa48("1532") ? false : (stryCov_9fa48("1532"), b)) {
      if (stryMutAct_9fa48("1533")) {
        {}
      } else {
        stryCov_9fa48("1533");
        if (stryMutAct_9fa48("1535") ? false : stryMutAct_9fa48("1534") ? true : (stryCov_9fa48("1534", "1535"), b & 1n)) {
          if (stryMutAct_9fa48("1536")) {
            {}
          } else {
            stryCov_9fa48("1536");
            r = mul(r, base);
          }
        }
        stryMutAct_9fa48("1537") ? b *= 2n : (stryCov_9fa48("1537"), b /= 2n);
        base = mul(base, base);
      }
    }
    return r;
  }
}
export function solve(n, m, k, queries) {
  if (stryMutAct_9fa48("1538")) {
    {}
  } else {
    stryCov_9fa48("1538");
    let count = 0;
    let black = 0;
    for (let i = 0; stryMutAct_9fa48("1541") ? i >= k : stryMutAct_9fa48("1540") ? i <= k : stryMutAct_9fa48("1539") ? false : (stryCov_9fa48("1539", "1540", "1541"), i < k); stryMutAct_9fa48("1542") ? i-- : (stryCov_9fa48("1542"), i++)) {
      if (stryMutAct_9fa48("1543")) {
        {}
      } else {
        stryCov_9fa48("1543");
        const [x, y, color] = queries[i];
        const isBorder = stryMutAct_9fa48("1546") ? (x === 1 || x === n || y === 1) && y === m : stryMutAct_9fa48("1545") ? false : stryMutAct_9fa48("1544") ? true : (stryCov_9fa48("1544", "1545", "1546"), (stryMutAct_9fa48("1548") ? (x === 1 || x === n) && y === 1 : stryMutAct_9fa48("1547") ? false : (stryCov_9fa48("1547", "1548"), (stryMutAct_9fa48("1550") ? x === 1 && x === n : stryMutAct_9fa48("1549") ? false : (stryCov_9fa48("1549", "1550"), (stryMutAct_9fa48("1552") ? x !== 1 : stryMutAct_9fa48("1551") ? false : (stryCov_9fa48("1551", "1552"), x === 1)) || (stryMutAct_9fa48("1554") ? x !== n : stryMutAct_9fa48("1553") ? false : (stryCov_9fa48("1553", "1554"), x === n)))) || (stryMutAct_9fa48("1556") ? y !== 1 : stryMutAct_9fa48("1555") ? false : (stryCov_9fa48("1555", "1556"), y === 1)))) || (stryMutAct_9fa48("1558") ? y !== m : stryMutAct_9fa48("1557") ? false : (stryCov_9fa48("1557", "1558"), y === m)));
        const isCorner = stryMutAct_9fa48("1561") ? (x === 1 && y === 1 || x === 1 && y === m || x === n && y === 1) && x === n && y === m : stryMutAct_9fa48("1560") ? false : stryMutAct_9fa48("1559") ? true : (stryCov_9fa48("1559", "1560", "1561"), (stryMutAct_9fa48("1563") ? (x === 1 && y === 1 || x === 1 && y === m) && x === n && y === 1 : stryMutAct_9fa48("1562") ? false : (stryCov_9fa48("1562", "1563"), (stryMutAct_9fa48("1565") ? x === 1 && y === 1 && x === 1 && y === m : stryMutAct_9fa48("1564") ? false : (stryCov_9fa48("1564", "1565"), (stryMutAct_9fa48("1567") ? x === 1 || y === 1 : stryMutAct_9fa48("1566") ? false : (stryCov_9fa48("1566", "1567"), (stryMutAct_9fa48("1569") ? x !== 1 : stryMutAct_9fa48("1568") ? true : (stryCov_9fa48("1568", "1569"), x === 1)) && (stryMutAct_9fa48("1571") ? y !== 1 : stryMutAct_9fa48("1570") ? true : (stryCov_9fa48("1570", "1571"), y === 1)))) || (stryMutAct_9fa48("1573") ? x === 1 || y === m : stryMutAct_9fa48("1572") ? false : (stryCov_9fa48("1572", "1573"), (stryMutAct_9fa48("1575") ? x !== 1 : stryMutAct_9fa48("1574") ? true : (stryCov_9fa48("1574", "1575"), x === 1)) && (stryMutAct_9fa48("1577") ? y !== m : stryMutAct_9fa48("1576") ? true : (stryCov_9fa48("1576", "1577"), y === m)))))) || (stryMutAct_9fa48("1579") ? x === n || y === 1 : stryMutAct_9fa48("1578") ? false : (stryCov_9fa48("1578", "1579"), (stryMutAct_9fa48("1581") ? x !== n : stryMutAct_9fa48("1580") ? true : (stryCov_9fa48("1580", "1581"), x === n)) && (stryMutAct_9fa48("1583") ? y !== 1 : stryMutAct_9fa48("1582") ? true : (stryCov_9fa48("1582", "1583"), y === 1)))))) || (stryMutAct_9fa48("1585") ? x === n || y === m : stryMutAct_9fa48("1584") ? false : (stryCov_9fa48("1584", "1585"), (stryMutAct_9fa48("1587") ? x !== n : stryMutAct_9fa48("1586") ? true : (stryCov_9fa48("1586", "1587"), x === n)) && (stryMutAct_9fa48("1589") ? y !== m : stryMutAct_9fa48("1588") ? true : (stryCov_9fa48("1588", "1589"), y === m)))));
        if (stryMutAct_9fa48("1592") ? isBorder || !isCorner : stryMutAct_9fa48("1591") ? false : stryMutAct_9fa48("1590") ? true : (stryCov_9fa48("1590", "1591", "1592"), isBorder && (stryMutAct_9fa48("1593") ? isCorner : (stryCov_9fa48("1593"), !isCorner)))) {
          if (stryMutAct_9fa48("1594")) {
            {}
          } else {
            stryCov_9fa48("1594");
            stryMutAct_9fa48("1595") ? count-- : (stryCov_9fa48("1595"), count++);
            stryMutAct_9fa48("1596") ? black -= color : (stryCov_9fa48("1596"), black += color);
          }
        }
      }
    }
    const total = stryMutAct_9fa48("1597") ? BigInt(n) * BigInt(m) + BigInt(k) : (stryCov_9fa48("1597"), (stryMutAct_9fa48("1598") ? BigInt(n) / BigInt(m) : (stryCov_9fa48("1598"), BigInt(n) * BigInt(m))) - BigInt(k));
    if (stryMutAct_9fa48("1601") ? count !== 2 * (n + m - 4) : stryMutAct_9fa48("1600") ? false : stryMutAct_9fa48("1599") ? true : (stryCov_9fa48("1599", "1600", "1601"), count === (stryMutAct_9fa48("1602") ? 2 / (n + m - 4) : (stryCov_9fa48("1602"), 2 * (stryMutAct_9fa48("1603") ? n + m + 4 : (stryCov_9fa48("1603"), (stryMutAct_9fa48("1604") ? n - m : (stryCov_9fa48("1604"), n + m)) - 4)))))) {
      if (stryMutAct_9fa48("1605")) {
        {}
      } else {
        stryCov_9fa48("1605");
        return black & 1 ? 0 : pow(2, total);
      }
    } else {
      if (stryMutAct_9fa48("1606")) {
        {}
      } else {
        stryCov_9fa48("1606");
        return pow(2, stryMutAct_9fa48("1607") ? total + 1 : (stryCov_9fa48("1607"), total - 1));
      }
    }
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 n: 3,
//                 m: 3,
//                 k: 6,
//                 queries: [
//                     [1, 1, 0],
//                     [1, 2, 1],
//                     [1, 3, 0],
//                     [3, 1, 1],
//                     [3, 2, 0],
//                     [3, 3, 1]
//                 ]
//             },
//             expected: 4
//         },
//         {
//             input: {
//                 n: 3,
//                 m: 4,
//                 k: 12,
//                 queries: [
//                     [1, 1, 0],
//                     [1, 2, 1],
//                     [1, 3, 0],
//                     [1, 4, 1],
//                     [2, 1, 1],
//                     [2, 2, 0],
//                     [2, 3, 1],
//                     [2, 4, 0],
//                     [3, 1, 0],
//                     [3, 2, 1],
//                     [3, 3, 0],
//                     [3, 4, 1]
//                 ]
//             },
//             expected: 0
//         }
//     ];

//     for (const { input, expected } of testCases) {
//         const { n, m, k, queries } = input;
//         const result = solve(n, m, k, queries);
//         console.log(`Input: n=${n}, m=${m}, k=${k}, queries=${JSON.stringify(queries)}`);
//         console.log(`Expected: ${expected}, Got: ${result}`);
//         console.assert(result === expected, `Test failed for input: ${JSON.stringify(input)}`);
//     }
// }

// testing_test();