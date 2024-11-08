function solution(players, callings) {
    const nameToIndex = {};
    
    players.forEach((name,index) => {
        nameToIndex[name] = index;
    })
    
    for(const name of callings) {
        // const idx = players.indexOf(name);
        const idx = nameToIndex[name];
        [players[idx-1], players[idx]] = [players[idx], players[idx-1]];
        
        nameToIndex[players[idx]] = idx;
        nameToIndex[players[idx-1]] = idx-1;
    }

    return players;
}