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
export function solve(nodeCount, edgeCount, edgeList, queryList) {
  if (stryMutAct_9fa48("114")) {
    {}
  } else {
    stryCov_9fa48("114");
    const INF = stryMutAct_9fa48("115") ? 2e9 - 5 : (stryCov_9fa48("115"), 2e9 + 5);
    const graph = stryMutAct_9fa48("116") ? Array().fill().map(() => []) : (stryCov_9fa48("116"), Array(stryMutAct_9fa48("117") ? nodeCount - 1 : (stryCov_9fa48("117"), nodeCount + 1)).fill().map(stryMutAct_9fa48("118") ? () => undefined : (stryCov_9fa48("118"), () => stryMutAct_9fa48("119") ? ["Stryker was here"] : (stryCov_9fa48("119"), []))));
    const distanceMatrix = stryMutAct_9fa48("120") ? Array().fill().map(() => new Array(nodeCount + 1).fill(INF)) : (stryCov_9fa48("120"), Array(stryMutAct_9fa48("121") ? edgeCount - 1 : (stryCov_9fa48("121"), edgeCount + 1)).fill().map(stryMutAct_9fa48("122") ? () => undefined : (stryCov_9fa48("122"), () => (stryMutAct_9fa48("123") ? new Array() : (stryCov_9fa48("123"), new Array(stryMutAct_9fa48("124") ? nodeCount - 1 : (stryCov_9fa48("124"), nodeCount + 1)))).fill(INF))));
    const visited = new Uint8Array(stryMutAct_9fa48("125") ? nodeCount - 1 : (stryCov_9fa48("125"), nodeCount + 1));
    for (let {
      u,
      v,
      w
    } of edgeList) {
      if (stryMutAct_9fa48("126")) {
        {}
      } else {
        stryCov_9fa48("126");
        graph[u].push(stryMutAct_9fa48("127") ? [] : (stryCov_9fa48("127"), [v, 1]));
        graph[v].push(stryMutAct_9fa48("128") ? [] : (stryCov_9fa48("128"), [u, 1]));
      }
    }
    stryMutAct_9fa48("129") ? edgeList : (stryCov_9fa48("129"), edgeList.sort(stryMutAct_9fa48("130") ? () => undefined : (stryCov_9fa48("130"), (a, b) => stryMutAct_9fa48("131") ? a.w + b.w : (stryCov_9fa48("131"), a.w - b.w))));
    for (let edgeIndex = 1; stryMutAct_9fa48("134") ? edgeIndex > edgeCount : stryMutAct_9fa48("133") ? edgeIndex < edgeCount : stryMutAct_9fa48("132") ? false : (stryCov_9fa48("132", "133", "134"), edgeIndex <= edgeCount); stryMutAct_9fa48("135") ? edgeIndex-- : (stryCov_9fa48("135"), edgeIndex++)) {
      if (stryMutAct_9fa48("136")) {
        {}
      } else {
        stryCov_9fa48("136");
        const {
          u,
          v
        } = edgeList[stryMutAct_9fa48("137") ? edgeIndex + 1 : (stryCov_9fa48("137"), edgeIndex - 1)];
        graph[u].push(stryMutAct_9fa48("138") ? [] : (stryCov_9fa48("138"), [v, 0]));
        graph[v].push(stryMutAct_9fa48("139") ? [] : (stryCov_9fa48("139"), [u, 0]));
        for (let i = 1; stryMutAct_9fa48("142") ? i > nodeCount : stryMutAct_9fa48("141") ? i < nodeCount : stryMutAct_9fa48("140") ? false : (stryCov_9fa48("140", "141", "142"), i <= nodeCount); stryMutAct_9fa48("143") ? i-- : (stryCov_9fa48("143"), i++)) {
          if (stryMutAct_9fa48("144")) {
            {}
          } else {
            stryCov_9fa48("144");
            visited[i] = 0;
            distanceMatrix[edgeIndex][i] = INF;
          }
        }
        const startNode = u;
        distanceMatrix[edgeIndex][startNode] = 0;
        const deque = stryMutAct_9fa48("145") ? [] : (stryCov_9fa48("145"), [startNode]);
        while (stryMutAct_9fa48("146") ? false : (stryCov_9fa48("146"), deque.length)) {
          if (stryMutAct_9fa48("147")) {
            {}
          } else {
            stryCov_9fa48("147");
            const current = deque.shift();
            if (stryMutAct_9fa48("149") ? false : stryMutAct_9fa48("148") ? true : (stryCov_9fa48("148", "149"), visited[current])) continue;
            visited[current] = 1;
            for (const [neighbor, weight] of graph[current]) {
              if (stryMutAct_9fa48("150")) {
                {}
              } else {
                stryCov_9fa48("150");
                const newDistance = stryMutAct_9fa48("151") ? distanceMatrix[edgeIndex][current] - weight : (stryCov_9fa48("151"), distanceMatrix[edgeIndex][current] + weight);
                if (stryMutAct_9fa48("155") ? distanceMatrix[edgeIndex][neighbor] <= newDistance : stryMutAct_9fa48("154") ? distanceMatrix[edgeIndex][neighbor] >= newDistance : stryMutAct_9fa48("153") ? false : stryMutAct_9fa48("152") ? true : (stryCov_9fa48("152", "153", "154", "155"), distanceMatrix[edgeIndex][neighbor] > newDistance)) {
                  if (stryMutAct_9fa48("156")) {
                    {}
                  } else {
                    stryCov_9fa48("156");
                    distanceMatrix[edgeIndex][neighbor] = newDistance;
                    if (stryMutAct_9fa48("159") ? weight !== 0 : stryMutAct_9fa48("158") ? false : stryMutAct_9fa48("157") ? true : (stryCov_9fa48("157", "158", "159"), weight === 0)) {
                      if (stryMutAct_9fa48("160")) {
                        {}
                      } else {
                        stryCov_9fa48("160");
                        deque.unshift(neighbor);
                      }
                    } else {
                      if (stryMutAct_9fa48("161")) {
                        {}
                      } else {
                        stryCov_9fa48("161");
                        deque.push(neighbor);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const answers = stryMutAct_9fa48("162") ? ["Stryker was here"] : (stryCov_9fa48("162"), []);
    for (const [start, end, maxAllowedDistance] of queryList) {
      if (stryMutAct_9fa48("163")) {
        {}
      } else {
        stryCov_9fa48("163");
        let smallestWeight = stryMutAct_9fa48("164") ? +1 : (stryCov_9fa48("164"), -1);
        for (let edgeIndex = 1; stryMutAct_9fa48("167") ? edgeIndex > edgeCount : stryMutAct_9fa48("166") ? edgeIndex < edgeCount : stryMutAct_9fa48("165") ? false : (stryCov_9fa48("165", "166", "167"), edgeIndex <= edgeCount); stryMutAct_9fa48("168") ? edgeIndex-- : (stryCov_9fa48("168"), edgeIndex++)) {
          if (stryMutAct_9fa48("169")) {
            {}
          } else {
            stryCov_9fa48("169");
            const pathDistance = stryMutAct_9fa48("170") ? distanceMatrix[edgeIndex][start] + distanceMatrix[edgeIndex][end] - 1 : (stryCov_9fa48("170"), (stryMutAct_9fa48("171") ? distanceMatrix[edgeIndex][start] - distanceMatrix[edgeIndex][end] : (stryCov_9fa48("171"), distanceMatrix[edgeIndex][start] + distanceMatrix[edgeIndex][end])) + 1);
            if (stryMutAct_9fa48("175") ? pathDistance > maxAllowedDistance : stryMutAct_9fa48("174") ? pathDistance < maxAllowedDistance : stryMutAct_9fa48("173") ? false : stryMutAct_9fa48("172") ? true : (stryCov_9fa48("172", "173", "174", "175"), pathDistance <= maxAllowedDistance)) {
              if (stryMutAct_9fa48("176")) {
                {}
              } else {
                stryCov_9fa48("176");
                smallestWeight = edgeList[stryMutAct_9fa48("177") ? edgeIndex + 1 : (stryCov_9fa48("177"), edgeIndex - 1)].w;
                break;
              }
            }
          }
        }
        answers.push(smallestWeight);
      }
    }
    return answers;
  }
}

// function testing_test() {
//     const nodeCount1 = 4, edgeCount1 = 4;
//     const edges1 = [
//         { u: 1, v: 2, w: 2 },
//         { u: 2, v: 4, w: 2 },
//         { u: 1, v: 3, w: 4 },
//         { u: 3, v: 4, w: 1 }
//     ];
//     const queries1 = [
//         [1, 4, 2],
//         [2, 3, 1]
//     ];
//     const expected1 = [1, 2];
//     const result1 = solve(nodeCount1, edgeCount1, edges1, queries1);
//     console.assert(JSON.stringify(result1) === JSON.stringify(expected1), `Test case 1 failed: expected ${expected1}, got ${result1}`);

//     const nodeCount2 = 6, edgeCount2 = 7;
//     const edges2 = [
//         { u: 1, v: 2, w: 10 },
//         { u: 2, v: 3, w: 3 },
//         { u: 3, v: 4, w: 9 },
//         { u: 4, v: 5, w: 2 },
//         { u: 5, v: 6, w: 1 },
//         { u: 2, v: 4, w: 10 },
//         { u: 4, v: 6, w: 10 }
//     ];
//     const queries2 = [
//         [1, 6, 3],
//         [1, 6, 2],
//         [2, 4, 1]
//     ];
//     const expected2 = [2, 9, 9];
//     const result2 = solve(nodeCount2, edgeCount2, edges2, queries2);
//     console.assert(JSON.stringify(result2) === JSON.stringify(expected2), `Test case 2 failed: expected ${expected2}, got ${result2}`);

//     console.log('All test cases passed!');
// }

// testing_test();