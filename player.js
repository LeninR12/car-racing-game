class Player{
    constructor()   
    {
      this.index = null;    // index number of the player - 1, 2, 3 or 4 for each of the 4 players.
      this.name = null;
      this.distance = 0;
    }
    // create functions to get the playerCount from the database, update the playerCount when it changes, update the player name.
    getCount()
    {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
        playerCount = data.val();
    })
    }
    
    updateCount(count)
    {
        database.ref('/').update({   
            playerCount:count
        })
    }


    update()    // the name input will be taken from the Form
    {
        var playerIndex = "players/player"+this.index; // player1, player2, player3 & player4 
        database.ref(playerIndex).set({ // the set() function is used to set the value to a child node in the database
            name: this.name,
            distance: this.distance
        })
    }

    // Static functions: They are those common functions that are called by the class themselves rather than the objects created
    // from the class. To define a static function, we write the word 'static' before the name of the function. 

    static getPlayerInfo()  
    {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{     // Arrow function
            allPlayers = data.val()     //allPlayers becomes an array that stores the information of all the players    
        })
    }




}