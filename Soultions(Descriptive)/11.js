function shortestPathsFromEveryEdge(h, m, edges, queries) {
    const INF = 2e9 + 5;
    const g = Array(h + 1).fill().map(() => []);
    const n = Array(m + 1).fill().map(() => new Array(h + 1).fill(INF));
    const v = new Uint8Array(h + 1);

    
    for (let { u, v, w } of edges) {
        g[u].push([v, 1]);
        g[v].push([u, 1]);
    }

    
    edges.sort((a, b) => a.w - b.w);

    
    for (let j = 1; j <= m; j++) {
        const { u, v } = edges[j - 1];
        g[u].push([v, 0]);
        g[v].push([u, 0]);

        
        for (let i = 1; i <= h; i++) {
            v[i] = 0;
            n[j][i] = INF;
        }

        
        const start = u;
        n[j][start] = 0;
        const deque = [start];
        while (deque.length) {
            const node = deque.shift();
            if (v[node]) continue;
            v[node] = 1;

            for (const [nei, weight] of g[node]) {
                if (n[j][nei] > n[j][node] + weight) {
                    n[j][nei] = n[j][node] + weight;
                    if (weight === 0) {
                        deque.unshift(nei);
                    } else {
                        deque.push(nei);
                    }
                }
            }
        }
    }

    
    const results = [];
    for (const [u, v, maxDist] of queries) {
        let found = -1;
        for (let j = 1; j <= m; j++) {
            if (n[j][u] + n[j][v] + 1 <= maxDist) {
                found = edges[j - 1].w;
                break;
            }
        }
        results.push(found);
    }

    return results;
}

function testShortestPathsFromEveryEdge() {
    // Test case 1
    const h1 = 4, m1 = 4;
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
    const expectedOutput1 = [1, 2];
    const result1 = shortestPathsFromEveryEdge(h1, m1, edges1, queries1);
    console.assert(JSON.stringify(result1) === JSON.stringify(expectedOutput1), `Test case 1 failed: expected ${expectedOutput1}, got ${result1}`);

    // Test case 2
    const h2 = 6, m2 = 7;
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
    const expectedOutput2 = [2, 9, 9];
    const result2 = shortestPathsFromEveryEdge(h2, m2, edges2, queries2);
    console.assert(JSON.stringify(result2) === JSON.stringify(expectedOutput2), `Test case 2 failed: expected ${expectedOutput2}, got ${result2}`);

    console.log('All test cases passed!');
}

testShortestPathsFromEveryEdge();
