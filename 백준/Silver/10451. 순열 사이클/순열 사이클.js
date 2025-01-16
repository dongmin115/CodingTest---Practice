const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e=>e.split(' ').map(Number));

function solution() {
    const T = input[0][0];
    const testCase = input.slice(1);
    let idx = 0;

    for(let t=0; t<T; t++) {
        const N = testCase[idx++][0];
        const arr = testCase[idx++];
        const graph = new Array(N+1);

        for(let i=1; i<=N; i++) {
            graph[i] = arr[i-1];
        }

        const visited = new Array(N+1).fill(false);
        let result = 0;

        for(let i=1; i<=N; i++) {
            if(!visited[i]) {
                result++;

                let current = i;
                while(!visited[current]) {
                    visited[current] = true;
                    current = graph[current];
                }
            }
        }

        console.log(result);
    }
}

solution();
