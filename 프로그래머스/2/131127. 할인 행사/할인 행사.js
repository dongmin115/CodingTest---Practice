function solution(want, number, discount) {
    let answer = 0;
    const obj = {};
    for(let i=0;i<want.length;i++){
        obj[want[i]] = number[i];
    }
    
    function isDiscount(partDiscount){
        const currentCount = {};
        
        for(let item of partDiscount){
            currentCount[item] = (currentCount[item]||0) + 1;
        }
        
        for(let idx in obj){
            if(currentCount[idx] !== obj[idx]) return false;
        }
        return true;
    }
    
    for(let i=0;i<=discount.length-10;i++){
        const partDiscount = discount.slice(i,i+10);
        if(isDiscount(partDiscount)){
            answer++;
        }
    }
    
    return answer;
}