function solution(n) {
    var answer = 0;
    if(n%2 === 1)
        for(let i= 1; i<n+1;i+=2)
            answer += i;
    else if(n%2 ===0)
        for(let i=0;i<n+1;i+=2)
            answer += i*i;
    return answer;
}