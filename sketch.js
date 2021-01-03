// Global variables 
var form,player,game,database,playerCount;
var gameState=0;
var allPlayers;


function setup(){
createCanvas(1200,600);
database = firebase.database();
game = new Game();
game.getState();
game.start();

}

function draw()
{
    if(playerCount===4){
        game.update(1);   // input of the update function from the Game class is the game state. 
    }
    if(gameState===1){
        clear();    // inbuilt function that clears out the screen, same way as we used background()
        game.play();
    }
}