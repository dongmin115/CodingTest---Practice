const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()


function solution(input){

    let arr = input.split('').map(Number);
    let sum = 0;

    // 30의 배수이려면 0이 포함되어 있어야 한다
    if(!arr.includes(0)){
        return console.log(-1);
    }

    // 30의 배수이려면 모든 숫자의 합이 3의 배수여야 한다
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    if( sum % 3 !== 0 ){
        return console.log(-1);
    }

    // 새롭게 알게 된 기능 : 내림차순 간단히 정렬하는 법 arr.sort((a,b) => b-a)
    // 오름차순 정렬은 arr.sort((a,b) => a-b)
    // 가장 큰 수를 만들어야 하므로 내림차순 정렬
    console.log(arr.sort((a,b) => b-a).join('').toString());

}

solution(input);