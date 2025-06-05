const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const siftUp = (arr, i) => {
    if (i === 0) return;
    const p = Math.floor((i - 1) / 2);
    if (arr[p] > arr[i]) {
        swap(arr, i, p);
        siftUp(arr, p);
    }
};

const siftDown = (arr, i) => {
    const l = 2 * i + 1;
    const r = l + 1;
    if (l >= arr.length) return;
    if (r === arr.length) {
        if (arr[i] > arr[l]) swap(arr, i, l);
        return;
    }
    if (arr[l] > arr[r]) {
        if (arr[i] > arr[r]) {
            swap(arr, i, r);
            siftDown(arr, r);
        }
    } else {
        if (arr[i] > arr[l]) {
            swap(arr, i, l);
            siftDown(arr, l);
        }
    }
};

const sol = (n, k, d) => {
    const heap = [];
    let sum = 0;
    for (let i = n - 1; i >= 0; i--) {
        if ((n - i) % (k + 1)) {
            if (heap[0] < d[i]) {
                sum += d[i] - heap[0];
                heap[0] = d[i];
                siftDown(heap, 0);
            }
        } else {
            heap.push(d[i]);
            sum += d[i];
            siftUp(heap, heap.length - 1);
        }
    }
    return sum;
};