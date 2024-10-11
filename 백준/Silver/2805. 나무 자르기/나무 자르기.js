const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const [N, M] = input[0];
    const trees = input[1];
    let start = 0;
    let end = Math.max(...trees);
    let result = 0;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        let sum = 0;

        trees.map(e => {
            if(e > mid){
                sum += ( e - mid );
            }
        });

        if( sum >= M ){
            result = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    console.log(result);
}

solution();