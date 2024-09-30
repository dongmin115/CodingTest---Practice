const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n').map(e=> e.split(' ').map(Number));

function solution(){
    const [N,K] = input[0];
    const kit = input[1];
    let count = 0;
    let used = new Array(N).fill(false);

    function backtrack(day,currentWeight){
        if(day === N) {
            count++;
            return;
        }

        for(let i=0;i<N;i++){
            if(!used[i]){
                const newWeight = currentWeight + kit[i] - K;
                if(newWeight >= 500) {
                    used[i] = true;
                    backtrack(day+1, newWeight);
                    used[i] = false;
                }
            }
        }
    }

    backtrack(0,500);

    console.log(count);

}

solution();