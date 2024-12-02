function solution(ingredient) {
    const curr = [];
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        curr.push(ingredient[i]);
        
        if (curr.length >= 4 && 
            curr[curr.length - 4] === 1 && 
            curr[curr.length - 3] === 2 && 
            curr[curr.length - 2] === 3 && 
            curr[curr.length - 1] === 1) {
            
            curr.splice(curr.length - 4, 4);
            count++;
        }
    }
    
    return count;
}
