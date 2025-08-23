// @ts-nocheck
export function solve(setX, setY) {
    let totalX = 0,
        totalY = 0;
    let peakX = 0,
        peakY = 0;

    for (let i = 0; i < setX.length; i++) {
        totalX += setX[i];
        if (setX[i] > peakX) peakX = setX[i];
    }

    for (let j = 0; j < setY.length; j++) {
        totalY += setY[j];
        if (setY[j] > peakY) peakY = setY[j];
    }

    if (totalX < totalY) return "-1";

    let diffVal = totalX - totalY;
    setX.sort((a, b) => a - b);
    setY.sort((a, b) => a - b);

    if (diffVal === 0) {
        return arraysMatch(setX, setY) ? (peakX + 1 <= 1000000000 ? peakX + 1 : "-1") : "-1";
    }

    let factors = [];
    for (let fac = 1; fac * fac <= diffVal; fac++) {
        if (diffVal % fac === 0) {
            factors.push(fac);
            if (fac * fac !== diffVal) factors.push(diffVal / fac);
        }
    }

    factors.sort((a, b) => a - b);

    for (let candidateFactor of factors) {
        if (candidateFactor <= peakY || candidateFactor > peakX || candidateFactor > 1000000000) continue;

        let remainders = [];
        for (let x of setX) {
            remainders.push(x % candidateFactor);
        }

        remainders.sort((a, b) => a - b);

        if (arraysMatch(remainders, setY)) {
            return candidateFactor.toString();
        }
    }

    return "-1";
}

function arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// function testing_test() {
//     const testCases = [
//         {
//             input: {
//                 setX: [3, 5, 2, 7],
//                 setY: [0, 1, 1, 1]
//             },
//             expected: "2"
//         },
//         {
//             input: {
//                 setX: [3, 1, 5, 2, 4],
//                 setY: [1, 2, 3, 4, 5]
//             },
//             expected: "31415926" || "6"
//         },
//         {
//             input: {
//                 setX: [2, 3, 4, 7, 8, 9],
//                 setY: [1, 2, 3, 6, 7, 8]
//             },
//             expected: "-1"
//         },
//         {
//             input: {
//                 setX: [21, 22, 25, 28, 20],
//                 setY: [0, 1, 2, 1, 0]
//             },
//             expected: "4"
//         },
//         {
//             input: {
//                 setX: [1, 1, 2, 3, 5, 8],
//                 setY: [0, 0, 1, 1, 0, 0]
//             },
//             expected: "-1"
//         }
//     ];

//     for (let i = 0; i < testCases.length; i++) {
//         const { setX, setY } = testCases[i].input;
//         const expected = testCases[i].expected;
//         const result = solve(setX, setY);
//         console.log(`Test Case ${i + 1}: ${result === expected ? "Passed" : "Failed"}`);
//         if (result !== expected) {
//             console.log(`  Expected: ${expected}`);
//             console.log(`  Received: ${result}`);
//         }
//     }
// }

// testing_test();

//ok. output can many. verified