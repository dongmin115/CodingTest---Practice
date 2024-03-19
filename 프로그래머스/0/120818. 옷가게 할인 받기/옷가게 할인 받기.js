function solution(price) {
    var answer = 0;
    if((price >= 100000) && (price < 300000)){
        answer = price * 0.95;
        return Math.floor(answer);
    }
    else if((price >= 300000) && (price < 500000)){
        answer = price * 0.9;
        return Math.floor(answer);
    }
    else if (price >= 500000){
        answer = price * 0.8;
        return Math.floor(answer);
    }
    else return price;
    return answer;
}