class Form
{
    constructor()
    {
        this.input = createInput('Name'); // the createInput function is used to collect input from the player
        this.button = createButton('Play');  // "Play" would be written on top of the button
        this.greeting = createElement('h3');    
    }
    // We need an input box where we can type out our names, a button to submit the name and start playing the game
    // And a greeting message that will be displayed after the names are entered. (For example, "Hello, Lenin!"). 
    // We also need the game's title displayed at the top. 


    /* HTML - Hypertexxt markup language. It is used to create content for webpages
        HTML contains elements which define the structure of a page. We use tags to write out the instructions.
         A simple html page would contain:

            1. head: The head tag is where all the scripts and stylesheets are added.
            2. body: the body tag is where the main content of the page is added.

        Some of the different elements an HTML page can contain are:
            1. h1, h2, h3: Display headings of different sizes.
            2. input: to collect input from the user,
            3. button element: to create a button on the screen that can be pressed on. 

        This model of an HTML page is called a Document Object Model (DOM). 
        p5 dom library is used here. 
        
    */

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }


    display()
    {
        var title = createElement('h2');
        title.html("4 player car racing game");

        title.position(130,30);
        this.input.position(130,160);
        this.button.position(250,200);


        this.button.mousePressed(()=>{
           

            player.name = this.input.value();
            playerCount = playerCount+1;
            player.update();    // this function is from the Player class
            player.updateCount(playerCount);    // this function is also from the Player class.

            this.greeting.html("Hello, "+name);
            this.greeting.position(130,160);
        })


    }


}