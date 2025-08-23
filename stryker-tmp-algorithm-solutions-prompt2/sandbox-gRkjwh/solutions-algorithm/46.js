// Functional logic: Find max depth in organization chart/tree
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
export function solve(n, managers) {
  if (stryMutAct_9fa48("852")) {
    {}
  } else {
    stryCov_9fa48("852");
    const graph = {};
    let maxDepth = 0;

    // Build graph
    for (let i = 1; stryMutAct_9fa48("855") ? i > n : stryMutAct_9fa48("854") ? i < n : stryMutAct_9fa48("853") ? false : (stryCov_9fa48("853", "854", "855"), i <= n); stryMutAct_9fa48("856") ? i-- : (stryCov_9fa48("856"), i++)) {
      if (stryMutAct_9fa48("857")) {
        {}
      } else {
        stryCov_9fa48("857");
        const parent = managers[stryMutAct_9fa48("858") ? i + 1 : (stryCov_9fa48("858"), i - 1)]; // manager of employee i
        if (stryMutAct_9fa48("861") ? false : stryMutAct_9fa48("860") ? true : stryMutAct_9fa48("859") ? graph[i] : (stryCov_9fa48("859", "860", "861"), !graph[i])) graph[i] = stryMutAct_9fa48("862") ? ["Stryker was here"] : (stryCov_9fa48("862"), []);
        if (stryMutAct_9fa48("865") ? false : stryMutAct_9fa48("864") ? true : stryMutAct_9fa48("863") ? graph[parent] : (stryCov_9fa48("863", "864", "865"), !graph[parent])) graph[parent] = stryMutAct_9fa48("866") ? ["Stryker was here"] : (stryCov_9fa48("866"), []);
        graph[parent].push(i);
      }
    }

    // DFS to compute depth
    function dfs(node, depth) {
      if (stryMutAct_9fa48("867")) {
        {}
      } else {
        stryCov_9fa48("867");
        maxDepth = stryMutAct_9fa48("868") ? Math.min(maxDepth, depth) : (stryCov_9fa48("868"), Math.max(maxDepth, depth));
        for (const child of graph[node]) {
          if (stryMutAct_9fa48("869")) {
            {}
          } else {
            stryCov_9fa48("869");
            dfs(child, stryMutAct_9fa48("870") ? depth - 1 : (stryCov_9fa48("870"), depth + 1));
          }
        }
      }
    }
    dfs(stryMutAct_9fa48("871") ? +1 : (stryCov_9fa48("871"), -1), 0); // root is -1
    return maxDepth;
  }
}

// ✅ Test function to verify correctness
// function testing_test() {
//     const tests = [{
//             input: { n: 5, managers: [-1, 1, 2, 1, -1] },
//             expected: 3
//         },
//         {
//             input: { n: 4, managers: [-1, 1, 2, 3] },
//             expected: 4
//         },
//         {
//             input: { n: 3, managers: [-1, -1, 1] },
//             expected: 2
//         },
//         {
//             input: {
//                 n: 12,
//                 managers: [-1, 1, 2, 3, -1, 5, 6, 7, -1, 9, 10, 11]
//             },
//             expected: 4
//         },
//         {
//             input: { n: 6, managers: [-1, 1, 1, 1, 2, 3] },
//             expected: 3
//         }
//     ];

//     for (const { input, expected }
//         of tests) {
//         const result = solve(input.n, input.managers);
//         console.log(`Input: ${input.managers.join(' ')} | Output: ${result} | Expected: ${expected} | ${result === expected ? "✅ PASS" : "❌ FAIL"}`);
//     }
// }

// // Run test
// testing_test();