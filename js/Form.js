class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(200,100);
        var input = createInput("name");
        var button = createButton("play");
        input.position(200,120);
        button.position(200,150);
        //button.mousePressed(function(){
          //  input.hide();
            //button.hide();
            //var name = input.value();
            //playerCount = playerCount + 1;
            //player.update(name);
            //player.updateCount(playerCount);
            //var greet = createElement("h3");
            //greet.html("Hello" +name);
            //greet.position(200,120);
        //})
    }

}