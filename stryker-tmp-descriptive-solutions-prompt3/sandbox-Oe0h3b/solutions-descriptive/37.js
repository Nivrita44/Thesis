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
const MAX_NODES = 1000000;
function getBitLength(x) {
  if (stryMutAct_9fa48("1608")) {
    {}
  } else {
    stryCov_9fa48("1608");
    return x.toString(2).length;
  }
}
export function solve(arrayLength, xorLimit, array) {
  if (stryMutAct_9fa48("1609")) {
    {}
  } else {
    stryCov_9fa48("1609");
    if (stryMutAct_9fa48("1612") ? xorLimit !== 0 : stryMutAct_9fa48("1611") ? false : stryMutAct_9fa48("1610") ? true : (stryCov_9fa48("1610", "1611", "1612"), xorLimit === 0)) return stryMutAct_9fa48("1613") ? "" : (stryCov_9fa48("1613"), '1');
    const highestSetBit = stryMutAct_9fa48("1614") ? getBitLength(xorLimit) + 1 : (stryCov_9fa48("1614"), getBitLength(xorLimit) - 1);
    const bitShift = stryMutAct_9fa48("1615") ? highestSetBit - 1 : (stryCov_9fa48("1615"), highestSetBit + 1);
    const prefixGroup = array[0] >> bitShift;
    let diversePrefixFound = stryMutAct_9fa48("1616") ? true : (stryCov_9fa48("1616"), false);
    for (let i = 1; stryMutAct_9fa48("1619") ? i >= arrayLength : stryMutAct_9fa48("1618") ? i <= arrayLength : stryMutAct_9fa48("1617") ? false : (stryCov_9fa48("1617", "1618", "1619"), i < arrayLength); stryMutAct_9fa48("1620") ? i-- : (stryCov_9fa48("1620"), i++)) {
      if (stryMutAct_9fa48("1621")) {
        {}
      } else {
        stryCov_9fa48("1621");
        if (stryMutAct_9fa48("1624") ? array[i] >> bitShift === prefixGroup : stryMutAct_9fa48("1623") ? false : stryMutAct_9fa48("1622") ? true : (stryCov_9fa48("1622", "1623", "1624"), array[i] >> bitShift !== prefixGroup)) {
          if (stryMutAct_9fa48("1625")) {
            {}
          } else {
            stryCov_9fa48("1625");
            diversePrefixFound = stryMutAct_9fa48("1626") ? false : (stryCov_9fa48("1626"), true);
            break;
          }
        }
      }
    }
    if (stryMutAct_9fa48("1628") ? false : stryMutAct_9fa48("1627") ? true : (stryCov_9fa48("1627", "1628"), diversePrefixFound)) return stryMutAct_9fa48("1629") ? "" : (stryCov_9fa48("1629"), '2');
    const remainingXor = xorLimit ^ 1 << highestSetBit;
    const typeBits = array.map(stryMutAct_9fa48("1630") ? () => undefined : (stryCov_9fa48("1630"), num => num >> highestSetBit & 1));
    const lowerBits = (stryMutAct_9fa48("1634") ? highestSetBit <= 0 : stryMutAct_9fa48("1633") ? highestSetBit >= 0 : stryMutAct_9fa48("1632") ? false : stryMutAct_9fa48("1631") ? true : (stryCov_9fa48("1631", "1632", "1633", "1634"), highestSetBit > 0)) ? array.map(stryMutAct_9fa48("1635") ? () => undefined : (stryCov_9fa48("1635"), num => num & (stryMutAct_9fa48("1636") ? (1 << highestSetBit) + 1 : (stryCov_9fa48("1636"), (1 << highestSetBit) - 1)))) : (stryMutAct_9fa48("1637") ? new Array() : (stryCov_9fa48("1637"), new Array(arrayLength))).fill(0);
    let nodeCounter = 1;
    let minimumLength = stryMutAct_9fa48("1638") ? arrayLength - 1 : (stryCov_9fa48("1638"), arrayLength + 1);
    const trieLeft = new Uint32Array(stryMutAct_9fa48("1639") ? MAX_NODES - 5 : (stryCov_9fa48("1639"), MAX_NODES + 5)).fill(0);
    const trieRight = new Uint32Array(stryMutAct_9fa48("1640") ? MAX_NODES - 5 : (stryCov_9fa48("1640"), MAX_NODES + 5)).fill(0);
    const maxIndexType0 = new Uint32Array(stryMutAct_9fa48("1641") ? MAX_NODES - 5 : (stryCov_9fa48("1641"), MAX_NODES + 5)).fill(0);
    const maxIndexType1 = new Uint32Array(stryMutAct_9fa48("1642") ? MAX_NODES - 5 : (stryCov_9fa48("1642"), MAX_NODES + 5)).fill(0);
    for (let i = 0; stryMutAct_9fa48("1645") ? i >= arrayLength : stryMutAct_9fa48("1644") ? i <= arrayLength : stryMutAct_9fa48("1643") ? false : (stryCov_9fa48("1643", "1644", "1645"), i < arrayLength); stryMutAct_9fa48("1646") ? i-- : (stryCov_9fa48("1646"), i++)) {
      if (stryMutAct_9fa48("1647")) {
        {}
      } else {
        stryCov_9fa48("1647");
        const currentIndex = stryMutAct_9fa48("1648") ? i - 1 : (stryCov_9fa48("1648"), i + 1);
        const currentType = typeBits[i];
        const oppositeType = currentType ^ 1;
        if (stryMutAct_9fa48("1651") ? (oppositeType === 0 ? maxIndexType0[1] : maxIndexType1[1]) === 0 : stryMutAct_9fa48("1650") ? false : stryMutAct_9fa48("1649") ? true : (stryCov_9fa48("1649", "1650", "1651"), ((stryMutAct_9fa48("1654") ? oppositeType !== 0 : stryMutAct_9fa48("1653") ? false : stryMutAct_9fa48("1652") ? true : (stryCov_9fa48("1652", "1653", "1654"), oppositeType === 0)) ? maxIndexType0[1] : maxIndexType1[1]) !== 0)) {
          if (stryMutAct_9fa48("1655")) {
            {}
          } else {
            stryCov_9fa48("1655");
            let bestIndex = 0;
            let node = 1;
            const currentValue = lowerBits[i];
            for (let bit = stryMutAct_9fa48("1656") ? highestSetBit + 1 : (stryCov_9fa48("1656"), highestSetBit - 1); stryMutAct_9fa48("1658") ? bit >= 0 || node : stryMutAct_9fa48("1657") ? false : (stryCov_9fa48("1657", "1658"), (stryMutAct_9fa48("1661") ? bit < 0 : stryMutAct_9fa48("1660") ? bit > 0 : stryMutAct_9fa48("1659") ? true : (stryCov_9fa48("1659", "1660", "1661"), bit >= 0)) && node); stryMutAct_9fa48("1662") ? bit++ : (stryCov_9fa48("1662"), bit--)) {
              if (stryMutAct_9fa48("1663")) {
                {}
              } else {
                stryCov_9fa48("1663");
                const requiredBit = remainingXor >> bit & 1;
                const valueBit = currentValue >> bit & 1;
                if (stryMutAct_9fa48("1666") ? requiredBit !== 0 : stryMutAct_9fa48("1665") ? false : stryMutAct_9fa48("1664") ? true : (stryCov_9fa48("1664", "1665", "1666"), requiredBit === 0)) {
                  if (stryMutAct_9fa48("1667")) {
                    {}
                  } else {
                    stryCov_9fa48("1667");
                    const flippedBit = valueBit ^ 1;
                    const child = (stryMutAct_9fa48("1670") ? flippedBit !== 0 : stryMutAct_9fa48("1669") ? false : stryMutAct_9fa48("1668") ? true : (stryCov_9fa48("1668", "1669", "1670"), flippedBit === 0)) ? trieLeft[node] : trieRight[node];
                    if (stryMutAct_9fa48("1672") ? false : stryMutAct_9fa48("1671") ? true : (stryCov_9fa48("1671", "1672"), child)) {
                      if (stryMutAct_9fa48("1673")) {
                        {}
                      } else {
                        stryCov_9fa48("1673");
                        const candidateIndex = (stryMutAct_9fa48("1676") ? oppositeType !== 0 : stryMutAct_9fa48("1675") ? false : stryMutAct_9fa48("1674") ? true : (stryCov_9fa48("1674", "1675", "1676"), oppositeType === 0)) ? maxIndexType0[child] : maxIndexType1[child];
                        if (stryMutAct_9fa48("1680") ? candidateIndex <= bestIndex : stryMutAct_9fa48("1679") ? candidateIndex >= bestIndex : stryMutAct_9fa48("1678") ? false : stryMutAct_9fa48("1677") ? true : (stryCov_9fa48("1677", "1678", "1679", "1680"), candidateIndex > bestIndex)) bestIndex = candidateIndex;
                      }
                    }
                  }
                }
                const nextBit = valueBit ^ requiredBit;
                node = (stryMutAct_9fa48("1683") ? nextBit !== 0 : stryMutAct_9fa48("1682") ? false : stryMutAct_9fa48("1681") ? true : (stryCov_9fa48("1681", "1682", "1683"), nextBit === 0)) ? trieLeft[node] : trieRight[node];
              }
            }
            if (stryMutAct_9fa48("1685") ? false : stryMutAct_9fa48("1684") ? true : (stryCov_9fa48("1684", "1685"), node)) {
              if (stryMutAct_9fa48("1686")) {
                {}
              } else {
                stryCov_9fa48("1686");
                const candidateIndex = (stryMutAct_9fa48("1689") ? oppositeType !== 0 : stryMutAct_9fa48("1688") ? false : stryMutAct_9fa48("1687") ? true : (stryCov_9fa48("1687", "1688", "1689"), oppositeType === 0)) ? maxIndexType0[node] : maxIndexType1[node];
                if (stryMutAct_9fa48("1693") ? candidateIndex <= bestIndex : stryMutAct_9fa48("1692") ? candidateIndex >= bestIndex : stryMutAct_9fa48("1691") ? false : stryMutAct_9fa48("1690") ? true : (stryCov_9fa48("1690", "1691", "1692", "1693"), candidateIndex > bestIndex)) bestIndex = candidateIndex;
              }
            }
            if (stryMutAct_9fa48("1695") ? false : stryMutAct_9fa48("1694") ? true : (stryCov_9fa48("1694", "1695"), bestIndex)) {
              if (stryMutAct_9fa48("1696")) {
                {}
              } else {
                stryCov_9fa48("1696");
                const segmentLength = stryMutAct_9fa48("1697") ? currentIndex - bestIndex - 1 : (stryCov_9fa48("1697"), (stryMutAct_9fa48("1698") ? currentIndex + bestIndex : (stryCov_9fa48("1698"), currentIndex - bestIndex)) + 1);
                if (stryMutAct_9fa48("1702") ? segmentLength >= minimumLength : stryMutAct_9fa48("1701") ? segmentLength <= minimumLength : stryMutAct_9fa48("1700") ? false : stryMutAct_9fa48("1699") ? true : (stryCov_9fa48("1699", "1700", "1701", "1702"), segmentLength < minimumLength)) {
                  if (stryMutAct_9fa48("1703")) {
                    {}
                  } else {
                    stryCov_9fa48("1703");
                    minimumLength = segmentLength;
                    if (stryMutAct_9fa48("1706") ? minimumLength !== 2 : stryMutAct_9fa48("1705") ? false : stryMutAct_9fa48("1704") ? true : (stryCov_9fa48("1704", "1705", "1706"), minimumLength === 2)) break;
                  }
                }
              }
            }
          }
        }
        if (stryMutAct_9fa48("1709") ? currentType !== 0 : stryMutAct_9fa48("1708") ? false : stryMutAct_9fa48("1707") ? true : (stryCov_9fa48("1707", "1708", "1709"), currentType === 0)) maxIndexType0[1] = currentIndex;else maxIndexType1[1] = currentIndex;
        let node = 1;
        for (let bit = stryMutAct_9fa48("1710") ? highestSetBit + 1 : (stryCov_9fa48("1710"), highestSetBit - 1); stryMutAct_9fa48("1713") ? bit < 0 : stryMutAct_9fa48("1712") ? bit > 0 : stryMutAct_9fa48("1711") ? false : (stryCov_9fa48("1711", "1712", "1713"), bit >= 0); stryMutAct_9fa48("1714") ? bit++ : (stryCov_9fa48("1714"), bit--)) {
          if (stryMutAct_9fa48("1715")) {
            {}
          } else {
            stryCov_9fa48("1715");
            const bitValue = lowerBits[i] >> bit & 1;
            let child = (stryMutAct_9fa48("1718") ? bitValue !== 0 : stryMutAct_9fa48("1717") ? false : stryMutAct_9fa48("1716") ? true : (stryCov_9fa48("1716", "1717", "1718"), bitValue === 0)) ? trieLeft[node] : trieRight[node];
            if (stryMutAct_9fa48("1721") ? child !== 0 : stryMutAct_9fa48("1720") ? false : stryMutAct_9fa48("1719") ? true : (stryCov_9fa48("1719", "1720", "1721"), child === 0)) {
              if (stryMutAct_9fa48("1722")) {
                {}
              } else {
                stryCov_9fa48("1722");
                stryMutAct_9fa48("1723") ? nodeCounter-- : (stryCov_9fa48("1723"), nodeCounter++);
                if (stryMutAct_9fa48("1726") ? bitValue !== 0 : stryMutAct_9fa48("1725") ? false : stryMutAct_9fa48("1724") ? true : (stryCov_9fa48("1724", "1725", "1726"), bitValue === 0)) trieLeft[node] = nodeCounter;else trieRight[node] = nodeCounter;
                child = nodeCounter;
              }
            }
            node = child;
            if (stryMutAct_9fa48("1729") ? currentType !== 0 : stryMutAct_9fa48("1728") ? false : stryMutAct_9fa48("1727") ? true : (stryCov_9fa48("1727", "1728", "1729"), currentType === 0)) maxIndexType0[node] = currentIndex;else maxIndexType1[node] = currentIndex;
          }
        }
      }
    }
    return (stryMutAct_9fa48("1733") ? minimumLength > arrayLength : stryMutAct_9fa48("1732") ? minimumLength < arrayLength : stryMutAct_9fa48("1731") ? false : stryMutAct_9fa48("1730") ? true : (stryCov_9fa48("1730", "1731", "1732", "1733"), minimumLength <= arrayLength)) ? minimumLength.toString() : stryMutAct_9fa48("1734") ? "" : (stryCov_9fa48("1734"), '-1');
  }
}

// function testing_test() {
//     const testCases = [
//         { input: [5, 0, [1, 2, 3, 4, 5]], expected: '1' },
//         { input: [5, 7, [1, 2, 3, 4, 5]], expected: '2' },
//         { input: [5, 8, [1, 2, 3, 4, 5]], expected: '-1' },
//         { input: [5, 7, [3, 5, 1, 4, 2]], expected: '4' },
//         { input: [5, 3, [3, 5, 1, 4, 2]], expected: '2' },
//         { input: [6, 71, [26, 56, 12, 45, 60, 27]], expected: '-1' },
//     ];

//     for (const { input, expected } of testCases) {
//         const [n, k, A] = input;
//         const result = solve(n, k, A);
//         console.log(`Input: n=${n}, k=${k}, A=${A}`);
//         console.log(`Expected: ${expected}, Got: ${result}`);
//         console.log(result === expected ? 'Test passed' : 'Test failed');
//         console.log('---');
//     }
// }

// testing_test();