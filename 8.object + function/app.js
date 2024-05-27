const player = {

    name : "MerRuKo",

    displayStatus : function(level,hp,mp) {
        console.log("레벨:" + level + " 체력:" + hp + " 마나:" + mp);
    }

}

console.log(player.name);

player.displayStatus(20,100,50);
