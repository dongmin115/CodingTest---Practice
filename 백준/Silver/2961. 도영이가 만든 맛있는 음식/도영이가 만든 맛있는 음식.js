const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution() {
    const N = Number(input[0]);
    const ingredients = input.slice(1);

    let minDifference = Infinity;

    // 모든 재료 선택 조합을 확인하기 위해 비트마스크를 사용
    for (let i = 1; i < (1 << N); i++) {
        let sour = 1; // 신맛
        let bitter = 0; // 쓴맛

        // i번째 조합에 포함된 재료들을 사용
        for (let j = 0; j < N; j++) {
            if (i & (1 << j)) {
                sour *= ingredients[j][0];
                bitter += ingredients[j][1];
            }
        }
        const difference = Math.abs(sour - bitter);
        minDifference = Math.min(minDifference, difference);
    }

    console.log(minDifference);
}

solution();