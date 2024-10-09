const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const [n,m] = input[0];
    const paper = input.slice(1);
    let count = 0;
    let maxSize = 0;
    let visited = Array.from({length: n}, ()=> Array(m).fill(false));
    const directions = [
        [-1,0],
        [1,0],
        [0,1],
        [0,-1]
    ];

    function dfs(x,y){
        visited[x][y] = true;
        let size = 1;
        for(const [dx, dy] of directions){
            const nx = x + dx;
            const ny = y + dy;

            if(nx >=0 && nx < n && ny < m && ny >= 0 && paper[nx][ny] === 1 && !visited[nx][ny]){
                size += dfs(nx,ny);
            }
        }
        return size;
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(paper[i][j] === 1 && !visited[i][j]){
                const area = dfs(i,j);
                count++;
                maxSize = Math.max(area,maxSize);
            }
        }
    }
    console.log(count);
    console.log(maxSize);
}

solution();