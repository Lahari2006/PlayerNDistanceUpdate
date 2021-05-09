var canvas;
var backgroundImg;
var GameState = 0;
var PlayerCount;
var database;
var form;
var player;
var game;
var allPlayers

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.GetState();
  game.start();
}

function draw(){
  if(PlayerCount===4){
    game.update(1);
  }

  if(GameState===1){
    clear();
    game.play();
  }
}