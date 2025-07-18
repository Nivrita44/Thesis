function solve(x, y, maxFactorRatio) {
    const commonGCD = gcd(x, y); 
    const stepsToX = minSteps(x / commonGCD);
    const stepsToY = minSteps(y / commonGCD);
    const totalSteps = stepsToX + stepsToY;
    return totalSteps === Infinity ? -1 : totalSteps;

    function minSteps(target) {
        const allDivisors = [];
        
        
        for (let i = 1; i * i <= target; i++) {
            if (target % i === 0) {
                allDivisors.push(i);
                if (i !== target / i) {
                    allDivisors.push(target / i);
                }
            }
        }
        allDivisors.sort((a, b) => a - b); 

        const minOperations = Array(allDivisors.length).fill(Infinity);

        for (let i = 0; i < allDivisors.length; i++) {
            let bestPrevStep = Infinity;
            
            for (let j = 0; j < i; j++) {
                const larger = allDivisors[i];
                const smaller = allDivisors[j];

                if (larger % smaller === 0 && (larger / smaller) <= maxFactorRatio) {
                    bestPrevStep = Math.min(bestPrevStep, minOperations[j]);
                }
            }

            
            if (allDivisors[i] <= maxFactorRatio) {
                minOperations[i] = allDivisors[i] === 1 ? 0 : 1;
            }

            
            minOperations[i] = Math.min(minOperations[i], bestPrevStep + 1);
        }

        return minOperations[allDivisors.length - 1];
    }
}


function gcd(a, b) {
    while (a) {
        const remainder = b % a;
        b = a;
        a = remainder;
    }
    return b;
}


function testing_test() {
    const testCases = [
        { x: 4, y: 6, k: 3, expected: 2 },
        { x: 4, y: 5, k: 3, expected: -1 },
        { x: 4, y: 6, k: 2, expected: -1 },
        { x: 10, y: 45, k: 3, expected: 3 },
        { x: 780, y: 23, k: 42, expected: 3 },
        { x: 11, y: 270, k: 23, expected: 3 },
        { x: 1, y: 982800, k:13, expected: 6 },
        { x: 1, y: 6, k: 2, expected: -1 }
    ];

    for (const { x, y, k, expected } of testCases) {
        const result = solve(x, y, k);
        console.log(`x=${x}, y=${y}, k=${k}:`);
        console.log(`  Expected: ${expected}, Got: ${result}`);
        console.log(`  ${result === expected ? "PASS" : "FAIL"}`);
    }
}

testing_test();

module.exports = solve;
