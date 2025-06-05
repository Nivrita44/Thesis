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
