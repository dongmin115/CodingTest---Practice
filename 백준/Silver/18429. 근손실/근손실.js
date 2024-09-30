const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution() {
    const [N,K] = input[0];
    const increase = input[1];
    let count = 0;

    function backtrack(day,currentWeight,visited){
        if(day === N) {
            count++;
            return;
        }

        for( let i=0;i<N;i++){
            if(!visited[i]){
                const newWeight = currentWeight + increase[i] - K;
                if(newWeight >= 500) {
                    visited[i] = true;
                    backtrack(day+1, newWeight, visited);
                    visited[i] = false;
                }
            }
        }
    }
    const visited = new Array(N).fill(false);

    backtrack(0,500, visited);
    console.log(count);

}

solution();