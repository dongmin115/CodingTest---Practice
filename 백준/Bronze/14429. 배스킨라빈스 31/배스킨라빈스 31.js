const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];
let taskCount = 0;
let currentTask = 0;

function main(param) {
    let answer = Infinity;
    let index;
    param.forEach(([x,y],idx)=>{
        const rest = (x-1) % (y+1);
        const len = Math.ceil((x-rest) / (y+1))*2;

        if(answer > len){
            answer = len;
            index = idx;
        }
    })
    console.log(`${index+1} ${answer}`);
}

rl.on('line', (line) => {
    if( taskCount === 0 ) { // 첫 번째 입력
        taskCount = parseInt(line);
    }
    else {
        input.push(line.split(' ').map(Number));

        if( taskCount === input.length ) {
            rl.close();
        }
    }
})

rl.on('close', ()=>{
    main(input);
})