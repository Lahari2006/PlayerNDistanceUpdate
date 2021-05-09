class Game{

    constructor(){

}
 
GetState(){
    var GameStateRef =  database.ref('GameState');
    GameStateRef.on("value", function(data){GameState = data.val();})
}
update(state){
    database.ref('/').update({
        GameState : state
    }) // '/' refers entire database
}
async start(){
    if (GameState === 0)
{
player = new Player();
var playerCountRef = await database.ref('PlayerCount').once("value");
if(playerCountRef.exists()){
    PlayerCount = playerCountRef.val();
    player.GetCount();
}


form = new Form();
form.display();
}
}
play(){
    form.hide();
    textSize(30);
    text("Get ready to race",100,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
        var displayPosition = 130;
        for(var plr in allPlayers){
            if(plr === "player"+player.index){
            fill("red");
            }
            else{
                fill("black");
            }
        
        displayPosition+= 20;
        textSize(15);
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displayPosition);

    }
} 


if(keyIsDown(UP_ARROW)&& player.index !== null){
player.distance+=50;
player.update();
}
}
}