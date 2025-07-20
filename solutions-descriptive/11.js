export function solve(nodeCount, edgeCount, edgeList, queryList) {
    const INF = 2e9 + 5;

    const graph = Array(nodeCount + 1).fill().map(() => []);
    const distanceMatrix = Array(edgeCount + 1).fill().map(() => new Array(nodeCount + 1).fill(INF));
    const visited = new Uint8Array(nodeCount + 1);

    for (let { u, v, w } of edgeList) {
        graph[u].push([v, 1]);
        graph[v].push([u, 1]);
    }

    edgeList.sort((a, b) => a.w - b.w);

    for (let edgeIndex = 1; edgeIndex <= edgeCount; edgeIndex++) {
        const { u, v } = edgeList[edgeIndex - 1];
        graph[u].push([v, 0]);
        graph[v].push([u, 0]);

        for (let i = 1; i <= nodeCount; i++) {
            visited[i] = 0;
            distanceMatrix[edgeIndex][i] = INF;
        }

        const startNode = u;
        distanceMatrix[edgeIndex][startNode] = 0;
        const deque = [startNode];

        while (deque.length) {
            const current = deque.shift();
            if (visited[current]) continue;
            visited[current] = 1;

            for (const [neighbor, weight] of graph[current]) {
                const newDistance = distanceMatrix[edgeIndex][current] + weight;
                if (distanceMatrix[edgeIndex][neighbor] > newDistance) {
                    distanceMatrix[edgeIndex][neighbor] = newDistance;
                    if (weight === 0) {
                        deque.unshift(neighbor);
                    } else {
                        deque.push(neighbor);
                    }
                }
            }
        }
    }

    const answers = [];

    for (const [start, end, maxAllowedDistance] of queryList) {
        let smallestWeight = -1;

        for (let edgeIndex = 1; edgeIndex <= edgeCount; edgeIndex++) {
            const pathDistance = distanceMatrix[edgeIndex][start] + distanceMatrix[edgeIndex][end] + 1;
            if (pathDistance <= maxAllowedDistance) {
                smallestWeight = edgeList[edgeIndex - 1].w;
                break;
            }
        }

        answers.push(smallestWeight);
    }

    return answers;
}

function testing_test() {
    const nodeCount1 = 4, edgeCount1 = 4;
    const edges1 = [
        { u: 1, v: 2, w: 2 },
        { u: 2, v: 4, w: 2 },
        { u: 1, v: 3, w: 4 },
        { u: 3, v: 4, w: 1 }
    ];
    const queries1 = [
        [1, 4, 2],
        [2, 3, 1]
    ];
    const expected1 = [1, 2];
    const result1 = solve(nodeCount1, edgeCount1, edges1, queries1);
    console.assert(JSON.stringify(result1) === JSON.stringify(expected1), `Test case 1 failed: expected ${expected1}, got ${result1}`);

    const nodeCount2 = 6, edgeCount2 = 7;
    const edges2 = [
        { u: 1, v: 2, w: 10 },
        { u: 2, v: 3, w: 3 },
        { u: 3, v: 4, w: 9 },
        { u: 4, v: 5, w: 2 },
        { u: 5, v: 6, w: 1 },
        { u: 2, v: 4, w: 10 },
        { u: 4, v: 6, w: 10 }
    ];
    const queries2 = [
        [1, 6, 3],
        [1, 6, 2],
        [2, 4, 1]
    ];
    const expected2 = [2, 9, 9];
    const result2 = solve(nodeCount2, edgeCount2, edges2, queries2);
    console.assert(JSON.stringify(result2) === JSON.stringify(expected2), `Test case 2 failed: expected ${expected2}, got ${result2}`);

    console.log('All test cases passed!');
}

testing_test();
