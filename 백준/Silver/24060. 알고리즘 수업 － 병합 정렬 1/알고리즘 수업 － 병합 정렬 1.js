const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map((e)=> e.split(' ').map(Number));

const [N, K] = input[0]
const A = input[1]

let count = 0;  // 저장 횟수를 추적
let result = -1;  // 결과를 저장할 변수
let tmp = new Array(N);  // 병합에 사용할 임시 배열

function merge_sort(A, p, r) {
    if (p < r) {
        const q = Math.floor((p + r) / 2);  // 중간 지점 계산
        merge_sort(A, p, q);  // 전반부 정렬
        merge_sort(A, q + 1, r);  // 후반부 정렬
        merge(A, p, q, r);  // 병합
    }
}

function merge(A, p, q, r) {
    let i = p;
    let j = q + 1;
    let t = 0;

    // 두 개의 부분 배열을 병합하는 과정
    while (i <= q && j <= r) {
        if (A[i] <= A[j]) {
            tmp[t++] = A[i++];
        } else {
            tmp[t++] = A[j++];
        }
    }

    // 왼쪽 배열이 남아있을 경우
    while (i <= q) {
        tmp[t++] = A[i++];
    }

    // 오른쪽 배열이 남아있을 경우
    while (j <= r) {
        tmp[t++] = A[j++];
    }

    // 병합한 결과를 A 에 저장
    t = 0;
    for (let k = p; k <= r; k++) {
        A[k] = tmp[t++];
        count++;  // 저장 횟수 증가
        if (count === K) {
            result = A[k];  // K번째 저장된 값
        }
    }
}

merge_sort(A, 0, N - 1);

// 결과 출력
console.log(result);