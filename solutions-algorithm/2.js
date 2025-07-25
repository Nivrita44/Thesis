// Pure logic function
export function solve(name1, name2, pile) {
    const combined = (name1 + name2).split('').sort().join('');
    const target = pile.split('').sort().join('');
    return combined === target ? 'YES' : 'NO';
}

// Test function
function testing_test() {
    const tests = [{
            input: ['SANTACLAUS', 'DEDMOROZ', 'SANTAMOROZDEDCLAUS'],
            expected: 'YES'
        },
        {
            input: ['PAPAINOEL', 'JOULUPUKKI', 'JOULNAPAOILELUPUKKI'],
            expected: 'NO'
        },
        {
            input: ['BABBONATALE', 'FATHERCHRISTMAS', 'BABCHRISTMASBONATALLEFATHER'],
            expected: 'NO'
        }
    ];

    tests.forEach(({ input, expected }, index) => {
        const result = solve(...input);
        const status = result === expected ? '✅' : '❌';
        console.log(`${status} Test ${index + 1}: Expected = ${expected}, Got = ${result}`);
    });
}

// Run tests when this file is executed directly
if (require.main === module) {
   testing_test();
}