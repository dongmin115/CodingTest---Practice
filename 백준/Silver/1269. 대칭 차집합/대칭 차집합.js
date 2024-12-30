const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(e => e.split(' ').map(Number));

function solution() {
    const arr1 = input[1];
    const arr2 = input[2];
    const map1 = new Map();
    const map2 = new Map();
    let count1 = arr1.length;
    let count2 = arr2.length;

    arr1.forEach(e => {
        map1.set(e,true);
    })

    arr2.forEach(e => {
        map2.set(e,true);
    })

    for(let i=0; i<arr2.length; i++) {
        if(map1.has(arr2[i])){
            count1--;
        }
    }

    for(let i=0; i<arr1.length; i++) {
        if(map2.has(arr1[i])){
            count1--;
        }
    }

    console.log(count1+count2);

}

solution();