const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(Number);

// 팩토리얼을 사용하지 않고 조합을 구하는 함수
function combination(n, r) {
    if (r > n) return 0;
    let a = 1;
    let b = 1;

    for (let i = 0; i < r; i++) {
        a *= (n - i);
        b *= (i + 1);
    }

    return Math.floor(a / b);
}

function solution() {
    const [ N, M ] = input;
    //참고 중복조합 공식 nHr = n+r-1 C r
    //참고 조합 공식 nCr = n! / (n-r)! * r!

    // N H M-N
    const result = combination(M-1,N-1);

    console.log(result);
}

solution();