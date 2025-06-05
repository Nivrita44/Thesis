function solve() {
    let n = Bharadwaj.nextNumber();
    let l = new Uint32Array(n);
    let depth = new Uint32Array(n);
    let jump = new Uint32Array(n);
    let parent = new Uint32Array(n);
    let maxVal = 0;

    for (let i = 0; i < n; i++) {
        l[i] = Bharadwaj.nextNumber() - 1;
        maxVal = Math.max(maxVal, l[i]);
    }

    let adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < n - 1; i++) {
        let a = Bharadwaj.nextNumber() - 1;
        let b = Bharadwaj.nextNumber() - 1;
        adj[a].push(b);
        adj[b].push(a);
    }

    let pos = Array.from({ length: maxVal + 1 }, () => []);
    for (let i = 0; i < n; i++) pos[l[i]].push(i);

    let stack = [0];
    parent[0] = 0;

    while (stack.length) {
        let u = stack.pop();
        let ju = jump[u];
        let du = depth[u];
        let fju = (ju === 0) ? u : ((2 * depth[ju] - du === depth[jump[ju]]) ? jump[ju] : u);
        for (let v of adj[u]) {
            if (v !== parent[u]) {
                parent[v] = u;
                depth[v] = du + 1;
                jump[v] = fju;
                stack.push(v);
            }
        }
    }

    let last = maxVal;

    for (let k = last - 1; k >= 0; k--) {
        if (pos[k].length) {
            let te = null;
            let nte = null;

            for (let u of pos[k]) {
                if (te === null) {
                    te = u;
                } else {
                    let nu = u;
                    let mte = te;

                    if (depth[te] > depth[u]) [nu, te] = [te, nu];

                    while (depth[nu] > depth[te]) {
                        nu = (depth[jump[nu]] >= depth[te]) ? jump[nu] : parent[nu];
                    }

                    if (te !== nu) {
                        te = mte;
                        nte = u;
                        break;
                    } else {
                        te = (depth[u] > depth[te]) ? u : mte;
                    }
                }
            }

            for (let v of pos[last]) {
                if (depth[v] < depth[te]) return te + 1;

                let tempV = v;
                while (depth[tempV] > depth[te]) {
                    tempV = (depth[jump[tempV]] >= depth[te]) ? jump[tempV] : parent[tempV];
                }

                if (tempV !== te) return te + 1;
                if (nte !== null) return nte + 1;
            }
            last = k;
        }
    }

    return 0;
}

let t = Bharadwaj.nextNumber();
let result = [];
while (t--) result.push(solve());
console.log(result.join('\n'));
