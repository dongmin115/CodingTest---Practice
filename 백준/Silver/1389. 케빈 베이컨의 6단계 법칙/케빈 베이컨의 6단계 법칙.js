const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const [N, M] = input[0];
    const friends = input.slice(1);
    const graph = Array.from({ length: N + 1 }, () => []);

    for (const [A, B] of friends) {
        graph[A].push(B);
        graph[B].push(A);
    }

    const baconNumbers = [];

    function bfs(start) {
        const visited = Array(N + 1).fill(false);
        const queue = [[start, 0]]; // [노드, 거리]
        let totalDistance = 0;

        visited[start] = true;

        while (queue.length) {
            const [node, dist] = queue.shift();
            totalDistance += dist;

            for (const neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push([neighbor, dist + 1]);
                }
            }
        }
        return totalDistance;
    }

    for (let i = 1; i <= N; i++) {
        const kevinBacon = bfs(i);
        baconNumbers.push([i, kevinBacon]);
    }

    baconNumbers.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });

    console.log(baconNumbers[0][0]);
}

solution();