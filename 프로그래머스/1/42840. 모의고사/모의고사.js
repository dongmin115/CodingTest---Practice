function solution(answers) {
    var score = [0,0,0];
    var answer = [];
    var pattern1 = [1,2,3,4,5];
    var pattern2 = [2,1,2,3,2,4,2,5];
    var pattern3 = [3,3,1,1,2,2,4,4,5,5];
    
    answers.forEach((e,i)=>{
        if(e===pattern1[i%pattern1.length]){
            score[0]++;
        }
        if(e===pattern2[i%pattern2.length]){
            score[1]++;
        }
        if(e===pattern3[i%pattern3.length]){
            score[2]++;
        }
    })
    
    const max = Math.max(...score);
    score.forEach((e,i)=>{
        if(max === e){
            answer.push(i+1);
        }
    })
    return answer;
    
}