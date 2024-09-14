const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split(' ').map(Number);

function solution(){
    let [_, kim, lim] = input;
    let round = 0;

    while(lim !== kim){
        round++;

        lim= Math.ceil(lim / 2);
        kim = Math.ceil(kim / 2);
    }

    console.log(round);

}
solution();