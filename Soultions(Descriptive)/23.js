function* main() {
    let input;
    input = yield 1;
    const t = +input;

    for (let i = 0; i < t; i++) {
        input = yield 1;
        yield* solve(BigInt(input));
    }

    process.exit(0);
}

function* solve(n) {
    const LOG = 60;
    const a = yield* find(0n);
    const b = yield* find(a);
    const total = yield* ask(1, n);
    const c = total ^ a ^ b;
    output(a, b, c);

    function* find(base) {
        for (let i = LOG - 1; i >= 0; i--) {
            const l = 2n ** BigInt(i);
            if (l > n) continue;
            let r = l + l - 1n;
            if (r > n) r = n;

            let xor = yield* ask(l, r);
            if (l <= base && base <= r) xor ^= base;
            if (xor) return yield* binarySearch(l, r, base);
        }
    }
}

function* ask(...args) {
    console.log(['xor', ...args].join(' '));
    const r = yield 1;
    return BigInt(r);
}

function output(...args) {
    console.log(['ans', ...args].join(' '));
}

function* binarySearch(l, r, base) {
    while (l <= r) {
        const m = ((l + r) / 2n);
        let xor = yield* ask(l, m);
        if (l <= base && base <= m) xor ^= base;

        if (!xor) {
            l = m + 1n;
        } else {
            r = m - 1n;
        }
    }
    return r + 1n;
}
