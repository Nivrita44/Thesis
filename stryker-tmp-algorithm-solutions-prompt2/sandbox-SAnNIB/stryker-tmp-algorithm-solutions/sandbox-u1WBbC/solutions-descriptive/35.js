// @ts-nocheck
// 
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function siftUp(arr, i) {
    if (i === 0) return;
    const p = Math.floor((i - 1) / 2);
    if (arr[p] > arr[i]) {
        swap(arr, i, p);
        siftUp(arr, p);
    }
}

function siftDown(arr, i) {
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
}

export function solve(n, k, d) {
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
}

// function testing_test() {
//     const inputs = [
//         { n: 5, k: 2, d: [3, 6, 4, 1, 2], expected: 6 },
//         { n: 7, k: 1, d: [3, 1, 4, 1, 5, 9, 2], expected: 16 },
//         { n: 4, k: 3, d: [4, 3, 2, 1], expected: 4 },
//         { n: 6, k: 2, d: [1, 3, 5, 2, 4, 6], expected: 6 },
//         { n: 6, k: 1, d: [1000000000, 1, 1000000000, 1, 1000000000, 1], expected: 3000000000 },
//     ];

//     inputs.forEach(({ n, k, d, expected }, index) => {
//         const result = solve(n, k, d);
//         console.log(`Test ${index + 1}:`, result === expected ? "Passed" : `Failed (Expected ${expected}, Got ${result})`);
//     });
// }

// testing_test();