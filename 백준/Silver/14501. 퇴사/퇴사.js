const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const N = input[0][0];
    const calendar = input.slice(1);
    let max = 0;

    function recursive(day,pay){
        if(day > N){
            max = Math.max(max, pay);
            return;
        }

        recursive(day + 1, pay);

        if(day + calendar[day-1][0] -1 <= N){
            recursive(day + calendar[day-1][0], pay + calendar[day-1][1]);
        }
    }

    recursive(1,0);

    console.log(max);
}

solution();
