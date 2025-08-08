// Functional Logic: Shortest Path in Weighted Graph using Dijkstra's Algorithm
export function solve(n, edges) {
    const G = {};
    for (let i = 1; i <= n; i++) G[i] = [];
    for (const [a, b, w] of edges) {
        if (a !== b) G[a].push({ node: b, weight: w });
    }

    const distances = {};
    const prev = {};
    const pq = new MinPriorityQueue();

    for (let i = 1; i <= n; i++) distances[i] = Infinity;
    distances[1] = 0;
    pq.enqueue(1, 0);

    while (!pq.isEmpty()) {
        const { element: node } = pq.dequeue();
        for (const neighbor of G[node]) {
            const alt = distances[node] + neighbor.weight;
            if (alt < distances[neighbor.node]) {
                distances[neighbor.node] = alt;
                prev[neighbor.node] = node;
                pq.enqueue(neighbor.node, alt);
            }
        }
    }

    if (distances[n] === Infinity) return "-1";

    const path = [];
    let curr = n;
    while (curr !== undefined) {
        path.push(curr);
        curr = prev[curr];
    }
    return path.reverse().join(" ");
}

// Priority Queue helper (min-heap by priority)
class MinPriorityQueue {
    constructor() {
        this.container = [];
    }

    enqueue(element, priority) {
        this.container.push({ element, priority });
        this.container.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.container.shift();
    }

    isEmpty() {
        return this.container.length === 0;
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