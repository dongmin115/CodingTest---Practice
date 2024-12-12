function solution(n) {
//     let count = 0;
//     function recursive(jump,curr){
//         if(curr > n) return;
        
//         if(curr === n){
//             return count++;
//         }
        
//         recursive(1,curr+1);
//         recursive(2,curr+2);
        
//     }
    
//     recursive(1,1);
//     recursive(2,2);
    
//     return count%1234567;
    const dp = new Array(n+1).fill(0);
    
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }

    return dp[n];

}