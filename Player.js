class Player{

    constructor(){
 this.index = null;
 this.distance = 0;
 this.name = null;
}
 
GetCount(){
    var PlayerCountRef =  database.ref('PlayerCount');
    PlayerCountRef.on("value", function(data){PlayerCount = data.val();})
}
updateCount(count){
    database.ref('/').update({
        PlayerCount : count
    }) // '/' refers entire database
}
 update(){
// updates name according to index of the player
    var playerindex = "Players/player"+this.index;
database.ref(playerindex).set({
name:this.name,distance:this.distance
})
 }

 static getPlayerInfo(){
     var playerInfoRef = database.ref('Players');
     playerInfoRef.on("value",(data)=>{
         allPlayers=data.val();
     })
 }
}