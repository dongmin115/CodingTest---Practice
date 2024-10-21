const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const arr = input[1].sort((a,b) => a - b);
    const x = input[2][0];
    let left = 0;
    let right = N - 1;
    let count = 0;
    while(left < right){
        const sum = arr[left] + arr[right];

        if(sum === x) {
            count++;
            left++;
        } else if(sum > x){
            right--;
        } else {
            left++;
        }
    }
    console.log(count);

}

solution();