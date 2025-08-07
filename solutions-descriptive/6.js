// function solve(n, a) {
//     const m = 1000000007;

//     const e = new Uint32Array(n + 1);
//     for (let i = 0; i < n; i++) {
//         e[i + 1] = e[i] ^ a[i];
//     }

//     const d = new Map();
//     d.set(0, 1);

//     for (let i = 1; i <= n; i++) {
//         const prev = e[i - 1];
//         const curr = e[i];
//         const v = d.get(prev) || 0;
//         const u = d.get(curr) || 0;
//         d.set(prev, (3 * v + 2 * u) % m);
//     }

//     let s = 0;
//     for (const v of d.values()) {
//         s = (s + v) % m;
//     }

//     return s;
// }

// function test() {
//     const testCases = [
//         { n: 3, a: [1, 7, 9], expected: 3 },
//         { n: 4, a: [179, 1, 1,179], expected: 9 },
//         { n: 5, a: [1, 2, 3,3, 2], expected: 39 },
//         { n: 12, a: [8 ,2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4], expected: 123 },
//         { n: 1, a: [1000000000], expected: 3 }
//     ];

//     for (const { n, a, expected } of testCases) {
//         const result = solve(n, a);
//         console.log(`n=${n}, a=${a}: Expected=${expected}, Got=${result}`);
//         console.log(result === expected ? "PASS" : "FAIL");
//     }
// }

// test();


export function solve(arrayLength, numbers) {
    const MODULO = 1000000007;
    const prefixXOR = new Uint32Array(arrayLength + 1);


    for (let currentIndex = 0; currentIndex < arrayLength; currentIndex++) {
        prefixXOR[currentIndex + 1] = prefixXOR[currentIndex] ^ numbers[currentIndex];
    }

    const xorFrequencyMap = new Map();
    xorFrequencyMap.set(0, 1);

    for (let endIndex = 1; endIndex <= arrayLength; endIndex++) {
        const previousXOR = prefixXOR[endIndex - 1];
        const currentXOR = prefixXOR[endIndex];
        const previousCount = xorFrequencyMap.get(previousXOR) || 0;
        const currentCount = xorFrequencyMap.get(currentXOR) || 0;


        xorFrequencyMap.set(previousXOR, (3 * previousCount + 2 * currentCount) % MODULO);
    }


    let totalSpecialSubarrays = 0;
    for (const frequency of xorFrequencyMap.values()) {
        totalSpecialSubarrays = (totalSpecialSubarrays + frequency) % MODULO;
    }

    return totalSpecialSubarrays;
}

// function testing_test() {
//     const testCases = [
//         { 
//             description: "Small array with distinct elements",
//             arrayLength: 3, 
//             numbers: [1, 7, 9], 
//             expected: 3 
//         },
//         { 
//             description: "Symmetric array with repeated elements",
//             arrayLength: 4, 
//             numbers: [179, 1, 1, 179], 
//             expected: 9 
//         },
//         { 
//             description: "Array with mirrored pattern",
//             arrayLength: 5, 
//             numbers: [1, 2, 3, 3, 2], 
//             expected: 39 
//         },
//         { 
//             description: "Larger array with varied elements",
//             arrayLength: 12, 
//             numbers: [8, 2, 5, 3, 9, 1, 8, 12, 9, 9, 9, 4], 
//             expected: 123 
//         },
//         { 
//             description: "Single element array with large value",
//             arrayLength: 1, 
//             numbers: [1000000000], 
//             expected: 3 
//         }
//     ];

//     testCases.forEach(({ description, arrayLength, numbers, expected }) => {
//         const result = solve(arrayLength, numbers);
//         const testStatus = result === expected ? "PASSED" : "FAILED";

//         console.log(`Test Case: ${description}`);
//         console.log(`Input: [${numbers.join(', ')}]`);
//         console.log(`Expected: ${expected}, Actual: ${result}`);
//         console.log(`Status: ${testStatus}\n`);
//     });
// }

// testing_test();