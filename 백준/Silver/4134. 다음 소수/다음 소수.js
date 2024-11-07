const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

function solution() {
   const N = input[0];
   const arr = input.slice(1);

   function isPrimeNumber(n) {
       if(n < 2) return false;

       for(let i = 2; i <= Math.sqrt(n); i++) {
           if(n % i === 0) return false;
       }

       return true;
   }

   for(let i=0; i < N; i++) {
       let k = arr[i];
       while(!isPrimeNumber(k)) {
           k++;
       }
       console.log(k);
   }

}

solution();