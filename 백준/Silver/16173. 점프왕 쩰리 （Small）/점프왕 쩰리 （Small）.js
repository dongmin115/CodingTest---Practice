const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map((e)=> e.split(' ').map(Number));

const N = input[0][0];
const map = input.slice(1);

// 방향 배열 (오른쪽과 아래만 이동 가능)
const directions = [
    [0, 1], // 오른쪽
    [1, 0]  // 아래쪽
];

function solution() {
    const queue = [[0, 0]]; // 시작점 (0, 0)
    const visited = Array.from(Array(N), () => Array(N).fill(false)); // 방문 여부 체크
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y] = queue.shift(); // 현재 위치

        // 현재 위치가 승리 지점(-1)이면 HaruHaru 출력
        if (map[x][y] === -1) {
            console.log("HaruHaru");
            return;
        }

        // 이동 가능한 칸 수
        const jump = map[x][y];

        // 오른쪽과 아래로만 이동
        for (const [dx, dy] of directions) {
            const nx = x + dx * jump;
            const ny = y + dy * jump;

            // 맵을 벗어나지 않고, 방문하지 않은 경우에만 큐에 추가
            if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }

    // 끝까지 도달하지 못하면 Hing 출력
    console.log("Hing");
}

solution();