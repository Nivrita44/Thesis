// Functional Logic: Shortest Path in Weighted Graph using Dijkstra's Algorithm
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
export function solve(n, edges) {
  if (stryMutAct_9fa48("616")) {
    {}
  } else {
    stryCov_9fa48("616");
    const G = {};
    for (let i = 1; stryMutAct_9fa48("619") ? i > n : stryMutAct_9fa48("618") ? i < n : stryMutAct_9fa48("617") ? false : (stryCov_9fa48("617", "618", "619"), i <= n); stryMutAct_9fa48("620") ? i-- : (stryCov_9fa48("620"), i++)) G[i] = stryMutAct_9fa48("621") ? ["Stryker was here"] : (stryCov_9fa48("621"), []);
    for (const [a, b, w] of edges) {
      if (stryMutAct_9fa48("622")) {
        {}
      } else {
        stryCov_9fa48("622");
        if (stryMutAct_9fa48("625") ? a === b : stryMutAct_9fa48("624") ? false : stryMutAct_9fa48("623") ? true : (stryCov_9fa48("623", "624", "625"), a !== b)) G[a].push(stryMutAct_9fa48("626") ? {} : (stryCov_9fa48("626"), {
          node: b,
          weight: w
        }));
      }
    }
    const distances = {};
    const prev = {};
    const pq = new MinPriorityQueue();
    for (let i = 1; stryMutAct_9fa48("629") ? i > n : stryMutAct_9fa48("628") ? i < n : stryMutAct_9fa48("627") ? false : (stryCov_9fa48("627", "628", "629"), i <= n); stryMutAct_9fa48("630") ? i-- : (stryCov_9fa48("630"), i++)) distances[i] = Infinity;
    distances[1] = 0;
    pq.enqueue(1, 0);
    while (stryMutAct_9fa48("632") ? false : stryMutAct_9fa48("631") ? pq.isEmpty() : (stryCov_9fa48("631", "632"), !pq.isEmpty())) {
      if (stryMutAct_9fa48("633")) {
        {}
      } else {
        stryCov_9fa48("633");
        const {
          element: node
        } = pq.dequeue();
        for (const neighbor of G[node]) {
          if (stryMutAct_9fa48("634")) {
            {}
          } else {
            stryCov_9fa48("634");
            const alt = stryMutAct_9fa48("635") ? distances[node] - neighbor.weight : (stryCov_9fa48("635"), distances[node] + neighbor.weight);
            if (stryMutAct_9fa48("639") ? alt >= distances[neighbor.node] : stryMutAct_9fa48("638") ? alt <= distances[neighbor.node] : stryMutAct_9fa48("637") ? false : stryMutAct_9fa48("636") ? true : (stryCov_9fa48("636", "637", "638", "639"), alt < distances[neighbor.node])) {
              if (stryMutAct_9fa48("640")) {
                {}
              } else {
                stryCov_9fa48("640");
                distances[neighbor.node] = alt;
                prev[neighbor.node] = node;
                pq.enqueue(neighbor.node, alt);
              }
            }
          }
        }
      }
    }
    if (stryMutAct_9fa48("643") ? distances[n] !== Infinity : stryMutAct_9fa48("642") ? false : stryMutAct_9fa48("641") ? true : (stryCov_9fa48("641", "642", "643"), distances[n] === Infinity)) return stryMutAct_9fa48("644") ? "" : (stryCov_9fa48("644"), "-1");
    const path = stryMutAct_9fa48("645") ? ["Stryker was here"] : (stryCov_9fa48("645"), []);
    let curr = n;
    while (stryMutAct_9fa48("647") ? curr === undefined : stryMutAct_9fa48("646") ? false : (stryCov_9fa48("646", "647"), curr !== undefined)) {
      if (stryMutAct_9fa48("648")) {
        {}
      } else {
        stryCov_9fa48("648");
        path.push(curr);
        curr = prev[curr];
      }
    }
    return stryMutAct_9fa48("649") ? path.join(" ") : (stryCov_9fa48("649"), path.reverse().join(stryMutAct_9fa48("650") ? "" : (stryCov_9fa48("650"), " ")));
  }
}

// Priority Queue helper (min-heap by priority)
class MinPriorityQueue {
  constructor() {
    if (stryMutAct_9fa48("651")) {
      {}
    } else {
      stryCov_9fa48("651");
      this.container = stryMutAct_9fa48("652") ? ["Stryker was here"] : (stryCov_9fa48("652"), []);
    }
  }
  enqueue(element, priority) {
    if (stryMutAct_9fa48("653")) {
      {}
    } else {
      stryCov_9fa48("653");
      this.container.push(stryMutAct_9fa48("654") ? {} : (stryCov_9fa48("654"), {
        element,
        priority
      }));
      stryMutAct_9fa48("655") ? this.container : (stryCov_9fa48("655"), this.container.sort(stryMutAct_9fa48("656") ? () => undefined : (stryCov_9fa48("656"), (a, b) => stryMutAct_9fa48("657") ? a.priority + b.priority : (stryCov_9fa48("657"), a.priority - b.priority))));
    }
  }
  dequeue() {
    if (stryMutAct_9fa48("658")) {
      {}
    } else {
      stryCov_9fa48("658");
      return this.container.shift();
    }
  }
  isEmpty() {
    if (stryMutAct_9fa48("659")) {
      {}
    } else {
      stryCov_9fa48("659");
      return stryMutAct_9fa48("662") ? this.container.length !== 0 : stryMutAct_9fa48("661") ? false : stryMutAct_9fa48("660") ? true : (stryCov_9fa48("660", "661", "662"), this.container.length === 0);
    }
  }
}

// Test function to ensure correctness
// function testing_test() {
//     const tests = [{
//             input: {
//                 n: 5,
//                 edges: [
//                     [1, 2, 2],
//                     [2, 5, 5],
//                     [2, 3, 4],
//                     [1, 4, 1],
//                     [4, 3, 3],
//                     [3, 5, 1],
//                 ],
//             },
//             expected: "1 4 3 5",
//         },
//         {
//             input: {
//                 n: 3,
//                 edges: [
//                     [1, 2, 1],
//                     [2, 3, 1],
//                 ],
//             },
//             expected: "1 2 3",
//         },
//         {
//             input: {
//                 n: 3,
//                 edges: [
//                     [1, 2, 1],
//                 ],
//             },
//             expected: "-1",
//         },
//     ];

//     for (const { input, expected }
//         of tests) {
//         const result = solve(input.n, input.edges);
//         console.log(`Output: ${result} | Expected: ${expected} | ${result === expected ? "PASS ✅" : "FAIL ❌"}`);
//     }
// }

// // Run test cases
// testing_test();