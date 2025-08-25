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
export function solve(totalNodes, totalEdges) {
  if (stryMutAct_9fa48("578")) {
    {}
  } else {
    stryCov_9fa48("578");
    if (stryMutAct_9fa48("582") ? 2 * totalNodes > totalEdges : stryMutAct_9fa48("581") ? 2 * totalNodes < totalEdges : stryMutAct_9fa48("580") ? false : stryMutAct_9fa48("579") ? true : (stryCov_9fa48("579", "580", "581", "582"), (stryMutAct_9fa48("583") ? 2 / totalNodes : (stryCov_9fa48("583"), 2 * totalNodes)) <= totalEdges)) {
      if (stryMutAct_9fa48("584")) {
        {}
      } else {
        stryCov_9fa48("584");
        return stryMutAct_9fa48("585") ? "" : (stryCov_9fa48("585"), 'NO');
      }
    }
    const doubleNodes = stryMutAct_9fa48("586") ? totalNodes / 2 : (stryCov_9fa48("586"), totalNodes * 2);
    const edgeAssignments = stryMutAct_9fa48("587") ? Array().fill(0).map(() => Array(totalEdges)) : (stryCov_9fa48("587"), Array(doubleNodes).fill(0).map(stryMutAct_9fa48("588") ? () => undefined : (stryCov_9fa48("588"), () => stryMutAct_9fa48("589") ? Array() : (stryCov_9fa48("589"), Array(totalEdges)))));
    for (let nodeIndex = 0; stryMutAct_9fa48("592") ? nodeIndex >= doubleNodes : stryMutAct_9fa48("591") ? nodeIndex <= doubleNodes : stryMutAct_9fa48("590") ? false : (stryCov_9fa48("590", "591", "592"), nodeIndex < doubleNodes); stryMutAct_9fa48("593") ? nodeIndex-- : (stryCov_9fa48("593"), nodeIndex++)) {
      if (stryMutAct_9fa48("594")) {
        {}
      } else {
        stryCov_9fa48("594");
        for (let edgeIndex = 0; stryMutAct_9fa48("597") ? edgeIndex >= totalEdges : stryMutAct_9fa48("596") ? edgeIndex <= totalEdges : stryMutAct_9fa48("595") ? false : (stryCov_9fa48("595", "596", "597"), edgeIndex < totalEdges); stryMutAct_9fa48("598") ? edgeIndex-- : (stryCov_9fa48("598"), edgeIndex++)) {
          if (stryMutAct_9fa48("599")) {
            {}
          } else {
            stryCov_9fa48("599");
            edgeAssignments[nodeIndex][edgeIndex] = stryMutAct_9fa48("600") ? Math.floor((nodeIndex + edgeIndex) / 2) * totalNodes : (stryCov_9fa48("600"), Math.floor(stryMutAct_9fa48("601") ? (nodeIndex + edgeIndex) * 2 : (stryCov_9fa48("601"), (stryMutAct_9fa48("602") ? nodeIndex - edgeIndex : (stryCov_9fa48("602"), nodeIndex + edgeIndex)) / 2)) % totalNodes);
          }
        }
      }
    }
    return (stryMutAct_9fa48("603") ? "" : (stryCov_9fa48("603"), 'YES\n')) + edgeAssignments.map(row => {
      if (stryMutAct_9fa48("604")) {
        {}
      } else {
        stryCov_9fa48("604");
        return row.map(stryMutAct_9fa48("605") ? () => undefined : (stryCov_9fa48("605"), x => stryMutAct_9fa48("606") ? x - 1 : (stryCov_9fa48("606"), x + 1))).join(stryMutAct_9fa48("607") ? "" : (stryCov_9fa48("607"), ' '));
      }
    }).join(stryMutAct_9fa48("608") ? "" : (stryCov_9fa48("608"), '\n'));
  }
}

// function testing_test() {
//     // Test Case 1
//     const nodes1 = 2;
//     const edges1 = 2;
//     const result1 = solve(nodes1, edges1);
//     console.log("Test Case 1 (2 nodes, 2 edges):");
//     console.log(result1);

//     // Test Case 2
//     const nodes2 = 3;
//     const edges2 = 7;
//     const result2 = solve(nodes2, edges2);
//     console.log("\nTest Case 2 (3 nodes, 7 edges):");
//     console.log(result2);

//     // Test Case 3
//     const nodes3 = 5;
//     const edges3 = 4;
//     const result3 = solve(nodes3, edges3);
//     console.log("\nTest Case 3 (5 nodes, 4 edges):");
//     console.log(result3);
// }

// testing_test();

//ok