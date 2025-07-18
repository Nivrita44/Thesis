// @ts-nocheck
function solve(lines) {
    let n = parseInt(lines[0]);
    let tree = new Tree(n);
    for (let i = 1; i < n; i++) {
        let [u, v] = lines[i].split(' ').map(x => parseInt(x) - 1);
        tree.addEdge(u, v);
    }
    tree.build(0);

    let maxDepth = tree.depth;
    let nDepth = Array(maxDepth + 1).fill(0);
    let subtreeSize = Array(n).fill(1);

    for (let i = tree.bfsTour.length - 1; i >= 0; i--) {
        let u = tree.bfsTour[i];
        nDepth[tree.nodeDepth[u]]++;
        if (!tree.isRoot(u)) {
            subtreeSize[tree.parent[u]] += subtreeSize[u];
        }
    }

    let nDepthPref = Array(maxDepth + 2).fill(0);
    for (let d = 0; d <= maxDepth; d++) {
        nDepthPref[d + 1] = nDepthPref[d] + nDepth[d];
    }

    let ans = BigInt(0);
    for (let u = 0; u < n; u++) {
        let k = BigInt(nDepthPref[maxDepth + 1] - nDepthPref[tree.nodeDepth[u]] - subtreeSize[u]);
        ans += BigInt(2) * BigInt(tree.nodeDepth[u]) * k;
    }

    for (let d = 0; d <= maxDepth; d++) {
        ans -= BigInt(d) * BigInt(nDepth[d]) * BigInt(nDepth[d] - 1);
    }

    for (let u = 0; u < n; u++) {
        let pairs = BigInt(0);
        for (let v of tree.children(u)) {
            pairs += BigInt(subtreeSize[v]) * BigInt(subtreeSize[u] - 1 - subtreeSize[v]);
        }
        pairs /= BigInt(2);
        ans -= BigInt(2 * tree.nodeDepth[u] + 1) * pairs;
    }

    return ans.toString();
}

class Tree {
    constructor(n) {
        this.n = n;
        this.root = -1;
        this.depth = -1;
        this.parent = new Array(n).fill(-1);
        this.nodeDepth = new Array(n).fill(-1);
        this.bfsTour = [];
        this.edges = [];
        this.s = new Array(n + 2).fill(0);
        this.g = [];
    }

    addEdge(u, v) {
        this.edges.push(u, v);
    }

    adjItr(node) {
        let res = [];
        for (let i = this.s[node]; i < this.s[node + 1]; i++) {
            res.push(this.g[i]);
        }
        return res;
    }

    build(root) {
        for (let i of this.edges) this.s[i + 2]++;
        for (let i = 0; i < this.n + 1; i++) this.s[i + 1] += this.s[i];
        this.g = new Array(this.edges.length);
        for (let i = 0; i < this.edges.length; i++) {
            let j = this.edges[i] + 1;
            this.g[this.s[j]] = this.edges[i ^ 1];
            this.s[j]++;
        }

        this.root = root;
        this.parent[root] = -1;
        this.nodeDepth[root] = 0;
        this.bfsTour = [root];

        for (let v of this.bfsTour) {
            for (let u of this.adjItr(v)) {
                if (u !== this.parent[v]) {
                    this.parent[u] = v;
                    this.nodeDepth[u] = this.nodeDepth[v] + 1;
                    this.bfsTour.push(u);
                }
            }
        }

        this.depth = this.nodeDepth[this.bfsTour[this.bfsTour.length - 1]];
    }

    isRoot(u) {
        return u === this.root;
    }

    children(u) {
        return this.adjItr(u).filter(v => v !== this.parent[u]);
    }
}

function test() {
    const testCases = [
        {
            input: [
            "3",
            "1 2",
            "3 2"
            ],
            expected: "0"
        },
        {
            input: [
            "5",
            "2 3",
            "1 5",
            "4 2",
            "1 2"
            ],
            expected: "4"
        },
        {
            input: [
            "11",
            "2 1",
            "2 3",
            "2 4",
            "4 5",
            "6 5",
            "5 7",
            "4 8",
            "8 9",
            "7 10",
            "10 11"
            ],
            expected: "29"
        }
        
    ];

    for (const { input, expected } of testCases) {
        const result = solve(input);
        console.log(`Input:\n${input.join('\n')}\nExpected: ${expected}, Got: ${result}`);
        console.log(result === expected ? "PASS" : "FAIL");
    }
}
test();
