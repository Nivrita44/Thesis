export function solve(numEnemies, maxHits, requiredEnemies, enemyHealth, enemyPositions) {
    let minimumTime = Infinity;
    let low = 1, high = 1e9;

    while (low <= high) {
        const midTime = Math.floor((low + high) / 2);
        const attackRanges = [];

        for (let i = 0; i < numEnemies; i++) {
            const hitsNeeded = Math.ceil(enemyHealth[i] / midTime);
            const extraHits = maxHits - hitsNeeded;
            const rangeStart = enemyPositions[i] - extraHits;
            const rangeEnd = enemyPositions[i] + extraHits;

            if (rangeStart <= rangeEnd) {
                attackRanges.push([rangeStart, 1]);        // Start of range
                attackRanges.push([rangeEnd + 1, -1]);     // End of range
            }
        }

        // Sort the attackRanges based on position
        attackRanges.sort((a, b) => a[0] - b[0]);

        let activeCount = 0;
        let isEnough = false;

        for (let j = 0; j < attackRanges.length; j++) {
            activeCount += attackRanges[j][1];
            if (activeCount >= requiredEnemies) {
                isEnough = true;
                break;
            }
        }

        if (isEnough) {
            minimumTime = midTime;
            high = midTime - 1;
        } else {
            low = midTime + 1;
        }
    }

    return minimumTime === Infinity ? -1 : minimumTime;
}


function testing_test() {
    const testCases = [
        {
            input: [5, 5, 3, [7, 7, 7, 7, 7], [1, 2, 3, 4, 5]],
            expected: 2
        },
        {
            input: [9, 5, 9, [2, 4, 6, 8, 10, 8, 6, 4, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
            expected: 2
        },
        {
            input: [2, 10, 2, [1, 1], [1, 20]],
            expected: -1
        },
        {
            input: [2, 2, 2, [1000000000, 1], [1, 3]],
            expected: 1000000000
        }
    ];

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = solve(...input);
        console.log(`Test Case ${i + 1}:`, result === expected ? "Passed" : `Failed (Expected: ${expected}, Got: ${result})`);
    }
}

testing_test();
