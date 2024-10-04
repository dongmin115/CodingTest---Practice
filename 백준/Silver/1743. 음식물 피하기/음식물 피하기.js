const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution() {
    const [N, M, K] = input[0]; // N: 세로 크기, M: 가로 크기, K: 음식물 쓰레기의 개수
    const foodMap = Array.from({ length: N }, () => Array(M).fill(0));
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우 방향
    let maxFoodSize = 0;

    // 음식물 쓰레기 위치 표시
    for (let i = 1; i <= K; i++) {
        const [r, c] = input[i];
        foodMap[r - 1][c - 1] = 1;
    }

    function dfs(x, y) {
        let stack = [[x, y]];
        visited[x][y] = true;
        let size = 1;

        while (stack.length) {
            const [curX, curY] = stack.pop();

            for (const [dx, dy] of directions) {
                const nx = curX + dx;
                const ny = curY + dy;

                if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && foodMap[nx][ny] === 1) {
                    visited[nx][ny] = true;
                    stack.push([nx, ny]);
                    size++;
                }
            }
        }

        return size;
    }

    // 모든 좌표를 탐색하며 음식물 덩어리 찾기
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (foodMap[i][j] === 1 && !visited[i][j]) {
                const currentSize = dfs(i, j);
                maxFoodSize = Math.max(maxFoodSize, currentSize);
            }
        }
    }

    console.log(maxFoodSize);
}

solution();
