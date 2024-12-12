function solution(k, tangerine) {
    const map = {};
    let result = 0;
    
    tangerine.forEach(e=>{
        if(!map[e]){
            map[e] = 1;
        } else {
            map[e]++;
        }
    });
    
    const sortedMap = Object.entries(map).sort(([,a],[,b]) => b - a);
    
    for(let i=0; i<sortedMap.length; i++) {
        const [,count] = sortedMap[i];
        k -= count;
        result++;
        if(k<=0) break;
    }
    
    return result;
}