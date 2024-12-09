const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const talkHistory = input.slice(1);
    let visited = Object.create(null);
    let count = 0;

    talkHistory.forEach((e) => {
        if(e === 'ENTER'){
            visited = Object.create(null);
        } else if(!visited[e]) {
            count++;
            visited[e] = true;
        }
    })
    console.log(count);
}

solution();
