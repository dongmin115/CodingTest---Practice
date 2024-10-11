const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    let index = 0;
    const T = parseInt(input[index++]);
    const directions = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ]

    function dfs(grid,x,y,H,W){
        grid[x][y] = '.';

        for(const [dx,dy] of directions){
            const nx = x + dx;
            const ny = y + dy;

            if(nx >=0 && ny >=0 && nx < H && ny < W && grid[nx][ny] === '#'){
                    dfs(grid,nx,ny,H,W);
            }
        }
    }

    for(let t=0; t<T; t++){
        const [H,W] = input[index++].split(' ').map(Number);
        const grid = [];

        for(let h=0;h<H;h++){
            grid.push(input[index++].split(''));
        }

        let sheepGroups = 0;
        for(let i=0;i<H;i++){
            for(let j=0;j<W;j++){
                if(grid[i][j] === '#'){
                    sheepGroups++;
                    dfs(grid,i,j,H,W);
                }
            }
        }
        console.log(sheepGroups);
    }


}

solution();