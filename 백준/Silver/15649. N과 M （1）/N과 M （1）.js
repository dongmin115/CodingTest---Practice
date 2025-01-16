const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

function solution() {
    const [N,M] = input;
    const stack = [];
    let result = '';
    const visited = new Array(N+1).fill(false);

    function recursive(x){
        if(x===M) {
            result += stack.join(' ') + '\n';
            return;
        }

        for(let i=1; i<=N; i++){
            if(!visited[i]){
                visited[i] = true;
                stack.push(i);

                recursive(x+1);

                visited[i] = false;
                stack.pop();
            }
        }
    }

    recursive(0);
    console.log(result);
}

solution();
