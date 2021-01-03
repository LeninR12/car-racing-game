class Game
{
    constructor()
    {

    }

    // create functions to read the game state, update it with changed game state

    getState()  // read the gameState from the database.
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state)   // to update the gameState in the database to a value passed to it within the brackets
    {
        database.ref('/').update({
            gameState: state
        })
    }

    // Abstraction

    async start()   // asynchronous function    
    {
        if(gameState===0)   
        {
            
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");

            if(playerCountRef.exists()) // exists() is an inbuilt function that checks whether a value has been defined
            {
                playerCount = playerCountRef.val(); 
                player.getCount();     // getCount() function is defined in class Player
            }
            form = new Form();
            form.display(); // display() function is defined in class Form

        }
    }

    play()
    {
        form.hide();
        textSize(30);
        text("Game Start", 120,100);
        Player.getPlayerInfo(); // Class Player calls the getPlayerInfo() function.

        if(allPlayers !== undefined)    // !== means "Not equal to" // === means "equals"   
        {
            var display_position = 130; // y position to display player names & distance on the output screen

            for(var plr in allPlayers)  // forEach loop 
            {
                if(plr==="player"+player.index) // checks whether plr equals player1 or player2 or player3 or player4
                {
                    fill("red");    // the fill color will apply to the text displayed 
                }
                else
                {
                    fill("black");
                }

                display_position = display_position+20;
                textSize(15);
                text(allPlayers[plr].name + ":" +allPlayers[plr].distance, 120, display_position);
            }    
        }

        if(keyIsDown(UP_ARROW) && player.index !== null)
        {
            player.distance = player.distance+50;
            player.update();    // update() function is defined in the Player class.
        }


    }

}