// @ts-nocheck
// Functional logic
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
export function solve(n, k, p, edges) {
  if (stryMutAct_9fa48("885")) {
    {}
  } else {
    stryCov_9fa48("885");
    const head = stryMutAct_9fa48("886") ? Array().fill(-1) : (stryCov_9fa48("886"), Array(stryMutAct_9fa48("887") ? n - 2 : (stryCov_9fa48("887"), n + 2)).fill(stryMutAct_9fa48("888") ? +1 : (stryCov_9fa48("888"), -1)));
    const ver = stryMutAct_9fa48("889") ? ["Stryker was here"] : (stryCov_9fa48("889"), []);
    const nxt = stryMutAct_9fa48("890") ? ["Stryker was here"] : (stryCov_9fa48("890"), []);
    let tot = 0;
    const cnt = stryMutAct_9fa48("891") ? Array().fill(0) : (stryCov_9fa48("891"), Array(stryMutAct_9fa48("892") ? n - 2 : (stryCov_9fa48("892"), n + 2)).fill(0));
    const sumc = stryMutAct_9fa48("893") ? Array().fill(0) : (stryCov_9fa48("893"), Array(stryMutAct_9fa48("894") ? n - 2 : (stryCov_9fa48("894"), n + 2)).fill(0));
    const sum = stryMutAct_9fa48("895") ? Array().fill(0) : (stryCov_9fa48("895"), Array(stryMutAct_9fa48("896") ? n - 2 : (stryCov_9fa48("896"), n + 2)).fill(0));
    let m = 0;
    function addedge(x, y) {
      if (stryMutAct_9fa48("897")) {
        {}
      } else {
        stryCov_9fa48("897");
        ver[stryMutAct_9fa48("898") ? --tot : (stryCov_9fa48("898"), ++tot)] = y;
        nxt[tot] = head[x];
        head[x] = tot;
      }
    }
    for (const [x, y] of edges) {
      if (stryMutAct_9fa48("899")) {
        {}
      } else {
        stryCov_9fa48("899");
        addedge(x, y);
        addedge(y, x);
      }
    }
    function dfs(x, fa, dep) {
      if (stryMutAct_9fa48("900")) {
        {}
      } else {
        stryCov_9fa48("900");
        stryMutAct_9fa48("901") ? cnt[dep]-- : (stryCov_9fa48("901"), cnt[dep]++);
        m = stryMutAct_9fa48("902") ? Math.min(m, dep) : (stryCov_9fa48("902"), Math.max(m, dep));
        for (let i = head[x]; stryMutAct_9fa48("904") ? i === -1 : stryMutAct_9fa48("903") ? false : (stryCov_9fa48("903", "904"), i !== (stryMutAct_9fa48("905") ? +1 : (stryCov_9fa48("905"), -1))); i = nxt[i]) {
          if (stryMutAct_9fa48("906")) {
            {}
          } else {
            stryCov_9fa48("906");
            const y = ver[i];
            if (stryMutAct_9fa48("909") ? y !== fa : stryMutAct_9fa48("908") ? false : stryMutAct_9fa48("907") ? true : (stryCov_9fa48("907", "908", "909"), y === fa)) continue;
            dfs(y, x, stryMutAct_9fa48("910") ? dep - 1 : (stryCov_9fa48("910"), dep + 1));
          }
        }
      }
    }
    dfs(1, 0, 0);
    let ans = 1;
    for (let i = 1; stryMutAct_9fa48("913") ? i > m : stryMutAct_9fa48("912") ? i < m : stryMutAct_9fa48("911") ? false : (stryCov_9fa48("911", "912", "913"), i <= m); stryMutAct_9fa48("914") ? i-- : (stryCov_9fa48("914"), i++)) {
      if (stryMutAct_9fa48("915")) {
        {}
      } else {
        stryCov_9fa48("915");
        sumc[i] = stryMutAct_9fa48("916") ? sumc[i - 1] - cnt[i] : (stryCov_9fa48("916"), sumc[stryMutAct_9fa48("917") ? i + 1 : (stryCov_9fa48("917"), i - 1)] + cnt[i]);
        sum[i] = stryMutAct_9fa48("918") ? sum[i - 1] - cnt[i] * i : (stryCov_9fa48("918"), sum[stryMutAct_9fa48("919") ? i + 1 : (stryCov_9fa48("919"), i - 1)] + (stryMutAct_9fa48("920") ? cnt[i] / i : (stryCov_9fa48("920"), cnt[i] * i)));
        let l = 1,
          r = i;
        while (stryMutAct_9fa48("923") ? l >= r : stryMutAct_9fa48("922") ? l <= r : stryMutAct_9fa48("921") ? false : (stryCov_9fa48("921", "922", "923"), l < r)) {
          if (stryMutAct_9fa48("924")) {
            {}
          } else {
            stryCov_9fa48("924");
            const mid = Math.floor(stryMutAct_9fa48("925") ? (l + r) * 2 : (stryCov_9fa48("925"), (stryMutAct_9fa48("926") ? l - r : (stryCov_9fa48("926"), l + r)) / 2));
            const c = stryMutAct_9fa48("927") ? sumc[i] + sumc[mid - 1] : (stryCov_9fa48("927"), sumc[i] - sumc[stryMutAct_9fa48("928") ? mid + 1 : (stryCov_9fa48("928"), mid - 1)]);
            const v = stryMutAct_9fa48("929") ? c * i + (sum[i] - sum[mid - 1]) : (stryCov_9fa48("929"), (stryMutAct_9fa48("930") ? c / i : (stryCov_9fa48("930"), c * i)) - (stryMutAct_9fa48("931") ? sum[i] + sum[mid - 1] : (stryCov_9fa48("931"), sum[i] - sum[stryMutAct_9fa48("932") ? mid + 1 : (stryCov_9fa48("932"), mid - 1)])));
            if (stryMutAct_9fa48("936") ? v < p : stryMutAct_9fa48("935") ? v > p : stryMutAct_9fa48("934") ? false : stryMutAct_9fa48("933") ? true : (stryCov_9fa48("933", "934", "935", "936"), v >= p)) l = stryMutAct_9fa48("937") ? mid - 1 : (stryCov_9fa48("937"), mid + 1);else r = mid;
          }
        }
        let tmp = stryMutAct_9fa48("938") ? sumc[i] + sumc[l - 1] : (stryCov_9fa48("938"), sumc[i] - sumc[stryMutAct_9fa48("939") ? l + 1 : (stryCov_9fa48("939"), l - 1)]);
        const rem = stryMutAct_9fa48("940") ? p + (tmp * i - (sum[i] - sum[l - 1])) : (stryCov_9fa48("940"), p - (stryMutAct_9fa48("941") ? tmp * i + (sum[i] - sum[l - 1]) : (stryCov_9fa48("941"), (stryMutAct_9fa48("942") ? tmp / i : (stryCov_9fa48("942"), tmp * i)) - (stryMutAct_9fa48("943") ? sum[i] + sum[l - 1] : (stryCov_9fa48("943"), sum[i] - sum[stryMutAct_9fa48("944") ? l + 1 : (stryCov_9fa48("944"), l - 1)])))));
        if (stryMutAct_9fa48("947") ? l === 1 : stryMutAct_9fa48("946") ? false : stryMutAct_9fa48("945") ? true : (stryCov_9fa48("945", "946", "947"), l !== 1)) stryMutAct_9fa48("948") ? tmp -= Math.min(cnt[l - 1], Math.floor(rem / (i - (l - 1)))) : (stryCov_9fa48("948"), tmp += stryMutAct_9fa48("949") ? Math.max(cnt[l - 1], Math.floor(rem / (i - (l - 1)))) : (stryCov_9fa48("949"), Math.min(cnt[stryMutAct_9fa48("950") ? l + 1 : (stryCov_9fa48("950"), l - 1)], Math.floor(stryMutAct_9fa48("951") ? rem * (i - (l - 1)) : (stryCov_9fa48("951"), rem / (stryMutAct_9fa48("952") ? i + (l - 1) : (stryCov_9fa48("952"), i - (stryMutAct_9fa48("953") ? l + 1 : (stryCov_9fa48("953"), l - 1)))))))));
        ans = stryMutAct_9fa48("954") ? Math.min(ans, Math.min(k, tmp)) : (stryCov_9fa48("954"), Math.max(ans, stryMutAct_9fa48("955") ? Math.max(k, tmp) : (stryCov_9fa48("955"), Math.min(k, tmp))));
      }
    }
    return ans;
  }
}

// Test function
// function testing_test() {
//     const tests = [{
//             input: {
//                 n: 5,
//                 k: 1000,
//                 p: 1000,
//                 edges: [
//                     [1, 2],
//                     [1, 3],
//                     [3, 4],
//                     [3, 5]

//                 ],
//             },
//             expected: 4
//         },
//         {
//             input: {
//                 n: 3,
//                 k: 1,
//                 p: 2,
//                 edges: [
//                     [1, 2],
//                     [1, 3]
//                 ],
//             },
//             expected: 1
//         }
//     ];

//     for (const { input, expected }
//         of tests) {
//         const result = solve(input.n, input.k, input.p, input.edges);
//         console.log(`Input: n=${input.n}, k=${input.k}, p=${input.p}, edges=${JSON.stringify(input.edges)}`);
//         console.log(`Output: ${result} | Expected: ${expected} | ${result === expected ? "✅ PASS" : "❌ FAIL"}`);
//     }
// }

// // Run tests
// testing_test();