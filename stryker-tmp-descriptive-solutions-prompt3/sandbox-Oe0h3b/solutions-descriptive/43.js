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
export function solve(nodeCount, cost, values, edges) {
  if (stryMutAct_9fa48("2112")) {
    {}
  } else {
    stryCov_9fa48("2112");
    values.unshift(0);
    const adjacencyList = {};
    for (const [u, v] of edges) {
      if (stryMutAct_9fa48("2113")) {
        {}
      } else {
        stryCov_9fa48("2113");
        adjacencyList[u] = stryMutAct_9fa48("2116") ? adjacencyList[u] && [] : stryMutAct_9fa48("2115") ? false : stryMutAct_9fa48("2114") ? true : (stryCov_9fa48("2114", "2115", "2116"), adjacencyList[u] || (stryMutAct_9fa48("2117") ? ["Stryker was here"] : (stryCov_9fa48("2117"), [])));
        adjacencyList[v] = stryMutAct_9fa48("2120") ? adjacencyList[v] && [] : stryMutAct_9fa48("2119") ? false : stryMutAct_9fa48("2118") ? true : (stryCov_9fa48("2118", "2119", "2120"), adjacencyList[v] || (stryMutAct_9fa48("2121") ? ["Stryker was here"] : (stryCov_9fa48("2121"), [])));
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
      }
    }
    const dpExclude = stryMutAct_9fa48("2122") ? Array().fill(0) : (stryCov_9fa48("2122"), Array(stryMutAct_9fa48("2123") ? nodeCount - 1 : (stryCov_9fa48("2123"), nodeCount + 1)).fill(0));
    const dpInclude = stryMutAct_9fa48("2124") ? Array().fill(0) : (stryCov_9fa48("2124"), Array(stryMutAct_9fa48("2125") ? nodeCount - 1 : (stryCov_9fa48("2125"), nodeCount + 1)).fill(0));
    const stack = stryMutAct_9fa48("2126") ? [] : (stryCov_9fa48("2126"), [stryMutAct_9fa48("2127") ? [] : (stryCov_9fa48("2127"), [1, 0, stryMutAct_9fa48("2128") ? +1 : (stryCov_9fa48("2128"), -1)])]);
    while (stryMutAct_9fa48("2131") ? stack.length <= 0 : stryMutAct_9fa48("2130") ? stack.length >= 0 : stryMutAct_9fa48("2129") ? false : (stryCov_9fa48("2129", "2130", "2131"), stack.length > 0)) {
      if (stryMutAct_9fa48("2132")) {
        {}
      } else {
        stryCov_9fa48("2132");
        const [currentNode, nextChildIndex, parentNode] = stack[stryMutAct_9fa48("2133") ? stack.length + 1 : (stryCov_9fa48("2133"), stack.length - 1)];
        const neighbors = stryMutAct_9fa48("2136") ? adjacencyList[currentNode] && [] : stryMutAct_9fa48("2135") ? false : stryMutAct_9fa48("2134") ? true : (stryCov_9fa48("2134", "2135", "2136"), adjacencyList[currentNode] || (stryMutAct_9fa48("2137") ? ["Stryker was here"] : (stryCov_9fa48("2137"), [])));
        if (stryMutAct_9fa48("2141") ? nextChildIndex >= neighbors.length : stryMutAct_9fa48("2140") ? nextChildIndex <= neighbors.length : stryMutAct_9fa48("2139") ? false : stryMutAct_9fa48("2138") ? true : (stryCov_9fa48("2138", "2139", "2140", "2141"), nextChildIndex < neighbors.length)) {
          if (stryMutAct_9fa48("2142")) {
            {}
          } else {
            stryCov_9fa48("2142");
            stryMutAct_9fa48("2143") ? stack[stack.length - 1][1]-- : (stryCov_9fa48("2143"), stack[stryMutAct_9fa48("2144") ? stack.length + 1 : (stryCov_9fa48("2144"), stack.length - 1)][1]++);
            const childNode = neighbors[nextChildIndex];
            if (stryMutAct_9fa48("2147") ? childNode === parentNode : stryMutAct_9fa48("2146") ? false : stryMutAct_9fa48("2145") ? true : (stryCov_9fa48("2145", "2146", "2147"), childNode !== parentNode)) {
              if (stryMutAct_9fa48("2148")) {
                {}
              } else {
                stryCov_9fa48("2148");
                stack.push(stryMutAct_9fa48("2149") ? [] : (stryCov_9fa48("2149"), [childNode, 0, currentNode]));
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("2150")) {
            {}
          } else {
            stryCov_9fa48("2150");
            stack.pop();
            dpInclude[currentNode] = values[currentNode];
            for (const neighbor of neighbors) {
              if (stryMutAct_9fa48("2151")) {
                {}
              } else {
                stryCov_9fa48("2151");
                if (stryMutAct_9fa48("2154") ? neighbor !== parentNode : stryMutAct_9fa48("2153") ? false : stryMutAct_9fa48("2152") ? true : (stryCov_9fa48("2152", "2153", "2154"), neighbor === parentNode)) continue;
                stryMutAct_9fa48("2155") ? dpExclude[currentNode] -= Math.max(dpExclude[neighbor], dpInclude[neighbor]) : (stryCov_9fa48("2155"), dpExclude[currentNode] += stryMutAct_9fa48("2156") ? Math.min(dpExclude[neighbor], dpInclude[neighbor]) : (stryCov_9fa48("2156"), Math.max(dpExclude[neighbor], dpInclude[neighbor])));
                stryMutAct_9fa48("2157") ? dpInclude[currentNode] -= Math.max(dpExclude[neighbor], dpInclude[neighbor] - 2 * cost) : (stryCov_9fa48("2157"), dpInclude[currentNode] += stryMutAct_9fa48("2158") ? Math.min(dpExclude[neighbor], dpInclude[neighbor] - 2 * cost) : (stryCov_9fa48("2158"), Math.max(dpExclude[neighbor], stryMutAct_9fa48("2159") ? dpInclude[neighbor] + 2 * cost : (stryCov_9fa48("2159"), dpInclude[neighbor] - (stryMutAct_9fa48("2160") ? 2 / cost : (stryCov_9fa48("2160"), 2 * cost))))));
              }
            }
          }
        }
      }
    }
    return stryMutAct_9fa48("2161") ? Math.min(dpExclude[1], dpInclude[1]) : (stryCov_9fa48("2161"), Math.max(dpExclude[1], dpInclude[1]));
  }
}

// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 n: 3,
//                 c: 1,
//                 arr: [2, 3, 1],
//                 edges: [[1, 2], [2, 3]],
//             },
//             expected: 3,
//         },
//         {
//             input: {
//                 n: 3,
//                 c: 1,
//                 arr: [3, 6, 3],
//                 edges: [[1, 2], [2, 3]],
//             },
//             expected: 8,
//         },
//         {
//             input: {
//                 n: 3,
//                 c: 1,
//                 arr: [-2, -3, -1],
//                 edges: [[1, 2], [2, 3]],
//             },
//             expected: 0,
//         },
//         {
//             input: {
//                 n: 6,
//                 c: 1,
//                 arr: [5, -4, 3, 6, 7, 3],
//                 edges: [[4, 1], [5, 1], [3, 5], [3, 6], [1, 2]],
//             },
//             expected: 17,
//         },
//         {
//             input: {
//                 n: 8,
//                 c: 1,
//                 arr: [3, 5, 2, 7, 8, 5, -3, -4],
//                 edges: [[7, 3], [1, 8], [4, 3], [3, 5], [7, 6], [8, 7], [2, 1]],
//             },
//             expected: 26,
//         },
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const { n, c, arr, edges } = input;
//         const result = solve(n, c, arr, edges);
//         console.log(`Test Case ${index + 1}:`, result === expected ? 'Passed' : `Failed (Expected ${expected}, Got ${result})`);
//     });
// }

// testing_test();