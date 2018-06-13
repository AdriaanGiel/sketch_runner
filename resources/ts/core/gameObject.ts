/// <reference path="../game.ts"/>
abstract class GameObject extends HTMLElement{
    protected game:Game;
    protected x:number = 0;
    protected y:number = 0;


    protected constructor(game:Game,x:number,y:number, append:boolean = true)
    {
        super();
        this.game = game;
        this.x = x;
        this.y = y;

        if(append)
        {
            // Append the element to the body
            document.body.appendChild(this);
        }

    }


    /**
     *  Method to move element to position on screen
     */
    public move()
    {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}