function solve() {
    let n = readInt(); 
    let adj = Array(n).fill().map(() => []); 
    let indegree = new Uint32Array(n); 

    
    for (let i = 0; i < n; i++) {
        let c = readInt() - 1; 
        adj[i].push(c);
        indegree[c]++;
    }

    let q = new Queue(); 
    let dist = new Uint32Array(n); 
    let mx = 0; 

    
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            q.push(i);
            dist[i] = 1;
            mx = 1;
        }
    }

    
    while (q.size()) {
        let v = q.pop();
        for (let u of adj[v]) {
            dist[u] += dist[v]; 
            indegree[u]--;
            if (indegree[u] === 0) {
                dist[u]++; 
                mx = Math.max(mx, dist[u]); 
                q.push(u);
            }
        }
    }

    writeInt(mx + 2, true); 
}