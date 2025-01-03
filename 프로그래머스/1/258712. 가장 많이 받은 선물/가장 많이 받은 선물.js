function solution(friends, gifts) {
    const map = {};
    
    friends.forEach(e => {
        map[e] = {
            give: 0,
            receive: 0,
            score: 0,
            record: {}
        }
    })
    
    gifts.forEach(e => {
        const [giver,receiver] = e.split(' ');
        map[giver].give++;
        map[receiver].receive++;
        if(!map[giver].record[receiver]){
            map[giver].record[receiver] = 1;
        } else map[giver].record[receiver]++;
    })
    
    for(const key in map){
        map[key].score = map[key].give - map[key].receive;
    }
    
    const nextPresent = {};
    
    friends.forEach((e,i) => {
        if(!nextPresent[e]) nextPresent[e] = 0;
        for(let j=i+1; j<friends.length; j++){
            const compareFriend = friends[j];
            if(!nextPresent[compareFriend]) nextPresent[compareFriend] = 0;
            
            const p1 = map[e].record[compareFriend]||0;
            const p2 = map[compareFriend].record[e]||0;
            
            if(p1>p2){
                nextPresent[e]++;
            } else if(p1<p2){
                nextPresent[compareFriend]++;
            } else {
                if(map[e].score>map[compareFriend].score){
                    nextPresent[e]++;
                } else if(map[e].score<map[compareFriend].score){
                    nextPresent[compareFriend]++;
                }
            }
        }
    })
    
    return Math.max(...Object.values(nextPresent));
}