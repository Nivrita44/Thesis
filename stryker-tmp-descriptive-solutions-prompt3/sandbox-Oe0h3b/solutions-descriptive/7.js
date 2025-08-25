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
export function solve(lines) {
  if (stryMutAct_9fa48("2255")) {
    {}
  } else {
    stryCov_9fa48("2255");
    let n = parseInt(lines[0]);
    let tree = new Tree(n);
    for (let i = 1; stryMutAct_9fa48("2258") ? i >= n : stryMutAct_9fa48("2257") ? i <= n : stryMutAct_9fa48("2256") ? false : (stryCov_9fa48("2256", "2257", "2258"), i < n); stryMutAct_9fa48("2259") ? i-- : (stryCov_9fa48("2259"), i++)) {
      if (stryMutAct_9fa48("2260")) {
        {}
      } else {
        stryCov_9fa48("2260");
        let [u, v] = lines[i].split(stryMutAct_9fa48("2261") ? "" : (stryCov_9fa48("2261"), ' ')).map(stryMutAct_9fa48("2262") ? () => undefined : (stryCov_9fa48("2262"), x => stryMutAct_9fa48("2263") ? parseInt(x) + 1 : (stryCov_9fa48("2263"), parseInt(x) - 1)));
        tree.addEdge(u, v);
      }
    }
    tree.build(0);
    let maxDepth = tree.depth;
    let nDepth = stryMutAct_9fa48("2264") ? Array().fill(0) : (stryCov_9fa48("2264"), Array(stryMutAct_9fa48("2265") ? maxDepth - 1 : (stryCov_9fa48("2265"), maxDepth + 1)).fill(0));
    let subtreeSize = stryMutAct_9fa48("2266") ? Array().fill(1) : (stryCov_9fa48("2266"), Array(n).fill(1));
    for (let i = stryMutAct_9fa48("2267") ? tree.bfsTour.length + 1 : (stryCov_9fa48("2267"), tree.bfsTour.length - 1); stryMutAct_9fa48("2270") ? i < 0 : stryMutAct_9fa48("2269") ? i > 0 : stryMutAct_9fa48("2268") ? false : (stryCov_9fa48("2268", "2269", "2270"), i >= 0); stryMutAct_9fa48("2271") ? i++ : (stryCov_9fa48("2271"), i--)) {
      if (stryMutAct_9fa48("2272")) {
        {}
      } else {
        stryCov_9fa48("2272");
        let u = tree.bfsTour[i];
        stryMutAct_9fa48("2273") ? nDepth[tree.nodeDepth[u]]-- : (stryCov_9fa48("2273"), nDepth[tree.nodeDepth[u]]++);
        if (stryMutAct_9fa48("2276") ? false : stryMutAct_9fa48("2275") ? true : stryMutAct_9fa48("2274") ? tree.isRoot(u) : (stryCov_9fa48("2274", "2275", "2276"), !tree.isRoot(u))) {
          if (stryMutAct_9fa48("2277")) {
            {}
          } else {
            stryCov_9fa48("2277");
            stryMutAct_9fa48("2278") ? subtreeSize[tree.parent[u]] -= subtreeSize[u] : (stryCov_9fa48("2278"), subtreeSize[tree.parent[u]] += subtreeSize[u]);
          }
        }
      }
    }
    let nDepthPref = stryMutAct_9fa48("2279") ? Array().fill(0) : (stryCov_9fa48("2279"), Array(stryMutAct_9fa48("2280") ? maxDepth - 2 : (stryCov_9fa48("2280"), maxDepth + 2)).fill(0));
    for (let d = 0; stryMutAct_9fa48("2283") ? d > maxDepth : stryMutAct_9fa48("2282") ? d < maxDepth : stryMutAct_9fa48("2281") ? false : (stryCov_9fa48("2281", "2282", "2283"), d <= maxDepth); stryMutAct_9fa48("2284") ? d-- : (stryCov_9fa48("2284"), d++)) {
      if (stryMutAct_9fa48("2285")) {
        {}
      } else {
        stryCov_9fa48("2285");
        nDepthPref[stryMutAct_9fa48("2286") ? d - 1 : (stryCov_9fa48("2286"), d + 1)] = stryMutAct_9fa48("2287") ? nDepthPref[d] - nDepth[d] : (stryCov_9fa48("2287"), nDepthPref[d] + nDepth[d]);
      }
    }
    let ans = BigInt(0);
    for (let u = 0; stryMutAct_9fa48("2290") ? u >= n : stryMutAct_9fa48("2289") ? u <= n : stryMutAct_9fa48("2288") ? false : (stryCov_9fa48("2288", "2289", "2290"), u < n); stryMutAct_9fa48("2291") ? u-- : (stryCov_9fa48("2291"), u++)) {
      if (stryMutAct_9fa48("2292")) {
        {}
      } else {
        stryCov_9fa48("2292");
        let k = BigInt(stryMutAct_9fa48("2293") ? nDepthPref[maxDepth + 1] - nDepthPref[tree.nodeDepth[u]] + subtreeSize[u] : (stryCov_9fa48("2293"), (stryMutAct_9fa48("2294") ? nDepthPref[maxDepth + 1] + nDepthPref[tree.nodeDepth[u]] : (stryCov_9fa48("2294"), nDepthPref[stryMutAct_9fa48("2295") ? maxDepth - 1 : (stryCov_9fa48("2295"), maxDepth + 1)] - nDepthPref[tree.nodeDepth[u]])) - subtreeSize[u]));
        stryMutAct_9fa48("2296") ? ans -= BigInt(2) * BigInt(tree.nodeDepth[u]) * k : (stryCov_9fa48("2296"), ans += stryMutAct_9fa48("2297") ? BigInt(2) * BigInt(tree.nodeDepth[u]) / k : (stryCov_9fa48("2297"), (stryMutAct_9fa48("2298") ? BigInt(2) / BigInt(tree.nodeDepth[u]) : (stryCov_9fa48("2298"), BigInt(2) * BigInt(tree.nodeDepth[u]))) * k));
      }
    }
    for (let d = 0; stryMutAct_9fa48("2301") ? d > maxDepth : stryMutAct_9fa48("2300") ? d < maxDepth : stryMutAct_9fa48("2299") ? false : (stryCov_9fa48("2299", "2300", "2301"), d <= maxDepth); stryMutAct_9fa48("2302") ? d-- : (stryCov_9fa48("2302"), d++)) {
      if (stryMutAct_9fa48("2303")) {
        {}
      } else {
        stryCov_9fa48("2303");
        stryMutAct_9fa48("2304") ? ans += BigInt(d) * BigInt(nDepth[d]) * BigInt(nDepth[d] - 1) : (stryCov_9fa48("2304"), ans -= stryMutAct_9fa48("2305") ? BigInt(d) * BigInt(nDepth[d]) / BigInt(nDepth[d] - 1) : (stryCov_9fa48("2305"), (stryMutAct_9fa48("2306") ? BigInt(d) / BigInt(nDepth[d]) : (stryCov_9fa48("2306"), BigInt(d) * BigInt(nDepth[d]))) * BigInt(stryMutAct_9fa48("2307") ? nDepth[d] + 1 : (stryCov_9fa48("2307"), nDepth[d] - 1))));
      }
    }
    for (let u = 0; stryMutAct_9fa48("2310") ? u >= n : stryMutAct_9fa48("2309") ? u <= n : stryMutAct_9fa48("2308") ? false : (stryCov_9fa48("2308", "2309", "2310"), u < n); stryMutAct_9fa48("2311") ? u-- : (stryCov_9fa48("2311"), u++)) {
      if (stryMutAct_9fa48("2312")) {
        {}
      } else {
        stryCov_9fa48("2312");
        let pairs = BigInt(0);
        for (let v of tree.children(u)) {
          if (stryMutAct_9fa48("2313")) {
            {}
          } else {
            stryCov_9fa48("2313");
            stryMutAct_9fa48("2314") ? pairs -= BigInt(subtreeSize[v]) * BigInt(subtreeSize[u] - 1 - subtreeSize[v]) : (stryCov_9fa48("2314"), pairs += stryMutAct_9fa48("2315") ? BigInt(subtreeSize[v]) / BigInt(subtreeSize[u] - 1 - subtreeSize[v]) : (stryCov_9fa48("2315"), BigInt(subtreeSize[v]) * BigInt(stryMutAct_9fa48("2316") ? subtreeSize[u] - 1 + subtreeSize[v] : (stryCov_9fa48("2316"), (stryMutAct_9fa48("2317") ? subtreeSize[u] + 1 : (stryCov_9fa48("2317"), subtreeSize[u] - 1)) - subtreeSize[v]))));
          }
        }
        stryMutAct_9fa48("2318") ? pairs *= BigInt(2) : (stryCov_9fa48("2318"), pairs /= BigInt(2));
        stryMutAct_9fa48("2319") ? ans += BigInt(2 * tree.nodeDepth[u] + 1) * pairs : (stryCov_9fa48("2319"), ans -= stryMutAct_9fa48("2320") ? BigInt(2 * tree.nodeDepth[u] + 1) / pairs : (stryCov_9fa48("2320"), BigInt(stryMutAct_9fa48("2321") ? 2 * tree.nodeDepth[u] - 1 : (stryCov_9fa48("2321"), (stryMutAct_9fa48("2322") ? 2 / tree.nodeDepth[u] : (stryCov_9fa48("2322"), 2 * tree.nodeDepth[u])) + 1)) * pairs));
      }
    }
    return ans.toString();
  }
}
class Tree {
  constructor(n) {
    if (stryMutAct_9fa48("2323")) {
      {}
    } else {
      stryCov_9fa48("2323");
      this.n = n;
      this.root = stryMutAct_9fa48("2324") ? +1 : (stryCov_9fa48("2324"), -1);
      this.depth = stryMutAct_9fa48("2325") ? +1 : (stryCov_9fa48("2325"), -1);
      this.parent = (stryMutAct_9fa48("2326") ? new Array() : (stryCov_9fa48("2326"), new Array(n))).fill(stryMutAct_9fa48("2327") ? +1 : (stryCov_9fa48("2327"), -1));
      this.nodeDepth = (stryMutAct_9fa48("2328") ? new Array() : (stryCov_9fa48("2328"), new Array(n))).fill(stryMutAct_9fa48("2329") ? +1 : (stryCov_9fa48("2329"), -1));
      this.bfsTour = stryMutAct_9fa48("2330") ? ["Stryker was here"] : (stryCov_9fa48("2330"), []);
      this.edges = stryMutAct_9fa48("2331") ? ["Stryker was here"] : (stryCov_9fa48("2331"), []);
      this.s = (stryMutAct_9fa48("2332") ? new Array() : (stryCov_9fa48("2332"), new Array(stryMutAct_9fa48("2333") ? n - 2 : (stryCov_9fa48("2333"), n + 2)))).fill(0);
      this.g = stryMutAct_9fa48("2334") ? ["Stryker was here"] : (stryCov_9fa48("2334"), []);
    }
  }
  addEdge(u, v) {
    if (stryMutAct_9fa48("2335")) {
      {}
    } else {
      stryCov_9fa48("2335");
      this.edges.push(u, v);
    }
  }
  adjItr(node) {
    if (stryMutAct_9fa48("2336")) {
      {}
    } else {
      stryCov_9fa48("2336");
      let res = stryMutAct_9fa48("2337") ? ["Stryker was here"] : (stryCov_9fa48("2337"), []);
      for (let i = this.s[node]; stryMutAct_9fa48("2340") ? i >= this.s[node + 1] : stryMutAct_9fa48("2339") ? i <= this.s[node + 1] : stryMutAct_9fa48("2338") ? false : (stryCov_9fa48("2338", "2339", "2340"), i < this.s[stryMutAct_9fa48("2341") ? node - 1 : (stryCov_9fa48("2341"), node + 1)]); stryMutAct_9fa48("2342") ? i-- : (stryCov_9fa48("2342"), i++)) {
        if (stryMutAct_9fa48("2343")) {
          {}
        } else {
          stryCov_9fa48("2343");
          res.push(this.g[i]);
        }
      }
      return res;
    }
  }
  build(root) {
    if (stryMutAct_9fa48("2344")) {
      {}
    } else {
      stryCov_9fa48("2344");
      for (let i of this.edges) stryMutAct_9fa48("2345") ? this.s[i + 2]-- : (stryCov_9fa48("2345"), this.s[stryMutAct_9fa48("2346") ? i - 2 : (stryCov_9fa48("2346"), i + 2)]++);
      for (let i = 0; stryMutAct_9fa48("2349") ? i >= this.n + 1 : stryMutAct_9fa48("2348") ? i <= this.n + 1 : stryMutAct_9fa48("2347") ? false : (stryCov_9fa48("2347", "2348", "2349"), i < (stryMutAct_9fa48("2350") ? this.n - 1 : (stryCov_9fa48("2350"), this.n + 1))); stryMutAct_9fa48("2351") ? i-- : (stryCov_9fa48("2351"), i++)) stryMutAct_9fa48("2352") ? this.s[i + 1] -= this.s[i] : (stryCov_9fa48("2352"), this.s[stryMutAct_9fa48("2353") ? i - 1 : (stryCov_9fa48("2353"), i + 1)] += this.s[i]);
      this.g = stryMutAct_9fa48("2354") ? new Array() : (stryCov_9fa48("2354"), new Array(this.edges.length));
      for (let i = 0; stryMutAct_9fa48("2357") ? i >= this.edges.length : stryMutAct_9fa48("2356") ? i <= this.edges.length : stryMutAct_9fa48("2355") ? false : (stryCov_9fa48("2355", "2356", "2357"), i < this.edges.length); stryMutAct_9fa48("2358") ? i-- : (stryCov_9fa48("2358"), i++)) {
        if (stryMutAct_9fa48("2359")) {
          {}
        } else {
          stryCov_9fa48("2359");
          let j = stryMutAct_9fa48("2360") ? this.edges[i] - 1 : (stryCov_9fa48("2360"), this.edges[i] + 1);
          this.g[this.s[j]] = this.edges[i ^ 1];
          stryMutAct_9fa48("2361") ? this.s[j]-- : (stryCov_9fa48("2361"), this.s[j]++);
        }
      }
      this.root = root;
      this.parent[root] = stryMutAct_9fa48("2362") ? +1 : (stryCov_9fa48("2362"), -1);
      this.nodeDepth[root] = 0;
      this.bfsTour = stryMutAct_9fa48("2363") ? [] : (stryCov_9fa48("2363"), [root]);
      for (let v of this.bfsTour) {
        if (stryMutAct_9fa48("2364")) {
          {}
        } else {
          stryCov_9fa48("2364");
          for (let u of this.adjItr(v)) {
            if (stryMutAct_9fa48("2365")) {
              {}
            } else {
              stryCov_9fa48("2365");
              if (stryMutAct_9fa48("2368") ? u === this.parent[v] : stryMutAct_9fa48("2367") ? false : stryMutAct_9fa48("2366") ? true : (stryCov_9fa48("2366", "2367", "2368"), u !== this.parent[v])) {
                if (stryMutAct_9fa48("2369")) {
                  {}
                } else {
                  stryCov_9fa48("2369");
                  this.parent[u] = v;
                  this.nodeDepth[u] = stryMutAct_9fa48("2370") ? this.nodeDepth[v] - 1 : (stryCov_9fa48("2370"), this.nodeDepth[v] + 1);
                  this.bfsTour.push(u);
                }
              }
            }
          }
        }
      }
      this.depth = this.nodeDepth[this.bfsTour[stryMutAct_9fa48("2371") ? this.bfsTour.length + 1 : (stryCov_9fa48("2371"), this.bfsTour.length - 1)]];
    }
  }
  isRoot(u) {
    if (stryMutAct_9fa48("2372")) {
      {}
    } else {
      stryCov_9fa48("2372");
      return stryMutAct_9fa48("2375") ? u !== this.root : stryMutAct_9fa48("2374") ? false : stryMutAct_9fa48("2373") ? true : (stryCov_9fa48("2373", "2374", "2375"), u === this.root);
    }
  }
  children(u) {
    if (stryMutAct_9fa48("2376")) {
      {}
    } else {
      stryCov_9fa48("2376");
      return stryMutAct_9fa48("2377") ? this.adjItr(u) : (stryCov_9fa48("2377"), this.adjItr(u).filter(stryMutAct_9fa48("2378") ? () => undefined : (stryCov_9fa48("2378"), v => stryMutAct_9fa48("2381") ? v === this.parent[u] : stryMutAct_9fa48("2380") ? false : stryMutAct_9fa48("2379") ? true : (stryCov_9fa48("2379", "2380", "2381"), v !== this.parent[u]))));
    }
  }
}
//code error

// function testing_test() {
//     const testCases = [
//         {
//             input: [
//             "3",
//             "1 2",
//             "3 2"
//             ],
//             expected: "0"
//         },
//         {
//             input: [
//             "5",
//             "2 3",
//             "1 5",
//             "4 2",
//             "1 2"
//             ],
//             expected: "4"
//         },
//         {
//             input: [
//             "11",
//             "2 1",
//             "2 3",
//             "2 4",
//             "4 5",
//             "6 5",
//             "5 7",
//             "4 8",
//             "8 9",
//             "7 10",
//             "10 11"
//             ],
//             expected: "29"
//         }

//     ];

//     for (const { input, expected } of testCases) {
//         const result = solve(input);
//         console.log(`Input:\n${input.join('\n')}\nExpected: ${expected}, Got: ${result}`);
//         console.log(result === expected ? "PASS" : "FAIL");
//     }
// }
// testing_test();