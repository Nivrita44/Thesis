const MAX = 400000;
let facts = new Int32Array(MAX + 1);
let primes = [];

function sieve() {
    for (let i = 2; i <= MAX; i++) {
        if (facts[i] === 0) {
            facts[i] = i;
            primes.push(i);
        }
        for (let j = 0; j < primes.length; j++) {
            let x = primes[j];
            if (i * x > MAX) break;
            facts[i * x] = x;
            if (x === facts[i]) break;
        }
    }
}

let init = false;

function solve() {
    if (!init) {
        sieve();
        init = true;
    }

    let n = readInt();
    let a = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        a[i] = readInt();
    }

    let p = 0;
    for (let i = 0; i < n; i++) {
        let x = a[i];
        if (facts[x] === x) {
            if (p) {
                writeInt(-1, true);
                return;
            }
            p = x;
        }
    }

    if (p === 0) {
        writeInt(2, true);
        return;
    }

    for (let i = 0; i < n; i++) {
        let x = a[i];
        if (x === p) continue;
        if (x % 2 === 0) {
            if (x < p * 2) {
                writeInt(-1, true);
                return;
            }
        } else if (x - facts[x] < p * 2) {
            writeInt(-1, true);
            return;
        }
    }

    writeInt(p, true);
}