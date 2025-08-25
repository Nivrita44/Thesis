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
const N = stryMutAct_9fa48("2252") ? 2e6 - 5 : (stryCov_9fa48("2252"), 2e6 + 5);
const offset = 1e6;
const sum = (stryMutAct_9fa48("2253") ? new Array() : (stryCov_9fa48("2253"), new Array(N))).fill(0);
function lowbit(x) {
  if (stryMutAct_9fa48("2254")) {
    {}
  } else {
    stryCov_9fa48("2254");
    return x & (stryMutAct_9fa48("2255") ? +x : (stryCov_9fa48("2255"), -x));
  }
}
function add(x) {
  if (stryMutAct_9fa48("2256")) {
    {}
  } else {
    stryCov_9fa48("2256");
    while (stryMutAct_9fa48("2259") ? x >= N : stryMutAct_9fa48("2258") ? x <= N : stryMutAct_9fa48("2257") ? false : (stryCov_9fa48("2257", "2258", "2259"), x < N)) {
      if (stryMutAct_9fa48("2260")) {
        {}
      } else {
        stryCov_9fa48("2260");
        stryMutAct_9fa48("2261") ? sum[x]-- : (stryCov_9fa48("2261"), sum[x]++);
        stryMutAct_9fa48("2262") ? x -= lowbit(x) : (stryCov_9fa48("2262"), x += lowbit(x));
      }
    }
  }
}
function ask(x) {
  if (stryMutAct_9fa48("2263")) {
    {}
  } else {
    stryCov_9fa48("2263");
    let answer = 0;
    while (stryMutAct_9fa48("2266") ? x <= 0 : stryMutAct_9fa48("2265") ? x >= 0 : stryMutAct_9fa48("2264") ? false : (stryCov_9fa48("2264", "2265", "2266"), x > 0)) {
      if (stryMutAct_9fa48("2267")) {
        {}
      } else {
        stryCov_9fa48("2267");
        stryMutAct_9fa48("2268") ? answer -= sum[x] : (stryCov_9fa48("2268"), answer += sum[x]);
        stryMutAct_9fa48("2269") ? x += lowbit(x) : (stryCov_9fa48("2269"), x -= lowbit(x));
      }
    }
    return answer;
  }
}
export function solve(s) {
  if (stryMutAct_9fa48("2270")) {
    {}
  } else {
    stryCov_9fa48("2270");
    const n = s.length;
    const a = stryMutAct_9fa48("2271") ? ["Stryker was here"] : (stryCov_9fa48("2271"), []);
    for (const character of s) {
      if (stryMutAct_9fa48("2272")) {
        {}
      } else {
        stryCov_9fa48("2272");
        if (stryMutAct_9fa48("2275") ? character !== '0' : stryMutAct_9fa48("2274") ? false : stryMutAct_9fa48("2273") ? true : (stryCov_9fa48("2273", "2274", "2275"), character === (stryMutAct_9fa48("2276") ? "" : (stryCov_9fa48("2276"), '0')))) {
          if (stryMutAct_9fa48("2277")) {
            {}
          } else {
            stryCov_9fa48("2277");
            a.push(1);
          }
        } else {
          if (stryMutAct_9fa48("2278")) {
            {}
          } else {
            stryCov_9fa48("2278");
            a.push(stryMutAct_9fa48("2279") ? +3 : (stryCov_9fa48("2279"), -3));
          }
        }
      }
    }
    let answer = 0;
    let pre_sum = 0;
    add(stryMutAct_9fa48("2280") ? pre_sum - offset : (stryCov_9fa48("2280"), pre_sum + offset));
    const count = new Map();
    count.set(0, 1);
    for (let i = 0; stryMutAct_9fa48("2283") ? i >= n : stryMutAct_9fa48("2282") ? i <= n : stryMutAct_9fa48("2281") ? false : (stryCov_9fa48("2281", "2282", "2283"), i < n); stryMutAct_9fa48("2284") ? i-- : (stryCov_9fa48("2284"), i++)) {
      if (stryMutAct_9fa48("2285")) {
        {}
      } else {
        stryCov_9fa48("2285");
        stryMutAct_9fa48("2286") ? pre_sum -= a[i] : (stryCov_9fa48("2286"), pre_sum += a[i]);
        stryMutAct_9fa48("2287") ? answer -= (count.get(pre_sum + 1) || 0) + ask(pre_sum - 2 + offset) : (stryCov_9fa48("2287"), answer += stryMutAct_9fa48("2288") ? (count.get(pre_sum + 1) || 0) - ask(pre_sum - 2 + offset) : (stryCov_9fa48("2288"), (stryMutAct_9fa48("2291") ? count.get(pre_sum + 1) && 0 : stryMutAct_9fa48("2290") ? false : stryMutAct_9fa48("2289") ? true : (stryCov_9fa48("2289", "2290", "2291"), count.get(stryMutAct_9fa48("2292") ? pre_sum - 1 : (stryCov_9fa48("2292"), pre_sum + 1)) || 0)) + ask(stryMutAct_9fa48("2293") ? pre_sum - 2 - offset : (stryCov_9fa48("2293"), (stryMutAct_9fa48("2294") ? pre_sum + 2 : (stryCov_9fa48("2294"), pre_sum - 2)) + offset))));
        count.set(pre_sum, stryMutAct_9fa48("2295") ? (count.get(pre_sum) || 0) - 1 : (stryCov_9fa48("2295"), (stryMutAct_9fa48("2298") ? count.get(pre_sum) && 0 : stryMutAct_9fa48("2297") ? false : stryMutAct_9fa48("2296") ? true : (stryCov_9fa48("2296", "2297", "2298"), count.get(pre_sum) || 0)) + 1));
        add(stryMutAct_9fa48("2299") ? pre_sum - offset : (stryCov_9fa48("2299"), pre_sum + offset));
      }
    }
    return answer;
  }
}

// function testing_test() {
//     const input = "0010010011";
//     const expectedOutput = 12;

//     const result = solve(input);

//     if (result === expectedOutput) {
//         console.log("Test passed!");
//     } else {
//         console.log(`Test failed! Expected ${expectedOutput}, but got ${result}`);
//     }
// }

// testing_test();