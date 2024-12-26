function solution(n, words) {
    const used = {};
    used[words[0]] = true;
    
    for(let i=1; i<words.length; i++) {
        if(words[i][0] !== words[i-1][words[i-1].length -1]){
            const number = (i % n) + 1;
            const trial = Math.floor(i / n) + 1;
            return [number,trial];
        } else if(used[words[i]]){
            const number = (i  % n) + 1;
            const trial = Math.floor(i / n) + 1;
            return [number,trial];
        } else {
            used[words[i]] = true;
        }
    }
    
    return [0,0];
    
}