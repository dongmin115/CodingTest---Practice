const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const liquids = input.slice(1).flat().sort((a,b) => a - b);
    let result = [];
    let left = 0;
    let right = N-1;
    let closeSum = Infinity;

    if(liquids[0] > 0 && liquids[N-1] > 0){
        result.push(liquids[0]);
        result.push(liquids[1]);
    } else if (liquids[0] < 0 && liquids[N-1] < 0){
        result.push(liquids[N-2]);
        result.push(liquids[N-1]);
    } else {
        while(left < right){
            const sum = liquids[left] + liquids[right];

            if(Math.abs(closeSum) > Math.abs(sum)){
                closeSum = sum;
                result = [liquids[left], liquids[right]];
            }

            if(sum > 0){
                right--;
            } else {
                left++;
            }
        }
    }
    console.log(result.join(' '));
}

solution();