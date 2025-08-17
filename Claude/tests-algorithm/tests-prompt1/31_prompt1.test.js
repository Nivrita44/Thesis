import { solve } from '../../../solutions-algorithm/31.js';

// Helper to convert string output to array of numbers
function parseSolveOutput(output) {
    if (Array.isArray(output) && output.length === 1 && output[0] === "-1") return -1;
    if (Array.isArray(output) && typeof output[0] === "string") {
        return output[0].split(" ").map(Number);
    }
    return output;
}

test('example case n=4 should return valid funny permutation', () => {
    expect(parseSolveOutput(solve(1, [4]))).toEqual([4, 3, 1, 2]);
});

test('minimum input n=2 should work', () => {
    expect(parseSolveOutput(solve(1, [2]))).toEqual([2, 1]);
});

test('n=3 should return -1 as no funny permutation exists', () => {
    expect(parseSolveOutput(solve(1, [3]))).toBe(-1);
});

test('n=5 should return valid funny permutation', () => {
    const result = parseSolveOutput(solve(1, [5]));
    expect(validateFunnyPermutation(result, 5)).toBe(true);
});

test('n=6 should return valid funny permutation', () => {
    const result = parseSolveOutput(solve(1, [6]));
    expect(validateFunnyPermutation(result, 6)).toBe(true);
});

test('large input n=100 should return valid funny permutation', () => {
    const result = parseSolveOutput(solve(1, [100]));
    expect(validateFunnyPermutation(result, 100)).toBe(true);
});

test('maximum input n=200000 should return valid funny permutation', () => {
    const result = parseSolveOutput(solve(1, [200000]));
    expect(validateFunnyPermutation(result, 200000)).toBe(true);
});

// Validate funny permutation
function validateFunnyPermutation(perm, n) {
    if (perm === -1) return true;
    if (!Array.isArray(perm) || perm.length !== Number(n)) return false;

    const used = new Set();
    for (let i = 0; i < perm.length; i++) {
        if (perm[i] === i + 1) return false; // no element in its original position
        if (used.has(perm[i])) return false; // all elements unique
        used.add(perm[i]);
    }
    return used.size === Number(n);
}