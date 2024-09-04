const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

function isPrime(x) {
    if(x<2) return false;
    for(let i= 2; i <= Math.sqrt(x); i++){
        if( x % i === 0 ){
            return false
        }
    }
    return true;
}

function main(input) {
    for (let i = parseInt((input[0])); i <= parseInt(input[1]); i++ ){
        if(isPrime(i)) {
            console.log(i);
        }
    }
}

main(input);