const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const N = Number(input[0]);  // 종이의 한 변의 길이
    const paper = input.slice(1).map(row => row.split(' ').map(Number));

    let white = 0;
    let blue = 0;

    function divide(x,y,size){
        const firstColor = paper[x][y];
        let isSameColor = true;

        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (paper[i][j] !== firstColor) {
                    isSameColor = false;
                    break;
                }
            }
            if (!isSameColor) break;
        }

        // 모두 같은 색이면 해당 색 카운트
        if (isSameColor) {
            if (firstColor === 0) {
                white++;
            } else {
                blue++;
            }
        } else {
            // 크기를 반으로 줄여서 4개의 부분으로 나눔
            const newSize = size / 2;
            divide(x, y, newSize);               // 1사분면
            divide(x, y + newSize, newSize);     // 2사분면
            divide(x + newSize, y, newSize);     // 3사분면
            divide(x + newSize, y + newSize, newSize);  // 4사분면
        }
    }
    divide(0, 0, N);

    console.log(white);
    console.log(blue);
}

solution();