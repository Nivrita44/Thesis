var fs = require("fs");
var Kattio = {
    _buf: Buffer.alloc(1 << 14),
    _bufPos: 0,
    _bufLen: 0,
    _ensure: function () {
        if (this._bufPos === this._bufLen) {
            this._bufPos = 0;
            this._bufLen = fs.readSync(0, this._buf, 0, this._buf.length, null);
        }
    },
    _isws: function (ch) {
        return ch === 32 || ch === 9 || ch === 10 || ch === 13;
    },
    _islf: function (ch) {
        return ch === 10 || ch === 13;
    },
    _peekChar: function () {
        this._ensure();
        return this._bufPos === this._bufLen ? 0 : this._buf[this._bufPos];
    },
    _skipWs: function () {
        while (this._isws(this._peekChar())) this._bufPos++;
    },
    _readUntil: function (stop) {
        this._ensure();
        if (this._bufPos === this._bufLen) throw new Error("eof");
        var start = this._bufPos;
        var before = null;
        for (;;) {
            if (this._bufPos === this._bufLen) {
                var len = this._bufPos - start,
                    preLen = before ? before.length : 0;
                var nbuf = Buffer.alloc(len + preLen);
                if (before) before.copy(nbuf);
                before = nbuf;
                this._buf.copy(before, preLen, start);
                this._ensure();
                start = this._bufPos;
            }
            if (this._bufPos === this._bufLen || stop(this._buf[this._bufPos])) break;
            this._bufPos++;
        }
        if (!before) return this._buf.toString("utf8", start, this._bufPos);
        var after = this._buf.slice(start, this._bufPos);
        var res = Buffer.alloc(before.length + after.length);
        before.copy(res);
        after.copy(res, before.length);
        return res.toString();
    },
    nextToken: function () {
        this._skipWs();
        return this._readUntil(this._isws);
    },
    nextNumber: function () {
        return +this.nextToken();
    },
};

const MOD = 1e9 + 7;
const MOD_CUT = ((1 << 20) * (1 << 20)) % MOD;

function add(a, b) {
    return (a + b) % MOD;
}
function minus(a, b) {
    return add(add(a, -b), MOD);
}
function mul(a, b) {
    let r =
        (a >> 20) * (b >> 20) * MOD_CUT +
        (a & 0xfff00000) * (b & 0xfffff) +
        (a & 0xfffff) * b;
    return r % MOD;
}
function pow(a, b) {
    let r = 1;
    let base = a;
    while (b) {
        if (b & 1) r = mul(r, base);
        b >>= 1;
        base = mul(base, base);
    }
    return r;
}

const N = 3e5;
const prefix = Array(N + 1);
const prefix2 = Array(N + 1);
prefix[0] = prefix2[0] = 0;
for (let i = 1; i <= N; i++) {
    prefix[i] = (prefix[i - 1] + i) % MOD;
    prefix2[i] = (prefix2[i - 1] + i * i) % MOD;
}

let t = Kattio.nextNumber();
while (t--) console.log(solve());

function solve() {
    const n = Kattio.nextNumber();
    let k = BigInt(Kattio.nextToken());
    let s = 0;

    if (k > n) {
        const times = (k - BigInt(n)) % BigInt(MOD);
        s = mul(Number(times), n);
        k = n;
    } else {
        k = Number(k);
    }

    let prev = k;
    for (let a = 1; ; a++) {
        let now = Math.floor(n / (a + 1)) + 1;
        if (n >= now * now) break;
        if (now <= k) {
            s = add(s, range(a, Math.max(2, now), Math.min(k, prev)));
        }
        prev = now - 1;
    }

    prev = Math.min(prev, k);
    for (let p = 2; p <= prev; p++) {
        s = add(s, cal(p));
    }
    return s;

    function range(a, l, r) {
        const c = r - l + 1;
        const p1 = mul(a, minus(prefix2[r], prefix2[l - 1]));
        const p2 = mul(n, minus(prefix[r], prefix[l - 1]));
        const p3 = mul(a, c);
        return minus(add(p2, p3), p1);
    }

    function cal(p) {
        let x = n;
        const q = [];
        while (x > 0) {
            q.unshift(x % p);
            x = Math.floor(x / p);
        }
        let temp = 0,
            b = 1;
        for (let i = 0; i < q.length; i++) {
            temp = add(temp, mul(q[i], b));
            b = mul(b, p);
        }
        return temp;
    }
}
