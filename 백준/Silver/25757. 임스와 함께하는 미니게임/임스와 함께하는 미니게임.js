const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');

function solution() {
    const [_, game] = input[0].split(' ');
    const players = input.slice(1);
    const playerCount = new Set(players).size;

    if(game === 'Y'){
        console.log(playerCount);
    } else if(game === 'F'){
        console.log(Math.floor(playerCount / 2));

    } else if(game === 'O'){
        console.log(Math.floor(playerCount / 3));
    }
}

solution();
