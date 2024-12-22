function solution(s) {
    let transCount = 0;
    let totalZeroCount = 0;
    
    while(s !== '1'){
        let zeroCount = 0;
        transCount++;
        
        for(i=0; i<s.length; i++) {
            const char = s[i];
            if(char === '0'){
                zeroCount++;
            }
        }
        
        totalZeroCount += zeroCount;
        s = (s.length - zeroCount).toString(2);
        
    }
    return [transCount, totalZeroCount];
}