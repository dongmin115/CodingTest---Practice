const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=>e.split(' ').map(Number));

function solution() {
    const reqMoney = input[1];
    const maxMoney = input[2][0];
    let result = 0;
    let start = 0;
    let end = Math.max(...reqMoney);

    while(start <= end){
        const mid = Math.floor((end + start) / 2);
        let sum = 0;
        reqMoney.map(e=>{
            if( e >= mid ){
                e = mid;
            }
            sum += e;
        })

        if(sum <= maxMoney){
            result = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    console.log(result);

}

solution();