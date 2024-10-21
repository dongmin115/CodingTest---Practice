const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim();

function solution() {
    const X = input;
    const origin = Number(X);
    const arr = X.split('').map(Number);
    let result = Infinity;
    const visited = new Array(arr.length).fill(false);

    function backTrack(currentArr){
        if(arr.length === currentArr.length){
            const num = Number(currentArr.join(''));
            if(num > origin){
                result = Math.min(result,num);
            }
            return;
        }

        for(let i=0;i<arr.length;i++){
            if(visited[i]) continue;
            visited[i] = true;
            currentArr.push(arr[i]);
            backTrack(currentArr);
            currentArr.pop();
            visited[i] = false;
        }
    }
    backTrack([]);

    if(result === Infinity){
        console.log(0);
    } else {
        console.log(result);
    }
}

solution();