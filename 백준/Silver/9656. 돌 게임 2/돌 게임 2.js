const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

function main(stone){
    if(stone % 2 === 0 ){
        console.log('SK')
    }
    else {
        console.log('CY')
    }
}

main(parseInt(input));