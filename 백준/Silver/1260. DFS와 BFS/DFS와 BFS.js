const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution(){
    const [N, M, V] = input[0];
    const nodes = input.slice(1);
    const graph = Array.from({ length: N + 1 }, () => []);

    // 그래프 초기화
    nodes.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });
    graph.forEach(e => e.sort((a, b) => a - b));

    let dfsResult = [];
    let visited = Array(N + 1).fill(false);

    // DFS
    function dfs(node) {
        visited[node] = true;
        dfsResult.push(node);

        for (const next of graph[node]) {
            if (!visited[next]) {
                dfs(next);
            }
        }
    }

    // BFS
    let bfsResult = [];
    visited = Array(N + 1).fill(false);

    function bfs(start) {
        let queue = [start];
        visited[start] = true;

        while (queue.length) {
            const node = queue.shift();
            bfsResult.push(node);

            for (const next of graph[node]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
    }

    dfs(V);
    visited = Array(N + 1).fill(false);
    bfs(V);

    console.log(dfsResult.join(' '));
    console.log(bfsResult.join(' '));
}

solution();