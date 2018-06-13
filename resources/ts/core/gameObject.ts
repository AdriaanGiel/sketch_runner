/// <reference path="../game.ts"/>
abstract class GameObject extends HTMLElement{
    protected game:Game;
    protected x:number;
    protected y:number;


    protected constructor(game:Game,x:number,y:number)
    {
        super();
        this.game = game;
        this.x = x;
        this.y = y;

        // Append the element to the body
        document.body.appendChild(this);

        // Move the game object to the correct position
        this.move();


    }


    /**
     *  Method to move element to position on screen
     */
    public move()
    {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}