const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const board = input.slice(1);
    const directions = [
        [1,0],
        [0,1]
    ];
    let result = false;
    const visited = Array.from({length: N}, ()=> new Array(N).fill(false));

    function recursive(x,y){
        if(x<0 || y<0 || x>=N || y>=N || visited[x][y]) return;
        if(board[x][y] === -1){
            result = true;
            return;
        }

        const jump = board[x][y];
        visited[x][y] = true;

        for(const [dx,dy] of directions){
            const nx = x + jump * dx;
            const ny = y + jump * dy;
            recursive(nx,ny);
        }

    }

    recursive(0,0);

    console.log(result ? "HaruHaru" : "Hing");


}

solution();
