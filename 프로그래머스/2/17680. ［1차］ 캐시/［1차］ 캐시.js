function solution(cacheSize, cities) {
    const stack = [];
    let time = 0;
    
    if(cacheSize === 0){
        return cities.length * 5;
    }
    
    cities.forEach(e => {
        const lower = e.toLowerCase();
        if(stack.includes(lower)){
            time += 1;
            stack.splice(stack.indexOf(lower),1);
            stack.push(lower);
        } else {
            time += 5;
            
            if(stack.length >= cacheSize){
                    stack.shift();
                }
                
            stack.push(lower);
        }
       
    })
    return time;
}