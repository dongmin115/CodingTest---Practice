function solution(slice, n) {
    var pizza = 1;
    
    while(true){
        var sliceSum = pizza*slice;
        if(sliceSum >= n){
            break;
        }
        pizza++;
    }
    return pizza;
}