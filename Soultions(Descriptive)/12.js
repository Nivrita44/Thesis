class N {
    constructor(v = null) {
        if (v === null) {
            this.c = 0;
            this.x = 0;
            this.n = 0;
            this.a = 0;
            this.i = 0;
            this.f = 0;
        } else {
            this.c = 1;
            this.x = 0;
            this.n = v + 1;
            this.a = v - 1;
            this.i = v + 1;
            this.f = v - 1;
        }
    }

    static m(l, r) {
        let n = new N();
        n.c = l.c + r.c;
        n.n = Math.min(l.n, l.c + r.n);
        n.a = Math.max(l.a, r.a - l.c);
        n.i = Math.min(r.i, r.c + l.i);
        n.f = Math.max(r.f, l.f - r.c);
        n.x = Math.max(
            l.x,
            r.x,
            -l.i + r.a + 1,
            l.f - r.n + 1
        );
        return n;
    }
}

class S {
    constructor(n) {
        this.s = n;
        this.t = Array(4 * n).fill().map(() => new N());
    }

    u(i, v) {
        this._u(i, v, 0, 0, this.s - 1);
    }

    _u(i, v, n, s, e) {
        if (s === e) {
            this.t[n] = new N(v);
            return;
        }
        let m = (s + e) >> 1;
        if (i <= m) {
            this._u(i, v, 2 * n + 1, s, m);
        } else {
            this._u(i, v, 2 * n + 2, m + 1, e);
        }
        this.t[n] = N.m(this.t[2 * n + 1], this.t[2 * n + 2]);
    }

    g() {
        return this.t[0].x;
    }
}
