const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution() {
    const [N,S] = input[0];
    const arr = input[1];
    let count = 0;

    function dfs(index,sum){
        if (index === N){
            if( sum === S ) count++;
            return;
        }

        dfs(index +1, sum + arr[index]);

        dfs(index +1, sum);
    }

    dfs(0,0);

    if(S === 0) count--;
    console.log(count);
}

solution();