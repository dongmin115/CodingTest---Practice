function solution(maps) {
    const visited = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(false));
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const result = [];

    function bfs(x, y) {
        let sum = 0;
        const queue = [[x, y]];
        visited[x][y] = true;

        while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            sum += Number(maps[cx][cy]);

            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;

                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < maps.length &&
                    ny < maps[0].length &&
                    !visited[nx][ny] &&
                    maps[nx][ny] !== 'X'
                ) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }

        return sum;
    }

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                result.push(bfs(i, j));
            }
        }
    }

    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}
