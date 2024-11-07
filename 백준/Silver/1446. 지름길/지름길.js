const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const [N,D] = input[0];
    const shortcuts = input.slice(1);

    const distance = Array(D + 1).fill().map((_, i) => i);

    for (const [start, end, length] of shortcuts) {
        if (end <= D && distance[start] + length < distance[end]) {
            distance[end] = Math.min(distance[end], distance[start] + length);
        }
    }

    for (let i = 0; i < D; i++) {
        // 다음 칸까지의 최소 거리
        distance[i + 1] = Math.min(distance[i + 1], distance[i] + 1);
        // 지름길을 이용한 최솟값 갱신
        for (const [start, end, length] of shortcuts) {
            if (i === start && end <= D) {
                distance[end] = Math.min(distance[end], distance[i] + length);
            }
        }
    }

    console.log(distance[D]);

}

solution();