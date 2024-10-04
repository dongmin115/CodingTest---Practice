const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution(){
    const N = input[0][0];
    const connections = input.slice(2);
    const networks = Array.from({length: N+1}, () => []);
    const visited = new Array(N+1).fill(false);
    let  count = 0;

    connections.forEach(([e1,e2])=>{
        networks[e1].push(e2);
        networks[e2].push(e1);
    });

    function dfs(x){
        visited[x] = true;
        for(const e of networks[x]){
            if(!visited[e]) {
                count++;
                dfs(e);
            }
        }
    }

    dfs(1);

    console.log(count);
}

solution();