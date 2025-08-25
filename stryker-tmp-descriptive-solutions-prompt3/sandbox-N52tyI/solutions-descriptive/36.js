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
const MOD = stryMutAct_9fa48("2032") ? 1e9 - 7 : (stryCov_9fa48("2032"), 1e9 + 7);
const MOD_CUT = stryMutAct_9fa48("2033") ? (1 << 20) * (1 << 20) * MOD : (stryCov_9fa48("2033"), (stryMutAct_9fa48("2034") ? (1 << 20) / (1 << 20) : (stryCov_9fa48("2034"), (1 << 20) * (1 << 20))) % MOD);
function add(a, b) {
  if (stryMutAct_9fa48("2035")) {
    {}
  } else {
    stryCov_9fa48("2035");
    return stryMutAct_9fa48("2036") ? (a + b) * MOD : (stryCov_9fa48("2036"), (stryMutAct_9fa48("2037") ? a - b : (stryCov_9fa48("2037"), a + b)) % MOD);
  }
}
function minus(a, b) {
  if (stryMutAct_9fa48("2038")) {
    {}
  } else {
    stryCov_9fa48("2038");
    return add(add(a, stryMutAct_9fa48("2039") ? +b : (stryCov_9fa48("2039"), -b)), MOD);
  }
}
function mul(a, b) {
  if (stryMutAct_9fa48("2040")) {
    {}
  } else {
    stryCov_9fa48("2040");
    let r = stryMutAct_9fa48("2041") ? (a >> 20) * (b >> 20) * MOD_CUT + (a & 0xfff00000) * (b & 0xfffff) - (a & 0xfffff) * b : (stryCov_9fa48("2041"), (stryMutAct_9fa48("2042") ? (a >> 20) * (b >> 20) * MOD_CUT - (a & 0xfff00000) * (b & 0xfffff) : (stryCov_9fa48("2042"), (stryMutAct_9fa48("2043") ? (a >> 20) * (b >> 20) / MOD_CUT : (stryCov_9fa48("2043"), (stryMutAct_9fa48("2044") ? (a >> 20) / (b >> 20) : (stryCov_9fa48("2044"), (a >> 20) * (b >> 20))) * MOD_CUT)) + (stryMutAct_9fa48("2045") ? (a & 0xfff00000) / (b & 0xfffff) : (stryCov_9fa48("2045"), (a & 0xfff00000) * (b & 0xfffff))))) + (stryMutAct_9fa48("2046") ? (a & 0xfffff) / b : (stryCov_9fa48("2046"), (a & 0xfffff) * b)));
    return stryMutAct_9fa48("2047") ? r * MOD : (stryCov_9fa48("2047"), r % MOD);
  }
}
function pow(a, b) {
  if (stryMutAct_9fa48("2048")) {
    {}
  } else {
    stryCov_9fa48("2048");
    let r = 1;
    let base = a;
    while (stryMutAct_9fa48("2049") ? false : (stryCov_9fa48("2049"), b)) {
      if (stryMutAct_9fa48("2050")) {
        {}
      } else {
        stryCov_9fa48("2050");
        if (stryMutAct_9fa48("2052") ? false : stryMutAct_9fa48("2051") ? true : (stryCov_9fa48("2051", "2052"), b & 1n)) {
          if (stryMutAct_9fa48("2053")) {
            {}
          } else {
            stryCov_9fa48("2053");
            r = mul(r, base);
          }
        }
        stryMutAct_9fa48("2054") ? b *= 2n : (stryCov_9fa48("2054"), b /= 2n);
        base = mul(base, base);
      }
    }
    return r;
  }
}
export function solve(n, m, k, queries) {
  if (stryMutAct_9fa48("2055")) {
    {}
  } else {
    stryCov_9fa48("2055");
    let count = 0;
    let black = 0;
    for (let i = 0; stryMutAct_9fa48("2058") ? i >= k : stryMutAct_9fa48("2057") ? i <= k : stryMutAct_9fa48("2056") ? false : (stryCov_9fa48("2056", "2057", "2058"), i < k); stryMutAct_9fa48("2059") ? i-- : (stryCov_9fa48("2059"), i++)) {
      if (stryMutAct_9fa48("2060")) {
        {}
      } else {
        stryCov_9fa48("2060");
        const [x, y, color] = queries[i];
        const isBorder = stryMutAct_9fa48("2063") ? (x === 1 || x === n || y === 1) && y === m : stryMutAct_9fa48("2062") ? false : stryMutAct_9fa48("2061") ? true : (stryCov_9fa48("2061", "2062", "2063"), (stryMutAct_9fa48("2065") ? (x === 1 || x === n) && y === 1 : stryMutAct_9fa48("2064") ? false : (stryCov_9fa48("2064", "2065"), (stryMutAct_9fa48("2067") ? x === 1 && x === n : stryMutAct_9fa48("2066") ? false : (stryCov_9fa48("2066", "2067"), (stryMutAct_9fa48("2069") ? x !== 1 : stryMutAct_9fa48("2068") ? false : (stryCov_9fa48("2068", "2069"), x === 1)) || (stryMutAct_9fa48("2071") ? x !== n : stryMutAct_9fa48("2070") ? false : (stryCov_9fa48("2070", "2071"), x === n)))) || (stryMutAct_9fa48("2073") ? y !== 1 : stryMutAct_9fa48("2072") ? false : (stryCov_9fa48("2072", "2073"), y === 1)))) || (stryMutAct_9fa48("2075") ? y !== m : stryMutAct_9fa48("2074") ? false : (stryCov_9fa48("2074", "2075"), y === m)));
        const isCorner = stryMutAct_9fa48("2078") ? (x === 1 && y === 1 || x === 1 && y === m || x === n && y === 1) && x === n && y === m : stryMutAct_9fa48("2077") ? false : stryMutAct_9fa48("2076") ? true : (stryCov_9fa48("2076", "2077", "2078"), (stryMutAct_9fa48("2080") ? (x === 1 && y === 1 || x === 1 && y === m) && x === n && y === 1 : stryMutAct_9fa48("2079") ? false : (stryCov_9fa48("2079", "2080"), (stryMutAct_9fa48("2082") ? x === 1 && y === 1 && x === 1 && y === m : stryMutAct_9fa48("2081") ? false : (stryCov_9fa48("2081", "2082"), (stryMutAct_9fa48("2084") ? x === 1 || y === 1 : stryMutAct_9fa48("2083") ? false : (stryCov_9fa48("2083", "2084"), (stryMutAct_9fa48("2086") ? x !== 1 : stryMutAct_9fa48("2085") ? true : (stryCov_9fa48("2085", "2086"), x === 1)) && (stryMutAct_9fa48("2088") ? y !== 1 : stryMutAct_9fa48("2087") ? true : (stryCov_9fa48("2087", "2088"), y === 1)))) || (stryMutAct_9fa48("2090") ? x === 1 || y === m : stryMutAct_9fa48("2089") ? false : (stryCov_9fa48("2089", "2090"), (stryMutAct_9fa48("2092") ? x !== 1 : stryMutAct_9fa48("2091") ? true : (stryCov_9fa48("2091", "2092"), x === 1)) && (stryMutAct_9fa48("2094") ? y !== m : stryMutAct_9fa48("2093") ? true : (stryCov_9fa48("2093", "2094"), y === m)))))) || (stryMutAct_9fa48("2096") ? x === n || y === 1 : stryMutAct_9fa48("2095") ? false : (stryCov_9fa48("2095", "2096"), (stryMutAct_9fa48("2098") ? x !== n : stryMutAct_9fa48("2097") ? true : (stryCov_9fa48("2097", "2098"), x === n)) && (stryMutAct_9fa48("2100") ? y !== 1 : stryMutAct_9fa48("2099") ? true : (stryCov_9fa48("2099", "2100"), y === 1)))))) || (stryMutAct_9fa48("2102") ? x === n || y === m : stryMutAct_9fa48("2101") ? false : (stryCov_9fa48("2101", "2102"), (stryMutAct_9fa48("2104") ? x !== n : stryMutAct_9fa48("2103") ? true : (stryCov_9fa48("2103", "2104"), x === n)) && (stryMutAct_9fa48("2106") ? y !== m : stryMutAct_9fa48("2105") ? true : (stryCov_9fa48("2105", "2106"), y === m)))));
        if (stryMutAct_9fa48("2109") ? isBorder || !isCorner : stryMutAct_9fa48("2108") ? false : stryMutAct_9fa48("2107") ? true : (stryCov_9fa48("2107", "2108", "2109"), isBorder && (stryMutAct_9fa48("2110") ? isCorner : (stryCov_9fa48("2110"), !isCorner)))) {
          if (stryMutAct_9fa48("2111")) {
            {}
          } else {
            stryCov_9fa48("2111");
            stryMutAct_9fa48("2112") ? count-- : (stryCov_9fa48("2112"), count++);
            stryMutAct_9fa48("2113") ? black -= color : (stryCov_9fa48("2113"), black += color);
          }
        }
      }
    }
    const total = stryMutAct_9fa48("2114") ? BigInt(n) * BigInt(m) + BigInt(k) : (stryCov_9fa48("2114"), (stryMutAct_9fa48("2115") ? BigInt(n) / BigInt(m) : (stryCov_9fa48("2115"), BigInt(n) * BigInt(m))) - BigInt(k));
    if (stryMutAct_9fa48("2118") ? count !== 2 * (n + m - 4) : stryMutAct_9fa48("2117") ? false : stryMutAct_9fa48("2116") ? true : (stryCov_9fa48("2116", "2117", "2118"), count === (stryMutAct_9fa48("2119") ? 2 / (n + m - 4) : (stryCov_9fa48("2119"), 2 * (stryMutAct_9fa48("2120") ? n + m + 4 : (stryCov_9fa48("2120"), (stryMutAct_9fa48("2121") ? n - m : (stryCov_9fa48("2121"), n + m)) - 4)))))) {
      if (stryMutAct_9fa48("2122")) {
        {}
      } else {
        stryCov_9fa48("2122");
        return black & 1 ? 0 : pow(2, total);
      }
    } else {
      if (stryMutAct_9fa48("2123")) {
        {}
      } else {
        stryCov_9fa48("2123");
        return pow(2, stryMutAct_9fa48("2124") ? total + 1 : (stryCov_9fa48("2124"), total - 1));
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