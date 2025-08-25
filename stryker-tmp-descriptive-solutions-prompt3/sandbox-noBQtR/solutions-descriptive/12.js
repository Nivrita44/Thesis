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
class Node {
  constructor(value = null) {
    if (stryMutAct_9fa48("178")) {
      {}
    } else {
      stryCov_9fa48("178");
      if (stryMutAct_9fa48("181") ? value !== null : stryMutAct_9fa48("180") ? false : stryMutAct_9fa48("179") ? true : (stryCov_9fa48("179", "180", "181"), value === null)) {
        if (stryMutAct_9fa48("182")) {
          {}
        } else {
          stryCov_9fa48("182");
          this.count = 0;
          this.maxSubarray = 0;
          this.negativePrefix = 0;
          this.positivePrefix = 0;
          this.leftMin = 0;
          this.rightMax = 0;
        }
      } else {
        if (stryMutAct_9fa48("183")) {
          {}
        } else {
          stryCov_9fa48("183");
          this.count = 1;
          this.maxSubarray = 0;
          this.negativePrefix = stryMutAct_9fa48("184") ? value - 1 : (stryCov_9fa48("184"), value + 1);
          this.positivePrefix = stryMutAct_9fa48("185") ? value + 1 : (stryCov_9fa48("185"), value - 1);
          this.leftMin = stryMutAct_9fa48("186") ? value - 1 : (stryCov_9fa48("186"), value + 1);
          this.rightMax = stryMutAct_9fa48("187") ? value + 1 : (stryCov_9fa48("187"), value - 1);
        }
      }
    }
  }
  static merge(leftNode, rightNode) {
    if (stryMutAct_9fa48("188")) {
      {}
    } else {
      stryCov_9fa48("188");
      const merged = new Node();
      merged.count = stryMutAct_9fa48("189") ? leftNode.count - rightNode.count : (stryCov_9fa48("189"), leftNode.count + rightNode.count);
      merged.negativePrefix = stryMutAct_9fa48("190") ? Math.max(leftNode.negativePrefix, leftNode.count + rightNode.negativePrefix) : (stryCov_9fa48("190"), Math.min(leftNode.negativePrefix, stryMutAct_9fa48("191") ? leftNode.count - rightNode.negativePrefix : (stryCov_9fa48("191"), leftNode.count + rightNode.negativePrefix)));
      merged.positivePrefix = stryMutAct_9fa48("192") ? Math.min(leftNode.positivePrefix, rightNode.positivePrefix - leftNode.count) : (stryCov_9fa48("192"), Math.max(leftNode.positivePrefix, stryMutAct_9fa48("193") ? rightNode.positivePrefix + leftNode.count : (stryCov_9fa48("193"), rightNode.positivePrefix - leftNode.count)));
      merged.leftMin = stryMutAct_9fa48("194") ? Math.max(rightNode.leftMin, rightNode.count + leftNode.leftMin) : (stryCov_9fa48("194"), Math.min(rightNode.leftMin, stryMutAct_9fa48("195") ? rightNode.count - leftNode.leftMin : (stryCov_9fa48("195"), rightNode.count + leftNode.leftMin)));
      merged.rightMax = stryMutAct_9fa48("196") ? Math.min(rightNode.rightMax, leftNode.rightMax - rightNode.count) : (stryCov_9fa48("196"), Math.max(rightNode.rightMax, stryMutAct_9fa48("197") ? leftNode.rightMax + rightNode.count : (stryCov_9fa48("197"), leftNode.rightMax - rightNode.count)));
      merged.maxSubarray = stryMutAct_9fa48("198") ? Math.min(leftNode.maxSubarray, rightNode.maxSubarray, -leftNode.leftMin + rightNode.positivePrefix + 1, leftNode.rightMax - rightNode.negativePrefix + 1) : (stryCov_9fa48("198"), Math.max(leftNode.maxSubarray, rightNode.maxSubarray, stryMutAct_9fa48("199") ? -leftNode.leftMin + rightNode.positivePrefix - 1 : (stryCov_9fa48("199"), (stryMutAct_9fa48("200") ? -leftNode.leftMin - rightNode.positivePrefix : (stryCov_9fa48("200"), (stryMutAct_9fa48("201") ? +leftNode.leftMin : (stryCov_9fa48("201"), -leftNode.leftMin)) + rightNode.positivePrefix)) + 1), stryMutAct_9fa48("202") ? leftNode.rightMax - rightNode.negativePrefix - 1 : (stryCov_9fa48("202"), (stryMutAct_9fa48("203") ? leftNode.rightMax + rightNode.negativePrefix : (stryCov_9fa48("203"), leftNode.rightMax - rightNode.negativePrefix)) + 1)));
      return merged;
    }
  }
}
class SegmentTree {
  constructor(size) {
    if (stryMutAct_9fa48("204")) {
      {}
    } else {
      stryCov_9fa48("204");
      this.size = size;
      this.tree = stryMutAct_9fa48("205") ? Array().fill().map(() => new Node()) : (stryCov_9fa48("205"), Array(stryMutAct_9fa48("206") ? 4 / size : (stryCov_9fa48("206"), 4 * size)).fill().map(stryMutAct_9fa48("207") ? () => undefined : (stryCov_9fa48("207"), () => new Node())));
    }
  }
  update(index, value) {
    if (stryMutAct_9fa48("208")) {
      {}
    } else {
      stryCov_9fa48("208");
      this._update(index, value, 0, 0, stryMutAct_9fa48("209") ? this.size + 1 : (stryCov_9fa48("209"), this.size - 1));
    }
  }
  _update(index, value, node, start, end) {
    if (stryMutAct_9fa48("210")) {
      {}
    } else {
      stryCov_9fa48("210");
      if (stryMutAct_9fa48("213") ? start !== end : stryMutAct_9fa48("212") ? false : stryMutAct_9fa48("211") ? true : (stryCov_9fa48("211", "212", "213"), start === end)) {
        if (stryMutAct_9fa48("214")) {
          {}
        } else {
          stryCov_9fa48("214");
          this.tree[node] = new Node(value);
          return;
        }
      }
      const mid = (stryMutAct_9fa48("215") ? start - end : (stryCov_9fa48("215"), start + end)) >> 1;
      if (stryMutAct_9fa48("219") ? index > mid : stryMutAct_9fa48("218") ? index < mid : stryMutAct_9fa48("217") ? false : stryMutAct_9fa48("216") ? true : (stryCov_9fa48("216", "217", "218", "219"), index <= mid)) {
        if (stryMutAct_9fa48("220")) {
          {}
        } else {
          stryCov_9fa48("220");
          this._update(index, value, stryMutAct_9fa48("221") ? 2 * node - 1 : (stryCov_9fa48("221"), (stryMutAct_9fa48("222") ? 2 / node : (stryCov_9fa48("222"), 2 * node)) + 1), start, mid);
        }
      } else {
        if (stryMutAct_9fa48("223")) {
          {}
        } else {
          stryCov_9fa48("223");
          this._update(index, value, stryMutAct_9fa48("224") ? 2 * node - 2 : (stryCov_9fa48("224"), (stryMutAct_9fa48("225") ? 2 / node : (stryCov_9fa48("225"), 2 * node)) + 2), stryMutAct_9fa48("226") ? mid - 1 : (stryCov_9fa48("226"), mid + 1), end);
        }
      }
      this.tree[node] = Node.merge(this.tree[stryMutAct_9fa48("227") ? 2 * node - 1 : (stryCov_9fa48("227"), (stryMutAct_9fa48("228") ? 2 / node : (stryCov_9fa48("228"), 2 * node)) + 1)], this.tree[stryMutAct_9fa48("229") ? 2 * node - 2 : (stryCov_9fa48("229"), (stryMutAct_9fa48("230") ? 2 / node : (stryCov_9fa48("230"), 2 * node)) + 2)]);
    }
  }
  getMaxSubarrayLength() {
    if (stryMutAct_9fa48("231")) {
      {}
    } else {
      stryCov_9fa48("231");
      return this.tree[0].maxSubarray;
    }
  }
}

