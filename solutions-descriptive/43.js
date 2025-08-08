export function solve(nodeCount, cost, values, edges) {
    values.unshift(0);
    const adjacencyList = {};
    for (const [u, v] of edges) {
        adjacencyList[u] = adjacencyList[u] || [];
        adjacencyList[v] = adjacencyList[v] || [];
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }

    const dpExclude = Array(nodeCount + 1).fill(0);
    const dpInclude = Array(nodeCount + 1).fill(0);

    const stack = [
        [1, 0, -1]
    ];

    while (stack.length > 0) {
        const [currentNode, nextChildIndex, parentNode] = stack[stack.length - 1];
        const neighbors = adjacencyList[currentNode] || [];

        if (nextChildIndex < neighbors.length) {
            stack[stack.length - 1][1]++;
            const childNode = neighbors[nextChildIndex];
            if (childNode !== parentNode) {
                stack.push([childNode, 0, currentNode]);
            }
        } else {
            stack.pop();
            dpInclude[currentNode] = values[currentNode];
            for (const neighbor of neighbors) {
                if (neighbor === parentNode) continue;
                dpExclude[currentNode] += Math.max(dpExclude[neighbor], dpInclude[neighbor]);
                dpInclude[currentNode] += Math.max(dpExclude[neighbor], dpInclude[neighbor] - 2 * cost);
            }
        }
    }

    return Math.max(dpExclude[1], dpInclude[1]);
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