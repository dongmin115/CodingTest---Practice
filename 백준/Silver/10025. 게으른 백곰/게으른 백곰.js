const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=>e.split(' ').map(Number));


function solution() {
    const [bucket,range] = input[0];
    const maxPosition = 1000000;
    const ice = Array(maxPosition +1).fill(0);

    // 양동이 위치에 맞게 얼음 갯수 나열
    for(let i =1; i<=bucket;i++){
        const [g,x] = input[i];
        ice[x] += g;
    }

    // 슬라이딩 윈도우 기법으로 최댓값 찾기

    // 첫번째 윈도우로 초기 maxIce 값 설정
    let windowSum = 0;
    for(let i=0;i<= Math.min(range*2, maxPosition); i++){
        windowSum += ice[i];
    }
    let maxIce = windowSum;

    // 슬라이딩 윈도우
    for(let i = range + 1; i <=maxPosition; i++){
        if (i - range - 1 >= 0) {
            windowSum -= ice[i - range - 1];
        }
        if (i + range <= maxPosition) {
            windowSum += ice[i + range];
        }
        maxIce = Math.max(maxIce, windowSum);
    }
    console.log(maxIce);

}

solution();