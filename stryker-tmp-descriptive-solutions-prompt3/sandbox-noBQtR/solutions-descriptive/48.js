// ✅ Solve ONE test case
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
export function solve(n, a) {
  if (stryMutAct_9fa48("3334")) {
    {}
  } else {
    stryCov_9fa48("3334");
    let l = 1,
      r = 1;
    for (let i = 1; stryMutAct_9fa48("3337") ? i > n - 1 : stryMutAct_9fa48("3336") ? i < n - 1 : stryMutAct_9fa48("3335") ? false : (stryCov_9fa48("3335", "3336", "3337"), i <= (stryMutAct_9fa48("3338") ? n + 1 : (stryCov_9fa48("3338"), n - 1))); stryMutAct_9fa48("3339") ? i-- : (stryCov_9fa48("3339"), i++)) {
      if (stryMutAct_9fa48("3340")) {
        {}
      } else {
        stryCov_9fa48("3340");
        let tFlag = 0;
        if (stryMutAct_9fa48("3344") ? a[r - 1] < n - i + 1 : stryMutAct_9fa48("3343") ? a[r - 1] > n - i + 1 : stryMutAct_9fa48("3342") ? false : stryMutAct_9fa48("3341") ? true : (stryCov_9fa48("3341", "3342", "3343", "3344"), a[stryMutAct_9fa48("3345") ? r + 1 : (stryCov_9fa48("3345"), r - 1)] >= (stryMutAct_9fa48("3346") ? n - i - 1 : (stryCov_9fa48("3346"), (stryMutAct_9fa48("3347") ? n + i : (stryCov_9fa48("3347"), n - i)) + 1)))) tFlag = 1; // adjust for 0-based JS arrays

        if (stryMutAct_9fa48("3351") ? a[l + (n - i) - 1] < n - i + 1 : stryMutAct_9fa48("3350") ? a[l + (n - i) - 1] > n - i + 1 : stryMutAct_9fa48("3349") ? false : stryMutAct_9fa48("3348") ? true : (stryCov_9fa48("3348", "3349", "3350", "3351"), a[stryMutAct_9fa48("3352") ? l + (n - i) + 1 : (stryCov_9fa48("3352"), (stryMutAct_9fa48("3353") ? l - (n - i) : (stryCov_9fa48("3353"), l + (stryMutAct_9fa48("3354") ? n + i : (stryCov_9fa48("3354"), n - i)))) - 1)] >= (stryMutAct_9fa48("3355") ? n - i - 1 : (stryCov_9fa48("3355"), (stryMutAct_9fa48("3356") ? n + i : (stryCov_9fa48("3356"), n - i)) + 1)))) {
          // do nothing
        } else {
          if (stryMutAct_9fa48("3357")) {
            {}
          } else {
            stryCov_9fa48("3357");
            stryMutAct_9fa48("3358") ? l-- : (stryCov_9fa48("3358"), l++);
          }
        }
        stryMutAct_9fa48("3359") ? r -= tFlag : (stryCov_9fa48("3359"), r += tFlag);
        if (stryMutAct_9fa48("3363") ? l <= r : stryMutAct_9fa48("3362") ? l >= r : stryMutAct_9fa48("3361") ? false : stryMutAct_9fa48("3360") ? true : (stryCov_9fa48("3360", "3361", "3362", "3363"), l > r)) break;
      }
    }
    return stryMutAct_9fa48("3364") ? Math.min(0, r - l + 1) : (stryCov_9fa48("3364"), Math.max(0, stryMutAct_9fa48("3365") ? r - l - 1 : (stryCov_9fa48("3365"), (stryMutAct_9fa48("3366") ? r + l : (stryCov_9fa48("3366"), r - l)) + 1)));
  }
}

// ✅ Testing function (independent)
function testing_test() {
  if (stryMutAct_9fa48("3367")) {
    {}
  } else {
    stryCov_9fa48("3367");
    const cases = stryMutAct_9fa48("3368") ? [] : (stryCov_9fa48("3368"), [stryMutAct_9fa48("3369") ? {} : (stryCov_9fa48("3369"), {
      n: 6,
      a: stryMutAct_9fa48("3370") ? [] : (stryCov_9fa48("3370"), [6, 3, 3, 3, 5, 5]),
      expected: 3
    }), stryMutAct_9fa48("3371") ? {} : (stryCov_9fa48("3371"), {
      n: 6,
      a: stryMutAct_9fa48("3372") ? [] : (stryCov_9fa48("3372"), [5, 6, 4, 1, 4, 5]),
      expected: 0
    }), stryMutAct_9fa48("3373") ? {} : (stryCov_9fa48("3373"), {
      n: 9,
      a: stryMutAct_9fa48("3374") ? [] : (stryCov_9fa48("3374"), [8, 6, 4, 2, 1, 3, 5, 7, 9]),
      expected: 1
    })]);
    for (let i = 0; stryMutAct_9fa48("3377") ? i >= cases.length : stryMutAct_9fa48("3376") ? i <= cases.length : stryMutAct_9fa48("3375") ? false : (stryCov_9fa48("3375", "3376", "3377"), i < cases.length); stryMutAct_9fa48("3378") ? i-- : (stryCov_9fa48("3378"), i++)) {
      if (stryMutAct_9fa48("3379")) {
        {}
      } else {
        stryCov_9fa48("3379");
        const {
          n,
          a,
          expected
        } = cases[i];
        const output = solve(n, a);
        const ok = stryMutAct_9fa48("3382") ? output !== expected : stryMutAct_9fa48("3381") ? false : stryMutAct_9fa48("3380") ? true : (stryCov_9fa48("3380", "3381", "3382"), output === expected);
        console.log(stryMutAct_9fa48("3383") ? `` : (stryCov_9fa48("3383"), `Test #${stryMutAct_9fa48("3384") ? i - 1 : (stryCov_9fa48("3384"), i + 1)}: output=${output}, expected=${expected}, ${ok ? stryMutAct_9fa48("3385") ? "" : (stryCov_9fa48("3385"), "PASSED ✅") : stryMutAct_9fa48("3386") ? "" : (stryCov_9fa48("3386"), "FAILED ❌")}`));
      }
    }
  }
}

// Run tests
testing_test();