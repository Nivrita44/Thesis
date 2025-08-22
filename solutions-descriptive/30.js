class Queue {
    constructor() {
        this.items = [];
        this.head = 0;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.head < this.items.length) {
            return this.items[this.head++];
        }
        return undefined;
    }

    size() {
        return this.items.length - this.head;
    }
}

export function solve(...args) {
    // Case 1: solve(n, arr) — used in prompt1 tests
    if (args.length === 2 && typeof args[0] === 'number' && Array.isArray(args[1])) {
        const [n, arr] = args;
        return findFirstStableYear(n, arr);
    }

    // Case 2: solve(readInt, writeInt)
    let readInt, writeInt;

    if (args.length === 2 && typeof args[0] === 'function' && typeof args[1] === 'function') {
        readInt = args[0];
        writeInt = args[1];
    } else {
        // Case 3: solve() with globals
        readInt = global.readInt;
        writeInt = global.writeInt;
    }

    const n = readInt();
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(readInt());
    }

    const result = findFirstStableYear(n, arr);
    writeInt(result, true);
}

function findFirstStableYear(n, recipients) {
    // Convert to 0-based indexing
    const r = recipients.map(x => x - 1);
    
    // Track states at the beginning of each year (before exchange)
    let states = [];
    let currentPlushies = new Array(n).fill(1); // Initial state
    
    let year = 1;
    
    while (true) {
        // Store the state at the beginning of this year (before exchange)
        states.push([...currentPlushies]);
        
        // Check if this year is stable (year > 1 and same as previous year's beginning state)
        if (year > 1 && states[year-1].every((count, i) => count === states[year-2][i])) {
            return year;
        }
        
        // Simulate plushie exchange for this year
        const newPlushies = new Array(n).fill(0);
        
        for (let i = 0; i < n; i++) {
            if (currentPlushies[i] > 0) {
                // Spider i gives 1 plushie to recipient r[i]
                newPlushies[r[i]]++;
                // Spider i keeps remaining plushies
                newPlushies[i] += currentPlushies[i] - 1;
            }
            // If spider i has 0 plushies, they do nothing
        }
        
        currentPlushies = newPlushies;
        year++;
        
        // Safety check to prevent infinite loop
        if (year > 1000000) {
            break;
        }
    }
    
    return year;
}
