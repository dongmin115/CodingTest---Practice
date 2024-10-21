const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const arr = input[1];
    const visited = new Array(N).fill(false);
    let max = -Infinity

    function backTrack(current){
        if(current.length === N){
            let sum = 0;
            for(let i=0;i<N-1;i++){
                sum += Math.abs(current[i+1] - current[i]);
            }
            max = Math.max(sum, max);
        }

        for(let i=0;i<N;i++){
            if(visited[i]) continue;
            visited[i] = true;
            current.push(arr[i]);
            backTrack(current);
            visited[i] = false;
            current.pop();
        }
    }

    backTrack([]);
    console.log(max);
}

solution();