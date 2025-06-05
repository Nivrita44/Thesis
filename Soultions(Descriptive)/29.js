function maxOperations(start, target) {
    let temp = start;
    while (temp % 2 === 0 && Math.floor(temp / 2) !== target) {
        temp = Math.floor(temp / 2);
    }

    if (temp % 2 === 1) {
        return Math.floor(start / temp);
    }

    let smallestOdd = temp;
    while (smallestOdd % 2 === 0) {
        smallestOdd = Math.floor(smallestOdd / 2);
    }

    return 1 + Math.floor((start - temp) / smallestOdd);
}

function canReachTargetOperations(n, k, values) {
    const prefix = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + maxOperations(values[i - 1], values[i]);
    }

    const suffix = new Array(n).fill(0);
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + maxOperations(values[i + 1], values[i]);
    }

    for (let i = 0; i < n; i++) {
        const totalOps = maxOperations(values[i], 0) + prefix[i] + suffix[i];
        if (totalOps >= k) {
            return true;
        }
    }

    return false;
}
