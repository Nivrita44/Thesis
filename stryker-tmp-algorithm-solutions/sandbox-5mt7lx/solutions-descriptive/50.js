// @ts-nocheck
export function solve(numbers) {
    const length = numbers.length;
    const presenceMap = {};
    for (let i = 0; i < length; i++) {
        presenceMap[numbers[i]] = true;
    }
    numbers.sort((a, b) => b - a);

    let currentLCM = numbers[0];
    for (let i = 1; i < length; i++) {
        currentLCM = getLCM(currentLCM, numbers[i]);
        if (currentLCM > 1e9) return length;
    }
    if (!presenceMap[currentLCM]) return length;

    const sqrtLimit = Math.floor(Math.sqrt(currentLCM));
    let maxCount = 0;
    for (let divisor = 1; divisor <= sqrtLimit; divisor++) {
        if (currentLCM % divisor !== 0) continue;
        maxCount = Math.max(maxCount, countMultiples(divisor), countMultiples(currentLCM / divisor));
    }
    return maxCount;

    function countMultiples(divisor) {
        if (presenceMap[divisor]) return 0;
        let count = 0,
            combinedLCM;
        for (let i = 0; i < length; i++) {
            if (divisor % numbers[i] === 0) {
                combinedLCM = combinedLCM ? getLCM(combinedLCM, numbers[i]) : numbers[i];
                count++;
            }
        }
        return divisor === combinedLCM ? count : 0;
    }
}

function getLCM(a, b) {
    return (a / gcd(a, b)) * b;
}

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


// function testing_test() {
//     const testCases = [
//         {
//             input: [1, 2, 4, 8, 16],
//             expected: 0
//         },
//         {
//             input: [3, 2, 10, 20, 60, 1],
//             expected: 4
//         },
//         {
//             input: [2, 3, 4, 6, 12, 100003, 1200036],
//             expected: 4
//         },
//         {
//             input: [2, 42, 7, 3, 6, 7, 7, 1, 6],
//             expected: 5
//         },
//         {
//             input: [4, 99, 57, 179, 10203, 2, 11, 40812],
//             expected: 8
//         },
//         {
//             input: [1],
//             expected: 0
//         }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const {input, expected} = testCases[i];
//         const result = solve(input);
//         if (result === expected) {
//             console.log(`Test case ${i + 1}: Passed`);
//         } else {
//             console.log(`Test case ${i + 1}: Failed`);
//             console.log(`  Input: [${input}]`);
//             console.log(`  Expected: ${expected}, Got: ${result}`);
//         }
//     }
// }




// testing_test();