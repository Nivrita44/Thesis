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
class Queue {
  constructor() {
    if (stryMutAct_9fa48("1607")) {
      {}
    } else {
      stryCov_9fa48("1607");
      this.items = stryMutAct_9fa48("1608") ? ["Stryker was here"] : (stryCov_9fa48("1608"), []);
      this.head = 0;
    }
  }
  push(item) {
    if (stryMutAct_9fa48("1609")) {
      {}
    } else {
      stryCov_9fa48("1609");
      this.items.push(item);
    }
  }
  pop() {
    if (stryMutAct_9fa48("1610")) {
      {}
    } else {
      stryCov_9fa48("1610");
      if (stryMutAct_9fa48("1614") ? this.head >= this.items.length : stryMutAct_9fa48("1613") ? this.head <= this.items.length : stryMutAct_9fa48("1612") ? false : stryMutAct_9fa48("1611") ? true : (stryCov_9fa48("1611", "1612", "1613", "1614"), this.head < this.items.length)) {
        if (stryMutAct_9fa48("1615")) {
          {}
        } else {
          stryCov_9fa48("1615");
          return this.items[stryMutAct_9fa48("1616") ? this.head-- : (stryCov_9fa48("1616"), this.head++)];
        }
      }
      return undefined;
    }
  }
  size() {
    if (stryMutAct_9fa48("1617")) {
      {}
    } else {
      stryCov_9fa48("1617");
      return stryMutAct_9fa48("1618") ? this.items.length + this.head : (stryCov_9fa48("1618"), this.items.length - this.head);
    }
  }
}
export function solve(...args) {
  if (stryMutAct_9fa48("1619")) {
    {}
  } else {
    stryCov_9fa48("1619");
    // Case 1: solve(n, arr) — used in prompt1 tests
    if (stryMutAct_9fa48("1622") ? args.length === 2 && typeof args[0] === 'number' || Array.isArray(args[1]) : stryMutAct_9fa48("1621") ? false : stryMutAct_9fa48("1620") ? true : (stryCov_9fa48("1620", "1621", "1622"), (stryMutAct_9fa48("1624") ? args.length === 2 || typeof args[0] === 'number' : stryMutAct_9fa48("1623") ? true : (stryCov_9fa48("1623", "1624"), (stryMutAct_9fa48("1626") ? args.length !== 2 : stryMutAct_9fa48("1625") ? true : (stryCov_9fa48("1625", "1626"), args.length === 2)) && (stryMutAct_9fa48("1628") ? typeof args[0] !== 'number' : stryMutAct_9fa48("1627") ? true : (stryCov_9fa48("1627", "1628"), typeof args[0] === (stryMutAct_9fa48("1629") ? "" : (stryCov_9fa48("1629"), 'number')))))) && Array.isArray(args[1]))) {
      if (stryMutAct_9fa48("1630")) {
        {}
      } else {
        stryCov_9fa48("1630");
        const [n, arr] = args;
        return findFirstStableYear(n, arr);
      }
    }

    // Case 2: solve(readInt, writeInt)
    let readInt, writeInt;
    if (stryMutAct_9fa48("1633") ? args.length === 2 && typeof args[0] === 'function' || typeof args[1] === 'function' : stryMutAct_9fa48("1632") ? false : stryMutAct_9fa48("1631") ? true : (stryCov_9fa48("1631", "1632", "1633"), (stryMutAct_9fa48("1635") ? args.length === 2 || typeof args[0] === 'function' : stryMutAct_9fa48("1634") ? true : (stryCov_9fa48("1634", "1635"), (stryMutAct_9fa48("1637") ? args.length !== 2 : stryMutAct_9fa48("1636") ? true : (stryCov_9fa48("1636", "1637"), args.length === 2)) && (stryMutAct_9fa48("1639") ? typeof args[0] !== 'function' : stryMutAct_9fa48("1638") ? true : (stryCov_9fa48("1638", "1639"), typeof args[0] === (stryMutAct_9fa48("1640") ? "" : (stryCov_9fa48("1640"), 'function')))))) && (stryMutAct_9fa48("1642") ? typeof args[1] !== 'function' : stryMutAct_9fa48("1641") ? true : (stryCov_9fa48("1641", "1642"), typeof args[1] === (stryMutAct_9fa48("1643") ? "" : (stryCov_9fa48("1643"), 'function')))))) {
      if (stryMutAct_9fa48("1644")) {
        {}
      } else {
        stryCov_9fa48("1644");
        readInt = args[0];
        writeInt = args[1];
      }
    } else {
      if (stryMutAct_9fa48("1645")) {
        {}
      } else {
        stryCov_9fa48("1645");
        // Case 3: solve() with globals
        readInt = global.readInt;
        writeInt = global.writeInt;
      }
    }
    const n = readInt();
    const arr = stryMutAct_9fa48("1646") ? ["Stryker was here"] : (stryCov_9fa48("1646"), []);
    for (let i = 0; stryMutAct_9fa48("1649") ? i >= n : stryMutAct_9fa48("1648") ? i <= n : stryMutAct_9fa48("1647") ? false : (stryCov_9fa48("1647", "1648", "1649"), i < n); stryMutAct_9fa48("1650") ? i-- : (stryCov_9fa48("1650"), i++)) {
      if (stryMutAct_9fa48("1651")) {
        {}
      } else {
        stryCov_9fa48("1651");
        arr.push(readInt());
      }
    }
    const result = findFirstStableYear(n, arr);
    writeInt(result, stryMutAct_9fa48("1652") ? false : (stryCov_9fa48("1652"), true));
  }
}
function findFirstStableYear(n, recipients) {
  if (stryMutAct_9fa48("1653")) {
    {}
  } else {
    stryCov_9fa48("1653");
    // Convert to 0-based indexing
    const r = recipients.map(stryMutAct_9fa48("1654") ? () => undefined : (stryCov_9fa48("1654"), x => stryMutAct_9fa48("1655") ? x + 1 : (stryCov_9fa48("1655"), x - 1)));

    // Track states at the beginning of each year (before exchange)
    let states = stryMutAct_9fa48("1656") ? ["Stryker was here"] : (stryCov_9fa48("1656"), []);
    let currentPlushies = (stryMutAct_9fa48("1657") ? new Array() : (stryCov_9fa48("1657"), new Array(n))).fill(1); // Initial state

    let year = 1;
    while (stryMutAct_9fa48("1659") ? false : stryMutAct_9fa48("1658") ? false : (stryCov_9fa48("1658", "1659"), true)) {
      if (stryMutAct_9fa48("1660")) {
        {}
      } else {
        stryCov_9fa48("1660");
        // Store the state at the beginning of this year (before exchange)
        states.push(stryMutAct_9fa48("1661") ? [] : (stryCov_9fa48("1661"), [...currentPlushies]));

        // Check if this year is stable (year > 1 and same as previous year's beginning state)
        if (stryMutAct_9fa48("1664") ? year > 1 || states[year - 1].every((count, i) => count === states[year - 2][i]) : stryMutAct_9fa48("1663") ? false : stryMutAct_9fa48("1662") ? true : (stryCov_9fa48("1662", "1663", "1664"), (stryMutAct_9fa48("1667") ? year <= 1 : stryMutAct_9fa48("1666") ? year >= 1 : stryMutAct_9fa48("1665") ? true : (stryCov_9fa48("1665", "1666", "1667"), year > 1)) && (stryMutAct_9fa48("1668") ? states[year - 1].some((count, i) => count === states[year - 2][i]) : (stryCov_9fa48("1668"), states[stryMutAct_9fa48("1669") ? year + 1 : (stryCov_9fa48("1669"), year - 1)].every(stryMutAct_9fa48("1670") ? () => undefined : (stryCov_9fa48("1670"), (count, i) => stryMutAct_9fa48("1673") ? count !== states[year - 2][i] : stryMutAct_9fa48("1672") ? false : stryMutAct_9fa48("1671") ? true : (stryCov_9fa48("1671", "1672", "1673"), count === states[stryMutAct_9fa48("1674") ? year + 2 : (stryCov_9fa48("1674"), year - 2)][i]))))))) {
          if (stryMutAct_9fa48("1675")) {
            {}
          } else {
            stryCov_9fa48("1675");
            return year;
          }
        }

        // Simulate plushie exchange for this year
        const newPlushies = (stryMutAct_9fa48("1676") ? new Array() : (stryCov_9fa48("1676"), new Array(n))).fill(0);
        for (let i = 0; stryMutAct_9fa48("1679") ? i >= n : stryMutAct_9fa48("1678") ? i <= n : stryMutAct_9fa48("1677") ? false : (stryCov_9fa48("1677", "1678", "1679"), i < n); stryMutAct_9fa48("1680") ? i-- : (stryCov_9fa48("1680"), i++)) {
          if (stryMutAct_9fa48("1681")) {
            {}
          } else {
            stryCov_9fa48("1681");
            if (stryMutAct_9fa48("1685") ? currentPlushies[i] <= 0 : stryMutAct_9fa48("1684") ? currentPlushies[i] >= 0 : stryMutAct_9fa48("1683") ? false : stryMutAct_9fa48("1682") ? true : (stryCov_9fa48("1682", "1683", "1684", "1685"), currentPlushies[i] > 0)) {
              if (stryMutAct_9fa48("1686")) {
                {}
              } else {
                stryCov_9fa48("1686");
                // Spider i gives 1 plushie to recipient r[i]
                stryMutAct_9fa48("1687") ? newPlushies[r[i]]-- : (stryCov_9fa48("1687"), newPlushies[r[i]]++);
                // Spider i keeps remaining plushies
                stryMutAct_9fa48("1688") ? newPlushies[i] -= currentPlushies[i] - 1 : (stryCov_9fa48("1688"), newPlushies[i] += stryMutAct_9fa48("1689") ? currentPlushies[i] + 1 : (stryCov_9fa48("1689"), currentPlushies[i] - 1));
              }
            }
            // If spider i has 0 plushies, they do nothing
          }
        }
        currentPlushies = newPlushies;
        stryMutAct_9fa48("1690") ? year-- : (stryCov_9fa48("1690"), year++);

        // Safety check to prevent infinite loop
        if (stryMutAct_9fa48("1694") ? year <= 1000000 : stryMutAct_9fa48("1693") ? year >= 1000000 : stryMutAct_9fa48("1692") ? false : stryMutAct_9fa48("1691") ? true : (stryCov_9fa48("1691", "1692", "1693", "1694"), year > 1000000)) {
          if (stryMutAct_9fa48("1695")) {
            {}
          } else {
            stryCov_9fa48("1695");
            break;
          }
        }
      }
    }
    return year;
  }
}