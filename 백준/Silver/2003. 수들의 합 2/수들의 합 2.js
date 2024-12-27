const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const [N,M] = input[0];
    const numArr = input[1];
    let left = 0;
    let sum = 0;
    let count = 0;

    for(let right=0; right<N; right++) {
        sum += numArr[right];

        while(sum >= M){
            if(sum === M){
                count++;
            }
            sum -= numArr[left++];
        }
        
    }
    console.log(count);

}

solution();
