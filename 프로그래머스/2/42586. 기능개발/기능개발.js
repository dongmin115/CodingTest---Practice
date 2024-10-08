function solution(progresses, speeds) {
    var answer = [];
    const deployDay = progresses.map((e,i)=> Math.ceil((100-e) / speeds[i]));
    let maxDay = deployDay[0];
    let count = 0;
    
    for(let i=0; i<progresses.length; i++){
        if(deployDay[i] <= maxDay){
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = deployDay[i];
        }
    }
    answer.push(count);
    
    return answer;
}