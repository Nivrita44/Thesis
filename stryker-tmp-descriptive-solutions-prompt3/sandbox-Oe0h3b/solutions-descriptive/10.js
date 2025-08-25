'use strict';

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
export function solve(n, l, r, edges) {
  if (stryMutAct_9fa48("68")) {
    {}
  } else {
    stryCov_9fa48("68");
    if (stryMutAct_9fa48("71") ? n !== 1 : stryMutAct_9fa48("70") ? false : stryMutAct_9fa48("69") ? true : (stryCov_9fa48("69", "70", "71"), n === 1)) return l[0];
    const deg = new Uint32Array(n);
    const mix = new Uint32Array(n);
    for (const [u, v] of edges) {
      if (stryMutAct_9fa48("72")) {
        {}
      } else {
        stryCov_9fa48("72");
        const ui = stryMutAct_9fa48("73") ? u + 1 : (stryCov_9fa48("73"), u - 1);
        const vi = stryMutAct_9fa48("74") ? v + 1 : (stryCov_9fa48("74"), v - 1);
        stryMutAct_9fa48("75") ? deg[ui]-- : (stryCov_9fa48("75"), deg[ui]++);
        stryMutAct_9fa48("76") ? deg[vi]-- : (stryCov_9fa48("76"), deg[vi]++);
        mix[ui] ^= vi;
        mix[vi] ^= ui;
      }
    }
    const h = stryMutAct_9fa48("77") ? ["Stryker was here"] : (stryCov_9fa48("77"), []);
    let hSize = 0;
    for (let i = 0; stryMutAct_9fa48("80") ? i >= n : stryMutAct_9fa48("79") ? i <= n : stryMutAct_9fa48("78") ? false : (stryCov_9fa48("78", "79", "80"), i < n); stryMutAct_9fa48("81") ? i-- : (stryCov_9fa48("81"), i++)) {
      if (stryMutAct_9fa48("82")) {
        {}
      } else {
        stryCov_9fa48("82");
        if (stryMutAct_9fa48("85") ? deg[i] !== 1 : stryMutAct_9fa48("84") ? false : stryMutAct_9fa48("83") ? true : (stryCov_9fa48("83", "84", "85"), deg[i] === 1)) {
          if (stryMutAct_9fa48("86")) {
            {}
          } else {
            stryCov_9fa48("86");
            h[stryMutAct_9fa48("87") ? hSize-- : (stryCov_9fa48("87"), hSize++)] = i;
          }
        }
      }
    }
    let ans = 0;
    let hPos = 0;
    for (let i = 0; stryMutAct_9fa48("90") ? i >= n - 1 : stryMutAct_9fa48("89") ? i <= n - 1 : stryMutAct_9fa48("88") ? false : (stryCov_9fa48("88", "89", "90"), i < (stryMutAct_9fa48("91") ? n + 1 : (stryCov_9fa48("91"), n - 1))); stryMutAct_9fa48("92") ? i-- : (stryCov_9fa48("92"), i++)) {
      if (stryMutAct_9fa48("93")) {
        {}
      } else {
        stryCov_9fa48("93");
        const u = h[stryMutAct_9fa48("94") ? hPos-- : (stryCov_9fa48("94"), hPos++)];
        const v = mix[u];
        if (stryMutAct_9fa48("98") ? l[u] <= r[v] : stryMutAct_9fa48("97") ? l[u] >= r[v] : stryMutAct_9fa48("96") ? false : stryMutAct_9fa48("95") ? true : (stryCov_9fa48("95", "96", "97", "98"), l[u] > r[v])) {
          if (stryMutAct_9fa48("99")) {
            {}
          } else {
            stryCov_9fa48("99");
            stryMutAct_9fa48("100") ? ans -= l[u] - r[v] : (stryCov_9fa48("100"), ans += stryMutAct_9fa48("101") ? l[u] + r[v] : (stryCov_9fa48("101"), l[u] - r[v]));
            l[v] = r[v];
          }
        } else if (stryMutAct_9fa48("105") ? l[u] <= l[v] : stryMutAct_9fa48("104") ? l[u] >= l[v] : stryMutAct_9fa48("103") ? false : stryMutAct_9fa48("102") ? true : (stryCov_9fa48("102", "103", "104", "105"), l[u] > l[v])) {
          if (stryMutAct_9fa48("106")) {
            {}
          } else {
            stryCov_9fa48("106");
            l[v] = l[u];
          }
        }
        mix[v] ^= u;
        stryMutAct_9fa48("107") ? deg[v]++ : (stryCov_9fa48("107"), deg[v]--);
        if (stryMutAct_9fa48("110") ? deg[v] !== 1 : stryMutAct_9fa48("109") ? false : stryMutAct_9fa48("108") ? true : (stryCov_9fa48("108", "109", "110"), deg[v] === 1)) {
          if (stryMutAct_9fa48("111")) {
            {}
          } else {
            stryCov_9fa48("111");
            h[stryMutAct_9fa48("112") ? hSize-- : (stryCov_9fa48("112"), hSize++)] = v;
          }
        }
      }
    }
    return stryMutAct_9fa48("113") ? ans - l[h[hPos]] : (stryCov_9fa48("113"), ans + l[h[hPos]]);
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 n: 4,
//                 l: [0, 6, 0, 5],
//                 r: [11, 6, 0, 5],
//                 edges: [[2, 1], [3, 1], [4, 3]]
//             },
//             expected: 11
//         },
//         {
//             input: {
//                 n: 7,
//                 l: [1, 0, 0, 2, 2, 2, 2],
//                 r: [1, 5, 5, 2, 2, 2, 2],
//                 edges: [[1, 2], [1, 3], [2, 4], [2, 5], [3, 6], [3, 7]]
//             },
//             expected: 3
//         },
//         {
//             input: {
//                 n: 4,
//                 l: [1, 1, 1, 0],
//                 r: [1, 1, 1, 0],
//                 edges: [[1, 4], [2, 4], [3, 4]]
//             },
//             expected: 3
//         },
//         {
//             input: {
//                 n: 7,
//                 l: [0, 0, 0, 0, 3, 4, 5],
//                 r: [20, 20, 20, 20, 3, 4, 5],
//                 edges: [[1, 2], [1, 3], [1, 4], [2, 5], [3, 6], [4, 7]]
//             },
//             expected: 5
//         },
//         {
//             input: {
//                 n: 5,
//                 l: [1000000000, 0, 1000000000, 0, 1000000000],
//                 r: [1000000000, 0, 1000000000, 0, 1000000000],
//                 edges: [[3, 2], [2, 1], [1, 4], [4, 5]]
//             },
//             expected: 3000000000
//         },
//         {
//             input: {
//                 n: 6,
//                 l: [21, 57, 98, 61, 15, 23],
//                 r: [88, 81, 99, 76, 50, 67],
//                 edges: [[2, 1], [3, 2], [4, 3], [5, 3], [6, 4]]
//             },
//             expected: 98
//         }
//     ];

//     console.log("Running Tests...\n");
//     testCases.forEach(({input, expected}, index) => {
//         const {n, l, r, edges} = input;
//         const result = solve(n, l, r, edges);
//         console.log(`Test Case ${index + 1}:`);
//         console.log(`Input: n=${n}, l=[${l}], r=[${r}], edges=[${edges.map(e => `[${e}]`).join(', ')}]`);
//         console.log(`Expected: ${expected}`);
//         console.log(`Result: ${result}`);
//         console.log(`Status: ${result === expected ? "PASS" : "FAIL"}\n`);
//     });
// }

// testing_test();