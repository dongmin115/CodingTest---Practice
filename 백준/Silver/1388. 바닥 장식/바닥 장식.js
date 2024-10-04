const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution(){
    const [N, M] = input[0].split(' ').map(Number);
    const floor = input.slice(1);
    let count = 0;

    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    function checkRow(x, y) {
        for (let j = y; j < M; j++) {
            if (floor[x][j] === '-' && !visited[x][j]) {
                visited[x][j] = true;
            } else {
                break;
            }
        }
    }

    function checkColumn(x, y) {
        for (let i = x; i < N; i++) {
            if (floor[i][y] === '|' && !visited[i][y]) {
                visited[i][y] = true;
            } else {
                break;
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (floor[i][j] === '-' && !visited[i][j]) {
                checkRow(i, j);
                count++;
            }
            if (floor[i][j] === '|' && !visited[i][j]) {
                checkColumn(i, j);
                count++;
            }
        }
    }

    console.log(count);
}

solution();