// @ts-nocheck
function findMinimumTimeAtNodeOne(
    nodes,
    edgesCount,
    edgeList,
    initialTime,
    timeThreshold1,
    timeThreshold2
  ) {
    const adjacency = {};
    for (let [u, v, l1, l2] of edgeList) {
      if (!adjacency[u]) adjacency[u] = [];
      if (!adjacency[v]) adjacency[v] = [];
      adjacency[u].push([v, l1, l2]);
      adjacency[v].push([u, l1, l2]);
    }
  
    const visited = Array(nodes + 1).fill(false);
    const maxTime = Array(nodes + 1).fill(-1);
    const heap = [[nodes, initialTime]];
    maxTime[nodes] = initialTime;
  
    const swap = (i, j) => {
      [heap[i], heap[j]] = [heap[j], heap[i]];
    };
  
    const isGreater = (i, j) => heap[i][1] > heap[j][1];
  
    const siftUp = (i) => {
      if (i === 0) return;
      const parent = Math.floor((i - 1) / 2);
      if (isGreater(i, parent)) {
        swap(i, parent);
        siftUp(parent);
      }
    };
  
    const siftDown = (i) => {
      const left = 2 * i + 1;
      const right = left + 1;
      let largest = i;
  
      if (left < heap.length && isGreater(left, largest)) largest = left;
      if (right < heap.length && isGreater(right, largest)) largest = right;
  
      if (largest !== i) {
        swap(i, largest);
        siftDown(largest);
      }
    };
  
    while (!visited[1] && heap.length) {
      while (heap.length && visited[heap[0][0]]) {
        swap(0, heap.length - 1);
        heap.pop();
        siftDown(0);
      }
  
      if (heap.length === 0) return maxTime[1];
  
      const [currentNode, currentTime] = heap[0];
      swap(0, heap.length - 1);
      heap.pop();
      siftDown(0);
      visited[currentNode] = true;
  
      const neighbors = adjacency[currentNode] || [];
      for (let [neighbor, l1, l2] of neighbors) {
        if (!visited[neighbor]) {
          let newTime = -1;
          if (currentTime > timeThreshold2) {
            if (currentTime - l1 >= timeThreshold2) newTime = currentTime - l1;
            else {
              if (currentTime - l2 >= 0) newTime = currentTime - l2;
              if (timeThreshold1 - l1 >= 0) newTime = Math.max(newTime, timeThreshold1 - l1);
            }
          } else if (currentTime >= timeThreshold1) {
            if (currentTime - l2 >= 0) newTime = currentTime - l2;
            if (timeThreshold1 - l1 >= 0) newTime = Math.max(newTime, timeThreshold1 - l1);
          } else {
            if (currentTime - l1 >= 0) newTime = currentTime - l1;
          }
  
          if (newTime > maxTime[neighbor]) {
            heap.push([neighbor, newTime]);
            siftUp(heap.length - 1);
            maxTime[neighbor] = newTime;
          }
        }
      }
    }
  
    return maxTime[1];
  }

  function testSolve() {
    const testCases = [
      {
        input: [5, 5, [[1, 5, 30, 100], [1, 2, 20, 50], [2, 3, 20, 50], [3, 4, 20, 50], [4, 5, 20, 50]], 100, 20, 80],
        expected: 0,
      },
      {
        input: [2, 1, [[1, 2, 55, 110]], 100, 50, 60],
        expected: -1,
      },
      {
        input: [4, 4, [[1, 2, 30, 100], [2, 4, 30, 100], [1, 3, 20, 50], [3, 4, 20, 50]], 100, 40, 60],
        expected: 60,
      },
      {
        input: [3, 3, [[1, 2, 1, 10], [2, 3, 10, 50], [1, 3, 20, 21]], 100, 80, 90],
        expected: 80,
      },
      {
        input: [3, 2, [[2, 1, 1, 3], [2, 3, 3, 4]], 58, 55, 57],
        expected: 53,
      },
      {
        input: [2, 1, [[2, 1, 6, 10]], 12, 9, 10],
        expected: 3,
      },
      {
        input: [5, 5, [[2, 1, 1, 8], [2, 3, 4, 8], [4, 2, 2, 4], [5, 3, 3, 4], [4, 5, 2, 6]], 8, 5, 6],
        expected: 2,
      },
    ];
  
    let allPassed = true;
  
    for (let i = 0; i < testCases.length; i++) {
      const { input, expected } = testCases[i];
      const result = findMinimumTimeAtNodeOne(...input);
  
      const passed = result === expected;
      console.log(`Test Case ${i + 1}: ${passed ? "✅ Passed" : "❌ Failed"}`);
      if (!passed) {
        console.log(`  Expected: ${expected}`);
        console.log(`  Got: ${result}`);
        allPassed = false;
      }
    }
  
    if (allPassed) {
      console.log("🎉 All test cases passed!");
    }
  }
  
  testSolve();
  