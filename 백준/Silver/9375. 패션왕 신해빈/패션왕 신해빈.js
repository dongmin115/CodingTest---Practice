const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n');


function solution(){
    let index = 0;
    const test = Number(input[index++]);

    for( let i=0;i<test;i++){
        const n = Number(input[index++]);
        const clothes = {};

        for(let j=0; j<n;j++){
            const [name, kind] = input[index++].split(' ');

            if(clothes[kind]){
                clothes[kind]++;
            } else {
                clothes[kind] = 1;
            }
        }

        let combinations = 1;
        for (const kind in clothes) {
            combinations *= (clothes[kind] + 1);
        }

        console.log(combinations - 1);

    }

}

solution();