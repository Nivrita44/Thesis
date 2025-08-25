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
    if (stryMutAct_9fa48("3387")) {
      {}
    } else {
      stryCov_9fa48("3387");
      this.map = {};
      this.first = 0;
      this.last = stryMutAct_9fa48("3388") ? +1 : (stryCov_9fa48("3388"), -1);
    }
  }
  push(...args) {
    if (stryMutAct_9fa48("3389")) {
      {}
    } else {
      stryCov_9fa48("3389");
      let i = 0;
      if (stryMutAct_9fa48("3392") ? false : stryMutAct_9fa48("3391") ? true : stryMutAct_9fa48("3390") ? this.length : (stryCov_9fa48("3390", "3391", "3392"), !this.length)) {
        if (stryMutAct_9fa48("3393")) {
          {}
        } else {
          stryCov_9fa48("3393");
          this.first = this.last = 0;
          this.map[this.first] = args[stryMutAct_9fa48("3394") ? i-- : (stryCov_9fa48("3394"), i++)];
        }
      }
      for (; stryMutAct_9fa48("3397") ? i >= args.length : stryMutAct_9fa48("3396") ? i <= args.length : stryMutAct_9fa48("3395") ? false : (stryCov_9fa48("3395", "3396", "3397"), i < args.length); stryMutAct_9fa48("3398") ? i-- : (stryCov_9fa48("3398"), i++)) {
        if (stryMutAct_9fa48("3399")) {
          {}
        } else {
          stryCov_9fa48("3399");
          this.map[stryMutAct_9fa48("3400") ? --this.last : (stryCov_9fa48("3400"), ++this.last)] = args[i];
        }
      }
    }
  }
  unshift(...args) {
    if (stryMutAct_9fa48("3401")) {
      {}
    } else {
      stryCov_9fa48("3401");
      let i = 0;
      if (stryMutAct_9fa48("3404") ? false : stryMutAct_9fa48("3403") ? true : stryMutAct_9fa48("3402") ? this.length : (stryCov_9fa48("3402", "3403", "3404"), !this.length)) {
        if (stryMutAct_9fa48("3405")) {
          {}
        } else {
          stryCov_9fa48("3405");
          this.first = this.last = 0;
          this.map[this.first] = args[stryMutAct_9fa48("3406") ? i-- : (stryCov_9fa48("3406"), i++)];
        }
      }
      for (; stryMutAct_9fa48("3409") ? i >= args.length : stryMutAct_9fa48("3408") ? i <= args.length : stryMutAct_9fa48("3407") ? false : (stryCov_9fa48("3407", "3408", "3409"), i < args.length); stryMutAct_9fa48("3410") ? i-- : (stryCov_9fa48("3410"), i++)) {
        if (stryMutAct_9fa48("3411")) {
          {}
        } else {
          stryCov_9fa48("3411");
          this.map[stryMutAct_9fa48("3412") ? ++this.first : (stryCov_9fa48("3412"), --this.first)] = args[i];
        }
      }
    }
  }
  pop() {
    if (stryMutAct_9fa48("3413")) {
      {}
    } else {
      stryCov_9fa48("3413");
      const r = this.map[this.last];
      delete this.map[this.last];
      stryMutAct_9fa48("3414") ? this.last++ : (stryCov_9fa48("3414"), this.last--);
      return r;
    }
  }
  shift() {
    if (stryMutAct_9fa48("3415")) {
      {}
    } else {
      stryCov_9fa48("3415");
      const r = this.map[this.first];
      delete this.map[this.first];
      stryMutAct_9fa48("3416") ? this.first-- : (stryCov_9fa48("3416"), this.first++);
      return r;
    }
  }
  get length() {
    if (stryMutAct_9fa48("3417")) {
      {}
    } else {
      stryCov_9fa48("3417");
      if (stryMutAct_9fa48("3421") ? this.first <= this.last : stryMutAct_9fa48("3420") ? this.first >= this.last : stryMutAct_9fa48("3419") ? false : stryMutAct_9fa48("3418") ? true : (stryCov_9fa48("3418", "3419", "3420", "3421"), this.first > this.last)) return 0;
      return stryMutAct_9fa48("3422") ? this.last - this.first - 1 : (stryCov_9fa48("3422"), (stryMutAct_9fa48("3423") ? this.last + this.first : (stryCov_9fa48("3423"), this.last - this.first)) + 1);
    }
  }
  get(x) {
    if (stryMutAct_9fa48("3424")) {
      {}
    } else {
      stryCov_9fa48("3424");
      return this.map[stryMutAct_9fa48("3425") ? this.first - x : (stryCov_9fa48("3425"), this.first + x)];
    }
  }
  getLast() {
    if (stryMutAct_9fa48("3426")) {
      {}
    } else {
      stryCov_9fa48("3426");
      return this.map[this.last];
    }
  }
  forEach(fn) {
    if (stryMutAct_9fa48("3427")) {
      {}
    } else {
      stryCov_9fa48("3427");
      for (let i = this.first; stryMutAct_9fa48("3430") ? i > this.last : stryMutAct_9fa48("3429") ? i < this.last : stryMutAct_9fa48("3428") ? false : (stryCov_9fa48("3428", "3429", "3430"), i <= this.last); stryMutAct_9fa48("3431") ? i-- : (stryCov_9fa48("3431"), i++)) {
        if (stryMutAct_9fa48("3432")) {
          {}
        } else {
          stryCov_9fa48("3432");
          const r = fn(this.map[i], stryMutAct_9fa48("3433") ? i + this.first : (stryCov_9fa48("3433"), i - this.first));
          if (stryMutAct_9fa48("3436") ? r !== false : stryMutAct_9fa48("3435") ? false : stryMutAct_9fa48("3434") ? true : (stryCov_9fa48("3434", "3435", "3436"), r === (stryMutAct_9fa48("3437") ? true : (stryCov_9fa48("3437"), false)))) break;
        }
      }
    }
  }
}
export function solve(input) {
  if (stryMutAct_9fa48("3438")) {
    {}
  } else {
    stryCov_9fa48("3438");
    const lines = stryMutAct_9fa48("3439") ? input.split('\n') : (stryCov_9fa48("3439"), input.trim().split(stryMutAct_9fa48("3440") ? "" : (stryCov_9fa48("3440"), '\n')));
    let idx = 0;
    const results = stryMutAct_9fa48("3441") ? ["Stryker was here"] : (stryCov_9fa48("3441"), []);
    while (stryMutAct_9fa48("3444") ? idx >= lines.length : stryMutAct_9fa48("3443") ? idx <= lines.length : stryMutAct_9fa48("3442") ? false : (stryCov_9fa48("3442", "3443", "3444"), idx < lines.length)) {
      if (stryMutAct_9fa48("3445")) {
        {}
      } else {
        stryCov_9fa48("3445");
        const [n, m] = lines[stryMutAct_9fa48("3446") ? idx-- : (stryCov_9fa48("3446"), idx++)].split(stryMutAct_9fa48("3447") ? "" : (stryCov_9fa48("3447"), ' ')).map(Number);
        const adj = {};
        for (let i = 0; stryMutAct_9fa48("3450") ? i >= m : stryMutAct_9fa48("3449") ? i <= m : stryMutAct_9fa48("3448") ? false : (stryCov_9fa48("3448", "3449", "3450"), i < m); stryMutAct_9fa48("3451") ? i-- : (stryCov_9fa48("3451"), i++)) {
          if (stryMutAct_9fa48("3452")) {
            {}
          } else {
            stryCov_9fa48("3452");
            const [a, b] = lines[stryMutAct_9fa48("3453") ? idx-- : (stryCov_9fa48("3453"), idx++)].split(stryMutAct_9fa48("3454") ? "" : (stryCov_9fa48("3454"), ' ')).map(Number);
            adj[a] = stryMutAct_9fa48("3457") ? adj[a] && [] : stryMutAct_9fa48("3456") ? false : stryMutAct_9fa48("3455") ? true : (stryCov_9fa48("3455", "3456", "3457"), adj[a] || (stryMutAct_9fa48("3458") ? ["Stryker was here"] : (stryCov_9fa48("3458"), [])));
            adj[b] = stryMutAct_9fa48("3461") ? adj[b] && [] : stryMutAct_9fa48("3460") ? false : stryMutAct_9fa48("3459") ? true : (stryCov_9fa48("3459", "3460", "3461"), adj[b] || (stryMutAct_9fa48("3462") ? ["Stryker was here"] : (stryCov_9fa48("3462"), [])));
            adj[a].push(b);
            adj[b].push(a);
          }
        }
        const dfsn = stryMutAct_9fa48("3463") ? Array() : (stryCov_9fa48("3463"), Array(stryMutAct_9fa48("3464") ? n - 1 : (stryCov_9fa48("3464"), n + 1)));
        const low = stryMutAct_9fa48("3465") ? Array() : (stryCov_9fa48("3465"), Array(stryMutAct_9fa48("3466") ? n - 1 : (stryCov_9fa48("3466"), n + 1)));
        const fa = stryMutAct_9fa48("3467") ? Array() : (stryCov_9fa48("3467"), Array(stryMutAct_9fa48("3468") ? n - 1 : (stryCov_9fa48("3468"), n + 1)));
        let cnt = 0;
        const sz = stryMutAct_9fa48("3469") ? Array().fill(1) : (stryCov_9fa48("3469"), Array(stryMutAct_9fa48("3470") ? n - 1 : (stryCov_9fa48("3470"), n + 1)).fill(1));
        dfs2(1);
        let total = stryMutAct_9fa48("3471") ? n * (n - 1) * 2 : (stryCov_9fa48("3471"), (stryMutAct_9fa48("3472") ? n / (n - 1) : (stryCov_9fa48("3472"), n * (stryMutAct_9fa48("3473") ? n + 1 : (stryCov_9fa48("3473"), n - 1)))) / 2);
        dfs(1);
        results.push(total);
        function dfs2(r) {
          if (stryMutAct_9fa48("3474")) {
            {}
          } else {
            stryCov_9fa48("3474");
            const visited = stryMutAct_9fa48("3475") ? Array() : (stryCov_9fa48("3475"), Array(stryMutAct_9fa48("3476") ? n - 1 : (stryCov_9fa48("3476"), n + 1)));
            const stack = new Queue();
            stack.push(stryMutAct_9fa48("3477") ? [] : (stryCov_9fa48("3477"), [r, 0, stryMutAct_9fa48("3478") ? +1 : (stryCov_9fa48("3478"), -1)]));
            while (stryMutAct_9fa48("3479") ? false : (stryCov_9fa48("3479"), stack.length)) {
              if (stryMutAct_9fa48("3480")) {
                {}
              } else {
                stryCov_9fa48("3480");
                const [u, i, p] = stack.getLast();
                visited[u] = 1;
                const nb = stryMutAct_9fa48("3483") ? adj[u] && [] : stryMutAct_9fa48("3482") ? false : stryMutAct_9fa48("3481") ? true : (stryCov_9fa48("3481", "3482", "3483"), adj[u] || (stryMutAct_9fa48("3484") ? ["Stryker was here"] : (stryCov_9fa48("3484"), [])));
                if (stryMutAct_9fa48("3488") ? i >= nb.length : stryMutAct_9fa48("3487") ? i <= nb.length : stryMutAct_9fa48("3486") ? false : stryMutAct_9fa48("3485") ? true : (stryCov_9fa48("3485", "3486", "3487", "3488"), i < nb.length)) {
                  if (stryMutAct_9fa48("3489")) {
                    {}
                  } else {
                    stryCov_9fa48("3489");
                    stryMutAct_9fa48("3490") ? stack.getLast()[1]-- : (stryCov_9fa48("3490"), stack.getLast()[1]++);
                    const v = nb[i];
                    if (stryMutAct_9fa48("3493") ? false : stryMutAct_9fa48("3492") ? true : stryMutAct_9fa48("3491") ? visited[v] : (stryCov_9fa48("3491", "3492", "3493"), !visited[v])) {
                      if (stryMutAct_9fa48("3494")) {
                        {}
                      } else {
                        stryCov_9fa48("3494");
                        stack.push(stryMutAct_9fa48("3495") ? [] : (stryCov_9fa48("3495"), [v, 0, u]));
                      }
                    }
                  }
                } else {
                  if (stryMutAct_9fa48("3496")) {
                    {}
                  } else {
                    stryCov_9fa48("3496");
                    stack.pop();
                    if (stryMutAct_9fa48("3500") ? p <= 0 : stryMutAct_9fa48("3499") ? p >= 0 : stryMutAct_9fa48("3498") ? false : stryMutAct_9fa48("3497") ? true : (stryCov_9fa48("3497", "3498", "3499", "3500"), p > 0)) {
                      if (stryMutAct_9fa48("3501")) {
                        {}
                      } else {
                        stryCov_9fa48("3501");
                        stryMutAct_9fa48("3502") ? sz[p] -= sz[u] : (stryCov_9fa48("3502"), sz[p] += sz[u]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        function dfs(r) {
          if (stryMutAct_9fa48("3503")) {
            {}
          } else {
            stryCov_9fa48("3503");
            const stack = new Queue();
            stack.push(stryMutAct_9fa48("3504") ? [] : (stryCov_9fa48("3504"), [r, 0, stryMutAct_9fa48("3505") ? +1 : (stryCov_9fa48("3505"), -1)]));
            let max = 0;
            while (stryMutAct_9fa48("3506") ? false : (stryCov_9fa48("3506"), stack.length)) {
              if (stryMutAct_9fa48("3507")) {
                {}
              } else {
                stryCov_9fa48("3507");
                const [u, i, p] = stack.getLast();
                const nb = stryMutAct_9fa48("3510") ? adj[u] && [] : stryMutAct_9fa48("3509") ? false : stryMutAct_9fa48("3508") ? true : (stryCov_9fa48("3508", "3509", "3510"), adj[u] || (stryMutAct_9fa48("3511") ? ["Stryker was here"] : (stryCov_9fa48("3511"), [])));
                if (stryMutAct_9fa48("3514") ? false : stryMutAct_9fa48("3513") ? true : stryMutAct_9fa48("3512") ? i : (stryCov_9fa48("3512", "3513", "3514"), !i)) {
                  if (stryMutAct_9fa48("3515")) {
                    {}
                  } else {
                    stryCov_9fa48("3515");
                    low[u] = dfsn[u] = stryMutAct_9fa48("3516") ? --cnt : (stryCov_9fa48("3516"), ++cnt);
                  }
                }
                if (stryMutAct_9fa48("3520") ? i >= nb.length : stryMutAct_9fa48("3519") ? i <= nb.length : stryMutAct_9fa48("3518") ? false : stryMutAct_9fa48("3517") ? true : (stryCov_9fa48("3517", "3518", "3519", "3520"), i < nb.length)) {
                  if (stryMutAct_9fa48("3521")) {
                    {}
                  } else {
                    stryCov_9fa48("3521");
                    stryMutAct_9fa48("3522") ? stack.getLast()[1]-- : (stryCov_9fa48("3522"), stack.getLast()[1]++);
                    const v = nb[i];
                    if (stryMutAct_9fa48("3525") ? false : stryMutAct_9fa48("3524") ? true : stryMutAct_9fa48("3523") ? dfsn[v] : (stryCov_9fa48("3523", "3524", "3525"), !dfsn[v])) {
                      if (stryMutAct_9fa48("3526")) {
                        {}
                      } else {
                        stryCov_9fa48("3526");
                        fa[v] = u;
                        stack.push(stryMutAct_9fa48("3527") ? [] : (stryCov_9fa48("3527"), [v, 0, u]));
                      }
                    } else if (stryMutAct_9fa48("3530") ? fa[u] === v : stryMutAct_9fa48("3529") ? false : stryMutAct_9fa48("3528") ? true : (stryCov_9fa48("3528", "3529", "3530"), fa[u] !== v)) {
                      if (stryMutAct_9fa48("3531")) {
                        {}
                      } else {
                        stryCov_9fa48("3531");
                        low[u] = stryMutAct_9fa48("3532") ? Math.max(low[u], dfsn[v]) : (stryCov_9fa48("3532"), Math.min(low[u], dfsn[v]));
                      }
                    }
                  }
                } else {
                  if (stryMutAct_9fa48("3533")) {
                    {}
                  } else {
                    stryCov_9fa48("3533");
                    stack.pop();
                    if (stryMutAct_9fa48("3537") ? p <= 0 : stryMutAct_9fa48("3536") ? p >= 0 : stryMutAct_9fa48("3535") ? false : stryMutAct_9fa48("3534") ? true : (stryCov_9fa48("3534", "3535", "3536", "3537"), p > 0)) {
                      if (stryMutAct_9fa48("3538")) {
                        {}
                      } else {
                        stryCov_9fa48("3538");
                        low[p] = stryMutAct_9fa48("3539") ? Math.max(low[p], low[u]) : (stryCov_9fa48("3539"), Math.min(low[p], low[u]));
                        if (stryMutAct_9fa48("3543") ? low[u] <= dfsn[p] : stryMutAct_9fa48("3542") ? low[u] >= dfsn[p] : stryMutAct_9fa48("3541") ? false : stryMutAct_9fa48("3540") ? true : (stryCov_9fa48("3540", "3541", "3542", "3543"), low[u] > dfsn[p])) {
                          if (stryMutAct_9fa48("3544")) {
                            {}
                          } else {
                            stryCov_9fa48("3544");
                            max = stryMutAct_9fa48("3545") ? Math.min(max, sz[u] * (n - sz[u])) : (stryCov_9fa48("3545"), Math.max(max, stryMutAct_9fa48("3546") ? sz[u] / (n - sz[u]) : (stryCov_9fa48("3546"), sz[u] * (stryMutAct_9fa48("3547") ? n + sz[u] : (stryCov_9fa48("3547"), n - sz[u])))));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            stryMutAct_9fa48("3548") ? total += max : (stryCov_9fa48("3548"), total -= max);
          }
        }
      }
    }
    return results;
  }
}

// function testing_test() {
//     const input = `
// 2 1
// 1 2
// 3 3
// 1 2
// 2 3
// 1 3
// 5 5
// 1 2
// 1 3
// 3 4
// 4 5
// 5 3
// 6 7
// 1 2
// 1 3
// 2 3
// 3 4
// 4 5
// 4 6
// 5 6
// 5 5
// 1 2
// 1 3
// 2 3
// 2 4
// 3 5
// 10 12
// 1 2
// 1 3
// 2 3
// 2 4
// 4 5
// 5 6
// 6 7
// 7 4
// 3 8
// 8 9
// 9 10
// 10 8
// `.trim();

//     const expectedOutput = [0, 3, 4, 6, 6, 21];
//     const actualOutput = solve(input);
//     console.log("✅ Output:", actualOutput);
//     console.log("✅ Expected:", expectedOutput);
//     console.log(actualOutput.join('\n') === expectedOutput.join('\n') ? "✅ testing_test Passed" : "❌ testing_test Failed");
// }

// testing_test();