// ✅ Main exported function
export function solve(testing_testCases) {
  if (stryMutAct_9fa48("232")) {
    {}
  } else {
    stryCov_9fa48("232");
    const results = stryMutAct_9fa48("233") ? ["Stryker was here"] : (stryCov_9fa48("233"), []);
    for (const {
      size,
      values,
      updates
    } of testing_testCases) {
      if (stryMutAct_9fa48("234")) {
        {}
      } else {
        stryCov_9fa48("234");
        const segmentTree = new SegmentTree(size);
        for (let i = 0; stryMutAct_9fa48("237") ? i >= size : stryMutAct_9fa48("236") ? i <= size : stryMutAct_9fa48("235") ? false : (stryCov_9fa48("235", "236", "237"), i < size); stryMutAct_9fa48("238") ? i-- : (stryCov_9fa48("238"), i++)) {
          if (stryMutAct_9fa48("239")) {
            {}
          } else {
            stryCov_9fa48("239");
            segmentTree.update(i, values[i]);
          }
        }
        const currentResult = stryMutAct_9fa48("240") ? [] : (stryCov_9fa48("240"), [segmentTree.getMaxSubarrayLength()]);
        for (const [index, value] of updates) {
          if (stryMutAct_9fa48("241")) {
            {}
          } else {
            stryCov_9fa48("241");
            segmentTree.update(stryMutAct_9fa48("242") ? index + 1 : (stryCov_9fa48("242"), index - 1), value); // 1-based → 0-based
            currentResult.push(segmentTree.getMaxSubarrayLength());
          }
        }
        results.push(currentResult);
      }
    }
    return results;
  }
}

