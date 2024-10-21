const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ').map(Number);

function solution() {
    const [N,M] = input;

    function backTrack(start,arr) {
        if(arr.length === M){
            console.log(arr.join(' '));
            return;
        }

        for(let i = start; i<=N;i++){
            arr.push(i);
            backTrack(i+1,arr);
            arr.pop();
        }
    }

    backTrack(1,[]);
}

solution();