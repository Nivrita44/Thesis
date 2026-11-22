class Node {
    constructor(value = null) {
        if (value === null) {
            this.count = 0;
            this.maxSubarray = 0;
            this.negativePrefix = 0;
            this.positivePrefix = 0;
            this.leftMin = 0;
            this.rightMax = 0;
        } else {
            this.count = 1;
            this.maxSubarray = 0;
            this.negativePrefix = value + 1;
            this.positivePrefix = value - 1;
            this.leftMin = value + 1;
            this.rightMax = value - 1;
        }
    }

    static merge(leftNode, rightNode) {
        const merged = new Node();
        merged.count = leftNode.count + rightNode.count;
        merged.negativePrefix = Math.min(leftNode.negativePrefix, leftNode.count + rightNode.negativePrefix);
        merged.positivePrefix = Math.max(leftNode.positivePrefix, rightNode.positivePrefix - leftNode.count);
        merged.leftMin = Math.min(rightNode.leftMin, rightNode.count + leftNode.leftMin);
        merged.rightMax = Math.max(rightNode.rightMax, leftNode.rightMax - rightNode.count);
        merged.maxSubarray = Math.max(
            leftNode.maxSubarray,
            rightNode.maxSubarray,
            -leftNode.leftMin + rightNode.positivePrefix + 1,
            leftNode.rightMax - rightNode.negativePrefix + 1
        );
        return merged;
    }
}

class SegmentTree {
    constructor(size) {
        this.size = size;
        this.tree = Array(4 * size).fill().map(() => new Node());
    }

    update(index, value) {
        this._update(index, value, 0, 0, this.size - 1);
    }

    _update(index, value, node, start, end) {
        if (start === end) {
            this.tree[node] = new Node(value);
            return;
        }

        const mid = (start + end) >> 1;
        if (index <= mid) {
            this._update(index, value, 2 * node + 1, start, mid);
        } else {
            this._update(index, value, 2 * node + 2, mid + 1, end);
        }

        this.tree[node] = Node.merge(this.tree[2 * node + 1], this.tree[2 * node + 2]);
    }

    getMaxSubarrayLength() {
        return this.tree[0].maxSubarray;
    }
}

// ✅ Main exported function
 export function solve(testing_testCases) {
    const results = [];

    for (const { size, values, updates } of testing_testCases) {
        const segmentTree = new SegmentTree(size);

        for (let i = 0; i < size; i++) {
            segmentTree.update(i, values[i]);
        }

        const currentResult = [segmentTree.getMaxSubarrayLength()];

        for (const [index, value] of updates) {
            segmentTree.update(index - 1, value); // 1-based → 0-based
            currentResult.push(segmentTree.getMaxSubarrayLength());
        }

        results.push(currentResult);
    }

    return results;
}

// ✅ Example testing_test function
function testing_test() {
    const input = [
        {
            size: 2,
            queries: 2,
            values: [1, 10],
            updates: [[1, 10], [2, 2]],
        },
        {
            size: 5,
            queries: 3,
            values: [1, 2, 3, 4, 5],
            updates: [[3, 7], [1, 4], [5, 2]],
        },
        {
            size: 8,
            queries: 5,
            values: [7, 4, 2, 4, 8, 2, 1, 4],
            updates: [[5, 4], [1, 10], [3, 2], [8, 11], [7, 7]],
        }
    ];

    const output = solve(input);
    for (const result of output) {
        for (const value of result) {
            console.log(value);
        }
    }
}

// Uncomment to run testing_tests
 testing_test();
