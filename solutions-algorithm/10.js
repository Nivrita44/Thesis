// Core logic function
export function solve(n) {
    // Ensure valid number
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return { count: 0, parts: [] };
    }

    let m = n;
    let count = 0;
    let parts = [];
    let place = 1;

    while (m > 0) {
        const digit = m % 10;
        if (digit !== 0) {
            parts.push(digit * place);
            count++;
        }
        m = Math.floor(m / 10);
        place *= 10;
    }

    return { count, parts };
}


// function testing_test() {
//     const testCases = [{
//             input: 5009,
//             expected: {
//                 count: 2,
//                 parts: [9, 5000]
//             }
//         },
//         {
//             input: 7,
//             expected: {
//                 count: 1,
//                 parts: [7]
//             }
//         },
//         {
//             input: 9876,
//             expected: {
//                 count: 4,
//                 parts: [6, 70, 800, 9000]
//             }
//         },
//         {
//             input: 10000,
//             expected: {
//                 count: 1,
//                 parts: [10000]
//             }
//         },
//         {
//             input: 10,
//             expected: {
//                 count: 1,
//                 parts: [10]
//             }
//         }
//     ];

//     testCases.forEach(({ input, expected }, index) => {
//         const result = solve(input);
        
//         // Compare arrays without using JSON.stringify for BigInt compatibility
//         const partsMatch = result.parts.length === expected.parts.length && 
//             result.parts.every((part, i) => {
//                 // Convert to string for comparison to handle both BigInt and Number
//                 return String(part) === String(expected.parts[i]);
//             });
            
//         const match = result.count === expected.count && partsMatch;

//         console.log(`Test ${index + 1}: ${match ? "PASS" : "FAIL"}`);
//         if (!match) {
//             console.log(`  Expected: count=${expected.count}, parts=${expected.parts}`);
//             console.log(`  Got:      count=${result.count}, parts=${result.parts}`);
//         } else {
//             console.log(result.count);
//             console.log(result.parts.join("\n"));
//         }
//     });
// }

// Run test if executed directly
// Check if this file is being run directly
// if (import.meta.url === new URL(import.meta.url).href) {
//     testing_test();
// }