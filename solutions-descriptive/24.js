function calculateCost(unitCost, overheadCost, remainingWork, divisor) {
    return unitCost * divisor + Math.ceil(remainingWork / divisor) * overheadCost;
}

function optimizeCostInRange(minDivisor, maxDivisor, unitCost, overheadCost, remainingWork) {
    if (minDivisor === 0) minDivisor++;

    let minimumCost = calculateCost(unitCost, overheadCost, remainingWork, minDivisor);

    for (let divisor = minDivisor; divisor <= maxDivisor;) {
        const chunks = Math.ceil(remainingWork / divisor);
        minimumCost = Math.min(minimumCost, unitCost * divisor + chunks * overheadCost);

        if (chunks === 1) break;

        divisor = Math.floor((remainingWork + chunks - 2) / (chunks - 1));
    }

    return minimumCost;
}

export function solve(unitCost, overheadCost, totalWork, maxGroupSize) {
    let minimumTotalCost = Number.MAX_SAFE_INTEGER;

    for (let groupCount = 0;; groupCount++) {
        const remainingWork = totalWork - maxGroupSize * groupCount * (groupCount + 1) / 2;
        let currentCost = groupCount * overheadCost;

        if (remainingWork <= 0) {
            minimumTotalCost = Math.min(minimumTotalCost, currentCost + maxGroupSize * groupCount * unitCost);
            break;
        }

        currentCost += optimizeCostInRange(
            maxGroupSize * groupCount,
            maxGroupSize * (groupCount + 1) - 1,
            unitCost,
            overheadCost,
            remainingWork
        );

        minimumTotalCost = Math.min(minimumTotalCost, currentCost);
    }

    return minimumTotalCost;
}

// function testing_test() {
//     const inputs = [
//         [2, 3, 5, 5],
//         [10, 20, 40, 5],
//         [1, 60, 100, 10],
//         [60, 1, 100, 10]
//     ];
//     const expectedOutputs = [12, 190, 280, 160];

//     for (let i = 0; i < inputs.length; i++) {
//         const result = solve(...inputs[i]);
//         console.log(`Test case ${i + 1}:`, result === expectedOutputs[i] ? "Passed" : `Failed (Expected ${expectedOutputs[i]}, Got ${result})`);
//     }
// }

// testing_test();
