// @ts-nocheck
// 
export function solve(nodeCount, pattern) {
    const positionGroups = {};
    let maxLabel = 0;
    for (let i = 0; i < nodeCount; i++) {
        const value = pattern[i];
        if (!positionGroups[value]) positionGroups[value] = [];
        positionGroups[value].push(i);
        maxLabel = Math.max(maxLabel, value);
    }

    let leftPos = 1,
        rightPos = nodeCount;
    const result = Array(nodeCount);
    const used = Array(nodeCount);
    let leftIndex = 0,
        rightIndex = nodeCount - 1;

    for (let label = 1; label <= maxLabel; label++) {
        while (used[leftIndex]) leftIndex++;
        while (used[rightIndex]) rightIndex--;

        const group = positionGroups[label];
        const startsAtLeft = group[0] === leftIndex;
        const endsAtRight = group[group.length - 1] === rightIndex;

        if (label % 2 === 1) {
            if (startsAtLeft && endsAtRight) {
                for (let mid = group[0]; mid < nodeCount; mid++) {
                    if (pattern[mid] < 0 || pattern[mid] > label) {
                        fillSymmetric(used, result, group, rightPos, -1, mid);
                        rightPos -= group.length;
                        break;
                    }
                }
            } else if (endsAtRight) {
                rightPos -= group.length;
                fillLinear(used, result, group, rightPos + 1, 1);
            } else {
                fillLinear(used, result, group, rightPos, -1);
                rightPos -= group.length;
            }
        } else {
            if (startsAtLeft && endsAtRight) {
                for (let mid = group[0]; mid < nodeCount; mid++) {
                    if (pattern[mid] < 0 || pattern[mid] > label) {
                        fillSymmetric(used, result, group, leftPos, 1, mid);
                        leftPos += group.length;
                        break;
                    }
                }
            } else if (endsAtRight) {
                leftPos += group.length;
                fillLinear(used, result, group, leftPos - 1, -1);
            } else {
                fillLinear(used, result, group, leftPos, 1);
                leftPos += group.length;
            }
        }
    }

    const negOneGroup = positionGroups[-1];
    if (negOneGroup) result[negOneGroup[0]] = leftPos;

    return result;
}

function fillLinear(used, result, indices, startValue, step) {
    for (let k = 0; k < indices.length; k++) {
        result[indices[k]] = startValue;
        used[indices[k]] = true;
        startValue += step;
    }
}

function fillSymmetric(used, result, indices, startValue, step, midIndex) {
    let i = 0,
        j = indices.length - 1;
    while (indices[i] < midIndex) {
        used[indices[i]] = true;
        result[indices[i++]] = startValue;
        startValue += step;
    }
    while (indices[j] > midIndex) {
        used[indices[j]] = true;
        result[indices[j--]] = startValue;
        startValue += step;
    }
}

// function testing_test() {
//     const testCases = [
//         { input: [3, [1, 1, -1]], expected: [3, 2, 1] },
//         { input: [5, [1, -1, 1, 2, 1]], expected: [4, 3, 5, 1, 2] },
//         { input: [8, [3, 1, 2, 1, -1, 1, 1, 2]], expected: [6, 7, 2, 4, 3, 8, 5, 1] },
//         { input: [7, [1, 1, 1, -1, 1, 1, 1]], expected: [6, 5, 2, 1, 3, 4, 7] },
//         { input: [5, [1, 1, 1, 1, -1]], expected: [5, 4, 3, 2, 1] },
//         { input: [5, [-1, 1, 1, 1, 1]], expected: [1, 2, 3, 4, 5] },
//         { input: [5, [-1, 1, 2, 1, 2]], expected: [4, 5, 2, 3, 1] },
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { input, expected } = testCases[i];
//         const result = solve(...input);
//         const isEqual = result.join(',') === expected.join(',');

//         console.log(`Test Case ${i + 1}: ${isEqual ? '✅ Passed' : '❌ Failed'}`);
//         if (!isEqual) {
//             console.log(`  Input: ${input[0]}, ${JSON.stringify(input[1])}`);
//             console.log(`  Expected: ${expected}`);
//             console.log(`  Got:      ${result}`);
//         }
//     }
// }

// testing_test();

//ok. output can many. solution verified.