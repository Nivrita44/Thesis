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
  if (stryMutAct_9fa48("3645")) {
    {}
  } else {
    stryCov_9fa48("3645");
    let n = parseInt(lines[0]);
    let tree = new Tree(n);
    for (let i = 1; stryMutAct_9fa48("3648") ? i >= n : stryMutAct_9fa48("3647") ? i <= n : stryMutAct_9fa48("3646") ? false : (stryCov_9fa48("3646", "3647", "3648"), i < n); stryMutAct_9fa48("3649") ? i-- : (stryCov_9fa48("3649"), i++)) {
      if (stryMutAct_9fa48("3650")) {
        {}
      } else {
        stryCov_9fa48("3650");
        let [u, v] = lines[i].split(stryMutAct_9fa48("3651") ? "" : (stryCov_9fa48("3651"), ' ')).map(stryMutAct_9fa48("3652") ? () => undefined : (stryCov_9fa48("3652"), x => stryMutAct_9fa48("3653") ? parseInt(x) + 1 : (stryCov_9fa48("3653"), parseInt(x) - 1)));
        tree.addEdge(u, v);
      }
    }
    tree.build(0);
    let maxDepth = tree.depth;
    let nDepth = stryMutAct_9fa48("3654") ? Array().fill(0) : (stryCov_9fa48("3654"), Array(stryMutAct_9fa48("3655") ? maxDepth - 1 : (stryCov_9fa48("3655"), maxDepth + 1)).fill(0));
    let subtreeSize = stryMutAct_9fa48("3656") ? Array().fill(1) : (stryCov_9fa48("3656"), Array(n).fill(1));
    for (let i = stryMutAct_9fa48("3657") ? tree.bfsTour.length + 1 : (stryCov_9fa48("3657"), tree.bfsTour.length - 1); stryMutAct_9fa48("3660") ? i < 0 : stryMutAct_9fa48("3659") ? i > 0 : stryMutAct_9fa48("3658") ? false : (stryCov_9fa48("3658", "3659", "3660"), i >= 0); stryMutAct_9fa48("3661") ? i++ : (stryCov_9fa48("3661"), i--)) {
      if (stryMutAct_9fa48("3662")) {
        {}
      } else {
        stryCov_9fa48("3662");
        let u = tree.bfsTour[i];
        stryMutAct_9fa48("3663") ? nDepth[tree.nodeDepth[u]]-- : (stryCov_9fa48("3663"), nDepth[tree.nodeDepth[u]]++);
        if (stryMutAct_9fa48("3666") ? false : stryMutAct_9fa48("3665") ? true : stryMutAct_9fa48("3664") ? tree.isRoot(u) : (stryCov_9fa48("3664", "3665", "3666"), !tree.isRoot(u))) {
          if (stryMutAct_9fa48("3667")) {
            {}
          } else {
            stryCov_9fa48("3667");
            stryMutAct_9fa48("3668") ? subtreeSize[tree.parent[u]] -= subtreeSize[u] : (stryCov_9fa48("3668"), subtreeSize[tree.parent[u]] += subtreeSize[u]);
          }
        }
      }
    }
    let nDepthPref = stryMutAct_9fa48("3669") ? Array().fill(0) : (stryCov_9fa48("3669"), Array(stryMutAct_9fa48("3670") ? maxDepth - 2 : (stryCov_9fa48("3670"), maxDepth + 2)).fill(0));
    for (let d = 0; stryMutAct_9fa48("3673") ? d > maxDepth : stryMutAct_9fa48("3672") ? d < maxDepth : stryMutAct_9fa48("3671") ? false : (stryCov_9fa48("3671", "3672", "3673"), d <= maxDepth); stryMutAct_9fa48("3674") ? d-- : (stryCov_9fa48("3674"), d++)) {
      if (stryMutAct_9fa48("3675")) {
        {}
      } else {
        stryCov_9fa48("3675");
        nDepthPref[stryMutAct_9fa48("3676") ? d - 1 : (stryCov_9fa48("3676"), d + 1)] = stryMutAct_9fa48("3677") ? nDepthPref[d] - nDepth[d] : (stryCov_9fa48("3677"), nDepthPref[d] + nDepth[d]);
      }
    }
    let ans = BigInt(0);
    for (let u = 0; stryMutAct_9fa48("3680") ? u >= n : stryMutAct_9fa48("3679") ? u <= n : stryMutAct_9fa48("3678") ? false : (stryCov_9fa48("3678", "3679", "3680"), u < n); stryMutAct_9fa48("3681") ? u-- : (stryCov_9fa48("3681"), u++)) {
      if (stryMutAct_9fa48("3682")) {
        {}
      } else {
        stryCov_9fa48("3682");
        let k = BigInt(stryMutAct_9fa48("3683") ? nDepthPref[maxDepth + 1] - nDepthPref[tree.nodeDepth[u]] + subtreeSize[u] : (stryCov_9fa48("3683"), (stryMutAct_9fa48("3684") ? nDepthPref[maxDepth + 1] + nDepthPref[tree.nodeDepth[u]] : (stryCov_9fa48("3684"), nDepthPref[stryMutAct_9fa48("3685") ? maxDepth - 1 : (stryCov_9fa48("3685"), maxDepth + 1)] - nDepthPref[tree.nodeDepth[u]])) - subtreeSize[u]));
        stryMutAct_9fa48("3686") ? ans -= BigInt(2) * BigInt(tree.nodeDepth[u]) * k : (stryCov_9fa48("3686"), ans += stryMutAct_9fa48("3687") ? BigInt(2) * BigInt(tree.nodeDepth[u]) / k : (stryCov_9fa48("3687"), (stryMutAct_9fa48("3688") ? BigInt(2) / BigInt(tree.nodeDepth[u]) : (stryCov_9fa48("3688"), BigInt(2) * BigInt(tree.nodeDepth[u]))) * k));
      }
    }
    for (let d = 0; stryMutAct_9fa48("3691") ? d > maxDepth : stryMutAct_9fa48("3690") ? d < maxDepth : stryMutAct_9fa48("3689") ? false : (stryCov_9fa48("3689", "3690", "3691"), d <= maxDepth); stryMutAct_9fa48("3692") ? d-- : (stryCov_9fa48("3692"), d++)) {
      if (stryMutAct_9fa48("3693")) {
        {}
      } else {
        stryCov_9fa48("3693");
        stryMutAct_9fa48("3694") ? ans += BigInt(d) * BigInt(nDepth[d]) * BigInt(nDepth[d] - 1) : (stryCov_9fa48("3694"), ans -= stryMutAct_9fa48("3695") ? BigInt(d) * BigInt(nDepth[d]) / BigInt(nDepth[d] - 1) : (stryCov_9fa48("3695"), (stryMutAct_9fa48("3696") ? BigInt(d) / BigInt(nDepth[d]) : (stryCov_9fa48("3696"), BigInt(d) * BigInt(nDepth[d]))) * BigInt(stryMutAct_9fa48("3697") ? nDepth[d] + 1 : (stryCov_9fa48("3697"), nDepth[d] - 1))));
      }
    }
    for (let u = 0; stryMutAct_9fa48("3700") ? u >= n : stryMutAct_9fa48("3699") ? u <= n : stryMutAct_9fa48("3698") ? false : (stryCov_9fa48("3698", "3699", "3700"), u < n); stryMutAct_9fa48("3701") ? u-- : (stryCov_9fa48("3701"), u++)) {
      if (stryMutAct_9fa48("3702")) {
        {}
      } else {
        stryCov_9fa48("3702");
        let pairs = BigInt(0);
        for (let v of tree.children(u)) {
          if (stryMutAct_9fa48("3703")) {
            {}
          } else {
            stryCov_9fa48("3703");
            stryMutAct_9fa48("3704") ? pairs -= BigInt(subtreeSize[v]) * BigInt(subtreeSize[u] - 1 - subtreeSize[v]) : (stryCov_9fa48("3704"), pairs += stryMutAct_9fa48("3705") ? BigInt(subtreeSize[v]) / BigInt(subtreeSize[u] - 1 - subtreeSize[v]) : (stryCov_9fa48("3705"), BigInt(subtreeSize[v]) * BigInt(stryMutAct_9fa48("3706") ? subtreeSize[u] - 1 + subtreeSize[v] : (stryCov_9fa48("3706"), (stryMutAct_9fa48("3707") ? subtreeSize[u] + 1 : (stryCov_9fa48("3707"), subtreeSize[u] - 1)) - subtreeSize[v]))));
          }
        }
        stryMutAct_9fa48("3708") ? pairs *= BigInt(2) : (stryCov_9fa48("3708"), pairs /= BigInt(2));
        stryMutAct_9fa48("3709") ? ans += BigInt(2 * tree.nodeDepth[u] + 1) * pairs : (stryCov_9fa48("3709"), ans -= stryMutAct_9fa48("3710") ? BigInt(2 * tree.nodeDepth[u] + 1) / pairs : (stryCov_9fa48("3710"), BigInt(stryMutAct_9fa48("3711") ? 2 * tree.nodeDepth[u] - 1 : (stryCov_9fa48("3711"), (stryMutAct_9fa48("3712") ? 2 / tree.nodeDepth[u] : (stryCov_9fa48("3712"), 2 * tree.nodeDepth[u])) + 1)) * pairs));
      }
    }
    return ans.toString();
  }
}
class Tree {
  constructor(n) {
    if (stryMutAct_9fa48("3713")) {
      {}
    } else {
      stryCov_9fa48("3713");
      this.n = n;
      this.root = stryMutAct_9fa48("3714") ? +1 : (stryCov_9fa48("3714"), -1);
      this.depth = stryMutAct_9fa48("3715") ? +1 : (stryCov_9fa48("3715"), -1);
      this.parent = (stryMutAct_9fa48("3716") ? new Array() : (stryCov_9fa48("3716"), new Array(n))).fill(stryMutAct_9fa48("3717") ? +1 : (stryCov_9fa48("3717"), -1));
      this.nodeDepth = (stryMutAct_9fa48("3718") ? new Array() : (stryCov_9fa48("3718"), new Array(n))).fill(stryMutAct_9fa48("3719") ? +1 : (stryCov_9fa48("3719"), -1));
      this.bfsTour = stryMutAct_9fa48("3720") ? ["Stryker was here"] : (stryCov_9fa48("3720"), []);
      this.edges = stryMutAct_9fa48("3721") ? ["Stryker was here"] : (stryCov_9fa48("3721"), []);
      this.s = (stryMutAct_9fa48("3722") ? new Array() : (stryCov_9fa48("3722"), new Array(stryMutAct_9fa48("3723") ? n - 2 : (stryCov_9fa48("3723"), n + 2)))).fill(0);
      this.g = stryMutAct_9fa48("3724") ? ["Stryker was here"] : (stryCov_9fa48("3724"), []);
    }
  }
  addEdge(u, v) {
    if (stryMutAct_9fa48("3725")) {
      {}
    } else {
      stryCov_9fa48("3725");
      this.edges.push(u, v);
    }
  }
  adjItr(node) {
    if (stryMutAct_9fa48("3726")) {
      {}
    } else {
      stryCov_9fa48("3726");
      let res = stryMutAct_9fa48("3727") ? ["Stryker was here"] : (stryCov_9fa48("3727"), []);
      for (let i = this.s[node]; stryMutAct_9fa48("3730") ? i >= this.s[node + 1] : stryMutAct_9fa48("3729") ? i <= this.s[node + 1] : stryMutAct_9fa48("3728") ? false : (stryCov_9fa48("3728", "3729", "3730"), i < this.s[stryMutAct_9fa48("3731") ? node - 1 : (stryCov_9fa48("3731"), node + 1)]); stryMutAct_9fa48("3732") ? i-- : (stryCov_9fa48("3732"), i++)) {
        if (stryMutAct_9fa48("3733")) {
          {}
        } else {
          stryCov_9fa48("3733");
          res.push(this.g[i]);
        }
      }
      return res;
    }
  }
  build(root) {
    if (stryMutAct_9fa48("3734")) {
      {}
    } else {
      stryCov_9fa48("3734");
      for (let i of this.edges) stryMutAct_9fa48("3735") ? this.s[i + 2]-- : (stryCov_9fa48("3735"), this.s[stryMutAct_9fa48("3736") ? i - 2 : (stryCov_9fa48("3736"), i + 2)]++);
      for (let i = 0; stryMutAct_9fa48("3739") ? i >= this.n + 1 : stryMutAct_9fa48("3738") ? i <= this.n + 1 : stryMutAct_9fa48("3737") ? false : (stryCov_9fa48("3737", "3738", "3739"), i < (stryMutAct_9fa48("3740") ? this.n - 1 : (stryCov_9fa48("3740"), this.n + 1))); stryMutAct_9fa48("3741") ? i-- : (stryCov_9fa48("3741"), i++)) stryMutAct_9fa48("3742") ? this.s[i + 1] -= this.s[i] : (stryCov_9fa48("3742"), this.s[stryMutAct_9fa48("3743") ? i - 1 : (stryCov_9fa48("3743"), i + 1)] += this.s[i]);
      this.g = stryMutAct_9fa48("3744") ? new Array() : (stryCov_9fa48("3744"), new Array(this.edges.length));
      for (let i = 0; stryMutAct_9fa48("3747") ? i >= this.edges.length : stryMutAct_9fa48("3746") ? i <= this.edges.length : stryMutAct_9fa48("3745") ? false : (stryCov_9fa48("3745", "3746", "3747"), i < this.edges.length); stryMutAct_9fa48("3748") ? i-- : (stryCov_9fa48("3748"), i++)) {
        if (stryMutAct_9fa48("3749")) {
          {}
        } else {
          stryCov_9fa48("3749");
          let j = stryMutAct_9fa48("3750") ? this.edges[i] - 1 : (stryCov_9fa48("3750"), this.edges[i] + 1);
          this.g[this.s[j]] = this.edges[i ^ 1];
          stryMutAct_9fa48("3751") ? this.s[j]-- : (stryCov_9fa48("3751"), this.s[j]++);
        }
      }
      this.root = root;
      this.parent[root] = stryMutAct_9fa48("3752") ? +1 : (stryCov_9fa48("3752"), -1);
      this.nodeDepth[root] = 0;
      this.bfsTour = stryMutAct_9fa48("3753") ? [] : (stryCov_9fa48("3753"), [root]);
      for (let v of this.bfsTour) {
        if (stryMutAct_9fa48("3754")) {
          {}
        } else {
          stryCov_9fa48("3754");
          for (let u of this.adjItr(v)) {
            if (stryMutAct_9fa48("3755")) {
              {}
            } else {
              stryCov_9fa48("3755");
              if (stryMutAct_9fa48("3758") ? u === this.parent[v] : stryMutAct_9fa48("3757") ? false : stryMutAct_9fa48("3756") ? true : (stryCov_9fa48("3756", "3757", "3758"), u !== this.parent[v])) {
                if (stryMutAct_9fa48("3759")) {
                  {}
                } else {
                  stryCov_9fa48("3759");
                  this.parent[u] = v;
                  this.nodeDepth[u] = stryMutAct_9fa48("3760") ? this.nodeDepth[v] - 1 : (stryCov_9fa48("3760"), this.nodeDepth[v] + 1);
                  this.bfsTour.push(u);
                }
              }
            }
          }
        }
      }
      this.depth = this.nodeDepth[this.bfsTour[stryMutAct_9fa48("3761") ? this.bfsTour.length + 1 : (stryCov_9fa48("3761"), this.bfsTour.length - 1)]];
    }
  }
  isRoot(u) {
    if (stryMutAct_9fa48("3762")) {
      {}
    } else {
      stryCov_9fa48("3762");
      return stryMutAct_9fa48("3765") ? u !== this.root : stryMutAct_9fa48("3764") ? false : stryMutAct_9fa48("3763") ? true : (stryCov_9fa48("3763", "3764", "3765"), u === this.root);
    }
  }
  children(u) {
    if (stryMutAct_9fa48("3766")) {
      {}
    } else {
      stryCov_9fa48("3766");
      return stryMutAct_9fa48("3767") ? this.adjItr(u) : (stryCov_9fa48("3767"), this.adjItr(u).filter(stryMutAct_9fa48("3768") ? () => undefined : (stryCov_9fa48("3768"), v => stryMutAct_9fa48("3771") ? v === this.parent[u] : stryMutAct_9fa48("3770") ? false : stryMutAct_9fa48("3769") ? true : (stryCov_9fa48("3769", "3770", "3771"), v !== this.parent[u]))));
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