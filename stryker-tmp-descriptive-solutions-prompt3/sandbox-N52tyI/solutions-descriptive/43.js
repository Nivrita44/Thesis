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
  if (stryMutAct_9fa48("2867")) {
    {}
  } else {
    stryCov_9fa48("2867");
    values.unshift(0);
    const adjacencyList = {};
    for (const [u, v] of edges) {
      if (stryMutAct_9fa48("2868")) {
        {}
      } else {
        stryCov_9fa48("2868");
        adjacencyList[u] = stryMutAct_9fa48("2871") ? adjacencyList[u] && [] : stryMutAct_9fa48("2870") ? false : stryMutAct_9fa48("2869") ? true : (stryCov_9fa48("2869", "2870", "2871"), adjacencyList[u] || (stryMutAct_9fa48("2872") ? ["Stryker was here"] : (stryCov_9fa48("2872"), [])));
        adjacencyList[v] = stryMutAct_9fa48("2875") ? adjacencyList[v] && [] : stryMutAct_9fa48("2874") ? false : stryMutAct_9fa48("2873") ? true : (stryCov_9fa48("2873", "2874", "2875"), adjacencyList[v] || (stryMutAct_9fa48("2876") ? ["Stryker was here"] : (stryCov_9fa48("2876"), [])));
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
      }
    }
    const dpExclude = stryMutAct_9fa48("2877") ? Array().fill(0) : (stryCov_9fa48("2877"), Array(stryMutAct_9fa48("2878") ? nodeCount - 1 : (stryCov_9fa48("2878"), nodeCount + 1)).fill(0));
    const dpInclude = stryMutAct_9fa48("2879") ? Array().fill(0) : (stryCov_9fa48("2879"), Array(stryMutAct_9fa48("2880") ? nodeCount - 1 : (stryCov_9fa48("2880"), nodeCount + 1)).fill(0));
    const stack = stryMutAct_9fa48("2881") ? [] : (stryCov_9fa48("2881"), [stryMutAct_9fa48("2882") ? [] : (stryCov_9fa48("2882"), [1, 0, stryMutAct_9fa48("2883") ? +1 : (stryCov_9fa48("2883"), -1)])]);
    while (stryMutAct_9fa48("2886") ? stack.length <= 0 : stryMutAct_9fa48("2885") ? stack.length >= 0 : stryMutAct_9fa48("2884") ? false : (stryCov_9fa48("2884", "2885", "2886"), stack.length > 0)) {
      if (stryMutAct_9fa48("2887")) {
        {}
      } else {
        stryCov_9fa48("2887");
        const [currentNode, nextChildIndex, parentNode] = stack[stryMutAct_9fa48("2888") ? stack.length + 1 : (stryCov_9fa48("2888"), stack.length - 1)];
        const neighbors = stryMutAct_9fa48("2891") ? adjacencyList[currentNode] && [] : stryMutAct_9fa48("2890") ? false : stryMutAct_9fa48("2889") ? true : (stryCov_9fa48("2889", "2890", "2891"), adjacencyList[currentNode] || (stryMutAct_9fa48("2892") ? ["Stryker was here"] : (stryCov_9fa48("2892"), [])));
        if (stryMutAct_9fa48("2896") ? nextChildIndex >= neighbors.length : stryMutAct_9fa48("2895") ? nextChildIndex <= neighbors.length : stryMutAct_9fa48("2894") ? false : stryMutAct_9fa48("2893") ? true : (stryCov_9fa48("2893", "2894", "2895", "2896"), nextChildIndex < neighbors.length)) {
          if (stryMutAct_9fa48("2897")) {
            {}
          } else {
            stryCov_9fa48("2897");
            stryMutAct_9fa48("2898") ? stack[stack.length - 1][1]-- : (stryCov_9fa48("2898"), stack[stryMutAct_9fa48("2899") ? stack.length + 1 : (stryCov_9fa48("2899"), stack.length - 1)][1]++);
            const childNode = neighbors[nextChildIndex];
            if (stryMutAct_9fa48("2902") ? childNode === parentNode : stryMutAct_9fa48("2901") ? false : stryMutAct_9fa48("2900") ? true : (stryCov_9fa48("2900", "2901", "2902"), childNode !== parentNode)) {
              if (stryMutAct_9fa48("2903")) {
                {}
              } else {
                stryCov_9fa48("2903");
                stack.push(stryMutAct_9fa48("2904") ? [] : (stryCov_9fa48("2904"), [childNode, 0, currentNode]));
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("2905")) {
            {}
          } else {
            stryCov_9fa48("2905");
            stack.pop();
            dpInclude[currentNode] = values[currentNode];
            for (const neighbor of neighbors) {
              if (stryMutAct_9fa48("2906")) {
                {}
              } else {
                stryCov_9fa48("2906");
                if (stryMutAct_9fa48("2909") ? neighbor !== parentNode : stryMutAct_9fa48("2908") ? false : stryMutAct_9fa48("2907") ? true : (stryCov_9fa48("2907", "2908", "2909"), neighbor === parentNode)) continue;
                stryMutAct_9fa48("2910") ? dpExclude[currentNode] -= Math.max(dpExclude[neighbor], dpInclude[neighbor]) : (stryCov_9fa48("2910"), dpExclude[currentNode] += stryMutAct_9fa48("2911") ? Math.min(dpExclude[neighbor], dpInclude[neighbor]) : (stryCov_9fa48("2911"), Math.max(dpExclude[neighbor], dpInclude[neighbor])));
                stryMutAct_9fa48("2912") ? dpInclude[currentNode] -= Math.max(dpExclude[neighbor], dpInclude[neighbor] - 2 * cost) : (stryCov_9fa48("2912"), dpInclude[currentNode] += stryMutAct_9fa48("2913") ? Math.min(dpExclude[neighbor], dpInclude[neighbor] - 2 * cost) : (stryCov_9fa48("2913"), Math.max(dpExclude[neighbor], stryMutAct_9fa48("2914") ? dpInclude[neighbor] + 2 * cost : (stryCov_9fa48("2914"), dpInclude[neighbor] - (stryMutAct_9fa48("2915") ? 2 / cost : (stryCov_9fa48("2915"), 2 * cost))))));
              }
            }
          }
        }
      }
    }
    return stryMutAct_9fa48("2916") ? Math.min(dpExclude[1], dpInclude[1]) : (stryCov_9fa48("2916"), Math.max(dpExclude[1], dpInclude[1]));
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