// ✅ Example testing_test function
function testing_test() {
  if (stryMutAct_9fa48("243")) {
    {}
  } else {
    stryCov_9fa48("243");
    const input = stryMutAct_9fa48("244") ? [] : (stryCov_9fa48("244"), [stryMutAct_9fa48("245") ? {} : (stryCov_9fa48("245"), {
      size: 2,
      queries: 2,
      values: stryMutAct_9fa48("246") ? [] : (stryCov_9fa48("246"), [1, 10]),
      updates: stryMutAct_9fa48("247") ? [] : (stryCov_9fa48("247"), [stryMutAct_9fa48("248") ? [] : (stryCov_9fa48("248"), [1, 10]), stryMutAct_9fa48("249") ? [] : (stryCov_9fa48("249"), [2, 2])])
    }), stryMutAct_9fa48("250") ? {} : (stryCov_9fa48("250"), {
      size: 5,
      queries: 3,
      values: stryMutAct_9fa48("251") ? [] : (stryCov_9fa48("251"), [1, 2, 3, 4, 5]),
      updates: stryMutAct_9fa48("252") ? [] : (stryCov_9fa48("252"), [stryMutAct_9fa48("253") ? [] : (stryCov_9fa48("253"), [3, 7]), stryMutAct_9fa48("254") ? [] : (stryCov_9fa48("254"), [1, 4]), stryMutAct_9fa48("255") ? [] : (stryCov_9fa48("255"), [5, 2])])
    }), stryMutAct_9fa48("256") ? {} : (stryCov_9fa48("256"), {
      size: 8,
      queries: 5,
      values: stryMutAct_9fa48("257") ? [] : (stryCov_9fa48("257"), [7, 4, 2, 4, 8, 2, 1, 4]),
      updates: stryMutAct_9fa48("258") ? [] : (stryCov_9fa48("258"), [stryMutAct_9fa48("259") ? [] : (stryCov_9fa48("259"), [5, 4]), stryMutAct_9fa48("260") ? [] : (stryCov_9fa48("260"), [1, 10]), stryMutAct_9fa48("261") ? [] : (stryCov_9fa48("261"), [3, 2]), stryMutAct_9fa48("262") ? [] : (stryCov_9fa48("262"), [8, 11]), stryMutAct_9fa48("263") ? [] : (stryCov_9fa48("263"), [7, 7])])
    })]);
    const output = solve(input);
    for (const result of output) {
      if (stryMutAct_9fa48("264")) {
        {}
      } else {
        stryCov_9fa48("264");
        for (const value of result) {
          if (stryMutAct_9fa48("265")) {
            {}
          } else {
            stryCov_9fa48("265");
            console.log(value);
          }
        }
      }
    }
  }
}

// Uncomment to run testing_tests
testing_test();