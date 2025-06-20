function solve(n, m, a, b) {
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    
    let a_l = [];
    let b_l = [];
    
  
    for (let i = 0; i < Math.floor(n / 2); i++) {
        a_l.push(a[n - 1 - i] - a[i]);
    }
    
    
    for (let i = 0; i < Math.floor(m / 2); i++) {
        b_l.push(b[m - 1 - i] - b[i]);
    }
    
    let k_max = Math.min(Math.floor((n + m) / 3), n, m);
    let result = [k_max.toString()];
    
    let k = [];
    let count_a = 0;
    let count_b = 0;
    let ans = 0;
    
    for (let i = 1; i <= k_max; i++) {
        if (count_a > n - i) {
            ans += b_l[count_b];
            count_b++;
            count_a--;
            ans -= a_l[count_a];
        }
        
        if (count_b > m - i) {
            ans += a_l[count_a];
            count_a++;
            count_b--;
            ans -= b_l[count_b];
        }
        
        if (count_a === n - i) {
            ans += b_l[count_b];
            count_b++;
        } else if (count_b === m - i) {
            ans += a_l[count_a];
            count_a++;
        } else if (a_l[count_a] > b_l[count_b]) {
            ans += a_l[count_a];
            count_a++;
        } else {
            ans += b_l[count_b];
            count_b++;
        }
        
        k.push(ans);
    }
    
    if (k_max > 0) {
        result.push(k.join(' '));
    }
    
    return result.join('\n');
}

function test() {
    const testCases = [
        {
            input: [1, 3, [0], [0, 1, -1]],
            expected: "1\n2"
        },
        {
            input: [2, 4, [0, 100], [-100, -50, 0, 50]],
            expected: "2\n150 200"
        },
        {
            input: [2, 4, [0, 1000], [-100, -50, 0, 50]],
            expected: "2\n1000 200"
        },
        {
            input: [6, 6, [20, 1, 27, 100, 43, 42], [100, 84, 1, 24, 22, 77]],
            expected: "4\n99 198 260 283"
        },
        {
            input: [8, 2, [564040265, -509489796, 469913620, 198872582, -400714529, 553177666, 131159391, -20796763], [-1000000000, 1000000000]],
            expected: "2\n2000000000 2027422256"
        }
    ];

    console.log("Running Tests...\n");
    testCases.forEach(({input, expected}, index) => {
        const [n, m, a, b] = input;
        const result = solve(n, m, a, b);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: n=${n}, m=${m}, a=[${a}], b=[${b}]`);
        console.log(`Expected:\n${expected}`);
        console.log(`Result:\n${result}`);
        console.log(`Status: ${result === expected ? "PASS" : "FAIL"}\n`);
    });
}

 test();

