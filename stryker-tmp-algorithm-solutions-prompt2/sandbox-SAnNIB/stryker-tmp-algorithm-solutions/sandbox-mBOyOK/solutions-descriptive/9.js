// @ts-nocheck
// 
export function solve(n, l, edges) {
    let depth = new Uint32Array(n);
    let jump = new Uint32Array(n);
    let parent = new Uint32Array(n);
    let maxVal = Math.max(...l);

    let adj = new Array(n);
    for (let i = 0; i < n; i++) adj[i] = [];
    for (let [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    let position = new Array(maxVal + 1);
    for (let i = 0; i <= maxVal; i++) position[i] = [];
    for (let i = 0; i < n; i++) {
        position[l[i]].push(i);
    }

    let stack = [0];
    parent[0] = 0;

    while (stack.length > 0) {
        let u = stack.pop();
        let ju = jump[u];
        let du = depth[u];
        let fju;

        if (ju === 0) {
            fju = u;
        } else if (2 * depth[ju] - du === depth[jump[ju]]) {
            fju = jump[ju];
        } else {
            fju = u;
        }

        for (let v of adj[u]) {
            if (parent[u] !== v) {
                parent[v] = u;
                stack.push(v);
                depth[v] = du + 1;
                jump[v] = fju;
            }
        }
    }

    let last = maxVal;

    for (let k = last - 1; k >= 0; k--) {
        if (position[k].length > 0) {
            let te = null;
            let nte = null;

            for (let u of position[k]) {
                if (te === null) {
                    te = u;
                } else {
                    let nu = u;
                    let mte = te;

                    if (depth[te] > depth[u]) {
                        [nu, te] = [te, nu];
                    }

                    while (depth[nu] > depth[te]) {
                        nu = depth[jump[nu]] >= depth[te] ? jump[nu] : parent[nu];
                    }

                    if (te !== nu) {
                        te = mte;
                        nte = u;
                        break;
                    } else {
                        te = depth[u] > depth[te] ? u : mte;
                    }
                }
            }

            for (let v of position[last]) {
                if (depth[v] < depth[te]) {
                    return te + 1;
                }

                let tempV = v;
                while (depth[tempV] > depth[te]) {
                    tempV = depth[jump[tempV]] >= depth[te] ? jump[tempV] : parent[tempV];
                }

                if (tempV !== te) {
                    return te + 1;
                }

                if (nte !== null) {
                    return nte + 1;
                }
            }
            last = k;
        }
    }
    return 0;
}

// Test function
// function testing_test() {
//   const testCases = [
//     {
//       input: {
//         n: 4,
//         l: [2, 2, 4, 3],
//         edges: [
//           [0, 1],
//           [0, 2],
//           [1, 3],
//         ],
//       },
//       expected: 2,
//     },
//     {
//       input: {
//         n: 5,
//         l: [1, 2, 3, 4, 5],
//         edges: [
//           [0, 1],
//           [1, 2],
//           [2, 3],
//           [3, 4],
//         ],
//       },
//       expected: 0,
//     },
//     {
//       input: {
//         n: 3,
//         l: [1, 2, 3],
//         edges: [
//           [0, 1],
//           [0, 2],
//         ],
//       },
//       expected: 2,
//     },
//     {
//       input: {
//         n: 5,
//         l: [3, 1, 3, 4, 5],
//         edges: [
//           [0, 1],
//           [1, 2],
//           [2, 3],
//           [3, 4],
//         ],
//       },
//       expected: 2,
//     },
//     {
//       input: {
//         n: 10,
//         l: [1, 2, 3, 2, 4, 3, 3, 4, 4, 3],
//         edges: [
//           [0, 3],
//           [3, 5],
//           [6, 3],
//           [5, 8],
//           [5, 4],
//           [6, 7],
//           [0, 1],
//           [1, 2],
//           [1, 9],
//         ],
//       },
//       expected: 10,
//     },
//   ];

//   console.log("Running Tests...\n");
//   testCases.forEach(({ input, expected }, index) => {
//     const { n, l, edges } = input;
//     const result = solve(
//       n,
//       l.map((x) => x - 1),
//       edges
//     );
//     console.log(`Test Case ${index + 1}:`);
//     console.log(
//       `Input: n=${n}, l=[${l}], edges=[${edges
//         .map((e) => `[${e}]`)
//         .join(", ")}]`
//     );
//     console.log(`Expected: ${expected}`);
//     console.log(`Result: ${result}`);
//     console.log(`Status: ${result === expected ? "PASS" : "FAIL"}\n`);
//   });
// }

// testing_test();

// If Cirno wins the game, print any possible node she may choose in the first turn. Otherwise, print "0" (without quotes).