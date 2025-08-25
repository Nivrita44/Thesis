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

export function solve() {
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

// function testing_test() {
//     const inputs = [
//         { n: 3, array: [8, 9, 10], expected: 2 },
//         { n: 4, array: [2, 3, 4, 5], expected: -1 },
//         { n: 2, array: [147, 154], expected: 7 },
//         { n: 5, array: [3, 6, 8, 25, 100000], expected: 3 }
//     ];

//     for (let test of inputs) {
//         let inputIndex = 0;
//         let output = [];

//         global.readInt = () => {
//             if (inputIndex === 0) {
//                 inputIndex++;
//                 return test.n;
//             }
//             return test.array[inputIndex++ - 1];
//         };

//         global.writeInt = (value, newline) => {
//             output.push(value);
//         };

//         solve();

//         const result = output[0];
//         console.log(`Input: ${test.array}, Expected: ${test.expected}, Got: ${result}`);
//         console.assert(result === test.expected, `Test failed for input ${test.array}`);
//     }
// }

// testing_test();

//ok. output can many. solution verified.