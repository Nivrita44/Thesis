class Queue {
    constructor() {
        this.items = [];
        this.head = 0;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.head < this.items.length) {
            return this.items[this.head++];
        }
        return undefined;
    }

    size() {
        return this.items.length - this.head;
    }
}

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

function testSolve() {
    const inputs = [
        { n: 2, edges: [2, 1] },
        { n: 5, edges: [2, 3, 4, 5, 1] },
        { n: 5, edges: [2, 1, 4, 2, 3] },
        { n: 5, edges: [4, 1, 1, 5, 4] },
        { n: 10, edges: [4, 3, 9, 1, 6, 7, 9, 10, 10, 3] }
    ];
    const expectedOutputs = [2, 2, 5, 5, 5];

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let expected = expectedOutputs[i];

        let inputIndex = -1;
        global.readInt = () => {
            inputIndex++;
            return inputIndex === 0 ? input.n : input.edges[inputIndex - 1];
        };

        let output = [];
        global.writeInt = (value) => output.push(value);

        solve();

        if (output[0] !== expected) {
            console.error(`❌ Test case ${i + 1} failed. Expected ${expected}, got ${output[0]}`);
        } else {
            console.log(`✅ Test case ${i + 1} passed.`);
        }
    }
}

testSolve();
