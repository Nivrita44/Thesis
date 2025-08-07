export function solve(arraySize, currentPosition, queryCount, selectedIndices) {
    let leftBoundary = arraySize + 1;
    let rightBoundary = 0;
    let leftMid = currentPosition;
    let rightMid = currentPosition;
    let hasMiddleSelected = false;
    let middleSkipped = false;

    const result = Array(queryCount);

    for (let i = 0; i < queryCount; i++) {
        const selectedIndex = selectedIndices[i];

        if (hasMiddleSelected) {
            if (selectedIndex < leftBoundary) leftBoundary--;
            if (selectedIndex > rightBoundary) rightBoundary++;
        }

        if (!middleSkipped) {
            if (selectedIndex < leftMid) {
                leftMid--;
            } else if (selectedIndex > rightMid) {
                rightMid++;
            } else {
                if (leftMid === rightMid) {
                    middleSkipped = true;
                }
                hasMiddleSelected = true;
                leftBoundary = Math.min(leftBoundary, arraySize);
                rightBoundary = Math.max(rightBoundary, 1);
            }
        }

        let visibleElements = 0;

        if (middleSkipped) {
            visibleElements += countRange(1, rightBoundary);
            visibleElements += countRange(Math.max(leftBoundary, rightBoundary + 1), arraySize);
        } else {
            visibleElements += countRange(leftMid, rightMid);
            visibleElements += countRange(1, Math.min(rightBoundary, leftMid - 1));
            visibleElements += countRange(Math.max(leftBoundary, rightMid + 1), arraySize);
        }

        result[i] = visibleElements;
    }

    return result.join(' ');
}

function countRange(start, end) {
    return end - start + 1;
}

// function testing_test() {
//     const testCases = [
//         {
//             input: [6, 5, 3, [1, 2, 3]],
//             expected: "2 3 5"
//         },
//         {
//             input: [2, 1, 4, [2, 1, 1, 2]],
//             expected: "2 2 2 2"
//         },
//         {
//             input: [5, 3, 1, [3]],
//             expected: "2"
//         },
//         {
//             input: [3, 2, 4, [2, 1, 1, 1]],
//             expected: "2 3 3 3"
//         },
//         {
//             input: [18, 15, 4, [13, 15, 1, 16]],
//             expected: "2 4 6 8"
//         }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(...input);
//         const status = result === expected ? "Passed" : "Failed";
//         console.log(`Test Case ${index + 1}: ${status}`);
//         if (status === "Failed") {
//             console.log(`  Expected: ${expected}`);
//             console.log(`  Got     : ${result}`);
//         }
//     });
// }

// testing_test();



//create e a test function in this file to test the above function. don;t use describe, it, chai. normal test function.