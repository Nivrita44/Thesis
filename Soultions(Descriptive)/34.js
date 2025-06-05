function solve(setX, setY) {
    let totalX = 0, totalY = 0;
    let peakX = 0, peakY = 0;

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