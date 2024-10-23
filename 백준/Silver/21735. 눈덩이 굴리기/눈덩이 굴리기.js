const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e => e.split(' ').map(Number));

function solution() {
    const [N,M] = input[0];
    const arr = input[1];
    let maxSize = 0;

    function backTrack(position,size,time){
        if(time === M || position === N-1 ){
            maxSize = Math.max(maxSize,size);
            return;
        }

        if( position+1 < N ) {
            backTrack(position+1, size + arr[position+1],time+1);
        }
        if( position+2 < N ) {
            backTrack(position+2, Math.floor(size / 2) + arr[position + 2],time+1);
        }

    }

    backTrack(-1,1,0);
    console.log(maxSize);
}

solution();