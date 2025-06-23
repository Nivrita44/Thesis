'use strict';

// ✅ Pure function: Computes king's moves from s to t
function kingMoves(s, t) {
    const start = s.split('');
    const end = t.split('');

    const dx = end[0].charCodeAt() - start[0].charCodeAt();
    const dy = end[1] - start[1];

    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    const moves = [];

    let x = start[0].charCodeAt();
    let y = parseInt(start[1]);

    for (let i = 0; i < steps; i++) {
        let move = '';
        if (x < end[0].charCodeAt()) {
            move += 'R';
            x++;
        } else if (x > end[0].charCodeAt()) {
            move += 'L';
            x--;
        }

        if (y < end[1]) {
            move += 'U';
            y++;
        } else if (y > end[1]) {
            move += 'D';
            y--;
        }

        moves.push(move);
    }

    return {
        count: steps,
        directions: moves
    };
}

// ✅ Test function
function test() {
    const testCases = [{
            input: ['a8', 'h1'],
            expected: {
                count: 7,
                directions: ['RD', 'RD', 'RD', 'RD', 'RD', 'RD', 'RD']
            }
        },
        {
            input: ['b2', 'b4'],
            expected: {
                count: 2,
                directions: ['U', 'U']
            }
        }

    ];

    console.log("Running Tests...\n");
    testCases.forEach(({ input, expected }, index) => {
        const result = kingMoves(...input);
        const countMatch = result.count === expected.count;
        const directionsMatch = JSON.stringify(result.directions) === JSON.stringify(expected.directions);
        const status = countMatch && directionsMatch ? "PASS" : "FAIL";

        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: ${input[0]} -> ${input[1]}`);
        console.log(`Expected Count: ${expected.count}`);
        console.log(`Actual Count:   ${result.count}`);
        console.log(`Expected Moves: ${expected.directions.join(', ')}`);
        console.log(`Actual Moves:   ${result.directions.join(', ')}`);
        console.log(`Status: ${status}\n`);
    });
}

// Run the test
test();