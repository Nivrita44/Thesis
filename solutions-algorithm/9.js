// Core logic function
export function solve(original, firstRemoved, secondRemoved) {
    // Frequency map after first removal
    const freq = {};
    for (const num of original) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (const num of firstRemoved) {
        freq[num]--;
    }

    let firstMissing;
    for (const key in freq) {
        if (freq[key] > 0) {
            firstMissing = +key;
            break;
        }
    }

    // Frequency map after second removal
    const freq2 = {};
    for (const num of original) {
        freq2[num] = (freq2[num] || 0) + 1;
    }

    for (const num of secondRemoved) {
        freq2[num]--;
    }

    freq2[firstMissing]--; // remove the first missing one more time

    let secondMissing;
    for (const key in freq2) {
        if (freq2[key] > 0) {
            secondMissing = +key;
            break;
        }
    }

    return [firstMissing, secondMissing];
}

// Test function
function testing_test() {
    const original = [1, 5, 8, 123, 7];
    const firstRemoved = [123, 7, 5, 1];
    const secondRemoved = [5, 1, 7];
    const expected = [8, 123];

    const result = solve(original, firstRemoved, secondRemoved);

    const pass = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`Test 1: Expected = [${expected}], Got = [${result}] => ${pass ? "PASS" : "FAIL"}`);
}

// Run test if run directly
if (require.main === module) {
    testing_test();
}