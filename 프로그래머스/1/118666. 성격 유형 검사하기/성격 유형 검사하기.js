function solution(survey, choices) {
    const scoreBoard = {
        'R' : 0,
        'T' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'A' : 0,
        'N' : 0
    };
    
    survey.forEach((e,i)=>{
        const splitedName = e.split('');
        
        if(choices[i] > 4){
            scoreBoard[splitedName[1]] += choices[i] - 4;
        } else if (choices[i] < 4){
            scoreBoard[splitedName[0]] += 4 - choices[i];
        } 
    })
    const result = [];
    
    function calculator(a,b){
        if(scoreBoard[a] > scoreBoard[b]){
            return a;
        } else if(scoreBoard[a] < scoreBoard[b]){
            return b;
        } else return ( b > a ? a : b);
    }
    
    result.push(calculator('R','T'));
    result.push(calculator('C','F'));
    result.push(calculator('J','M'));
    result.push(calculator('A','N'));

    return result.join('');
}