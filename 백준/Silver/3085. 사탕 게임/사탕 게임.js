const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')

function solution() {
    const N = parseInt(input[0]);
    const candies = input.slice(1).map(e => e.split(''));
    let result = 0;

    function countMaxCandies() {
        let max = 0;

        // 행에서 가장 긴 연속된 사탕 찾기
        for (let i = 0; i < N; i++) {
            let rowMax = 1;
            for (let j = 1; j < N; j++) {
                if (candies[i][j] === candies[i][j - 1]) {
                    rowMax++;
                } else {
                    max = Math.max(max, rowMax);
                    rowMax = 1;
                }
            }
            max = Math.max(max, rowMax);
        }

        // 열에서 가장 긴 연속된 사탕 찾기
        for (let i = 0; i < N; i++) {
            let colMax = 1;
            for (let j = 1; j < N; j++) {
                if (candies[j][i] === candies[j - 1][i]) {
                    colMax++;
                } else {
                    max = Math.max(max, colMax);
                    colMax = 1;
                }
            }
            max = Math.max(max, colMax);
        }

        return max;
    }

    // 사탕 교환
    function swap(i, j, ii, jj) {
        const temp = candies[i][j];
        candies[i][j] = candies[ii][jj];
        candies[ii][jj] = temp;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            // 가로로 교환
            if (j + 1 < N) {
                swap(i, j, i, j + 1);
                result = Math.max(countMaxCandies(), result);
                swap(i, j, i, j + 1);  // 원상 복구
            }

            // 세로로 교환
            if (i + 1 < N) {
                swap(i, j, i + 1, j);
                result = Math.max(countMaxCandies(), result);
                swap(i, j, i + 1, j);  // 원상 복구
            }
        }
    }

    console.log(result);
}

solution();
