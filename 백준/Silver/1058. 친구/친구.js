const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const N = parseInt(input[0]);
    const arr = input.slice(1).map(e => e.split(''));
    let maxFriends = 0;

    for (let i = 0; i < N; i++) {
        const twoFriends = new Set();

        for (let j = 0; j < N; j++) {
            if (arr[i][j] === 'Y') {
                // 직접 친구 추가
                twoFriends.add(j);

                // 친구의 친구 추가
                for (let k = 0; k < N; k++) {
                    if (arr[j][k] === 'Y' && k !== i) {
                        twoFriends.add(k);
                    }
                }
            }
        }

        maxFriends = Math.max(maxFriends, twoFriends.size);
    }

    console.log(maxFriends);
}

solution();