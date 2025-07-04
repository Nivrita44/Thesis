function generatePermutations(n, k) {
    if (n === 1) {
        if (k === 1) return [['1']];
        return null;
    }

    if (n === 2) {
        if (k === 2) return [['1 2', '2 1']];
        return null;
    }

    if (k === 1 || (n % 2 === 0 && k % 2 === 1)) return null;

    if (n <= 8) {
        let factorial = 1;
        for (let i = 2; i <= n; i++) factorial *= i;
        if (k > factorial || k === factorial - 1) return null;
    }

    const result = [];

    if (k % 2 === 0) {
        let count = 0;
        let perm = Array.from({ length: n }, (_, i) => i + 1);

        do {
            result.push(perm.join(' '));
            result.push(perm.map(x => n + 1 - x).join(' '));
            count += 2;
            if (count === k) break;
        } while (nextPermutation(perm));
    } else {
        let basePerm = Array.from({ length: n }, (_, i) => i + 1);
        const initialSet = Array(3).fill().map(() => Array(n));

        for (let i = 0; i < n; i++) initialSet[0][i] = i + 1;

        let mid = Math.floor(n / 2);
        let value = 1;

        for (let i = mid + 1; i < n; i++) initialSet[1][i] = value++;
        for (let i = 0; i <= mid; i++) initialSet[1][i] = value++;

        value = 1;
        for (let i = mid; i >= 0; i--) initialSet[2][i] = value, value += 2;
        value = 2;
        for (let i = n - 1; i > mid; i--) initialSet[2][i] = value, value += 2;

        for (let i = 0; i < 3; i++) {
            result.push(initialSet[i].join(' '));
        }

        let count = 3;
        outer: do {
            if (count === k) break;

            for (let i = 0; i < 3; i++) {
                let matchOriginal = basePerm.every((val, idx) => val === initialSet[i][idx]);
                let matchInverted = basePerm.every((val, idx) => (n + 1 - val) === initialSet[i][idx]);

                if (matchOriginal || matchInverted) continue outer;
            }

            result.push(basePerm.join(' '));
            result.push(basePerm.map(x => n + 1 - x).join(' '));
            count += 2;
        } while (nextPermutation(basePerm));
    }

    return result;
}

function nextPermutation(array) {
    let i = -1;
    for (let idx = array.length - 2; idx >= 0; idx--) {
        if (array[idx] < array[idx + 1]) {
            i = idx;
            break;
        }
    }

    if (i === -1) return false;

    let j = array.length - 1;
    while (array[j] <= array[i]) j--;

    [array[i], array[j]] = [array[j], array[i]];

    let left = i + 1, right = array.length - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }

    return true;
}


function testSolve() {
    const testCases = [
        { input: [3, 3], expected: ['YES', '1 2 3', '2 3 1', '3 1 2'] },
        { input: [4, 2], expected: ['YES', '1 2 3 4', '4 3 2 1'] },
        { input: [5, 1], expected: ['NO'] }
    ];

    for (const { input, expected } of testCases) {
        const [n, k] = input;
        const result = generatePermutations(n, k);
        if (result === null) {
            console.log('NO');
            if (expected[0] !== 'NO') {
                console.error(`Test failed for input ${input}. Expected ${expected}, but got NO.`);
            }
        } else {
            console.log('YES');
            for (const line of result) {
                console.log(line);
            }
            const output = ['YES', ...result];
            if (JSON.stringify(output) !== JSON.stringify(expected)) {
                console.error(`Test failed for input ${input}. Expected ${expected}, but got ${output}.`);
            }
        }
    }
}

testSolve();