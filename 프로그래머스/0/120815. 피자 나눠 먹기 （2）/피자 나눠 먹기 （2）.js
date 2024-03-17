function solution(n) {
    var pizza = 1;
    var piece = 6;
    
    
    while(true){
        var sumPiece = pizza*piece;
        if(sumPiece % n === 0){
           break; 
        };
        pizza++;
            
    }
    
    return pizza;
}