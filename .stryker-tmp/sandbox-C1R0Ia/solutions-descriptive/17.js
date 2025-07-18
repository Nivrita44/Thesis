// @ts-nocheck
function determineEdgeAssignment(totalNodes, totalEdges) {
    if (2 * totalNodes <= totalEdges) {
        return 'NO';
    }

    const doubleNodes = totalNodes * 2;
    const edgeAssignments = Array(doubleNodes)
        .fill(0)
        .map(() => Array(totalEdges));
    
    for (let nodeIndex = 0; nodeIndex < doubleNodes; nodeIndex++) {
        for (let edgeIndex = 0; edgeIndex < totalEdges; edgeIndex++) {
            edgeAssignments[nodeIndex][edgeIndex] = Math.floor((nodeIndex + edgeIndex) / 2) % totalNodes;
        }
    }
    
    return 'YES\n' + edgeAssignments.map(row => {
        return row.map(x => x + 1).join(' ');
    }).join('\n');
}

function testEdgeAssignment() {
    // Test Case 1
    const nodes1 = 2;
    const edges1 = 2;
    const result1 = determineEdgeAssignment(nodes1, edges1);
    console.log("Test Case 1 (2 nodes, 2 edges):");
    console.log(result1);
    
    // Test Case 2
    const nodes2 = 3;
    const edges2 = 7;
    const result2 = determineEdgeAssignment(nodes2, edges2);
    console.log("\nTest Case 2 (3 nodes, 7 edges):");
    console.log(result2);

    // Test Case 3
    const nodes3 = 5;
    const edges3 = 4;
    const result3 = determineEdgeAssignment(nodes3, edges3);
    console.log("\nTest Case 3 (5 nodes, 4 edges):");
    console.log(result3);
}

testEdgeAssignment();

//ok