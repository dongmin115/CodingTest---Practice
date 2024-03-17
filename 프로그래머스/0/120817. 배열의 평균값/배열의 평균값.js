function solution(numbers) {
    var sum = 0;
    numbers.map((e)=>{
        sum += e;
    })
    var average = sum / numbers.length;
    return average;
}