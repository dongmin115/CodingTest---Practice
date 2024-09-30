const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution(){
    let result = new Set();
    const directions = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1],
    ]

    function dfs(x,y,depth,num){
        if(depth === 6){
            result.add(num);
            return;
        }

        for(const [dx, dy] of directions){
            const nx = x + dx;
            const ny = y + dy;

            if(nx >= 0 && nx < 5 && ny >= 0 && ny < 5 ){
                dfs(nx,ny,depth+1,num + input[nx][ny]);
            }
        }
    }

    // 모든 칸에 대하여 탐색
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            dfs(i,j,1,input[i][j].toString());
        }
    }

    console.log(result.size);
}

solution();