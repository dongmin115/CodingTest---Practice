const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})


function main(input) {

    let stick = 64;
    let sticks = [];
    let sum = 0;
    let answer = 0;

    // x를 23이라고 가정하자
    // 64를 나누어 32 32 로 만든다
    // 32가 x인 23보다 크므로 32막대기 하나를 버린다
    // 32하나가 남은상태로 16 16으로 나눈다
    // 16 8 8
    // 16 8 4 4
    // 16 8 4 2 2
    // 16 8 4 2 1 1

    if(input === 64) return console.log(1);

    while(stick>1) {
        stick = stick / 2;

        if(stick>input){
            sticks.push(stick);
        }
        else {
            sticks.push(stick);
            sticks.push(stick);
        }
    }

    for(let i = 0; i < sticks.length; i++) {
        if(input-sum >= sticks[i]){  // 남은 값 >= 현재값
            sum += sticks[i];
            answer++;
        }

        if(input - sum === 0) {
            console.log(answer);
            return
        }
    }

}

rl.on('line', (line)=>{
    main(parseInt(line));
    rl.close();
})