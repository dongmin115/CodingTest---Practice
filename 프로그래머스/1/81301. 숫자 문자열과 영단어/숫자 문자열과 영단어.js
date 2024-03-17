function solution(s) {
    let answer;
    let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    numbers.forEach((e,i)=>{
        s = s.replaceAll(e,i);
    })
    return Number(s);
}