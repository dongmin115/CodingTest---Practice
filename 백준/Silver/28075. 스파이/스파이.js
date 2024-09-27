const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution() {
    const [N,M] = input[0];
    const info = input[1];
    const watch = input[2];

    let count = 0;

    function search(day, lastPlace, totalProgress) {
        if (day === N) {
            if (totalProgress >= M) count++;
            return;
        }

        // 각 장소에서 정보 수집 또는 감시 선택
        for (let place = 0; place < 3; place++) {
            // 정보 수집 선택
            let progress = info[place];
            if (place === lastPlace) progress = Math.floor(progress / 2);  // 전날 같은 장소 패널티 적용
            search(day + 1, place, totalProgress + progress);

            // 감시 선택
            progress = watch[place];
            if (place === lastPlace) progress = Math.floor(progress / 2);  // 전날 같은 장소 패널티 적용
            search(day + 1, place, totalProgress + progress);
        }
    }
    search(0, -1, 0);
    console.log(count);
}

solution();