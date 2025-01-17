function solution(food) {
    const result = [];
    for(let i=1; i<food.length; i++) {
        const count = Math.floor(food[i] / 2);
        for(let j=0; j<count; j++) {
            result.push(i);
        }
    }
    const reverse = [...result].reverse();
    
    return result.join('') + '0' + reverse.join('');
}